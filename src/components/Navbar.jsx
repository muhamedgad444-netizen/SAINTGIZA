import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { useCart } from '../context/CartContext'

const navLinks = [
  { name: 'COLLECTIONS', path: '/collections' },
  { name: 'ABOUT', path: '/about' },
]

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { catalog } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location])

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return catalog.slice(0, 6)
    return catalog
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          (p.subtitle && p.subtitle.toLowerCase().includes(q))
      )
      .slice(0, 6)
  }, [query, catalog])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`shopify-section-group-header-group fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-foreground/10'
            : 'bg-background/75 backdrop-blur-md border-b border-foreground/5'
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          {/* Left Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`link-hover text-[11px] font-medium tracking-[0.2em] transition-colors duration-300 ${
                    active
                      ? 'text-foreground font-semibold'
                      : 'text-foreground/75 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
            id="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-foreground block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[1.5px] bg-foreground block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-foreground block"
            />
          </button>

          {/* Center Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 text-foreground"
          >
            <h1 className="text-lg md:text-xl font-bold tracking-[0.35em] select-none">
              SAINTGIZA
            </h1>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <ThemeToggle />

            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen((s) => !s)}
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Search"
              id="search-btn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Cart Header linking to Checkout */}
            <Link
              to="/checkout"
              className="text-foreground/80 hover:text-foreground transition-colors relative"
              id="cart-btn"
              aria-label="Checkout"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-foreground text-background text-[9px] font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>
        </nav>

        {/* Search Drawer */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-foreground/10 bg-background text-foreground px-6 md:px-12 py-6 overflow-hidden"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 border-b border-foreground/20 pb-3">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search pieces, footwear, hoodies..."
                    autoFocus
                    className="w-full bg-transparent text-sm tracking-wider outline-none text-foreground placeholder:text-foreground/40"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground"
                  >
                    Close
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSearchOpen(false)
                        navigate(`/product/${item.id}`)
                      }}
                      className="text-left group flex flex-col gap-2"
                    >
                      <div className="aspect-[4/5] bg-foreground/5 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-[11px] font-medium tracking-wider uppercase truncate text-foreground">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-foreground/60">
                        ${item.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  to={link.path}
                  className="text-3xl font-light tracking-[0.3em] text-foreground hover:text-sg-accent transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
