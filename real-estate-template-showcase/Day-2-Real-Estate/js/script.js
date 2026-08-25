/**
 * VERA LUXURY ESTATES - Main JavaScript Controller
 * Pure Vanilla ES6+ - Zero Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFavoritesSystem();
  initIntersectionAnimations();
  initStatsCounter();
  initBackToTop();
  initFaqAccordion();
  initFormsValidation();
  initModals();

  // Page Specific Controllers
  if (document.getElementById('home-properties-grid')) {
    initHomePage();
  }
  if (document.getElementById('properties-catalog-grid')) {
    initPropertiesCatalogPage();
  }
  if (document.getElementById('property-details-container')) {
    initPropertyDetailsPage();
  }
  if (document.getElementById('agents-page-grid')) {
    initAgentsPage();
  }
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER CONTROLLER
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const drawerClose = document.querySelector('.mobile-drawer-close');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Drawer Toggle
  function openDrawer() {
    hamburger?.classList.add('open');
    drawer?.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    hamburger?.classList.remove('open');
    drawer?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  backdrop?.addEventListener('click', closeDrawer);
  drawerClose?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Mark Active Nav Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   2. FAVORITES MANAGEMENT (LOCAL STORAGE)
   ========================================================================== */
function getFavorites() {
  try {
    const favs = localStorage.getItem('vera_luxury_favorites');
    return favs ? JSON.parse(favs) : [1, 2]; // Defaults for nice demo
  } catch (e) {
    return [1, 2];
  }
}

function saveFavorites(favs) {
  try {
    localStorage.setItem('vera_luxury_favorites', JSON.stringify(favs));
  } catch (e) {
    console.error('Storage error', e);
  }
  updateFavoritesCountBadge();
}

function toggleFavorite(propertyId) {
  let favs = getFavorites();
  const id = parseInt(propertyId, 10);
  const exists = favs.includes(id);

  if (exists) {
    favs = favs.filter(item => item !== id);
    showToast('Removed from Favorites', 'Property removed from your saved collection.');
  } else {
    favs.push(id);
    showToast('Saved to Favorites', 'Property added to your private collection.');
  }
  saveFavorites(favs);

  // Update UI Heart Buttons everywhere
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(btn => {
    if (exists) {
      btn.classList.remove('active');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    } else {
      btn.classList.add('active');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#EF4444" stroke="#EF4444" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    }
  });
}

function updateFavoritesCountBadge() {
  const count = getFavorites().length;
  document.querySelectorAll('.favorites-count').forEach(el => {
    el.textContent = count;
  });
}

function initFavoritesSystem() {
  updateFavoritesCountBadge();

  // Global event delegation for favorite buttons
  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = favBtn.getAttribute('data-id');
      toggleFavorite(id);
    }

    const favTrigger = e.target.closest('#favorites-nav-trigger');
    if (favTrigger) {
      e.preventDefault();
      window.location.href = 'properties.html?filter=favorites';
    }
  });
}

/* ==========================================================================
   3. PROPERTY CARD TEMPLATE GENERATOR
   ========================================================================== */
