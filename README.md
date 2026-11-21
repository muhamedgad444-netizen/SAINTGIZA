# 𓋹 SAINTGIZA

> **The Pursuit of Quiet Luxury.** Premium streetwear rooted in precision, quality, and understated design.

SAINTGIZA is a high-fidelity, brutally minimalist e-commerce storefront and interactive runway experience built for a luxury streetwear brand. It combines a sharp, monochromatic aesthetic with interactive outfit styling, smooth animations, and a full Supabase-backed catalog, cart, and order workflow.

---

## ✨ Features

- **Brutalist / Minimalist UI:** High-contrast monochromatic palette, sharp geometry, and precision typography (`Cinzel`, `Plus Jakarta Sans`, `Space Grotesk`).
- **Interactive "Try the Look" Runway:** Custom interactive runway builder (`<runway-element>`) allowing visitors to mix, match, and inspect tops, bottoms, and full streetwear silhouettes in real time.
- **Curated Collections & Product Details:** Filterable collections catalog (`Collections`), detailed product views (`ProductDetail`) with size selection, fabric specs, and multi-angle imagery.
- **Persistent Cart & Checkout Flow:** Full cart context (`CartContext`) synced with Supabase and local state, complete with an interactive credit card UI (`CreditCardUI`) and order creation in checkout.
- **Supabase Backend Integration:** Postgres schema for products, carts, orders, and newsletter subscriptions with Row-Level Security (RLS) policies.
- **Dark / Light Mode:** Seamless theme toggle persisted across sessions.
- **Responsive Design & Motion:** Scroll-driven transitions and micro-interactions powered by Framer Motion.

---

## 🛠️ Technology Stack

- **Frontend:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) + Custom CSS (`index.css`, `runway.css`, `product-card.css`, `theme-toggle.css`)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Backend & Database:** [Supabase](https://supabase.com/) (`@supabase/supabase-js`, PostgreSQL, RLS)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A [Supabase](https://supabase.com/) project (optional — falls back to local catalog data if env vars are omitted)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhamedgad444-netizen/SAINTGIZA.git
   cd SAINTGIZA
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```text
SAINTGIZA/
├── public/
│   └── video/                  # Hero & lookbook video assets
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── CollectionsBanner.jsx
│   │   ├── CreditCardUI.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── RunwaySection.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── CartContext.jsx     # Global cart state & Supabase sync
│   ├── data/
│   │   └── products.js         # Product catalog & fallback data
│   ├── lib/
│   │   └── supabase.js         # Supabase client & API helpers
│   ├── pages/
│   │   ├── About.jsx           # Brand manifesto & story
│   │   ├── Checkout.jsx        # Shipping, payment & order submission
│   │   ├── Collections.jsx     # Full catalog & category filtering
│   │   ├── Home.jsx            # Landing page, hero, featured pieces & runway
│   │   └── ProductDetail.jsx   # Individual product view & sizing
│   ├── App.jsx                 # Application shell & route definitions
│   ├── main.jsx                # React entry point
│   ├── runway-element.js       # Custom Web Component for "Try the Look" Runway
│   ├── runway.css              # Styling for the interactive runway
│   └── index.css               # Global theme tokens & Tailwind directives
├── supabase/
│   └── migrations/             # SQL schema migrations & RLS policies
├── tailwind.config.js          # Tailwind configuration
└── vite.config.js              # Vite bundler configuration
```

---

## 📜 License

© 2026 SAINTGIZA. All rights reserved.
