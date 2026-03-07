# Flint — Post-Discharge OS
### IYA Venture Showcase 2026

## Structure
```
flint/
├── index.html        ← Main site
├── css/
│   └── style.css     ← Full design system
├── js/
│   └── main.js       ← Scroll, nav, animations
└── netlify.toml      ← Deploy config
```

## Deploy in 60 seconds

### Option A — Netlify Drop (fastest)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `flint/` folder onto the page
3. Done. Live URL in seconds.

### Option B — Netlify via GitHub
1. Push this folder to a GitHub repo
2. Connect repo at netlify.com → "New site from Git"
3. Build command: (leave blank)
4. Publish directory: `.`

### Option C — GitHub Pages
1. Push to GitHub repo
2. Settings → Pages → Deploy from branch → `main` → `/` (root)
3. Live at `https://[username].github.io/[repo]`

### Option D — Vercel
1. `npm i -g vercel`
2. `cd flint && vercel`
3. Follow prompts. Live in ~30 seconds.

## Customization
- Colors: `css/style.css` → `:root` tokens at the top
- Content: `index.html` — all copy is inline
- Fonts: currently Google Fonts (DM Sans, DM Serif Display, DM Mono, Bebas Neue)
  - Self-host for production: download from fonts.google.com and update `@font-face` in style.css
