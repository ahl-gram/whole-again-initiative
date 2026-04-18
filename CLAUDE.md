# CLAUDE.md — The Whole Again Initiative Website

This file gives Claude full context to continue working on this project in future sessions.

---

## Project Overview

**Organization:** The Whole Again Initiative  
**Domain:** wholeagaininitiative.org  
**Type:** Static HTML website (no framework, no build step)  
**Hosting:** Netlify (connected to GitHub repo)  
**GitHub:** https://github.com/ahl-gram/whole-again-initiative  
**Status:** Live and deployed ✅

### Mission
A non-profit that uses grant funding to help breast cancer survivors pay for 3D areola restoration tattooing — without having to use insurance, which typically doesn't cover it.

---

## Tech Stack

- Plain HTML + CSS + vanilla JS (no framework, no npm, no build process)
- Fonts via Google Fonts: **Cormorant Garamond** (display/headings), **EB Garamond** (body), **Jost** (UI/labels)
- No external JS libraries
- Shared styles live in `css/shared.css` — imported by all pages
- Netlify `_redirects` file enables clean URLs (`/about` instead of `/about.html`)

---

## File Structure

```
whole-again-initiative/
├── index.html        ← Home page
├── about.html        ← About Us & Board of Directors
├── apply.html        ← Grant Application form
├── donate.html       ← Donation page with interactive widget
├── contact.html      ← Contact page (form + mailing address + email)
├── _redirects        ← Netlify clean URL config
├── CLAUDE.md         ← This file
├── README.md         ← Setup/deployment notes
├── css/
│   └── shared.css    ← Shared styles: nav, footer, buttons, utilities, animations
├── js/
│   └── include.js    ← Fetches and injects partials via data-include
├── partials/
│   └── footer.html   ← Shared footer markup (included on every page)
└── images/
    └── logo.png      ← Whole Again Initiative logo (used on home hero)
```

---

## Design System

### Theme: Desert Rose (modified)
Original Desert Rose palette with serif typography substituted in place of the original FreeSans.

### Color Variables (in `:root`)
```css
--dusty-rose: #d4a5a5;     /* soft primary */
--clay: #b87d6d;            /* earthy accent, used for labels/links */
--sand: #e8d5c4;            /* warm neutral backgrounds */
--deep-burgundy: #5d2e46;  /* rich dark — primary headings, buttons, dark sections */
--petal: #f5ece6;           /* light section backgrounds */
--warm-white: #fdf8f5;     /* page background */
--muted-rose: #c49090;     /* unused, available */
--text-dark: #3a1e2e;      /* body text */
```

### Typography
- **Display/Headings:** Cormorant Garamond, weights 300/400/500/600, italic variants used for emphasis
- **Body:** EB Garamond, 18px base, 1.75 line-height
- **UI (labels, nav, buttons):** Jost, small caps, letter-spacing 0.14–0.22em

