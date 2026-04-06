# 𓋹 SAINTGIZA

> The Pursuit of Quiet Luxury. Premium streetwear rooted in precision, quality, and understated design.

![SAINTGIZA Preview](./public/images/hero.png)

SAINTGIZA is a high-fidelity, brutally minimalist e-commerce storefront built for a luxury streetwear brand. The project emphasizes a sharp, premium aesthetic using modern web technologies to deliver a buttery-smooth shopping experience.

## ✨ Features

- **Brutalist / Minimalist UI:** High contrast, sharp edges, monochromatic palettes, and precise typography.
- **Dynamic Animations:** Scroll-driven crossfades, page transitions, and micro-interactions powered by Framer Motion.
- **Cart Management:** Global shopping cart context allowing seamless additions from product pages and updates in checkout.
- **Dark / Light Mode:** A fully synced theme toggle handling both aesthetics flawlessly.
- **Responsive Design:** Optimized layouts providing a premium experience across desktops, tablets, and mobile devices.

## 🛠️ Technology Stack

- **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Routing:** React Router v6
- **Styling:** Vanilla CSS + [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muhamedgad444-netizen/SAINTGIZA.git
   ```
2. Navigate into the project directory:
   ```bash
   cd SAINTGIZA
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the Vite development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

## 📂 Project Structure

```text
SAINTGIZA/
├── public/                 # Static assets (images, videos)
├── src/
│   ├── components/         # Reusable UI elements (Navbar, Cards, Footer, etc.)
│   ├── context/            # React Context (e.g., CartContext)
│   ├── data/               # Hardcoded data/products (until backend is attached)
│   ├── pages/              # Main route views (Home, Shop, Checkout, etc.)
│   ├── App.jsx             # Main application and router setup
│   ├── main.jsx            # React entry point
│   └── index.css           # Global reset, variables, and Tailwind injection
├── tailwind.config.js      # Tailwind theme adjustments
└── vite.config.js          # Vite bundler configuration
```

## 📜 License

© 2026 SAINTGIZA. All rights reserved. Do not distribute without permission.
