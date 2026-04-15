# 💋 Lip Blushing Delhi - Landing Page

A mobile-first, conversion-focused landing page for Lip Blushing services in Delhi. Built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Mobile-First Design** - Optimized for mobile with responsive layouts
- **Premium Korean Aesthetic** - Clean, professional K-beauty inspired design
- **Smooth Animations** - Framer Motion scroll animations and transitions
- **SEO Optimized** - Meta tags, schema markup, semantic HTML
- **Conversion Focused** - Sticky CTA, WhatsApp integration, lead form
- **Fast Loading** - Vite optimized build

## 🛠️ Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React Icons
- React Helmet Async (SEO)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deploy to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Connect GitHub repo to Vercel dashboard
```

## 📁 Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with CTA
│   ├── BeforeAfter.jsx   # Transformation gallery
│   ├── Benefits.jsx      # Benefits grid
│   ├── Procedure.jsx     # 4-step process
│   ├── Pricing.jsx       # Pricing card
│   ├── Testimonials.jsx  # Reviews carousel
│   ├── LeadForm.jsx      # Contact form
│   ├── StickyCTA.jsx     # Sticky buttons
│   └── Footer.jsx        # Footer
├── App.jsx               # Main app + SEO
└── index.css            # Tailwind + theme
```

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#C4A77D` | Buttons, accents |
| Accent | `#E8B4B8` | Soft highlights |
| Background | `#FDF8F5` | Page background |
| Text | `#2D2D2D` | Headings |

## 📊 SEO Checklist

- ✅ H1: "Lip Blushing in Delhi"
- ✅ Meta title & description
- ✅ Open Graph / Twitter cards
- ✅ LocalBusiness schema markup
- ✅ Canonical URL
- ✅ Mobile-friendly

## 🔧 Customization

Update contact info in:
- `src/components/Hero.jsx`
- `src/components/LeadForm.jsx`
- `src/components/StickyCTA.jsx`
- `src/App.jsx` (schema markup)

---

Built with ❤️ for beautiful lips
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
