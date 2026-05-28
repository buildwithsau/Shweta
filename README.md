# Shweta Sharma — Portfolio Website

A professional finance portfolio built with React + TypeScript + Vite.

## Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Recharts (interactive financial charts)
- react-intersection-observer (scroll animations)
- Google Fonts: Cormorant Garamond + DM Sans

## Project Structure

```
src/
├── components/         # One component per section
│   ├── Navbar.tsx / .css
│   ├── Hero.tsx / .css
│   ├── About.tsx / .css
│   ├── Competencies.tsx / .css
│   ├── Project.tsx / .css      ← Tata Power research (centerpiece)
│   ├── Experience.tsx / .css
│   └── Contact.tsx / .css
├── data/
│   └── portfolioData.ts        ← All content & financial data lives here
├── styles/
│   └── globals.css             ← Design tokens (CSS variables)
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Customization

### Update Personal Info
Edit `src/data/portfolioData.ts` — all content, financial ratios, and chart data is centralized here.

### Update Colors / Fonts
Edit `src/styles/globals.css` — all design tokens are CSS variables at the top.

### Add New Sections
1. Create `ComponentName.tsx` and `ComponentName.css` in `src/components/`
2. Import and add to `src/App.tsx`

## Deployment
The build output in `dist/` can be deployed to Vercel, Netlify, or any static host.
For Vercel: `vercel --prod` from project root.
For Netlify: drag and drop the `dist/` folder.
