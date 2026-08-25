# VERA LUXURY ESTATES — Professional Real Estate Website Template

**Vera Luxury Estates** is a premier, production-grade, responsive real estate website template built specifically for ultra-luxury residential brokerages, architectural advisories, and commercial investment firms.

Engineered with **pure HTML5, CSS3, and Vanilla JavaScript (ES6+)** with **zero external frameworks** or build requirements.

---

## 🌟 Key Highlights & Brand Direction

- **Brand Name**: *Vera Luxury Estates*
- **Brand Positioning**: Ultra-high-net-worth real estate brokerage representing architectural masterpieces, private waterfront villas, skyline penthouses, and prime commercial assets.
- **Sophisticated Aesthetic**:
  - Deep Midnight Navy (`#0B132B`, `#070D1F`) base for trust, authority, and elegance.
  - Warm Champagne Gold (`#C5A880`, `#DFC19B`) accents.
  - Alabaster warm off-white (`#FAF9F6`) backgrounds with clean slate card borders.
  - Editorial luxury typography featuring **Playfair Display** headings and crisp **Plus Jakarta Sans** body and UI controls.
- **Client-Ready Interactions**:
  - Live interactive property search & multi-faceted filtering.
  - Interactive photo gallery with thumbnail switcher and fullscreen lightbox modal.
  - Real-time mortgage & acquisition financial calculator with live sliders and breakdown calculations.
  - Client-side favorites / bookmarking system with `localStorage` persistence and navigation badge counter.
  - Full form validation with custom inline error indicators and animated floating Toast notifications.
  - Responsive mobile drawer navigation with backdrop blur and body scroll lock.
  - Animated numerical counters utilizing `IntersectionObserver`.
  - Accessible accordion component for FAQs.

---

## 📁 File Structure

```
Day-2-Real-Estate/
│
├── index.html               # Main Homepage with all 13 complete sections
├── properties.html          # Dynamic Property Catalog with live search & multi-filter
├── property-details.html   # Dedicated Property Details with dynamic URL ID loading
├── about.html               # Company Story, Core Values, Leadership, Awards & Stats
├── agents.html              # Dedicated Team & Advisory Directory with contact modals
├── contact.html             # Contact Page with Map UI, Consultation Form & FAQ
│
├── css/
│   └── style.css            # Complete design system with CSS custom properties & media queries
│
├── js/
│   ├── data.js              # Centralized realistic property, agent, testimonial & FAQ dataset
│   └── script.js            # Core interactive logic (search, filter, gallery, calculator, toasts, favorites)
│
└── README.md                # Project documentation
```

---

## 🖥️ Pages Included

### 1. `index.html` (Master Showcase Homepage)
Includes all 13 core sections:
1. **Sticky Glassmorphic Navbar**: Brand logo, navigation menu, Favorites count indicator, "List Your Property" CTA, and responsive mobile drawer toggle.
2. **Hero Section**: High-resolution architecture visual, luxury headline ("Find a Place You'll Be Proud to Call Home"), supporting copy, dual CTAs ("Explore Properties", "Schedule Private Tour"), trust badges.
3. **Hero Property Search UI**: Interactive tabbed search (Buy / Rent / Commercial) with Location, Property Type, Price Range, Bedrooms, and Instant Search trigger.
4. **About Company Spotlight**: Brand history, mission statement, architectural visual grid, and animated counter statistics (Years Experience, Volume Sold, Happy Clients, Expert Advisors).
5. **Property Categories Grid**: 6 interactive luxury categories (Villas, Penthouses, Modern Mansions, Waterfront, Commercial, Private Land) with property counts and hover zoom.
6. **Featured Properties Section**: Spotlight showcase cards with luxury tags, quick specs, and direct link to property details.
7. **Property Listings Catalog**: Interactive cards with category filter pills (All, Villa, Penthouse, Apartment, Commercial), favorite heart toggle, and instant filtering.
8. **Virtual Tour & Property Details Highlight**: Interactive video/walkthrough preview card with quick specs and schedule a private showing modal trigger.
9. **Our Agents / Team**: 4 elite advisors with photos, titles, credentials, and direct contact buttons.
10. **Client Testimonials**: Authentic verified client reviews with 5-star ratings and luxury homeowner quotes.
11. **High-Impact CTA Banner**: "Your Next Chapter Starts Here — Partner with Vera Estates".
12. **Contact Section & Map UI**: Office hours, direct communication channels, stylized interactive map placeholder, and real-time contact form with feedback.
13. **Comprehensive Footer**: Full navigation hierarchy, property categories, newsletter subscription with feedback, social icons, and copyright notices.

### 2. `properties.html` (Full Catalog & Search Engine)
- Dynamic search bar with live text search.
- Multi-faceted filter controls: Property Type, Price Slider, Bedroom/Bathroom count, Status (Sale / Rent), Sorting (Price Low/High, Newest, Sqft).
- Live Results counter ("Showing X Properties Available").
- Favorites persistence in `localStorage`.

### 3. `property-details.html` (Single Property Deep Dive)
- Dynamic URL parameter reader (`property-details.html?id=X`) that loads property details or falls back seamlessly.
- Interactive multi-image gallery with large hero photo, thumbnail switcher, and fullscreen lightbox modal with keyboard navigation.
- Property overview bar (Beds, Baths, Sqft, Garages, Year Built).
- Rich description and luxury amenities checklist.
- Interactive Mortgage Calculator with real-time monthly payment calculation.
- Interactive Floor Plan preview tabs.
- Dedicated Agent contact card with inline quick inquiry form and instant toast confirmation.
- "Similar Exclusive Properties" recommendation grid.

### 4. `about.html` (Heritage & Ethos)
- Company story, founding vision, and mission statement.
- Four Core Pillars of Vera Advisory.
- Growth Milestones & Timeline from 2012 to 2026.
- Animated numerical statistics banner.

### 5. `agents.html` (Managing Directors Directory)
- Full roster of luxury real estate advisors with bios, specialties, and transaction volumes.
- Direct contact buttons (Call, Email, Profile).
- "Schedule Consultation" modal with time slot selection and advisor pre-fill.

### 6. `contact.html` (Global Concierge & Offices)
- Multi-office locator cards (Beverly Hills, New York, London, Dubai).
- Full concierge contact form with service selection (Buying, Selling, Private Valuation, Commercial).
- Stylized interactive map interface.
- Interactive FAQ Accordion with smooth expand/collapse animations.

---

## 📱 Responsive Design Matrix

Fully tested and verified across all standard viewports:
- **Desktop (1440px+)**: Fluid grid layouts, multi-column search UI, sticky headers, rich hover interactions.
- **Laptop (1024px - 1280px)**: Adaptive column adjustments, optimized card padding.
- **Tablet (768px - 992px)**: Mobile navigation drawer, 2-column property grids, stacked sidebar on property details.
- **Mobile (480px - 767px)**: Full-width touch-friendly buttons, single-column search form, swipeable gallery elements.
- **Small Mobile (320px - 480px)**: Zero horizontal overflow, fluid typography scaling, optimized padding.

---

## 🚀 How to Run

1. Open `Day-2-Real-Estate/index.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge).
2. Alternatively, run a local development server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node npx serve
   npx serve .
   ```
3. Navigate to `http://localhost:8000/Day-2-Real-Estate/index.html`.

---

## 🔒 Day 1 Isolation Guarantee
All files for Day 2 are strictly self-contained within `Day-2-Real-Estate/`. No Day 1 files were modified, moved, or altered.
