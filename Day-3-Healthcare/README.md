# MedCare — Healthcare & Medical Website Template (Interactive Premium Edition)

A commercial-grade, modern, and highly interactive healthcare website template designed for hospitals, clinics, medical centers, and multi-specialty healthcare systems. Built from scratch with pure HTML5, CSS3, and Vanilla JavaScript (ES6+) with zero third-party framework dependencies.

---

## 🌟 Project Overview

**MedCare** is an accessible, high-performance, and feature-rich medical web application template. It embodies the core values of clinical excellence, modern infrastructure, and compassionate patient-first care (*"Compassionate Care. Better Health."*).

This project includes a comprehensive suite of interactive clinical tools, search and triage engines, preventative wellness calculators, and accessibility controls.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessible ARIA roles, live regions, and SEO optimization.
- **CSS3**: Custom design system using CSS variables, Dark/Light theme tokens, Flexbox, CSS Grid, glassmorphism, smooth micro-interactions, and print stylesheets.
- **Vanilla JavaScript (ES6+)**: Pure, modular script without external library dependencies (no jQuery, no React/Vue/Angular).
- **Typography**: Google Fonts — *Poppins* (headings) & *Inter* (body text).
- **Icons**: Bootstrap Icons (via CDN) & Custom Medical SVGs.

---

## 🚀 Key Interactive Features & Functionality

### 1. 🧮 Interactive Patient Health Assessment Hub
- **Symptom Checker & Triage Engine**:
  - Interactive multi-symptom selector (Chest Pain, Severe Migraines, Child Fever, Joint Pain, Dental Sensitivity, Shortness of Breath).
  - Calculates severity levels (*Urgent / Emergency*, *Specialist Evaluation Needed*, *Routine Specialist Care*).
  - Recommends the optimal medical department and suggested board-certified specialist.
  - 1-click booking deep link that automatically pre-selects the department and doctor in the scheduling form and scrolls smoothly to it.
- **Reactive BMI & Wellness Calculator**:
  - Dual real-time height (100–220 cm) and weight (30–150 kg) range sliders with live numeric value updates.
  - Dynamic visual BMI category gauge (*Underweight*, *Healthy Weight*, *Overweight*, *Obesity Range*).
  - Animated pointer needle positioning and customized preventative lifestyle advice.
- **Preventative Health Checkup Packages**:
  - Interactive packages grid covering *Basic Wellness* ($49), *Executive Cardiac Care* ($129 - Featured), *Women's Executive* ($149), and *Senior Complete* ($179).
  - Comprehensive feature checklists, discount pricing badges, and direct integration into the appointment system.

### 2. 🔍 Live Doctor Search & Filter Directory
- **Real-Time Search Bar**: Instant filtering by doctor name, medical specialty, or clinical focus.
- **Department Category Pills**: Filter doctors instantly across *All*, *Cardiology*, *Neurology*, *Pediatrics*, *Orthopedics*, *Dental*, and *Emergency*.
- **Live Counter**: Dynamically updates the visible doctor count (*"Showing X Doctors"*).
- **Doctor Profile Modal**: In-depth doctor biography, medical qualifications (degrees & fellowships), consultation visiting hours, patient satisfaction ratings, and 1-click consultation booking.

### 3. 🎨 High-Impact Visual & UX "Wow" Factor
- **Dark / Light Theme Switcher**:
  - Navbar toggle with sun/moon icons and persistent user preference saved to `localStorage`.
  - Rich dark theme styling across all cards, inputs, navigation, and modals with glowing accents.
- **Spotlight Quick Search (`Ctrl+K` / `Cmd+K` Modal)**:
  - Instant spotlight search across doctors, departments, facilities, checkup packages, and patient guides.
  - Keyboard shortcut navigation with autofocus and smooth scroll deep linking.
- **Text Size Accessibility Switcher**:
  - Top bar `A-` / `A` / `A+` font scaling control for senior and vision-impaired patients.
- **Smart Time-of-Day Greeting & Live Status**:
  - Dynamic greeting (*"Good morning / afternoon / evening • 14 Specialists on Duty Today"*).
  - Animated live green pulse indicators for emergency response status.
- **Printable / Downloadable Appointment Pass Slip**:
  - Appointment confirmation modal includes a *"Print / Save Slip"* trigger.
  - Clean, dedicated print stylesheet (`@media print`) formatting an official hospital consultation pass.

