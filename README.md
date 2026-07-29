# Maya Maids — Website (Demo)

A static, no-hosting-cost website for Maya Maids, built with plain HTML/CSS/JS so it can run for free on **GitHub Pages**.

## What's in here

```
index.html        → the whole site (single page, sections linked from the nav)
css/style.css      → all styling (colors, fonts, layout, responsive rules)
js/data.js         → EDIT THIS to change services, prices, plans, FAQs, reviews
js/main.js         → interaction logic (menus, forms, chat, booking modal) — usually no need to touch
```

All content right now is **demo placeholder content** (prices, phone numbers, testimonials) — swap it out before launch.

## Deploy to GitHub Pages (free)

1. Create a new GitHub repository, e.g. `maya-maids-website`.
2. Upload these files (`index.html`, `css/`, `js/`, this `README.md`) to the repo — keep the folder structure as-is.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save. GitHub gives you a live URL like `https://yourusername.github.io/maya-maids-website/` within a minute or two.
6. **SSL** is automatic and free on GitHub Pages — no setup needed.
7. If you buy a domain later (e.g. `mayamaids.com`), add it under Pages → "Custom domain" and GitHub issues a certificate for it too.

## Things to update before going live

Search for these placeholders and replace them:

- `+8801XXXXXXXXX` — appears in the Call button, WhatsApp links, and Contact section. Replace with the real phone number (WhatsApp links use the format `https://wa.me/8801XXXXXXXXX`, no `+` or spaces).
- `hello@mayamaids.com` — replace with the real inbox.
- Service areas, hours, and address text in the **Contact** section.
- Everything in `js/data.js` — services, one-time prices, subscription plans, FAQs, and reviews are all demo values.

## Making the forms actually send data

Right now the **lead form**, **booking modal**, and **live chat** are front-end only — they show a success message but don't send anything anywhere (there's no backend on GitHub Pages). Easiest free/low-cost options when you're ready://
- **Form services**: [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — point the form's `action` at their endpoint, no backend code needed.
- **WhatsApp-first**: keep it simple by having the "Book Now" and lead form buttons open a pre-filled `https://wa.me/...?text=...` link instead of submitting a form.
- **Real live chat**: swap the demo chat panel for a free tier of [Tawk.to](https://www.tawk.to) or [Crisp](https://crisp.chat) — both give you a small script tag to drop into `index.html`.

## Notes on the design

- Fonts (Fraunces + Work Sans + Hind Siliguri) load from Google Fonts — this needs an internet connection to render correctly, which is fine for a live website.
- All icons and illustrations are hand-drawn SVG (no external image dependencies), which keeps the site fast and avoids licensing issues with stock photos. Swap in real photos of your team/staff whenever you have them — just add an `<img>` in place of the SVG blocks and it'll still be fast.
- Colors, spacing, and type scale are all defined as CSS variables at the top of `css/style.css` under `:root` — change a value there and it updates everywhere.
