# Bella Tavola - Premium Italian Restaurant Website Template

> **"Authentic Italian Flavors, Crafted With Passion."**

A complete, production-ready, highly responsive restaurant website template built with **React**, **Vite**, and **Tailwind CSS**. Designed with an editorial aesthetic for fine-dining Italian restaurants, trattorias, and luxury bistros.

---

## 🌟 Key Highlights & Features

- 🌿 **Tailored Italian Design System:** Rich Forest Green (`#17251D`), Warm Cream (`#F8F3E8`), Soft Beige (`#E9DFCC`), and refined Gold accents (`#C89B3C`).
- 🍝 **Interactive Menu Filtering:** Dynamic category filtering for Starters, Handmade Pasta, Wood-Fired Pizza, Mains, Dolci/Desserts, and Drinks with Indian Rupee (`₹`) pricing and dietary indicators.
- ⭐ **Chef's Signature Dishes:** Elevated highlight cards showcasing chef favorites with hover zoom interactions.
- 📸 **Photo Gallery with Lightbox:** Asymmetric visual grid with interactive full-screen Lightbox modal, touch-friendly navigation, counter, and keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).
- 📅 **Validated Table Booking Form:** Real-time form validation (name, email, 10-digit mobile number, past-date prevention, guest size selector, time slots, special requests) with instant booking summary card.
- 📱 **Fully Responsive Layout:** Optimized across 320px, 390px, 768px, 1024px, and 1440px+ screens with a smooth mobile drawer navigation.
- ♿ **Accessibility First:** Semantic HTML5 landmarks, visible focus states (`:focus-visible`), ARIA attributes, and accessible contrast ratios.
- 📂 **Clean Architecture:** Strict separation between restaurant data (`src/data/`) and UI components for effortless reusability.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3 with custom extended color tokens and keyframe animations
- **Icons:** Lucide React
- **Typography:** Google Fonts (*Playfair Display* for headings and *Inter* for body/UI)

---

## 📁 Project Structure

```text
bella-tavola/
├── public/
│   ├── images/              # Public static assets
│   └── favicon.svg          # Custom restaurant monogram SVG icon
├── src/
│   ├── assets/              # Icons and local asset helpers
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx       # Button variants (gold, outline, forest, cream)
│   │   ├── SectionHeading.jsx # Editorial serif headings with gold sub-eyebrow
│   │   ├── FoodCard.jsx     # Chef's pick featured card with badges and hover zoom
│   │   ├── MenuCard.jsx     # Reusable dish card with price (₹), dietary tags & description
│   │   ├── GalleryModal.jsx # Accessible lightbox modal with keyboard nav (Esc, Arrows)
│   │   ├── ReservationForm.jsx # Validated booking form with realistic confirmation UI
│   │   ├── Navbar.jsx       # Sticky header with blur, mobile drawer & smooth links
│   │   └── Footer.jsx       # Multi-column footer with hours, links, and socials
│   ├── sections/            # Page view sections
│   │   ├── Hero.jsx         # Dramatic full-height hero with tagline & CTA actions
│   │   ├── About.jsx        # Split layout with story, chef credentials & key stats
│   │   ├── FeaturedDishes.jsx # Chef's highlights section with elevated card styling
│   │   ├── Menu.jsx         # Interactive filterable menu by categories with instant transitions
│   │   ├── GallerySection.jsx # Curated photo gallery with interactive zoom & lightbox trigger
│   │   ├── Reservation.jsx  # Table reservation section with interactive state handling
│   │   └── Contact.jsx      # Timings, Mumbai location, contact channels & stylized map panel
│   ├── data/                # Centralized content and data architecture
│   │   ├── restaurantData.js # General info, stats, timings, location & social links
│   │   ├── menuData.js      # Complete menu items across 6+ categories with ₹ pricing
│   │   └── galleryData.js   # Gallery items with captions, tags & imagery
│   ├── App.jsx              # Main application shell
│   ├── main.jsx             # React DOM root entrypoint
│   └── index.css            # Tailwind directives, custom scrollbar & font declarations
├── index.html               # Semantic HTML5 shell with meta tags & SEO title
├── tailwind.config.js       # Custom palette tokens, shadows and animations
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite dev/build configuration
├── package.json             # Project dependencies and npm scripts
└── README.md                # Project documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure **Node.js** (v18 or newer) and **npm** are installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The website will be live at `http://localhost:3000` (or the port specified by Vite).

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready for deployment on Vercel, Netlify, Cloudflare Pages, or AWS S3.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 How to Customize for Any Restaurant

### 1. Update Restaurant Information
Open `src/data/restaurantData.js` and adjust:
- Restaurant Name, Tagline, Established Year
- Address, phone numbers, and reservation email
- Operating hours (Lunch and Dinner timings)
- Statistics and brand story / Chef quotes

### 2. Update Menu Items and Categories
Open `src/data/menuData.js` to add, edit, or remove dishes:
```javascript
{
  id: "custom-dish-1",
  name: "Gnocchi al Gorgonzola",
  category: "pasta",
  price: 650,
  description: "Handmade potato gnocchi in rich gorgonzola cream sauce and toasted walnuts.",
  image: "https://images.unsplash.com/your-image-url",
  dietary: ["veg"], // 'veg', 'non-veg', 'spicy'
  isFeatured: true,
  badge: "Chef's Special",
  rating: 4.9
}
```

### 3. Update Gallery Images
Open `src/data/galleryData.js` to change images, titles, and categories for the gallery and lightbox modal.

### 4. Replace Theme Colors
Modify `tailwind.config.js` to customize the primary brand colors:
```javascript
colors: {
  forest: { 900: '#17251D', 700: '#304C3B' },
  cream: { 100: '#F8F3E8' },
  gold: { 500: '#C89B3C' }
}
```

---

## 📄 License
MIT License © 2026 Bella Tavola. Free to use for personal and commercial projects.