### 4. 📋 Core Healthcare Management Systems
- **Interactive Appointment Booking Engine**:
  - Dynamic department-to-doctor dropdown synchronizer.
  - Interactive visual time-slot selection pills.
  - Client-side validation for names, phone numbers, valid email formats, and date restrictions (past dates disabled).
  - Confirmation Summary Modal with unique reference tracking ID (`MC-XXXXXX`).
- **Patient Information Guide**:
  - Tabbed resource hub covering *Preparation*, *Documents to Bring*, *Visiting Hours*, and *Cashless Insurance/Billing*.
- **Interactive FAQ Accordion**:
  - Expandable/collapsible accordion with ARIA states and smooth height transitions.
- **Toast Notification System**:
  - Floating animated status toasts for appointment bookings, theme changes, and contact inquiries.
- **Back to Top Button**:
  - Floating quick-scroll-to-top button appearing after 350px of page scroll.

---

## 📂 Project Structure

```
Day-3-Healthcare/
│
├── index.html                  # Main semantic single-page template
├── README.md                   # Project documentation & user guide
│
├── css/
│   └── style.css               # Design system, CSS variables, Dark Mode & print rules
│
├── js/
│   └── script.js               # ES6+ interactive controller, triage, calculators & search
│
└── assets/
    ├── icons/
    │   └── logo.svg            # MedCare brand logo vector
    └── images/                 # Healthcare graphic assets & fallbacks
```

---

## 🖥️ Website Sections

1. **Top Emergency & Accessibility Bar**: Hotline, clinic address, operating hours, and `A-` / `A` / `A+` text size controls.
2. **Sticky Header / Navigation**: Brand logo, desktop menu, mobile drawer, `Ctrl+K` search trigger, and Dark Mode toggle.
3. **Hero Section**: Live greeting, value proposition, trust badges, and appointment CTA.
4. **Statistics & Trust Counters**: Viewport-triggered animated counters.
5. **About MedCare**: Hospital introduction, clinical philosophy, and verified checklist.
6. **Interactive Health Assessment Hub**: Symptom Checker & Triage Engine, and Reactive BMI Calculator.
7. **Medical Services**: Cardiology, Neurology, Pediatrics, Orthopedics, Dental, Emergency.
8. **Specialist Doctors Directory**: Live search, category filter pills, profile modal, and booking links.
9. **Preventative Health Packages**: Basic, Cardiac, Women's, and Senior checkup tiers.
10. **Modern Facilities**: Emergency, ICU, Diagnostic Labs, Modular OTs, Pharmacy, Ambulance Fleet.
11. **Why Choose Us**: 6 core clinical pillars.
12. **Appointment Booking**: Dynamic interactive scheduling form with time slot picker.
13. **Patient Information Guide**: Tabbed prep guidelines, document checklist, and visiting hours.
14. **Interactive FAQ**: Common patient questions with accordion collapse.
15. **Patient Testimonials**: Authentic patient reviews with 5-star ratings.
16. **Contact Us & Map**: Address, operating hours, contact form, and location widget.
17. **Call to Action (CTA)**: High-converting appointment banner.
18. **Footer**: Brand info, quick links, departments, newsletter subscription, and copyright.

---

## 📱 Responsive Breakpoints

The template is fully responsive and optimized across all major screen sizes:
- **Large Desktop**: 1200px+
- **Laptops / Desktops**: 1024px – 1199px
- **Tablets / iPads**: 768px – 1023px
- **Mobile Landscape & Large Phones**: 480px – 767px
- **Small Mobile Devices**: 320px – 479px

---

## 🏃 How to Run the Project

1. Clone or download the `Day-3-Healthcare` repository directory.
2. Open `index.html` directly in any modern web browser (Chrome, Firefox, Edge, Safari).
3. Alternatively, serve with VS Code Live Server or any static HTTP server:
   ```bash
   # Using Python 3 built-in HTTP server
   python -m http.server 8000
   ```
4. Visit `http://localhost:8000` in your browser.

---

## 📄 License & Credits

- **Fonts**: [Google Fonts (Poppins & Inter)](https://fonts.google.com/)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Imagery**: Curated medical photography from [Unsplash](https://unsplash.com/) (royalty-free for commercial & personal use).
- **Design & Code**: Crafted for commercial-quality template showcasing.\n