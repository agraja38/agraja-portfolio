# Agraja Wijayawardane — Portfolio

Modern, minimalist personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. Deployed via GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages.

**Manual setup (one-time):**
1. Go to repository **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

## Live site

https://agraja38.github.io/agraja-portfolio/

## Customization

- **Profile photo:** Add `public/profile.jpg` (recommended 400×400px or larger)
- **LinkedIn:** Update `linkedin` in `src/data/content.js`
- **CV:** Replace `public/agraja-cv.pdf`

## Tech stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages + GitHub Actions
