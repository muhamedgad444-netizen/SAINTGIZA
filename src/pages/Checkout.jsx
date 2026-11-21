import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import CreditCardUI from '../components/CreditCardUI'
import { useCart } from '../context/CartContext'
import { submitOrderToDb } from '../lib/supabase'
import '../loader.css'

export default function Checkout() {
  const { cartItems, removeItem, updateQuantity, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('visa')
  const [shippingForm, setShippingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  })
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [formError, setFormError] = useState('')

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [cartItems])

  const shipping = cartItems.length > 0 ? 50 : 0
  const total = subtotal + shipping

  const handleShippingInput = (e) => {
    const { name, value } = e.target
    setFormError('')
    setShippingForm((prev) => ({ ...prev, [name]: value }))
  }

  // Auto-format card number: add space every 4 digits
  const handleCardInput = (e) => {
    let { name, value } = e.target
    if (name === 'number') {
      value = value
        .replace(/\D/g, '')
        .slice(0, 16)
        .replace(/(.{4})/g, '$1 ')
        .trim()
    }
    if (name === 'expiry') {
      value = value.replace(/\D/g, '').slice(0, 4)
      if (value.length >= 3) value = value.slice(0, 2) + '/' + value.slice(2)
    }
    if (name === 'cvc') {
      value = value.replace(/\D/g, '').slice(0, 4)
    }
    setCardDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0 || isSubmitting) return

    const { firstName, lastName, email, address, city, postalCode } = shippingForm
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !address.trim() ||
      !city.trim() ||
      !postalCode.trim()
    ) {
      setFormError('Please fill in all shipping fields before placing your order.')
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setFormError('Please enter a valid email address.')
      return
    }

    setFormError('')
    setIsSubmitting(true)
    try {
      const id = await submitOrderToDb({
        firstName,
        lastName,
        email,
        address,
        city,
        postalCode,
        paymentMethod,
        items: cartItems,
      })
      setOrderId(id)
      clearCart()
      setOrderPlaced(true)
    } catch (err) {
      setFormError(
        err?.message || 'Could not place order right now. Please check your details and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (orderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground px-6 text-center"
      >
        <p className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase">
          Thank you
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-[0.15em] uppercase">
          Order Placed
        </h1>
        {orderId && (
          <p className="text-xs font-mono tracking-widest text-foreground/50">
            Reference ID: {orderId.slice(0, 8).toUpperCase()}
          </p>
        )}
        <p className="text-sm text-foreground/60 max-w-md">
          We've saved your order to our database and will be in touch shortly. Check your email for confirmation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link
            to="/collections"
            className="px-8 py-3 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Explore Collections
          </Link>
          <Link
            to="/"
            className="px-8 py-3 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] mb-12 border-b border-foreground/10 pb-6 uppercase">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        {/* Left Side: Forms */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          {/* Shipping Section */}
          <section>
            <h2 className="text-xl tracking-[0.1em] mb-6 uppercase text-foreground/80">
              1. Shipping Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <input
                type="text"
                name="firstName"
                value={shippingForm.firstName}
                onChange={handleShippingInput}
                placeholder="First Name"
                className="w-full bg-transparent border border-foreground/20 rounded p-4 text-sm outline-none focus:border-sg-accent transition-colors"
              />
              <input
                type="text"
                name="lastName"
                value={shippingForm.lastName}
                onChange={handleShippingInput}
                placeholder="Last Name"
                className="w-full bg-transparent border border-foreground/20 rounded p-4 text-sm outline-none focus:border-sg-accent transition-colors"
              />
              <input
                type="email"
                name="email"
                value={shippingForm.email}
                onChange={handleShippingInput}
                placeholder="Email Address"
                className="w-full md:col-span-2 bg-transparent border border-foreground/20 rounded p-4 text-sm outline-none focus:border-sg-accent transition-colors"
              />
              <input
                type="text"
                name="address"
                value={shippingForm.address}
                onChange={handleShippingInput}
                placeholder="Address Block"
                className="w-full md:col-span-2 bg-transparent border border-foreground/20 rounded p-4 text-sm outline-none focus:border-sg-accent transition-colors"
              />
              <input
                type="text"
                name="city"
                value={shippingForm.city}
                onChange={handleShippingInput}
                placeholder="City"
                className="w-full bg-transparent border border-foreground/20 rounded p-4 text-sm outline-none focus:border-sg-accent transition-colors"
              />
              <input
                type="text"
                name="postalCode"
                value={shippingForm.postalCode}
                onChange={handleShippingInput}
                placeholder="Postal Code"
                className="w-full bg-transparent border border-foreground/20 rounded p-4 text-sm outline-none focus:border-sg-accent transition-colors"
              />
            </div>
          </section>

          {/* Payment Section */}
          <section>
            <h2 className="text-xl tracking-[0.1em] mb-6 uppercase text-foreground/80">
              2. Payment Method
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {['visa', 'cash', 'instapay'].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`flex-1 p-4 rounded border transition-all duration-300 uppercase tracking-widest text-xs font-bold ${
                    paymentMethod === method
                      ? 'border-sg-accent bg-sg-accent/10 text-sg-accent shadow-[0_0_15px_rgba(200,181,96,0.1)]'
                      : 'border-foreground/20 text-foreground/50 hover:border-foreground/40'
                  }`}
                >
                  {method === 'cash' ? 'Cash on Delivery' : method}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {paymentMethod === 'visa' && (
                <motion.div
                  key="visa"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-background border border-foreground/10 p-8 rounded-xl relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start">
                    <div className="w-full md:w-auto shrink-0 z-10">
                      <CreditCardUI
                        number={cardDetails.number}
                        name={cardDetails.name}
                        expiry={cardDetails.expiry}
                        cvc={cardDetails.cvc}
                      />
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-4 z-10">
                      <input
                        type="text"
                        name="number"
                        maxLength="19"
                        placeholder="Card Number"
                        value={cardDetails.number}
                        onChange={handleCardInput}
                        className="w-full bg-transparent border-b border-foreground/20 p-2 text-sm outline-none focus:border-sg-accent transition-colors font-mono tracking-widest"
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Cardholder Name"
                        value={cardDetails.name}
                        onChange={handleCardInput}
                        className="w-full bg-transparent border-b border-foreground/20 p-2 text-sm outline-none focus:border-sg-accent transition-colors uppercase tracking-widest"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="expiry"
                          maxLength="5"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={handleCardInput}
                          className="w-full bg-transparent border-b border-foreground/20 p-2 text-sm outline-none focus:border-sg-accent transition-colors font-mono"
                        />
                        <input
                          type="text"
                          name="cvc"
                          maxLength="4"
                          placeholder="CVC"
                          value={cardDetails.cvc}
                          onChange={handleCardInput}
                          className="w-full bg-transparent border-b border-foreground/20 p-2 text-sm outline-none focus:border-sg-accent transition-colors font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {paymentMethod === 'cash' && (
                <motion.div
                  key="cash"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-background border border-foreground/10 p-8 rounded-xl flex items-center gap-4 text-foreground/70"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sg-accent"
                  >
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                  <p className="text-sm tracking-wide">
                    You will pay the courier in cash when your order is delivered. Please have the exact amount ready.
                  </p>
                </motion.div>
              )}

              {paymentMethod === 'instapay' && (
                <motion.div
                  key="instapay"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-background border border-foreground/10 p-8 rounded-xl flex flex-col items-center justify-center text-center gap-6"
                >
                  <p className="text-sm text-foreground/70 tracking-wide max-w-md mx-auto">
                    Scan the QR code below using your Instapay app or send the total amount to{' '}
                    <strong className="text-foreground">@saintgiza</strong>
                  </p>
                  <div className="w-48 h-48 bg-foreground rounded-lg flex items-center justify-center p-2 shadow-xl">
                    <div className="w-full h-full border-4 border-dashed border-background/20 flex items-center justify-center relative">
                      <span className="text-background font-bold tracking-widest text-xs rotate-[-45deg] opacity-50">
                        @SAINTGIZA
                      </span>
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-background"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-background"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-background"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-background"></div>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your Instapay Handle (e.g. @user)"
                    className="w-full max-w-sm bg-transparent border-b border-foreground/20 p-2 text-sm outline-none focus:border-sg-accent transition-colors text-center"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32 bg-background border border-foreground/10 p-8 rounded-xl shadow-2xl">
            <h2 className="text-xl tracking-[0.1em] mb-8 uppercase text-foreground/80">
              Order Summary
            </h2>

            <div className="flex flex-col gap-6 mb-8 border-b border-foreground/10 pb-8 min-h-[150px]">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.2 }}
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 relative group"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="w-20 h-24 bg-foreground/5 rounded flex-shrink-0 overflow-hidden relative block"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </Link>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex justify-between items-start">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-sm font-bold tracking-widest uppercase truncate pr-4 hover:underline"
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-foreground/40 hover:text-red-500 transition-colors p-1 -m-1"
                          aria-label="Remove item"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-foreground/50 mb-3">
                        Size: {item.size}
                      </p>

                      <div className="flex justify-between items-end mt-auto">
                        <div className="flex items-center gap-3 border border-foreground/20 rounded px-2 py-1 bg-background select-none">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.size, -1)}
                            className="text-foreground/60 hover:text-foreground text-sm font-medium leading-none w-4"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.size, 1)}
                            className="text-foreground/60 hover:text-foreground text-sm font-medium leading-none w-4"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm text-foreground/80 font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {cartItems.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center flex-1 py-8 text-foreground/50 gap-3"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="mb-2 opacity-50"
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 01-8 0"></path>
                  </svg>
                  <p className="text-sm tracking-widest uppercase">
                    Your bag is empty.
                  </p>
                  <Link
                    to="/collections"
                    className="text-xs tracking-[0.2em] uppercase underline underline-offset-4 text-foreground/70 hover:text-foreground"
                  >
                    Explore Try the Look Runway →
                  </Link>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col gap-4 text-sm mb-8">
              <div className="flex justify-between text-foreground/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground/70">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-foreground/10">
                <span>Total</span>
                <span className="text-sg-accent">${total.toFixed(2)}</span>
              </div>
            </div>

            {formError && (
              <p
                role="alert"
                className="text-xs text-red-500 mb-4 tracking-wide"
              >
                {formError}
              </p>
            )}

            {isSubmitting ? (
              <div className="flex justify-center py-5">
                <div className="loader mx-auto">
                  <div className="bar"></div>
                  <div className="check-bar-container">
                    <div className="check"></div>
                    <div className="check"></div>
                    <div className="check"></div>
                    <div className="check"></div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
                className={`w-full font-bold tracking-[0.2em] py-5 text-sm transition-colors duration-300 ${
                  cartItems.length > 0
                    ? 'bg-foreground text-background hover:bg-sg-accent'
                    : 'bg-foreground/10 text-foreground/30 cursor-not-allowed'
                }`}
              >
                PLACE ORDER
              </button>
            )}
            <p className="text-center text-[10px] text-foreground/40 mt-4 tracking-widest uppercase">
              Secure Encrypted Checkout
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
