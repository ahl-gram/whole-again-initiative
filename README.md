# The Whole Again Initiative — Website

A 4-page static website for the non-profit organization.

## Pages
- `/` — Home (index.html)
- `/about` — About Us & Board of Directors
- `/apply` — Grant Application
- `/donate` — Donation Page

## File Structure
```
whole-again-initiative/
├── index.html        ← Home page
├── about.html        ← About / Board Bios
├── apply.html        ← Grant Application
├── donate.html       ← Donate
├── _redirects        ← Netlify clean URL config
└── css/
    └── shared.css    ← Shared styles (fonts, nav, footer, utilities)
```

## Deploying to Netlify

1. Push this folder to your GitHub repo
2. Log into netlify.com → "Add new site" → "Import an existing project"
3. Connect to GitHub and select this repo
4. Leave build settings blank (no build command needed for static HTML)
5. Click "Deploy site"
6. Go to Site Settings → Domain Management to connect your custom domain

## Making Updates

- **Edit copy/content**: Open the relevant .html file in VS Code and edit directly
- **Style changes**: Edit `css/shared.css` for global changes, or the `<style>` block inside a specific page
- **Add a board member**: Open `about.html`, find the board-grid section, copy an existing `.board-card` block and update the name/initials
- **Add a page**: Create a new `.html` file, add a route to `_redirects`, and update nav links in all pages

## TODO
- Replace `EIN 00-0000000` with actual EIN once obtained
- Update © year as needed
- Add Mindy's last name when available
- Add board member titles and bios as they're confirmed
- Add board member photos (replace the initials placeholders in about.html)
- Connect a real payment processor to donate.html (Stripe, PayPal, etc.)
- Connect a real form backend to apply.html (Netlify Forms, Formspree, etc.)
