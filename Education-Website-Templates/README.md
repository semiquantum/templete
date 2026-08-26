# Academia Institute — Professional Education Website Template

A clean, modern, professional, accessible, and fully responsive **Education Website Template** built with **pure HTML5, CSS3 (Vanilla), and Vanilla JavaScript**. Designed specifically for educational institutions, universities, colleges, academies, and online learning platforms.

---

## 🌟 Key Features

- **Strict 7 Essential Sections**: Structured with focus on simplicity, clarity, and ease of navigation without clutter.
- **Faculty / Instructors Cards**: Custom-designed responsive faculty profile cards featuring avatar photo, title, subject expertise tag, short bio, and social links that stack seamlessly on tablet and mobile screens.
- **100% Vanilla Tech Stack**: Zero heavy frameworks or external dependencies (no Bootstrap, Tailwind, or jQuery required). Instant initial render and lightning-fast page loading.
- **Modern Design System**: Built with CSS Custom Properties (`:root` variables) for quick global color theme and typography customization.
- **Full Interactivity**:
  - Sticky header navigation with active scroll section indicator.
  - Accessible slide-out mobile drawer menu.
  - Interactive course filter category tabs (All, Technology & AI, Business, Applied Sciences, Design).
  - Client-side Admission / Contact Form validation with real-time feedback errors and toast notifications.
- **Fully Responsive Layout**: Built with a mobile-first philosophy tested across Desktop (1440px+), Laptop (1024px), Tablet (768px), and Mobile (375px+).
- **Accessibility & Usability**: Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA attributes, explicit focus states, and WCAG AA compliant color contrast.

---

## 📁 Directory Structure

```text
Education-Website-Templates/
├── index.html              # Main HTML5 document containing all 7 essential sections
├── css/
│   └── style.css          # Core CSS design system, typography, card grids & responsive queries
├── js/
│   └── main.js            # Interactivity: sticky nav, mobile menu, course filter, form validation
├── assets/
│   └── images/            # High-resolution generated educational images
│       ├── hero_campus.jpg         # Hero section background visual
│       ├── about_institution.jpg   # About section campus library image
│       ├── faculty_dr_chen.jpg     # Faculty profile photo 1
│       ├── faculty_dr_marcus.jpg   # Faculty profile photo 2
│       ├── faculty_prof_sarah.jpg  # Faculty profile photo 3
│       └── faculty_prof_david.jpg  # Faculty profile photo 4
└── README.md              # Comprehensive template guide & deployment documentation
```

---

## 📑 Required Sections Overview

1. **Home / Hero Section** (`#hero`)
   - Welcoming, high-impact headline and introduction.
   - Primary ("Explore Programs") and Secondary ("Learn About Us") CTAs.
   - High-quality hero campus visual with floating metrics counter ($45M+ research grants, 98% placement rate).

2. **About Institution** (`#about`)
   - Introduction to the institution's history, mission, and vision.
   - Balanced combination of text and high-resolution library imagery.
   - 4 Strategic pillars (Academic Precision, Research, Global Perspective, Holistic Growth).

3. **Courses / Programs** (`#courses`)
   - Category filter tabs to sort programs dynamically without page reload.
   - Clean program cards detailing course title, degree tag, description, duration, credit hours, and application action.

4. **Features / Facilities** (`#facilities`)
   - 6 Visual feature cards with icon badges showcasing campus facilities:
     - 🔬 STEAM & AI Supercomputing Labs
     - 📚 Next-Gen Digital Resource Library
     - 🌐 Global Study & Exchange Network
     - 💼 Venture Incubator & Career Hub
     - 🏟️ Athletic & Recreation Complex
     - 🏫 Smart Hybrid Amphitheaters

5. **Faculty / Instructors** (`#faculty`)
   - 4 Professional faculty profile cards displaying headshots, credentials, department titles, subject expertise badges, and social links.
   - Responsive grid (4 cols on desktop, 2 cols on tablet, 1 col on mobile).

