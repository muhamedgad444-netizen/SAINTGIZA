import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react'
import { stylingBag } from '../runway-element'
import { products as fallbackProducts } from '../data/products'
import { fetchProductsFromDb } from '../lib/supabase'

const CartContext = createContext(null)
const SG_CART_KEY = 'saintgiza-cart-v1'

function loadSavedCart() {
  try {
    const raw = localStorage.getItem(SG_CART_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [sgItems, setSgItems] = useState(loadSavedCart)
  const [bagTick, setBagTick] = useState(0)
  const [catalog, setCatalog] = useState(fallbackProducts)

  // Hydrate catalog from Supabase on mount
  useEffect(() => {
    let alive = true
    fetchProductsFromDb()
      .then((remote) => {
        if (alive && remote && remote.length > 0) {
          setCatalog(remote)
        }
      })
      .catch(() => {
        // Fallback products remain active
      })
    return () => {
      alive = false
    }
  }, [])

  // Persist SAINTGIZA cart items
  useEffect(() => {
    try {
      localStorage.setItem(SG_CART_KEY, JSON.stringify(sgItems))
    } catch {
      // ignore storage errors
    }
  }, [sgItems])

  // Listen to Runway StylingBag updates
  useEffect(() => {
    const onBagChange = () => setBagTick((t) => t + 1)
    window.addEventListener('runway:bag-change', onBagChange)
    return () => window.removeEventListener('runway:bag-change', onBagChange)
  }, [])

  // Map Runway StylingBag entries into unified cart items
  const runwayItems = useMemo(() => {
    try {
      stylingBag.validateCatalog()
    } catch {
      return []
    }
    return stylingBag.entries
      .filter((e) => stylingBag.variantMap.has(e.id))
      .map((e) => {
        const { item, variant } = stylingBag.variantMap.get(e.id)
        const size = variant.o.join(' / ')
        return {
          id: item.id,
          name: item.name,
          size,
          price: item.price,
          quantity: e.quantity,
          image: item.image,
          variantId: e.id,
          source: 'runway',
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bagTick])

  // Merge sgItems and runwayItems cleanly
  const cartItems = useMemo(() => {
    const merged = [...runwayItems]
    for (const item of sgItems) {
      const existing = merged.find((m) => m.id === item.id && m.size === item.size)
      if (existing) {
        existing.quantity += item.quantity
      } else {
        merged.push(item)
      }
    }
    return merged
  }, [runwayItems, sgItems])

  const findRunwayVariantId = useCallback((productId, size) => {
    try {
      stylingBag.validateCatalog()
      for (const [vid, { item, variant }] of stylingBag.variantMap.entries()) {
        if (item.id === productId && variant.o.join(' / ') === String(size)) {
          return vid
        }
      }
    } catch {
      // ignore
    }
    return null
  }, [])

  const addToCart = useCallback(
    (product, size) => {
      const vid = findRunwayVariantId(product.id, size)
      if (vid) {
        stylingBag.add([{ id: vid, quantity: 1 }])
        return
      }
      setSgItems((prev) => {
        const existing = prev.find(
          (item) => item.id === product.id && item.size === size
        )
        if (existing) {
          return prev.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: Math.min(20, item.quantity + 1) }
              : item
          )
        }
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            size,
            price: product.price,
            quantity: 1,
            image: product.image,
            source: 'saintgiza',
          },
        ]
      })
    },
    [findRunwayVariantId]
  )

  const removeItem = useCallback(
    (id, size) => {
      const vid = findRunwayVariantId(id, size)
      if (vid && stylingBag.entries.some((e) => e.id === vid)) {
        stylingBag.remove(vid)
      }
      setSgItems((prev) =>
        prev.filter((item) => !(item.id === id && item.size === size))
      )
    },
    [findRunwayVariantId]
  )

  const updateQuantity = useCallback(
    (id, size, delta) => {
      const vid = findRunwayVariantId(id, size)
      if (vid) {
        const entry = stylingBag.entries.find((e) => e.id === vid)
        if (entry) {
          entry.quantity = Math.min(20, Math.max(1, entry.quantity + delta))
          stylingBag.saveStorage()
          stylingBag.render()
          return
        }
      }
      setSgItems((prev) =>
        prev.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: Math.min(20, Math.max(1, item.quantity + delta)) }
            : item
        )
      )
    },
    [findRunwayVariantId]
  )

  const clearCart = useCallback(() => {
    stylingBag.entries = []
    stylingBag.saveStorage()
    stylingBag.render()
    setSgItems([])
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Keep any [data-cart-count] DOM badge synchronized with the unified total
  useEffect(() => {
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(cartCount)
    })
  }, [cartCount])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        catalog,
        addToCart,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
