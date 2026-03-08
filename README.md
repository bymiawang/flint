# Flint — Post-Discharge OS

React + TypeScript single-page pitch site. Built with Vite, deployed to Cloudflare Pages.

## Run

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Structure

```
flint/
├── public/
│   ├── favicon.svg           ← Flint logo (also used in nav)
│   └── demo/
│       └── demo.html         ← Self-contained interactive demo (iframe embed)
├── src/
│   ├── assets/
│   │   └── style.css         ← Full design system (colors, typography, layout)
│   ├── components/           ← One component per page section
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Product.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Demo.tsx
│   │   ├── Moat.tsx
│   │   ├── Market.tsx
│   │   ├── Competitors.tsx
│   │   ├── BusinessModel.tsx
│   │   ├── Milestones.tsx
│   │   ├── Team.tsx
│   │   └── Ask.tsx
│   ├── hooks/                ← Scroll/animation behavior
│   │   ├── useNavState.ts         ← Nav class toggling on scroll
│   │   ├── useScrollReveal.ts     ← IntersectionObserver reveal
│   │   ├── useCounterAnimation.ts ← Animated stat counters
│   │   └── useTAMBars.ts          ← Market TAM bar animation
│   ├── App.tsx               ← Assembles all sections, calls hooks
│   └── main.tsx              ← React entry point, imports style.css
├── index.html                ← Vite HTML shell
├── vite.config.ts
└── tsconfig.app.json
```

## Customization

- **Colors / tokens:** `src/assets/style.css` → `:root` block at the top
- **Content:** edit the relevant component in `src/components/`
- **Fonts:** currently Google Fonts (Barlow Condensed, DM Sans, DM Mono) loaded in `index.html`

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
