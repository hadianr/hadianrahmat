# 🚀 Personal Portfolio Website - Hadian Rahmat

A high-performance, modern portfolio website built with Astro, featuring **Perfect 100/100 Lighthouse Score** across all categories and optimized for Core Web Vitals.

🌐 **Live Site**: [hadianrahmat.com](https://hadianrahmat.com)  
💼 **LinkedIn**: [linkedin.com/in/hadianr](https://www.linkedin.com/in/hadianr/)

[![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen)]()
[![Accessibility](https://img.shields.io/badge/Accessibility-100%2F100-brightgreen)]()
[![Best Practices](https://img.shields.io/badge/Best%20Practices-100%2F100-brightgreen)]()
[![SEO](https://img.shields.io/badge/SEO-100%2F100-brightgreen)]()

## ✨ Features

- ⚡ **Perfect Performance** - 100/100 Lighthouse Performance Score
- 🎨 **Dark Mode** - Smooth theme switching with no layout shift
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - 100% WCAG compliant
- 🔍 **SEO Optimized** - Perfect SEO score with meta tags and sitemap
- 📦 **Self-hosted Fonts** - Zero layout shift with WOFF2 fonts
- 💾 **Service Worker** - Offline support with smart caching
- 🎯 **ATS-friendly CV** - Downloadable PDF with optimized formatting
- 🚀 **Optimized Build** - Terser minification, CSS inlining, resource hints

## 🎯 Performance Metrics

| Metric | Score | Status |
|--------|-------|--------|
| **Lighthouse Performance** | 100/100 | ✅ PERFECT |
| **Lighthouse Accessibility** | 100/100 | ✅ PERFECT |
| **Lighthouse Best Practices** | 100/100 | ✅ PERFECT |
| **Lighthouse SEO** | 100/100 | ✅ PERFECT |

### Core Web Vitals

| Metric | Score | Status |
|--------|-------|--------|
| First Contentful Paint | 0.9s | ✅ GOOD |
| Largest Contentful Paint | 1.7s | ✅ GOOD |
| Total Blocking Time | 0ms | ✅ PERFECT |
| Cumulative Layout Shift | 0.001 | ✅ EXCELLENT |
| Speed Index | 0.9s | ✅ EXCELLENT |

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v1.9.2
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: Feather Icons
- **Fonts**: Self-hosted Inter & Outfit (WOFF2)
- **PDF Generation**: html2pdf.js
- **Build**: Vite with Terser minification
- **Deployment**: Vercel/Netlify ready

## 📂 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── Inter/         # Self-hosted Inter font
│   │   │   └── Outfit/        # Self-hosted Outfit font
│   │   └── images/
│   ├── _headers               # HTTP headers for caching
│   ├── sw.js                  # Service Worker for caching
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── Experience.astro
│   │   │   ├── Education.astro
│   │   │   ├── Technology.astro
│   │   │   └── Organization.astro
│   │   └── general/
│   │       ├── Navbar.astro
│   │       ├── Footer.astro
│   │       ├── MetaHead.astro
│   │       ├── ProjectCard.astro
│   │       └── CVAtsPreview.astro
│   ├── data/
│   │   └── info.ts            # 👈 Your personal data here!
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with critical CSS
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── projects.astro     # Projects showcase
│   │   └── cv.astro           # ATS-friendly CV
│   ├── styles/
│   │   ├── fonts.css          # Self-hosted font definitions
│   │   └── style.css          # Global styles with Tailwind
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   └── utils/
│       ├── cvGenerator.ts     # CV PDF generation
│       └── index.ts
├── astro.config.mjs           # Astro configuration
├── tailwind.config.cjs        # Tailwind configuration
├── preload-css-plugin.mjs     # Custom CSS preload plugin
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hadianr/hadianrahmat.git
cd hadianrahmat
```

2. Install dependencies:
```bash
npm install
```

3. Update your personal information in `src/data/info.ts`

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Data

Edit `src/data/info.ts` to customize:
- Personal information (name, email, social links)
- Work experience
- Education history
- Skills and technologies
- Projects
- Organizations

### Styling

- Global styles: `src/styles/style.css`
- Tailwind config: `tailwind.config.cjs`
- Component-specific styles in each `.astro` file

### Theme

The site supports light/dark mode with automatic system preference detection. Theme toggle is in the Navbar component.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 🎨 Performance Optimizations

This portfolio implements several performance optimizations:

### Font Loading
- ✅ Self-hosted WOFF2 fonts (Inter & Outfit)
- ✅ Font preloading with `fetchpriority="high"`
- ✅ `font-display: swap` for zero FOIT

### Critical CSS
- ✅ Inline critical CSS in HTML head
- ✅ CSS containment for faster rendering
- ✅ Optimized with Lightning CSS

### Caching Strategy
- ✅ Service Worker with versioned caching
- ✅ Cache-first for fonts (immutable)
- ✅ Network-first for HTML/pages

### Resource Hints
- ✅ DNS prefetch for external resources
- ✅ Preload for critical fonts
- ✅ Prefetch for likely navigations

### Build Optimization
- ✅ Terser minification with aggressive compression
- ✅ No code splitting for faster initial load
- ✅ Inlined stylesheets

## 📄 Pages

### Home (`/`)
Main landing page with:
- Hero section with introduction
- Work experience timeline
- Education history
- Technology & expertise showcase
- Organizations

### Projects (`/projects`)
Portfolio projects showcase with:
- Project cards with thumbnails
- Live demo and GitHub links
- Responsive grid layout

### CV (`/cv`)
ATS-friendly resume page with:
- Clean, printer-friendly layout
- PDF download functionality
- Optimized for Applicant Tracking Systems

## 🔧 Configuration Files

### `astro.config.mjs`
- Sitemap generation
- robots.txt
- Build optimization settings
- Vite configuration

### `tailwind.config.cjs`
- Custom color palette
- Typography settings
- Dark mode configuration

### `public/_headers`
- Security headers
- Cache-Control directives
- Resource preload hints

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hadianr/hadianrahmat)

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hadianr/hadianrahmat)

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## 📊 Testing Performance

### Lighthouse

Run Lighthouse in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"

### PageSpeed Insights

Test your deployed site:
```
https://pagespeed.web.dev/
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Hadian Rahmat**
- Website: [hadianrahmat.com](https://hadianrahmat.com)
- GitHub: [@hadianr](https://github.com/hadianr)
- LinkedIn: [linkedin.com/in/hadianr](https://www.linkedin.com/in/hadianr/)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using [Astro](https://astro.build)
