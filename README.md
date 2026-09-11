# Nishanth P R Portfolio

A responsive, build-free portfolio website. It can be deployed directly to GitHub Pages, Netlify, Vercel, or any static hosting provider.

## Run locally

From this folder, run:

```powershell
py -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Upload the website files to a static host with `index.html` as the entry point. No package installation or build command is required. The unrelated `bluestacks/` directory is excluded from version-control deployments by `.gitignore`.

Before publishing, replace the placeholder project actions with repository URLs and confirm the EmailJS service and template IDs in `js/script.js`.

## Structure

- `index.html` - page content and metadata
- `css/style.css` - responsive styling and motion preferences
- `js/script.js` - navigation, reveal effects, and contact form behavior
- `assets/images/` - profile and page imagery
