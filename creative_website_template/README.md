# AURA™ — Modern Creative Website Template

A production-ready, highly polished, fully responsive **Creative Website Template** designed for creative agencies, design studios, freelancers, and digital artisans.

Built with **clean HTML5, modern CSS3 (with Custom Properties & Glassmorphism), and Vanilla JavaScript**.

---

## 🌟 Key Features

1. **Dark & Light Mode Switcher**: Seamless theme toggling with automatic user preference persistence via `localStorage`.
2. **7 Production Sections**:
   - **1. Home / Hero**: High-impact headline, CTAs, floating metric glass cards, trust avatars.
   - **2. About / Introduction**: Story, key values, company metrics.
   - **3. Services / Expertise**: 6 clean grid cards with custom SVG icons, numbers, and capability tags.
   - **4. Portfolio / Projects**: Interactive category filter (`All`, `UI/UX`, `Branding`, `Web Dev`, `3D & Motion`) + modal project detail popups.
   - **5. Testimonials / Client Showcase**: Interactive feedback slider with controls + trusted brand logos.
   - **6. Contact**: Accessible form with live feedback notification + direct contact information cards.
   - **7. Footer**: Multi-column links, newsletter subscription form, social icons, and back-to-top button.
3. **100% Fully Responsive**: Desktop, laptop, tablet, and mobile drawer navigation support with 0 horizontal scroll.
4. **Zero Third-Party Dependencies**: Pure native Web API, modular CSS, lightweight JavaScript.

---

## 📁 File Structure

```text
creative_website_template/
├── index.html       # Main HTML markup containing all 7 required sections
├── styles.css       # Full design system, theme variables, grid, animations, and media queries
├── script.js        # Light/Dark mode, menu drawer, portfolio filter, modal, slider & form JS
└── README.md        # Documentation & usage guide
```

---

## 🚀 How to Run & Use

1. Simply double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve via VS Code Live Server or python HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

---

## ⚙️ Customization Guide

- **Color Palette & Themes**: Edit the CSS custom properties in `styles.css` under `:root` and `[data-theme="light"]`.
- **Replacing Projects**: Add or modify `.project-card` elements in `index.html` and update the `data-category` attribute to match the filter buttons.
- **Form Integration**: Replace the demo `submit` event listener in `script.js` with your backend endpoint or service (e.g. Formspree, Web3Forms, EmailJS).


## UI Color Palette

This template uses a Lavender + Cream visual theme throughout the interface.

- Lavender: `#8F7AE5`
- Light Lavender: `#B8A9F5`
- Cream: `#FFF8E8`
- Warm Cream: `#F3EDE0`
- Deep Lavender/Plum: `#302A3D`

The existing layout and functionality are preserved; only the UI color system has been updated.