6. **Contact / Admission Section** (`#contact`)
   - Admission inquiry form with fields for Full Name, Email, Phone, Program Selection, and Message.
   - Interactive validation with custom toast notification upon submission.
   - Essential contact details side card (Campus Address, Hotline, Email, Office Hours).

7. **Footer** (`#footer`)
   - Comprehensive multi-column footer with copyright notice, quick navigation links, academic departments, newsletter signup form, and social media links.

---

## 🚀 How to Run Locally

Since this template relies entirely on standard HTML, CSS, and Vanilla JavaScript, no build step or node installation is mandatory.

### Option 1: Direct File Preview
Double click `index.html` or drag it into any modern browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).

### Option 2: Local Development Server
For optimal performance and proper asset loading, serve using a lightweight local web server:

**Using Python:**
```bash
# From the template root directory:
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

**Using Node.js / `npx`:**
```bash
npx serve .
```

---

## 🎨 Customization Guide

### 1. Changing Brand Colors
Open `css/style.css` and locate the `:root` variables block at the top:
```css
:root {
  --primary: #0F172A;          /* Change Header & Dark Surface Color */
  --accent: #4F46E5;           /* Change Primary Button & Link Color */
  --secondary: #0D9488;        /* Change Secondary Accent Color */
  --bg-main: #FAFAFC;          /* Page Background Color */
}
```

### 2. Adding New Faculty Members
To add a new instructor, add an `<article class="faculty-card">` block inside `.faculty-grid` in `index.html`:
```html
<article class="faculty-card">
  <div class="faculty-img-container">
    <img src="assets/images/your_photo.jpg" alt="Portrait of Faculty Name">
  </div>
  <div class="faculty-content">
    <h3 class="faculty-name">Dr. Jane Doe</h3>
    <span class="faculty-designation">Professor of Quantum Computing</span>
    <span class="faculty-expertise">Quantum Algorithms</span>
    <p class="faculty-bio">Short biography highlight...</p>
    <div class="faculty-socials">
      <a href="#" class="faculty-social-link">in</a>
      <a href="#" class="faculty-social-link">🎓</a>
    </div>
  </div>
</article>
```

### 3. Connecting Form to a Backend
To connect the Admission Inquiry Form to your backend or service like **Formspree** or **Netlify Forms**, edit the `<form>` element in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="admissionForm">
```

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages
1. Push this template folder to a GitHub repository.
2. Navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and `/root` folder.
4. Click **Save**. Your site will be live at `https://username.github.io/repository-name/`.

### Deploy to Netlify
1. Drag and drop the root folder into [Netlify Drop](https://app.netlify.com/drop).
2. Or connect your GitHub repository for automatic continuous deployment.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`.
2. Run `vercel` from the root directory and follow the prompt instructions.

---

## 📄 License & Credits

- Developed for **Academia Institute**.
- Clean, open-source code ready for personal, educational, or commercial customization.


## Updated UI Theme
- Primary purple: `#6D4AFF`
- Purple hover: `#5836D6`
- Soft lavender: `#F0E9FF`
- Cream background: `#FFF9ED`
- Warm cream surface: `#FFFDF7`
- Deep purple text: `#2B1E3F`

## Admission Form
The admission inquiry form now performs client-side validation, displays field-level errors, shows a successful submission state, and stores submitted inquiries locally in the browser under `academiaAdmissionInquiries`. This provides a working static-template flow without requiring a backend server.


## Final UI Theme
The template uses a Purple + Cream palette:
- Deep Purple: #3A245C
- Purple: #7B4DFF
- Soft Purple: #A06BFF
- Cream: #FFF8EA
- Warm Cream: #F4EBDD

## Faculty Images
Local SVG faculty portraits are included in `assets/images/` so the Faculty / Instructors section displays correctly without broken image links.
