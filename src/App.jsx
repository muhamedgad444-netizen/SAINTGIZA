import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import { useCart } from './context/CartContext'

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground"
    >
      <p className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase">Error 404</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase">Page Not Found</h1>
      <Link
        to="/collections"
        className="text-[11px] tracking-[0.2em] uppercase underline underline-offset-4 text-foreground/60 hover:text-foreground transition-colors"
      >
        Explore Collections
      </Link>
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  const { cartCount } = useCart()

  return (
    <div className="grain-overlay min-h-screen bg-background text-foreground">
      <Navbar cartCount={cartCount} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/shop" element={<Navigate to="/collections" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      {location.pathname !== '/collections' && <Footer />}
    </div>
  )
}
