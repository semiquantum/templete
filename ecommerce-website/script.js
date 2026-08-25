/**
 * ==========================================================================
 * MERIDIAN & HOLT — OBJECTS & LIVING FORMS
 * Day 2 E-Commerce Storefront Engine (ES6 Vanilla JS)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. PRODUCT CATALOG DATA STORE ---
  const PRODUCTS = [
    {
      id: 1,
      title: 'Atelier Walnut & Saddle Leather Lounge Chair',
      category: 'furniture',
      categoryLabel: 'Architectural Furniture',
      price: 890.00,
      originalPrice: 980.00,
      rating: 5.0,
      reviewsCount: 42,
      badge: 'bestseller',
      badgeLabel: 'Bestseller',
      image: 'assets/product-walnut-chair.jpg',
      material: 'Solid American Black Walnut & Vegetable-Tanned Bridle Leather',
      description: 'Meticulously crafted from kiln-dried American walnut with hand-woven saddle leather webbing. Engineered with a subtle 108° recline for contemplative comfort.',
      dimensions: '28.5" W × 32.0" D × 30.5" H (Seat: 15.5" H)',
      weight: '26 lbs (11.8 kg)',
      inStock: true,
      variants: ['Smoked Walnut', 'Natural White Oak', 'Ebonized Ash']
    },
    {
      id: 2,
      title: 'Kanso Brushed Spun Brass Desk Luminaire',
      category: 'lighting',
      categoryLabel: 'Sculptural Lighting',
      price: 340.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 28,
      badge: 'new',
      badgeLabel: 'New Release',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/hero-advisory.jpg',
      material: 'Solid Spun Raw Brass & Honed Carrara Marble Base',
      description: 'A monolithic brass dome with an integrated 2700K warm LED emitter. Features a silent rotary dimming wheel milled from solid brass.',
      dimensions: '14.0" Diameter × 18.2" H (Base: 6.0" Diameter)',
      weight: '9.4 lbs (4.3 kg)',
      inStock: true,
      variants: ['Aged Brass', 'Brushed Bronze', 'Matte Obsidian']
    },
    {
      id: 3,
      title: 'Terra Incisa Sculptural Ceramic Vessel N° 04',
      category: 'ceramics',
      categoryLabel: 'Handcrafted Ceramics',
      price: 195.00,
      originalPrice: 230.00,
      rating: 4.8,
      reviewsCount: 19,
      badge: 'limited',
      badgeLabel: 'Edition of 50',
      image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/about-studio.jpg',
      material: 'Coarse Feldspathic Stoneware & Matte Ash Glaze',
      description: 'Hand-thrown on a traditional kick-wheel and wood-fired over 72 hours. Distinct tactile fluting with volcanic texture.',
      dimensions: '9.5" Diameter × 13.0" H',
      weight: '6.2 lbs (2.8 kg)',
      inStock: true,
      variants: ['Volcanic Ash', 'Unglazed Terracotta', 'Smoked Bone']
    },
    {
      id: 4,
      title: 'Archival Full-Grain Leather Executive Folio',
      category: 'leather',
      categoryLabel: 'Leather & Stationery',
      price: 260.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 34,
      badge: 'bestseller',
      badgeLabel: 'Artisan Batch',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/case-study-tower.jpg',
      material: 'Tuscan Vegetable-Tanned Vachetta Leather & Solid Brass Hardware',
      description: 'Designed to house a 14" to 16" laptop alongside A4 architectural blueprints. Burnished by hand using organic carnauba wax.',
      dimensions: '15.5" W × 11.2" H × 1.5" D',
      weight: '2.1 lbs (0.95 kg)',
      inStock: true,
      variants: ['Espresso Brown', 'Cognac Tan', 'Obsidian Black']
    },
    {
      id: 5,
      title: 'Kurogane Cast Iron & Brass Pour-Over Station',
      category: 'ceramics',
      categoryLabel: 'Handcrafted Ceramics',
      price: 165.00,
      originalPrice: 190.00,
      rating: 4.7,
      reviewsCount: 15,
      badge: null,
      badgeLabel: null,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/case-study-urban.jpg',
      material: 'Heavy Cast Iron Stand, Spun Brass Ring & Ceramic Dripper',
      description: 'Architectural geometry designed for precision extraction. Features height-adjustable arm to accommodate single cups or decanters.',
      dimensions: '6.5" W × 8.0" D × 11.5" H',
      weight: '4.8 lbs (2.2 kg)',
      inStock: true,
      variants: ['Cast Black / Brass', 'Cast White / Nickel']
    },
    {
      id: 6,
      title: 'Smoked Fluted Glass Architectural Pendant',
      category: 'lighting',
      categoryLabel: 'Sculptural Lighting',
      price: 420.00,
      originalPrice: 480.00,
      rating: 5.0,
      reviewsCount: 12,
      badge: 'limited',
      badgeLabel: 'Limited Run',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/hero-collection.jpg',
      material: 'Mouth-Blown Fluted Borosilicate Glass & Aged Patina Brass',
      description: 'Hand-blown cylindrical shade providing soft columnar illumination. Supplied with 10 feet of braided cloth suspension cable.',
      dimensions: '8.0" Diameter × 16.5" H',
      weight: '5.5 lbs (2.5 kg)',
      inStock: true,
      variants: ['Smoked Charcoal', 'Amber Honey', 'Clear Fluted']
    },
    {
      id: 7,
      title: 'Kyoto Woven Belgian Linen & Wool Throw',
      category: 'furniture',
      categoryLabel: 'Architectural Furniture',
      price: 210.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 22,
      badge: 'new',
      badgeLabel: 'New Season',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/hero-advisory.jpg',
      material: '60% Organic Belgian Flax Linen & 40% Merino Wool',
      description: 'Loom-woven in small batches with eyelash fringe borders. Ultra-breathable yet deeply insulating for all seasons.',
      dimensions: '55" W × 78" L (140cm × 200cm)',
      weight: '2.4 lbs (1.1 kg)',
      inStock: true,
      variants: ['Oatmeal Sand', 'Muted Terracotta', 'Deep Forest Pine']
    },
    {
      id: 8,
      title: 'Monolith Calacatta Honed Marble Vessel Tray',
      category: 'ceramics',
      categoryLabel: 'Handcrafted Ceramics',
      price: 180.00,
      originalPrice: 215.00,
      rating: 4.9,
      reviewsCount: 31,
      badge: null,
      badgeLabel: null,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/about-studio.jpg',
      material: 'Honed Solid Italian Calacatta Marble & Cork Underside',
      description: 'Carved from a single block of natural veined marble with a soft velvet honed finish. Chamfered edges for seamless handling.',
      dimensions: '14.0" L × 8.0" W × 1.2" H',
      weight: '7.8 lbs (3.5 kg)',
      inStock: true,
      variants: ['Calacatta Gold', 'Nero Marquina Black']
    },
    {
      id: 9,
      title: 'Hardbound Archival Linen Journal & Brass Stylus',
      category: 'leather',
      categoryLabel: 'Leather & Stationery',
      price: 78.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 56,
      badge: 'bestseller',
      badgeLabel: 'Essential',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/case-study-tower.jpg',
      material: 'Japanese 100gsm Fountain-Pen-Friendly Paper & Heavy Linen Cover',
      description: '192 numbered dot-grid pages with archival thread-sewn lay-flat binding. Includes solid hexagonal brass writing stylus.',
      dimensions: '6.0" W × 8.5" H (A5 Format)',
      weight: '1.2 lbs (0.55 kg)',
      inStock: true,
      variants: ['Charcoal Slate', 'Natural Raw Linen', 'Terracotta Earth']
    },
    {
      id: 10,
      title: 'Sora Minimalist Solid Oak Low Stool & Plinth',
      category: 'furniture',
      categoryLabel: 'Architectural Furniture',
      price: 490.00,
      originalPrice: 560.00,
      rating: 5.0,
      reviewsCount: 17,
      badge: 'limited',
      badgeLabel: 'Edition of 30',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/case-study-urban.jpg',
      material: 'Quarter-Sawn European White Oak & Concealed Mortise Joinery',
      description: 'A versatile low architecture object functioning as a sculpted side table, seat, or art plinth. Hand-rubbed organic oil finish.',
      dimensions: '16.0" W × 16.0" D × 18.0" H',
      weight: '18.5 lbs (8.4 kg)',
      inStock: true,
      variants: ['Natural White Oak', 'Smoked Dark Oak']
    }
  ];

  // Promo Codes DB
  const PROMO_CODES = {
    'MERIDIAN10': { discount: 0.10, label: '10% Off Atelier Edition' },
    'HOLT20': { discount: 0.20, label: '20% Off Private Dispatch' }
  };

  // --- 2. GLOBAL STATE ---
  const state = {
    cart: JSON.parse(localStorage.getItem('meridian_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('meridian_wishlist') || '[]'),
    currentCategory: 'all',
    searchQuery: '',
    currentSort: 'featured',
    appliedPromo: null,
    discountAmount: 0,
    freeShippingThreshold: 150.00
  };

  // --- 3. DOM ELEMENTS ---
  const el = {
    // Header & Nav
    siteHeader: document.getElementById('site-header'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    mobileDrawerBackdrop: document.getElementById('mobile-drawer-backdrop'),
    closeMobileMenuBtn: document.getElementById('close-mobile-menu-btn'),
    searchToggleBtn: document.getElementById('search-toggle-btn'),
    headerSearchBar: document.getElementById('header-search-bar'),
    headerSearchForm: document.getElementById('header-search-form'),
    globalSearchInput: document.getElementById('global-search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    closeSearchBtn: document.getElementById('close-search-btn'),
    searchSuggestions: document.getElementById('search-suggestions'),
    wishlistBtn: document.getElementById('wishlist-btn'),
    wishlistCountBadge: document.getElementById('wishlist-count-badge'),
    cartDrawerToggle: document.getElementById('cart-drawer-toggle'),
    cartCountBadge: document.getElementById('cart-count-badge'),
    desktopNavLinks: document.querySelectorAll('.desktop-nav .nav-link'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav .mobile-nav-link'),

    // Catalog & Filters
    catalogGrid: document.getElementById('product-grid'),
    catalogEmptyState: document.getElementById('catalog-empty-state'),
    categoryTabs: document.querySelectorAll('.cat-tab'),
    catalogSearchInput: document.getElementById('catalog-search-input'),
    catalogClearSearch: document.getElementById('catalog-clear-search'),
    catalogSort: document.getElementById('catalog-sort'),
    activeFilterBar: document.getElementById('active-filter-bar'),
    activeFilterChips: document.getElementById('active-filter-chips'),
    btnClearFilters: document.getElementById('btn-clear-filters'),
    btnResetEmptySearch: document.getElementById('btn-reset-empty-search'),

    // Spotlight
    spotlightAddBtn: document.getElementById('spotlight-add-cart-btn'),
    spotlightQtyInput: document.getElementById('spotlight-qty'),
    spotlightQtyMinus: document.getElementById('spotlight-qty-minus'),
    spotlightQtyPlus: document.getElementById('spotlight-qty-plus'),
    spotlightWishlistBtn: document.getElementById('spotlight-wishlist-btn'),
    spotlightFinishSwatches: document.querySelectorAll('.swatch-btn[data-finish]'),
    spotlightLeatherSwatches: document.querySelectorAll('.swatch-btn[data-leather]'),
    spotlightFinishText: document.getElementById('spotlight-finish-text'),
    spotlightLeatherText: document.getElementById('spotlight-leather-text'),
    heroQuickViewBtn: document.getElementById('hero-quick-view-btn'),

    // Cart Drawer
    cartDrawer: document.getElementById('cart-drawer'),
    cartBackdrop: document.getElementById('cart-backdrop'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartDrawerCount: document.getElementById('cart-drawer-count'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    cartDrawerFooter: document.getElementById('cart-drawer-footer'),
    shippingProgressText: document.getElementById('shipping-progress-text'),
    shippingProgressBar: document.getElementById('shipping-progress-bar'),
    promoInput: document.getElementById('promo-input'),
    btnApplyPromo: document.getElementById('btn-apply-promo'),
    promoFeedback: document.getElementById('promo-feedback'),
    cartSubtotalPrice: document.getElementById('cart-subtotal-price'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    promoCodeApplied: document.getElementById('promo-code-applied'),
    cartDiscountAmount: document.getElementById('cart-discount-amount'),
    cartShippingPrice: document.getElementById('cart-shipping-price'),
    cartTotalPrice: document.getElementById('cart-total-price'),
    btnCheckout: document.getElementById('btn-checkout'),

    // Product Modal
    productModal: document.getElementById('product-modal'),
    productModalBackdrop: document.getElementById('product-modal-backdrop'),
    closeProductModalBtn: document.getElementById('close-product-modal-btn'),
    modalProductContent: document.getElementById('modal-product-content'),

    // Checkout Modal
    checkoutModal: document.getElementById('checkout-modal'),
    checkoutModalBackdrop: document.getElementById('checkout-modal-backdrop'),
    closeCheckoutBtn: document.getElementById('close-checkout-btn'),
    checkoutStepForm: document.getElementById('checkout-step-form'),
    checkoutStepSuccess: document.getElementById('checkout-step-success'),
    checkoutItemCount: document.getElementById('checkout-item-count'),
    checkoutItemsPreview: document.getElementById('checkout-items-preview'),
    checkoutFinalTotal: document.getElementById('checkout-final-total'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutFeedback: document.getElementById('checkout-feedback'),
    confirmedOrderId: document.getElementById('confirmed-order-id'),
    confirmedEmail: document.getElementById('confirmed-email'),
    btnDoneShopping: document.getElementById('btn-done-shopping'),

    // Newsletter & Toasts
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    newsletterFeedback: document.getElementById('newsletter-feedback'),
    toastContainer: document.getElementById('toast-container'),
    currentYear: document.getElementById('current-year')
  };

  if (el.currentYear) {
    el.currentYear.textContent = new Date().getFullYear();
  }

  // --- 4. FORMATTING UTILITIES ---
  const formatPrice = (amount) => `$${amount.toFixed(2)}`;

  const saveCartToStorage = () => {
    localStorage.setItem('meridian_cart', JSON.stringify(state.cart));
  };

  const saveWishlistToStorage = () => {
    localStorage.setItem('meridian_wishlist', JSON.stringify(state.wishlist));
  };

  // --- 5. TOAST NOTIFICATION ENGINE ---
  const showToast = (message, actionText = 'View Bag', onAction = null) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div class="toast-body">${message}</div>
      ${actionText ? `<button type="button" class="toast-btn">${actionText}</button>` : ''}
    `;

    if (actionText && onAction) {
      const actionBtn = toast.querySelector('.toast-btn');
      if (actionBtn) {
        actionBtn.addEventListener('click', () => {
          onAction();
          toast.remove();
        });
      }
    } else if (actionText) {
      const actionBtn = toast.querySelector('.toast-btn');
      if (actionBtn) {
        actionBtn.addEventListener('click', () => {
          openCartDrawer();
          toast.remove();
        });
      }
    }

    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-exit');
      setTimeout(() => toast.remove(), 250);
    }, 4000);
  };

  // --- 6. CATALOG RENDERING & FILTER ENGINE ---
  const renderCatalog = () => {
    let filtered = PRODUCTS.filter(p => {
      // Category filter
      const matchesCategory = state.currentCategory === 'all' || p.category === state.currentCategory;
      // Search query filter
      const query = state.searchQuery.trim().toLowerCase();
      const matchesQuery = !query || 
        p.title.toLowerCase().includes(query) || 
        p.material.toLowerCase().includes(query) || 
        p.categoryLabel.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    // Sorting
    switch (state.currentSort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => a.id - b.id);
        break;
    }

    // Update Category Badges Count
    updateCategoryCounts();

    // Render Grid or Empty State
    if (filtered.length === 0) {
      el.catalogGrid.innerHTML = '';
      el.catalogEmptyState.hidden = false;
    } else {
      el.catalogEmptyState.hidden = true;
      el.catalogGrid.innerHTML = filtered.map(product => {
        const isWishlisted = state.wishlist.includes(product.id);
        const originalPriceHtml = product.originalPrice 
          ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` 
          : '';
        const badgeHtml = product.badge && product.badgeLabel 
          ? `<span class="badge-tag tag-${product.badge}">${product.badgeLabel}</span>` 
          : '';

        return `
          <article class="product-card" data-product-id="${product.id}" id="product-card-${product.id}">
            <div class="product-image-box">
              <img src="${product.image}" alt="${product.title}" class="product-thumb" loading="lazy" onerror="this.onerror=null;this.src='${product.fallbackImage || 'assets/hero-advisory.jpg'}';">
              
              <div class="card-badges">
                ${badgeHtml}
              </div>

              <button type="button" class="card-wishlist-btn ${isWishlisted ? 'is-active' : ''}" data-action="toggle-wishlist" data-product-id="${product.id}" aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#A8532B' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

              <div class="card-actions-overlay">
                <button type="button" class="btn-quick-view" data-action="quick-view" data-product-id="${product.id}">Quick View</button>
                <button type="button" class="btn-quick-add" data-action="quick-add" data-product-id="${product.id}" aria-label="Add ${product.title} to bag">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div class="product-details">
              <div>
                <div class="product-category-row">
                  <span>${product.categoryLabel}</span>
                  <span class="product-rating">★ ${product.rating.toFixed(1)}</span>
                </div>
                <h3 class="product-title">
                  <a href="#product-modal" class="product-title-link" data-action="quick-view" data-product-id="${product.id}">${product.title}</a>
                </h3>
                <p class="product-material">${product.material}</p>
              </div>

              <div class="product-footer-row">
                <div class="price-group">
                  <span class="price-current">${formatPrice(product.price)}</span>
                  ${originalPriceHtml}
                </div>
                <button type="button" class="card-add-btn" data-action="quick-add" data-product-id="${product.id}">
                  Add to Bag
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('');
    }

    renderActiveFilterBar();
  };

  const updateCategoryCounts = () => {
    const counts = { all: PRODUCTS.length, furniture: 0, lighting: 0, ceramics: 0, leather: 0 };
    PRODUCTS.forEach(p => {
      if (counts[p.category] !== undefined) counts[p.category]++;
    });

    for (const [key, count] of Object.entries(counts)) {
      const badge = document.getElementById(`count-${key}`);
      if (badge) badge.textContent = count;
    }
  };

  const renderActiveFilterBar = () => {
    const chips = [];
    if (state.currentCategory !== 'all') {
      const catNames = { furniture: 'Furniture', lighting: 'Lighting', ceramics: 'Ceramics', leather: 'Leather & Paper' };
      chips.push(`Category: ${catNames[state.currentCategory] || state.currentCategory}`);
    }
    if (state.searchQuery.trim()) {
      chips.push(`Keyword: "${state.searchQuery.trim()}"`);
    }

    if (chips.length > 0) {
      el.activeFilterBar.hidden = false;
      el.activeFilterChips.innerHTML = chips.map((c, i) => `
        <span class="filter-chip">
          ${c}
          <button type="button" class="filter-chip-remove" data-chip-index="${i}" aria-label="Remove filter">&times;</button>
        </span>
      `).join('');
    } else {
      el.activeFilterBar.hidden = true;
      el.activeFilterChips.innerHTML = '';
    }
  };

  // --- 7. CART STATE & CALCULATIONS ---
  const calculateCartTotals = () => {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    if (state.appliedPromo) {
      discount = subtotal * state.appliedPromo.discount;
    }

    const freeShipping = subtotal >= state.freeShippingThreshold || subtotal === 0;
    const shipping = freeShipping ? 0 : 25.00;
    const total = Math.max(0, subtotal - discount + (subtotal > 0 && !freeShipping ? shipping : 0));

    return { subtotal, discount, shipping, total, freeShipping };
  };

  const updateCartUI = () => {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Header & Drawer Badges
    if (el.cartCountBadge) el.cartCountBadge.textContent = totalCount;
    if (el.cartDrawerCount) el.cartDrawerCount.textContent = `(${totalCount} item${totalCount === 1 ? '' : 's'})`;

    const { subtotal, discount, shipping, total, freeShipping } = calculateCartTotals();

    // Shipping Progress
    if (subtotal >= state.freeShippingThreshold) {
      el.shippingProgressText.innerHTML = `You unlocked <strong>Free Insured Shipping</strong>!`;
      el.shippingProgressBar.style.width = '100%';
    } else {
      const remaining = state.freeShippingThreshold - subtotal;
      const pct = Math.min(100, Math.max(0, (subtotal / state.freeShippingThreshold) * 100));
      el.shippingProgressText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to qualify for <strong>Free Insured Shipping</strong>`;
      el.shippingProgressBar.style.width = `${pct}%`;
    }

    // Totals Table
    el.cartSubtotalPrice.textContent = formatPrice(subtotal);

    if (discount > 0 && state.appliedPromo) {
      el.cartDiscountRow.hidden = false;
      el.promoCodeApplied.textContent = state.appliedPromo.code;
      el.cartDiscountAmount.textContent = `-${formatPrice(discount)}`;
    } else {
      el.cartDiscountRow.hidden = true;
    }

    el.cartShippingPrice.textContent = subtotal === 0 ? '$0.00' : (freeShipping ? 'Free (Complimentary)' : '$25.00');
    el.cartTotalPrice.textContent = formatPrice(total);

    // Render Items or Empty Cart State
    if (state.cart.length === 0) {
      el.cartItemsContainer.innerHTML = `
        <div class="empty-cart-view">
          <div class="empty-cart-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h3 class="empty-cart-title">Your shopping bag is empty</h3>
          <p class="empty-cart-text">Explore our collection of handcrafted architectural furniture, lighting, and living forms.</p>
          <button type="button" class="btn btn-primary" id="btn-empty-cart-shop">Explore Collection</button>
        </div>
      `;
      el.btnCheckout.disabled = true;
      el.btnCheckout.style.opacity = '0.6';

      const emptyShopBtn = document.getElementById('btn-empty-cart-shop');
      if (emptyShopBtn) {
        emptyShopBtn.addEventListener('click', () => {
          closeCartDrawer();
          const catSection = document.getElementById('catalog');
          if (catSection) catSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      el.btnCheckout.disabled = false;
      el.btnCheckout.style.opacity = '1';
      el.cartItemsContainer.innerHTML = state.cart.map(item => `
        <div class="cart-item" data-item-id="${item.cartItemId}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" onerror="this.onerror=null;this.src='${item.fallbackImage || 'assets/hero-advisory.jpg'}';">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-variant">Variant: ${item.variant || 'Standard'}</span>
            <span class="cart-item-price">${formatPrice(item.price)}</span>
            <div class="cart-item-controls">
              <div class="cart-stepper">
                <button type="button" class="btn-qty-minus" data-action="cart-minus" data-item-id="${item.cartItemId}" aria-label="Decrease quantity">&minus;</button>
                <span>${item.quantity}</span>
                <button type="button" class="btn-qty-plus" data-action="cart-plus" data-item-id="${item.cartItemId}" aria-label="Increase quantity">&plus;</button>
              </div>
            </div>
          </div>
          <button type="button" class="btn-remove-item" data-action="cart-remove" data-item-id="${item.cartItemId}" aria-label="Remove ${item.title}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `).join('');
    }

    saveCartToStorage();
  };

  const addToCart = (productId, quantity = 1, variant = null) => {
    const product = PRODUCTS.find(p => p.id === Number(productId));
    if (!product) return;

    const selectedVariant = variant || (product.variants && product.variants[0]) || 'Standard';
    const cartItemId = `${product.id}-${selectedVariant.replace(/\s+/g, '-').toLowerCase()}`;

    const existingIndex = state.cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        cartItemId,
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        fallbackImage: product.fallbackImage,
        variant: selectedVariant,
        quantity: quantity
      });
    }

    updateCartUI();
    showToast(`Added <strong>${product.title}</strong> (${selectedVariant}) to your bag.`, 'View Bag', openCartDrawer);
  };

  const updateCartItemQuantity = (cartItemId, delta) => {
    const item = state.cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
      showToast(`Removed <strong>${item.title}</strong> from bag.`, null);
    }
    updateCartUI();
  };

  const removeCartItem = (cartItemId) => {
    const item = state.cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;
    state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
    updateCartUI();
    showToast(`Removed <strong>${item.title}</strong> from bag.`, null);
  };

  // --- 8. WISHLIST MANAGEMENT ---
  const toggleWishlist = (productId) => {
    const id = Number(productId);
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const idx = state.wishlist.indexOf(id);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast(`Removed <strong>${product.title}</strong> from wishlist.`, null);
    } else {
      state.wishlist.push(id);
      showToast(`Saved <strong>${product.title}</strong> to wishlist.`, null);
    }

    saveWishlistToStorage();
    updateWishlistUI();
    renderCatalog();
  };

  const updateWishlistUI = () => {
    if (el.wishlistCountBadge) {
      el.wishlistCountBadge.textContent = state.wishlist.length;
    }
    if (el.spotlightWishlistBtn) {
      const isWishlisted = state.wishlist.includes(1);
      el.spotlightWishlistBtn.classList.toggle('is-active', isWishlisted);
      const svg = el.spotlightWishlistBtn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isWishlisted ? '#A8532B' : 'none');
    }
  };

  // --- 9. DRAWERS & MODALS LOGIC ---
  const openCartDrawer = () => {
    el.cartDrawer.classList.add('is-open');
    el.cartBackdrop.classList.add('is-active');
    el.cartDrawer.setAttribute('aria-hidden', 'false');
    el.cartDrawerToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    el.closeCartBtn.focus();
  };

  const closeCartDrawer = () => {
    el.cartDrawer.classList.remove('is-open');
    el.cartBackdrop.classList.remove('is-active');
    el.cartDrawer.setAttribute('aria-hidden', 'true');
    el.cartDrawerToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    el.cartDrawerToggle.focus();
  };

  const openMobileMenu = () => {
    el.mobileDrawer.classList.add('is-open');
    el.mobileDrawerBackdrop.classList.add('is-active');
    el.mobileDrawer.setAttribute('aria-hidden', 'false');
    el.mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    el.closeMobileMenuBtn.focus();
  };

  const closeMobileMenu = () => {
    el.mobileDrawer.classList.remove('is-open');
    el.mobileDrawerBackdrop.classList.remove('is-active');
    el.mobileDrawer.setAttribute('aria-hidden', 'true');
    el.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    el.mobileMenuBtn.focus();
  };

  // --- 10. PRODUCT DETAILS MODAL (QUICK-VIEW) ---
  const openProductModal = (productId) => {
    const product = PRODUCTS.find(p => p.id === Number(productId));
    if (!product) return;

    let selectedVariant = product.variants && product.variants.length > 0 ? product.variants[0] : 'Standard';

    const swatchesHtml = product.variants ? product.variants.map((v, i) => `
      <button type="button" class="swatch-btn ${i === 0 ? 'active' : ''}" data-modal-variant="${v}" style="background-color: ${getVariantColor(v)}" aria-label="${v}"></button>
    `).join('') : '';

    el.modalProductContent.innerHTML = `
      <div class="modal-product-grid">
        <div class="modal-gallery-col">
          <img src="${product.image}" alt="${product.title}" class="modal-main-img" onerror="this.onerror=null;this.src='${product.fallbackImage || 'assets/hero-advisory.jpg'}';">
        </div>
        <div class="modal-info-col">
          <div class="modal-category">${product.categoryLabel}</div>
          <h2 class="modal-title" id="modal-product-title">${product.title}</h2>
          
          <div class="spotlight-rating">
            <span class="stars">★★★★★</span>
            <span>${product.rating.toFixed(1)} (${product.reviewsCount} reviews)</span>
            <span class="dot">•</span>
            <span class="stock-status in-stock">In Stock &bull; Ready to Crate</span>
          </div>

          <div class="modal-price-row">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>

          <p class="modal-desc">${product.description}</p>

          <div class="modal-specs-list">
            <div><strong>Material:</strong> ${product.material}</div>
            <div><strong>Dimensions:</strong> ${product.dimensions}</div>
            <div><strong>Weight:</strong> ${product.weight}</div>
          </div>

          ${product.variants ? `
            <div class="option-group">
              <label class="option-label">Finish / Edition: <strong id="modal-selected-variant-label">${selectedVariant}</strong></label>
              <div class="swatch-group" id="modal-swatches-group">
                ${swatchesHtml}
              </div>
            </div>
          ` : ''}

          <div class="spotlight-action-row" style="margin-top: 0.5rem;">
            <div class="quantity-stepper">
              <button type="button" class="step-btn" id="modal-qty-minus" aria-label="Decrease quantity">&minus;</button>
              <input type="number" id="modal-qty-input" class="qty-input" value="1" min="1" max="10" aria-label="Quantity">
              <button type="button" class="step-btn" id="modal-qty-plus" aria-label="Increase quantity">&plus;</button>
            </div>

            <button type="button" class="btn btn-primary" id="modal-add-to-cart-btn" style="flex: 1;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>Add to Bag — ${formatPrice(product.price)}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // Hook Variant Swatches in Modal
    const swatches = el.modalProductContent.querySelectorAll('.swatch-btn[data-modal-variant]');
    const variantLabel = el.modalProductContent.getElementById('modal-selected-variant-label');
    swatches.forEach(btn => {
      btn.addEventListener('click', () => {
        swatches.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedVariant = btn.dataset.modalVariant;
        if (variantLabel) variantLabel.textContent = selectedVariant;
      });
    });

    // Hook Quantity Steppers in Modal
    const modalQtyInput = el.modalProductContent.querySelector('#modal-qty-input');
    const modalQtyMinus = el.modalProductContent.querySelector('#modal-qty-minus');
    const modalQtyPlus = el.modalProductContent.querySelector('#modal-qty-plus');
    const modalAddBtn = el.modalProductContent.querySelector('#modal-add-to-cart-btn');

    if (modalQtyMinus && modalQtyInput) {
      modalQtyMinus.addEventListener('click', () => {
        let val = parseInt(modalQtyInput.value, 10) || 1;
        if (val > 1) modalQtyInput.value = val - 1;
      });
    }
    if (modalQtyPlus && modalQtyInput) {
      modalQtyPlus.addEventListener('click', () => {
        let val = parseInt(modalQtyInput.value, 10) || 1;
        if (val < 10) modalQtyInput.value = val + 1;
      });
    }
    if (modalAddBtn) {
      modalAddBtn.addEventListener('click', () => {
        const qty = parseInt(modalQtyInput ? modalQtyInput.value : 1, 10) || 1;
        addToCart(product.id, qty, selectedVariant);
        closeProductModal();
      });
    }

    el.productModal.classList.add('is-open');
    el.productModalBackdrop.classList.add('is-active');
    el.productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    el.closeProductModalBtn.focus();
  };

  const closeProductModal = () => {
    el.productModal.classList.remove('is-open');
    el.productModalBackdrop.classList.remove('is-active');
    el.productModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const getVariantColor = (name) => {
    const map = {
      'Smoked Walnut': '#3b281c',
      'Natural White Oak': '#cbb493',
      'Ebonized Ash': '#1a1a1a',
      'Aged Brass': '#c59b27',
      'Brushed Bronze': '#6e472a',
      'Matte Obsidian': '#1e201e',
      'Volcanic Ash': '#736d67',
      'Unglazed Terracotta': '#a8532b',
      'Smoked Bone': '#e0ded8',
      'Espresso Brown': '#2b1f1d',
      'Cognac Tan': '#a8532b',
      'Obsidian Black': '#131514',
      'Cast Black / Brass': '#222',
      'Cast White / Nickel': '#e5e5e5',
      'Smoked Charcoal': '#444',
      'Amber Honey': '#d97706',
      'Clear Fluted': '#f3f4f6',
      'Oatmeal Sand': '#e8dfd3',
      'Muted Terracotta': '#b45309',
      'Deep Forest Pine': '#26382d',
      'Calacatta Gold': '#eae8e4',
      'Nero Marquina Black': '#1c1c1c',
      'Charcoal Slate': '#333a38',
      'Natural Raw Linen': '#d6cfc2',
      'Terracotta Earth': '#a8532b',
      'Smoked Dark Oak': '#2c221a'
    };
    return map[name] || '#888';
  };

  // --- 11. CHECKOUT MODAL FLOW ---
  const openCheckoutModal = () => {
    if (state.cart.length === 0) {
      showToast('Your bag is currently empty.', null);
      return;
    }

    closeCartDrawer();
    const { subtotal, discount, shipping, total } = calculateCartTotals();
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    el.checkoutItemCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    el.checkoutFinalTotal.textContent = formatPrice(total);

    el.checkoutItemsPreview.innerHTML = state.cart.map(item => `
      <div style="display: flex; justify-content: space-between;">
        <span>${item.quantity}× ${item.title} (${item.variant})</span>
        <span>${formatPrice(item.price * item.quantity)}</span>
      </div>
    `).join('');

    el.checkoutStepForm.hidden = false;
    el.checkoutStepSuccess.hidden = true;
    el.checkoutFeedback.textContent = '';

    el.checkoutModal.classList.add('is-open');
    el.checkoutModalBackdrop.classList.add('is-active');
    el.checkoutModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    el.closeCheckoutBtn.focus();
  };

  const closeCheckoutModal = () => {
    el.checkoutModal.classList.remove('is-open');
    el.checkoutModalBackdrop.classList.remove('is-active');
    el.checkoutModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  // --- 12. EVENT LISTENERS & DELEGATION ---

  // Global Click Delegation
  document.addEventListener('click', (e) => {
    const target = e.target;

    // Quick Add Button
    const quickAddBtn = target.closest('[data-action="quick-add"]');
    if (quickAddBtn) {
      e.preventDefault();
      const productId = quickAddBtn.dataset.productId;
      addToCart(productId, 1);
      return;
    }

    // Quick View Button
    const quickViewBtn = target.closest('[data-action="quick-view"]');
    if (quickViewBtn) {
      e.preventDefault();
      const productId = quickViewBtn.dataset.productId;
      openProductModal(productId);
      return;
    }

    // Wishlist Toggle
    const wishlistBtn = target.closest('[data-action="toggle-wishlist"]');
    if (wishlistBtn) {
      e.preventDefault();
      const productId = wishlistBtn.dataset.productId;
      toggleWishlist(productId);
      return;
    }

    // Cart Quantity Actions
    const cartMinusBtn = target.closest('[data-action="cart-minus"]');
    if (cartMinusBtn) {
      e.preventDefault();
      updateCartItemQuantity(cartMinusBtn.dataset.itemId, -1);
      return;
    }
    const cartPlusBtn = target.closest('[data-action="cart-plus"]');
    if (cartPlusBtn) {
      e.preventDefault();
      updateCartItemQuantity(cartPlusBtn.dataset.itemId, 1);
      return;
    }
    const cartRemoveBtn = target.closest('[data-action="cart-remove"]');
    if (cartRemoveBtn) {
      e.preventDefault();
      removeCartItem(cartRemoveBtn.dataset.itemId);
      return;
    }

    // Filter Chip Removal
    const filterChipRemove = target.closest('.filter-chip-remove');
    if (filterChipRemove) {
      const idx = filterChipRemove.dataset.chipIndex;
      if (state.currentCategory !== 'all' && idx === '0') {
        setCategoryFilter('all');
      } else {
        state.searchQuery = '';
        if (el.catalogSearchInput) el.catalogSearchInput.value = '';
        if (el.globalSearchInput) el.globalSearchInput.value = '';
        renderCatalog();
      }
      return;
    }

    // Category Links in Header/Footer/Drawer
    const catLink = target.closest('a[data-category]');
    if (catLink) {
      e.preventDefault();
      const category = catLink.dataset.category;
      setCategoryFilter(category);
      closeMobileMenu();
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  });

  // Category Tabs Switcher
  const setCategoryFilter = (category) => {
    state.currentCategory = category;

    el.categoryTabs.forEach(tab => {
      const isSelected = tab.dataset.category === category;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    el.desktopNavLinks.forEach(link => {
      if (link.dataset.category) {
        link.classList.toggle('active', link.dataset.category === category);
      }
    });

    el.mobileNavLinks.forEach(link => {
      if (link.dataset.category) {
        link.classList.toggle('active', link.dataset.category === category);
      }
    });

    renderCatalog();
  };

  el.categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setCategoryFilter(tab.dataset.category);
    });
  });

  // Search in Catalog Toolbar
  if (el.catalogSearchInput) {
    el.catalogSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (el.catalogClearSearch) el.catalogClearSearch.hidden = !state.searchQuery;
      renderCatalog();
    });
  }
  if (el.catalogClearSearch) {
    el.catalogClearSearch.addEventListener('click', () => {
      state.searchQuery = '';
      el.catalogSearchInput.value = '';
      el.catalogClearSearch.hidden = true;
      renderCatalog();
    });
  }

  // Sorting
  if (el.catalogSort) {
    el.catalogSort.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Reset Filter Buttons
  if (el.btnClearFilters) {
    el.btnClearFilters.addEventListener('click', () => {
      state.searchQuery = '';
      if (el.catalogSearchInput) el.catalogSearchInput.value = '';
      if (el.globalSearchInput) el.globalSearchInput.value = '';
      setCategoryFilter('all');
    });
  }
  if (el.btnResetEmptySearch) {
    el.btnResetEmptySearch.addEventListener('click', () => {
      state.searchQuery = '';
      if (el.catalogSearchInput) el.catalogSearchInput.value = '';
      if (el.globalSearchInput) el.globalSearchInput.value = '';
      setCategoryFilter('all');
    });
  }

  // Header Expandable Search Bar
  if (el.searchToggleBtn) {
    el.searchToggleBtn.addEventListener('click', () => {
      const isHidden = el.headerSearchBar.hidden;
      el.headerSearchBar.hidden = !isHidden;
      el.searchToggleBtn.setAttribute('aria-expanded', String(isHidden));
      if (isHidden) {
        el.globalSearchInput.focus();
      }
    });
  }
  if (el.closeSearchBtn) {
    el.closeSearchBtn.addEventListener('click', () => {
      el.headerSearchBar.hidden = true;
      el.searchToggleBtn.setAttribute('aria-expanded', 'false');
      el.searchToggleBtn.focus();
    });
  }
  if (el.globalSearchInput) {
    el.globalSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (el.catalogSearchInput) el.catalogSearchInput.value = e.target.value;
      if (el.clearSearchBtn) el.clearSearchBtn.hidden = !e.target.value;
      renderCatalog();
    });
  }
  if (el.clearSearchBtn) {
    el.clearSearchBtn.addEventListener('click', () => {
      el.globalSearchInput.value = '';
      state.searchQuery = '';
      if (el.catalogSearchInput) el.catalogSearchInput.value = '';
      el.clearSearchBtn.hidden = true;
      renderCatalog();
      el.globalSearchInput.focus();
    });
  }
  if (el.searchSuggestions) {
    el.searchSuggestions.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const term = chip.dataset.search;
        el.globalSearchInput.value = term;
        if (el.catalogSearchInput) el.catalogSearchInput.value = term;
        state.searchQuery = term;
        renderCatalog();
        const catalogEl = document.getElementById('catalog');
        if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // Promo Code Application
  if (el.btnApplyPromo) {
    el.btnApplyPromo.addEventListener('click', () => {
      const code = el.promoInput.value.trim().toUpperCase();
      if (!code) {
        el.promoFeedback.className = 'promo-feedback error';
        el.promoFeedback.textContent = 'Please enter a promo code.';
        return;
      }

      if (PROMO_CODES[code]) {
        state.appliedPromo = { code, ...PROMO_CODES[code] };
        el.promoFeedback.className = 'promo-feedback success';
        el.promoFeedback.textContent = `Applied! ${PROMO_CODES[code].label}`;
        updateCartUI();
      } else {
        el.promoFeedback.className = 'promo-feedback error';
        el.promoFeedback.textContent = 'Invalid promo code. Try MERIDIAN10.';
      }
    });
  }

  // Spotlight Interactive Logic
  let spotlightSelectedFinish = 'Smoked Walnut';
  let spotlightSelectedLeather = 'Cognac Bridle';

  el.spotlightFinishSwatches.forEach(btn => {
    btn.addEventListener('click', () => {
      el.spotlightFinishSwatches.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      spotlightSelectedFinish = btn.dataset.finish;
      if (el.spotlightFinishText) el.spotlightFinishText.textContent = spotlightSelectedFinish;
    });
  });

  el.spotlightLeatherSwatches.forEach(btn => {
    btn.addEventListener('click', () => {
      el.spotlightLeatherSwatches.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      spotlightSelectedLeather = btn.dataset.leather;
      if (el.spotlightLeatherText) el.spotlightLeatherText.textContent = spotlightSelectedLeather;
    });
  });

  if (el.spotlightQtyMinus && el.spotlightQtyInput) {
    el.spotlightQtyMinus.addEventListener('click', () => {
      let val = parseInt(el.spotlightQtyInput.value, 10) || 1;
      if (val > 1) el.spotlightQtyInput.value = val - 1;
    });
  }
  if (el.spotlightQtyPlus && el.spotlightQtyInput) {
    el.spotlightQtyPlus.addEventListener('click', () => {
      let val = parseInt(el.spotlightQtyInput.value, 10) || 1;
      if (val < 5) el.spotlightQtyInput.value = val + 1;
    });
  }
  if (el.spotlightAddBtn) {
    el.spotlightAddBtn.addEventListener('click', () => {
      const qty = parseInt(el.spotlightQtyInput ? el.spotlightQtyInput.value : 1, 10) || 1;
      const variant = `${spotlightSelectedFinish} / ${spotlightSelectedLeather}`;
      addToCart(1, qty, variant);
    });
  }
  if (el.spotlightWishlistBtn) {
    el.spotlightWishlistBtn.addEventListener('click', () => toggleWishlist(1));
  }
  if (el.heroQuickViewBtn) {
    el.heroQuickViewBtn.addEventListener('click', () => openProductModal(1));
  }

  // Drawer / Modal Triggers & Controls
  if (el.cartDrawerToggle) el.cartDrawerToggle.addEventListener('click', openCartDrawer);
  if (el.closeCartBtn) el.closeCartBtn.addEventListener('click', closeCartDrawer);
  if (el.cartBackdrop) el.cartBackdrop.addEventListener('click', closeCartDrawer);

  if (el.mobileMenuBtn) el.mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (el.closeMobileMenuBtn) el.closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (el.mobileDrawerBackdrop) el.mobileDrawerBackdrop.addEventListener('click', closeMobileMenu);

  if (el.closeProductModalBtn) el.closeProductModalBtn.addEventListener('click', closeProductModal);
  if (el.productModalBackdrop) el.productModalBackdrop.addEventListener('click', closeProductModal);

  if (el.btnCheckout) el.btnCheckout.addEventListener('click', openCheckoutModal);
  if (el.closeCheckoutBtn) el.closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
  if (el.checkoutModalBackdrop) el.checkoutModalBackdrop.addEventListener('click', closeCheckoutModal);

  if (el.btnDoneShopping) {
    el.btnDoneShopping.addEventListener('click', () => {
      closeCheckoutModal();
      const catEl = document.getElementById('catalog');
      if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Checkout Form Submission
  if (el.checkoutForm) {
    el.checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fname = document.getElementById('co-firstname').value.trim();
      const lname = document.getElementById('co-lastname').value.trim();
      const email = document.getElementById('co-email').value.trim();
      const addr = document.getElementById('co-address').value.trim();
      const city = document.getElementById('co-city').value.trim();
      const postal = document.getElementById('co-postal').value.trim();

      if (!fname || !lname || !email || !addr || !city || !postal) {
        el.checkoutFeedback.textContent = 'Please fill out all required shipping fields.';
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        el.checkoutFeedback.textContent = 'Please provide a valid email address.';
        return;
      }

      // Order Success simulation
      const randomOrderNum = `MH-${Math.floor(100000 + Math.random() * 900000)}`;
      el.confirmedOrderId.textContent = randomOrderNum;
      el.confirmedEmail.textContent = email;

      el.checkoutStepForm.hidden = true;
      el.checkoutStepSuccess.hidden = false;

      // Clear Cart
      state.cart = [];
      state.appliedPromo = null;
      updateCartUI();
    });
  }

  // Newsletter Form
  if (el.newsletterForm) {
    el.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = el.newsletterEmail.value.trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        el.newsletterFeedback.className = 'form-feedback error';
        el.newsletterFeedback.textContent = 'Please enter a valid email address.';
        return;
      }

      el.newsletterFeedback.className = 'form-feedback success';
      el.newsletterFeedback.textContent = 'Invitation confirmed. Welcome to the Meridian & Holt Atelier Club.';
      el.newsletterEmail.value = '';
    });
  }

  // Keyboard Escape Handler & Global Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (el.checkoutModal && el.checkoutModal.classList.contains('is-open')) {
        closeCheckoutModal();
      } else if (el.productModal && el.productModal.classList.contains('is-open')) {
        closeProductModal();
      } else if (el.cartDrawer && el.cartDrawer.classList.contains('is-open')) {
        closeCartDrawer();
      } else if (el.mobileDrawer && el.mobileDrawer.classList.contains('is-open')) {
        closeMobileMenu();
      } else if (el.headerSearchBar && !el.headerSearchBar.hidden) {
        el.headerSearchBar.hidden = true;
        el.searchToggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Sticky Header Scroll Detection
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      el.siteHeader.classList.add('is-scrolled');
    } else {
      el.siteHeader.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // --- 13. INITIALIZATION ---
  renderCatalog();
  updateCartUI();
  updateWishlistUI();
});