function renderPropertyCardHTML(prop) {
  const isFav = getFavorites().includes(prop.id);
  const heartFill = isFav ? '#EF4444' : 'none';
  const heartStroke = isFav ? '#EF4444' : 'currentColor';
  const activeClass = isFav ? 'active' : '';

  return `
    <article class="property-card fade-in-up">
      <div class="property-media">
        <img src="${prop.mainImage}" alt="${prop.title}" loading="lazy">
        <div class="property-badges-wrap">
          <span class="badge badge-${prop.badgeType || 'featured'}">${prop.badge || 'Exclusive'}</span>
          <span class="badge badge-sale">${prop.status}</span>
        </div>
        <button class="property-favorite-btn fav-btn ${activeClass}" data-id="${prop.id}" aria-label="Save ${prop.title} to favorites">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${heartFill}" stroke="${heartStroke}" stroke-width="2.2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div class="property-price-tag">${prop.formattedPrice}</div>
      </div>
      
      <div class="property-body">
        <span class="property-type-tag">${prop.typeName}</span>
        <h3 class="property-title">
          <a href="property-details.html?id=${prop.id}">${prop.title}</a>
        </h3>
        <div class="property-location">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${prop.location}</span>
        </div>

        <div class="property-specs-bar">
          <div class="spec-item" title="${prop.beds} Bedrooms">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
            <span>${prop.beds} Beds</span>
          </div>
          <div class="spec-item" title="${prop.baths} Bathrooms">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.7 2.5 4 3.2 4 4.5V7"/><path d="M4 11h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z"/><path d="m5 19-1 3"/><path d="m19 19 1 3"/></svg>
            <span>${prop.baths} Baths</span>
          </div>
          <div class="spec-item" title="${prop.sqft.toLocaleString()} Square Feet">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            <span>${prop.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <div class="property-footer">
          <a href="property-details.html?id=${prop.id}" class="btn btn-sm btn-outline-dark">
            <span>View Details</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
          <button class="btn btn-sm btn-gold quick-inquiry-btn" data-id="${prop.id}" data-title="${prop.title}">
            Inquire
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   4. HOMEPAGE CONTROLLER
   ========================================================================== */
function initHomePage() {
  const container = document.getElementById('home-properties-grid');
  const featuredContainer = document.getElementById('home-featured-grid');
  const heroSearchForm = document.getElementById('hero-search-form');
  const filterPills = document.querySelectorAll('.home-filter-pill');

  // Render 6 Properties for Home
  function renderHomeProperties(category = 'all') {
    if (!container || !window.VERA_DATA) return;
    
    let list = window.VERA_DATA.properties;
    if (category !== 'all') {
      list = list.filter(p => p.type === category);
    }
    
    container.innerHTML = list.slice(0, 6).map(renderPropertyCardHTML).join('');
    initIntersectionAnimations();
  }

  renderHomeProperties('all');

  // Filter Pills Event
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-filter');
      renderHomeProperties(cat);
    });
  });

  // Render Featured Properties
  if (featuredContainer && window.VERA_DATA) {
    const featuredList = window.VERA_DATA.properties.filter(p => p.featured).slice(0, 3);
    featuredContainer.innerHTML = featuredList.map(prop => `
      <div class="featured-card fade-in-up">
        <div class="featured-media">
          <img src="${prop.mainImage}" alt="${prop.title}" loading="lazy">
          <div class="property-badges-wrap">
            <span class="badge badge-featured">Featured Spotlight</span>
            <span class="badge badge-sale">${prop.status}</span>
          </div>
          <div class="property-price-tag">${prop.formattedPrice}</div>
        </div>
        <div class="featured-body">
          <span class="property-type-tag" style="color: var(--color-gold);">${prop.typeName}</span>
          <h3 class="featured-title">
            <a href="property-details.html?id=${prop.id}" style="color: #FFFFFF;">${prop.title}</a>
          </h3>
          <div class="property-location" style="color: #94A3B8;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${prop.location}</span>
          </div>
          <p class="featured-desc">${prop.description}</p>
          <div class="property-specs-bar" style="border-color: rgba(255,255,255,0.1); color: #CBD5E1;">
            <div class="spec-item"><span style="color: #FFFFFF; font-weight:700;">${prop.beds}</span> Beds</div>
            <div class="spec-item"><span style="color: #FFFFFF; font-weight:700;">${prop.baths}</span> Baths</div>
            <div class="spec-item"><span style="color: #FFFFFF; font-weight:700;">${prop.sqft.toLocaleString()}</span> sqft</div>
          </div>
          <div class="property-footer" style="margin-top: 20px;">
            <a href="property-details.html?id=${prop.id}" class="btn btn-gold btn-sm">
              <span>Explore Residence</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <button class="property-favorite-btn fav-btn ${getFavorites().includes(prop.id) ? 'active' : ''}" data-id="${prop.id}" style="position: static;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${getFavorites().includes(prop.id) ? '#EF4444' : 'none'}" stroke="${getFavorites().includes(prop.id) ? '#EF4444' : 'currentColor'}" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Hero Search Form Handler
  heroSearchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = document.getElementById('search-location')?.value || '';
    const type = document.getElementById('search-type')?.value || '';
    const price = document.getElementById('search-price')?.value || '';
    const beds = document.getElementById('search-beds')?.value || '';

    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (type) params.set('type', type);
    if (price) params.set('price', price);
    if (beds) params.set('beds', beds);

    window.location.href = `properties.html?${params.toString()}`;
  });
}

/* ==========================================================================
   5. PROPERTIES CATALOG & SEARCH PAGE CONTROLLER
   ========================================================================== */