### Key Design Patterns
- `.section-label` — small Jost uppercase eyebrow text in `--clay`
- `.section-heading` — large Cormorant Garamond, weight 300, `--deep-burgundy`
- `.page-banner` — inner page hero with gradient background (petal → sand)
- `.reveal` — scroll-triggered fade-up animation (IntersectionObserver in each page's `<script>`)
- `.btn-primary` — filled burgundy button with border hover invert
- `.btn-secondary` — outlined dusty rose button
- Dark sections use `--deep-burgundy` background with `--sand` text and `--dusty-rose` accents

---

## Pages

### index.html — Home
- Split hero: left (headline + CTAs), right (painterly gradient panel with 3 stats)
- Rotating decorative circle SVG border on hero right
- Sections: Mission Band (dark), How It Works (3 steps), Impact (quote + stat cards), Eligibility/Apply CTA, Donate section, Footer
- Internal anchor links for same-page sections (#mission, #how, #impact, etc.)
- Nav links point to `/about`, `/apply`, `/donate`

### about.html — About Us & Board
- Page banner hero
- Mission + Values grid (2-col)
- Story Band (dark section)
- Board of Directors grid (3-col)
- Join CTA section

### apply.html — Grant Application
- Page banner hero
- Eligibility checklist (2-col)
- Full application form (name, contact, surgery type/year, healing confirmation, household size/income, story textarea)
- Form has JS submit handler that hides form and shows success message (no real backend yet — needs Netlify Forms or Formspree)
- "What to Expect" dark section (3 steps post-application)

### donate.html — Donate
- Page banner hero
- 2-col layout: impact context (left) + sticky donation widget (right)
- Widget has: one-time/monthly toggle, preset amounts ($25/$50/$100/$250/$500/Other), custom input, dynamic impact message, donate button (placeholder — needs real payment processor)
- Other Ways to Give (3 cards)
- Transparency stats (dark section)

---

## Board of Directors

Current board members (in `about.html`):

Listed in alphabetical order by last name:

| Name | Last Name | Title | Bio | Photo |
|------|-----------|-------|-----|-------|
| Judith | Barreiro | TODO | TODO | TODO |
| Kelly | Carpenter | TODO | TODO | TODO |
| Jennifer | Echeverry | TODO | TODO | TODO |
| Jill | Elliott | TODO | TODO | TODO |
| Mindy | Miller | TODO | TODO | TODO |
| Irene | Wahba | TODO | TODO | TODO |

Board cards currently show initials placeholder with "Bio coming soon" and "Photo coming soon" tags. To update a card, find the `.board-card` block for that person in `about.html` and fill in:
- `.board-card-title` — their role/title
- `.board-card-bio` — remove `placeholder` class and add bio text
- `.board-card-photo` — replace initials span with an `<img>` tag

---

## DNS / Hosting Setup

- **Registrar:** Namecheap
- **DNS records configured:**
  - `ALIAS @ → apex-loadbalancer.netlify.com` (root domain)
  - `CNAME www → [netlify-app-name].netlify.app` (www subdomain)
  - TXT records for Zoho mail (SPF) and DKIM — leave these alone
- Deleted the conflicting URL Redirect Record that was previously on `@`
- DNS propagation completed ✅

---

## Outstanding TODOs

- [ ] Add board member titles
- [ ] Add board member bios (remove `placeholder` class from `.board-card-bio`)
- [ ] Add board member photos (replace `.board-card-initials` span with `<img>`)
- [ ] Connect real form backend to `apply.html` and `contact.html` — recommend **Netlify Forms** (just add `netlify` attribute to the `<form>` tag — it's free and built in). Current `handleSubmit` on both pages only hides the form and shows a success message; no data is sent anywhere. For `apply.html` specifically, it does NOT upload the medical-clearance file — when wiring up the backend, also add `enctype="multipart/form-data"` to that `<form>` so the file attachment is actually captured.
- [ ] Connect real payment processor to `donate.html` — recommend **Stripe** or **PayPal Giving Fund** (free for nonprofits)
- [ ] Update copyright year as needed
- [ ] Consider adding a "For Artists" page for paramedical tattoo artists wanting to join the network

---

## How to Make Common Changes

**Edit copy on any page:** Open the relevant `.html` file, find the text, edit it directly.

**Change a color globally:** Edit the CSS variable in `:root` in `css/shared.css`.

**Add a board member:** In `about.html`, copy an existing `.board-card` div block and update name, initials, title, and bio.

**Add a new page:**
1. Create `newpage.html` using an existing page as a template
2. Add `newpage` to the nav `<ul>` in all 4 existing pages and in `shared.css`
3. Add a line to `_redirects`: `/newpage  /newpage.html  200`

**Enable Netlify Forms (free, no backend needed):**
In `apply.html`, change `<form class="form-grid" onsubmit="handleSubmit(event)">` to:
```html
<form class="form-grid" name="grant-application" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="grant-application"/>
```
Remove the `handleSubmit` JS function. Submissions will appear in the Netlify dashboard under Forms.

---

## Workflow for Future Sessions

1. Share this file (or its contents) at the start of a new Claude conversation
2. Describe what you want to change or add
3. Claude will produce updated HTML/CSS to drop into your repo
4. Commit and push to GitHub → Netlify auto-deploys in ~30 seconds
