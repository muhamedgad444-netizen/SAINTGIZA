import { useState } from 'react'
import { Link } from 'react-router-dom'
import { subscribeNewsletterInDb } from '../lib/supabase'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setStatus('Please enter a valid email.')
      return
    }
    try {
      await subscribeNewsletterInDb(email)
      setEmail('')
      setStatus('Subscribed. Welcome to SAINTGIZA.')
    } catch {
      setStatus('Could not subscribe right now.')
    }
  }

  return (
    <footer className="bg-background border-t border-foreground/5">
      {/* Marquee — duplicated so -50% translate creates a seamless loop */}
      <div className="border-b border-foreground/5 py-6 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="text-6xl md:text-8xl font-bold tracking-[0.2em] text-foreground/[0.03] uppercase select-none"
              >
                SAINTGIZA
              </span>
            ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold tracking-[0.3em] mb-4">SAINTGIZA</h3>
            <p className="text-[12px] leading-relaxed text-sg-gray-500 max-w-xs">
              Premium streetwear rooted in precision, quality, and understated design. Crafted for those who seek substance over spectacle.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-sg-gray-500 uppercase mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Try the Look — Runway', to: '/collections' },
                { label: 'The City Edit', to: '/collections' },
                { label: 'Gallery Opening', to: '/collections' },
                { label: 'Studio Day', to: '/collections' },
                { label: 'Essentials & Archive', to: '/collections' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[12px] tracking-[0.05em] text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-sg-gray-500 uppercase mb-6">
              Info
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Collections Runway', to: '/collections' },
                { label: 'Checkout & Bag', to: '/checkout' },
                { label: 'Sustainability', to: '/about' },
                { label: 'Shipping & Returns', to: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[12px] tracking-[0.05em] text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-sg-gray-500 uppercase mb-6">
              Newsletter
            </h4>
            <p className="text-[12px] text-foreground/40 mb-4">
              First access to drops, exclusive offers, and stories.
            </p>
            <form
              className="flex mt-2"
              id="newsletter-form"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-transparent border-b border-foreground/20 py-3 text-[12px] tracking-wider text-foreground placeholder:text-sg-gray-400 focus:outline-none focus:border-foreground/80 transition-colors mr-4"
                id="newsletter-email"
              />
              <button className="uiverse-subscribe-btn" type="submit">
                <p>Subscribe</p>
                <svg
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </form>
            {status && (
              <p
                role="status"
                className="text-[11px] tracking-wider text-foreground/70 mt-3"
              >
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.15em] text-sg-gray-500">
            © 2026 SAINTGIZA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Twitter/X', 'TikTok'].map((social) => (
              <a
                key={social}
                href="#top"
                className="text-[10px] tracking-[0.15em] text-sg-gray-500 hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