function initPropertiesCatalogPage() {
  const gridContainer = document.getElementById('properties-catalog-grid');
  const countBadge = document.getElementById('catalog-results-count');
  const searchInput = document.getElementById('catalog-search-input');
  const typeFilter = document.getElementById('catalog-type-filter');
  const statusFilter = document.getElementById('catalog-status-filter');
  const sortSelect = document.getElementById('catalog-sort-select');
  const priceSlider = document.getElementById('catalog-price-slider');
  const priceOutput = document.getElementById('catalog-price-output');
  const resetBtn = document.getElementById('catalog-reset-btn');

  // Check URL Params
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('location') && searchInput) {
    searchInput.value = urlParams.get('location');
  }
  if (urlParams.get('type') && typeFilter) {
    typeFilter.value = urlParams.get('type');
  }
  if (urlParams.get('filter') === 'favorites') {
    // Show Favorites Only
    const pageTitle = document.querySelector('.catalog-title');
    if (pageTitle) pageTitle.textContent = 'Your Saved Luxury Residences';
  }

  function filterAndRender() {
    if (!gridContainer || !window.VERA_DATA) return;

    let items = [...window.VERA_DATA.properties];

    // Favorites Filter Mode
    if (urlParams.get('filter') === 'favorites') {
      const favs = getFavorites();
      items = items.filter(p => favs.includes(p.id));
    }

    // Keyword Search
    const keyword = searchInput?.value.toLowerCase().trim();
    if (keyword) {
      items = items.filter(p => 
        p.title.toLowerCase().includes(keyword) ||
        p.location.toLowerCase().includes(keyword) ||
        p.address.toLowerCase().includes(keyword) ||
        p.description.toLowerCase().includes(keyword)
      );
    }

    // Property Type
    const selectedType = typeFilter?.value;
    if (selectedType && selectedType !== 'all') {
      items = items.filter(p => p.type === selectedType);
    }

    // Status
    const selectedStatus = statusFilter?.value;
    if (selectedStatus && selectedStatus !== 'all') {
      items = items.filter(p => p.status === selectedStatus);
    }

    // Max Price
    if (priceSlider) {
      const maxPrice = parseInt(priceSlider.value, 10);
      if (priceOutput) {
        priceOutput.textContent = maxPrice >= 50000000 ? 'Any Price' : `$${(maxPrice / 1000000).toFixed(1)}M`;
      }
      if (maxPrice < 50000000) {
        items = items.filter(p => p.price <= maxPrice);
      }
    }

    // Sorting
    const sortVal = sortSelect?.value || 'featured';
    if (sortVal === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'sqft-desc') {
      items.sort((a, b) => b.sqft - a.sqft);
    } else if (sortVal === 'newest') {
      items.sort((a, b) => b.yearBuilt - a.yearBuilt);
    }

    // Render Count
    if (countBadge) {
      countBadge.textContent = `${items.length} Properties Available`;
    }

    // Render Grid
    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="1.5" style="margin: 0 auto 16px;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <h3>No Matching Properties Found</h3>
          <p style="color: var(--color-text-muted); margin: 8px 0 20px;">Try adjusting your filters, location keyword, or price range.</p>
          <button class="btn btn-gold btn-sm" id="empty-reset-btn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', resetFilters);
    } else {
      gridContainer.innerHTML = items.map(renderPropertyCardHTML).join('');
      initIntersectionAnimations();
    }
  }

  function resetFilters() {
    if (searchInput) searchInput.value = '';
    if (typeFilter) typeFilter.value = 'all';
    if (statusFilter) statusFilter.value = 'all';
    if (sortSelect) sortSelect.value = 'featured';
    if (priceSlider) {
      priceSlider.value = 50000000;
      if (priceOutput) priceOutput.textContent = 'Any Price';
    }
    // Remove query params
    window.history.replaceState({}, document.title, window.location.pathname);
    filterAndRender();
  }

  // Listeners
  searchInput?.addEventListener('input', debounce(filterAndRender, 250));
  typeFilter?.addEventListener('change', filterAndRender);
  statusFilter?.addEventListener('change', filterAndRender);
  sortSelect?.addEventListener('change', filterAndRender);
  priceSlider?.addEventListener('input', filterAndRender);
  resetBtn?.addEventListener('click', resetFilters);

  // Initial Run
  filterAndRender();
}

/* ==========================================================================
   6. PROPERTY DETAILS PAGE CONTROLLER & GALLERY
   ========================================================================== */
function initPropertyDetailsPage() {
  if (!window.VERA_DATA) return;

  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = parseInt(urlParams.get('id'), 10) || 1; // Default to 1

  const prop = window.VERA_DATA.properties.find(p => p.id === propertyId) || window.VERA_DATA.properties[0];
  const agent = window.VERA_DATA.agents.find(a => a.id === prop.agentId) || window.VERA_DATA.agents[0];

  // Update Page Title
  document.title = `${prop.title} | Vera Luxury Estates`;

  // Render Header Details
  document.getElementById('detail-title').textContent = prop.title;
  document.getElementById('detail-location').textContent = `${prop.address}`;
  document.getElementById('detail-price').textContent = prop.formattedPrice;
  document.getElementById('detail-type-badge').textContent = prop.typeName;
  document.getElementById('detail-status-badge').textContent = prop.status;

  // Render Main Gallery Image & Thumbnails
  const mainImageEl = document.getElementById('detail-main-image');
  const thumbsContainer = document.getElementById('detail-thumbs-row');
  
  if (mainImageEl) {
    mainImageEl.src = prop.gallery[0];
    mainImageEl.alt = prop.title;
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = prop.gallery.map((imgUrl, idx) => `
      <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${imgUrl}" alt="${prop.title} photo ${idx + 1}" loading="lazy">
      </div>
    `).join('');

    // Thumbnail Click Event
    thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const index = parseInt(thumb.getAttribute('data-index'), 10);
        thumbsContainer.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImageEl) {
          mainImageEl.style.opacity = '0.5';
          setTimeout(() => {
            mainImageEl.src = prop.gallery[index];
            mainImageEl.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // Setup Lightbox Modal
  initLightbox(prop.gallery);

  // Overview Stats
  document.getElementById('detail-beds').textContent = prop.beds;
  document.getElementById('detail-baths').textContent = prop.baths;
  document.getElementById('detail-sqft').textContent = prop.sqft.toLocaleString();
  document.getElementById('detail-garages').textContent = prop.garages;
  document.getElementById('detail-year').textContent = prop.yearBuilt;

  // Description & Highlights
  document.getElementById('detail-description').textContent = prop.description;
  const highlightsEl = document.getElementById('detail-highlights');
  if (highlightsEl && prop.highlights) {
    highlightsEl.innerHTML = prop.highlights.map(h => `
      <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:10px; font-size:0.95rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" stroke-width="2.5" style="flex-shrink:0; margin-top:3px;"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${h}</span>
      </li>
    `).join('');
  }

  // Amenities Checklist
  const amenitiesEl = document.getElementById('detail-amenities-grid');
  if (amenitiesEl) {
    amenitiesEl.innerHTML = prop.amenities.map(item => `
      <div class="amenity-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // Floor Plans
  const floorPlansEl = document.getElementById('detail-floorplans-list');
  if (floorPlansEl && prop.floorPlans) {
    floorPlansEl.innerHTML = prop.floorPlans.map(fp => `
      <div class="floorplan-card">
        <div class="floorplan-header">
          <span>${fp.level}</span>
          <span style="color: var(--color-gold-dark);">${fp.size}</span>
        </div>
        <div class="floorplan-desc">${fp.desc}</div>
      </div>
    `).join('');
  }

  // Agent Card
  const agentPhoto = document.getElementById('detail-agent-photo');
  const agentName = document.getElementById('detail-agent-name');
  const agentRole = document.getElementById('detail-agent-role');
  const agentPhone = document.getElementById('detail-agent-phone');
  const agentEmail = document.getElementById('detail-agent-email');

  if (agentPhoto) agentPhoto.src = agent.image;
  if (agentName) agentName.textContent = agent.name;
  if (agentRole) agentRole.textContent = agent.role;
  if (agentPhone) {
    agentPhone.textContent = agent.phone;
    agentPhone.href = `tel:${agent.phone.replace(/\s+/g, '')}`;
  }
  if (agentEmail) {
    agentEmail.textContent = agent.email;
    agentEmail.href = `mailto:${agent.email}`;
  }

  // Auto-fill hidden input for inquiry modal
  const propertyTitleInput = document.getElementById('inquiry-property-input');
  if (propertyTitleInput) propertyTitleInput.value = prop.title;

  // Initialize Mortgage Calculator for this property
  initMortgageCalculator(prop.price);

  // Render Similar Properties
  const similarContainer = document.getElementById('similar-properties-grid');
  if (similarContainer) {
    const similar = window.VERA_DATA.properties.filter(p => p.id !== prop.id).slice(0, 3);
    similarContainer.innerHTML = similar.map(renderPropertyCardHTML).join('');
  }
}

/* ==========================================================================
   7. LIGHTBOX GALLERY
   ========================================================================== */
function initLightbox(imagesList) {
  const mainFrame = document.querySelector('.gallery-main-frame');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-active-img');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const closeBtn = document.querySelector('.lightbox-close');

  let activeIndex = 0;

  function showImage(index) {
    activeIndex = (index + imagesList.length) % imagesList.length;
    if (lightboxImg) lightboxImg.src = imagesList[activeIndex];
  }

  mainFrame?.addEventListener('click', () => {
    lightboxModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
    showImage(activeIndex);
  });

  closeBtn?.addEventListener('click', () => {
    lightboxModal?.classList.remove('open');
    document.body.style.overflow = '';
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(activeIndex - 1);
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(activeIndex + 1);
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal?.classList.contains('open')) return;
    if (e.key === 'Escape') {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
      showImage(activeIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showImage(activeIndex + 1);
    }
  });
}

/* ==========================================================================
   8. REAL-TIME MORTGAGE CALCULATOR
   ========================================================================== */
function initMortgageCalculator(defaultPrice = 14850000) {
  const priceSlider = document.getElementById('calc-price');
  const downSlider = document.getElementById('calc-downpayment');
  const termSlider = document.getElementById('calc-term');
  const rateSlider = document.getElementById('calc-rate');

  const priceLabel = document.getElementById('calc-price-val');
  const downLabel = document.getElementById('calc-down-val');
  const termLabel = document.getElementById('calc-term-val');
  const rateLabel = document.getElementById('calc-rate-val');

  const monthlyTotal = document.getElementById('calc-monthly-total');
  const principalTotal = document.getElementById('calc-pi-val');
  const taxTotal = document.getElementById('calc-tax-val');
  const insTotal = document.getElementById('calc-ins-val');

  if (priceSlider) priceSlider.value = defaultPrice;

  function calculate() {
    const homePrice = parseFloat(priceSlider?.value || defaultPrice);
    const downPercent = parseFloat(downSlider?.value || 20);
    const termYears = parseFloat(termSlider?.value || 30);
    const annualRate = parseFloat(rateSlider?.value || 6.25);

    // Update Labels
    if (priceLabel) priceLabel.textContent = `$${homePrice.toLocaleString()}`;
    if (downLabel) downLabel.textContent = `${downPercent}% ($${((homePrice * downPercent) / 100).toLocaleString()})`;
    if (termLabel) termLabel.textContent = `${termYears} Years`;
    if (rateLabel) rateLabel.textContent = `${annualRate.toFixed(2)}%`;

    const principal = homePrice * (1 - downPercent / 100);
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;

    let monthlyPI = 0;
    if (monthlyRate > 0) {
      monthlyPI = (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / 
                  (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthlyPI = principal / numberOfPayments;
    }

    const monthlyTax = (homePrice * 0.011) / 12; // ~1.1% property tax
    const monthlyIns = (homePrice * 0.0035) / 12; // ~0.35% insurance
    const totalMonthly = monthlyPI + monthlyTax + monthlyIns;

    if (monthlyTotal) monthlyTotal.textContent = `$${Math.round(totalMonthly).toLocaleString()}`;
    if (principalTotal) principalTotal.textContent = `$${Math.round(monthlyPI).toLocaleString()}`;
    if (taxTotal) taxTotal.textContent = `$${Math.round(monthlyTax).toLocaleString()}`;
    if (insTotal) insTotal.textContent = `$${Math.round(monthlyIns).toLocaleString()}`;
  }

  [priceSlider, downSlider, termSlider, rateSlider].forEach(slider => {
    slider?.addEventListener('input', calculate);
  });

  calculate();
}

/* ==========================================================================
   9. AGENTS DIRECTORY PAGE CONTROLLER
   ========================================================================== */
function initAgentsPage() {
  const container = document.getElementById('agents-page-grid');
  if (!container || !window.VERA_DATA) return;

  container.innerHTML = window.VERA_DATA.agents.map(agent => `
    <div class="agent-card fade-in-up">
      <div class="agent-photo-wrap">
        <img src="${agent.image}" alt="${agent.name}" loading="lazy">
      </div>
      <div class="agent-card-body">
        <h3 class="agent-name">${agent.name}</h3>
        <div class="agent-role">${agent.role}</div>
        <div class="agent-specialty">${agent.specialty}</div>
        <p style="font-size:0.88rem; color:var(--color-text-muted); line-height:1.6; margin-bottom:16px;">${agent.bio}</p>
        
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; color:var(--color-text-main); margin-bottom:16px; padding:10px 0; border-top:1px solid var(--color-border); border-bottom:1px solid var(--color-border);">
          <span>Volume: <strong style="color:var(--color-gold-dark);">${agent.salesVolume}</strong></span>
          <span>Exp: <strong>${agent.experience}</strong></span>
        </div>

        <div class="agent-contact-actions">
          <a href="tel:${agent.phone.replace(/\s+/g, '')}" class="agent-action-btn" title="Call ${agent.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <a href="mailto:${agent.email}" class="agent-action-btn" title="Email ${agent.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <button class="btn btn-sm btn-gold book-agent-btn" data-name="${agent.name}" style="flex-grow:1; margin-left:8px;">
            Consult
          </button>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.book-agent-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const modal = document.getElementById('consultation-modal');
      const nameInput = document.getElementById('consultation-agent-name');
      if (nameInput) nameInput.value = name;
      modal?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
}

/* ==========================================================================
   10. MODALS & INQUIRY POPUPS
   ========================================================================== */
function initModals() {
  const inquiryModal = document.getElementById('inquiry-modal');
  const consultationModal = document.getElementById('consultation-modal');

  // Trigger quick inquiry from property cards
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.quick-inquiry-btn');
    if (trigger) {
      const title = trigger.getAttribute('data-title') || 'Luxury Property';
      const input = document.getElementById('modal-inquiry-property');
      if (input) input.value = title;
      inquiryModal?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close modals on close button or backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn')) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(modal => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });
}

/* ==========================================================================
   11. FORM VALIDATION & NOTIFICATION TOAST
   ========================================================================== */
function showToast(title, message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

function initFormsValidation() {
  const forms = document.querySelectorAll('form[data-validate="true"]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate inputs
      const requiredInputs = form.querySelectorAll('[required]');
      requiredInputs.forEach(input => {
        const group = input.closest('.form-group') || input.parentElement;
        const val = input.value.trim();

        if (!val) {
          isValid = false;
          group.classList.add('has-error');
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          isValid = false;
          group.classList.add('has-error');
        } else {
          group.classList.remove('has-error');
        }
      });

      if (isValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
        
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>Processing...</span>`;
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }

          // Close any open modals
          document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
          document.body.style.overflow = '';

          // Show Toast Confirmation
          showToast('Inquiry Received', 'Thank you! A senior Vera Estates advisor will reach out to you within 2 hours.');
          form.reset();
        }, 800);
      }
    });
  });

  // Footer Newsletter
  const newsletterForm = document.getElementById('footer-newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('footer-newsletter-email');
    if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
      showToast('Subscribed to Private Catalog', 'You will receive our weekly exclusive off-market publications.');
      input.value = '';
    } else {
      showToast('Invalid Email', 'Please enter a valid email address.');
    }
  });
}

/* ==========================================================================
   12. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const c = other.querySelector('.accordion-content');
          if (c) c.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 40 + 'px';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
}

/* ==========================================================================
   13. STATS ANIMATED COUNTERS
   ========================================================================== */
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number[data-target]');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = target % 1 !== 0;

        let start = 0;
        const duration = 1800;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          el.textContent = `${prefix}${isDecimal ? start.toFixed(1) : Math.round(start).toLocaleString()}${suffix}`;
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   14. INTERSECTION OBSERVER ANIMATIONS & BACK TO TOP
   ========================================================================== */
function initIntersectionAnimations() {
  const animated = document.querySelectorAll('.fade-in-up:not(.appear)');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animated.forEach(el => observer.observe(el));
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Utility Debounce */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
