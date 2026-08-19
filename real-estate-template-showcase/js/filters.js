/**
 * PROPERTY FILTERS, SEARCH & RENDERING ENGINE
 * SQ Studio Real Estate Website Template Showcase
 */

const PropertyEngine = {
  currentTemplate: 'all',
  activeFilters: {
    keyword: '',
    type: 'all',
    purpose: 'all',
    beds: 'all',
    baths: 'all',
    minPrice: 0,
    maxPrice: Infinity,
    sortBy: 'featured'
  },

  init(templateName = 'all') {
    this.currentTemplate = templateName;
    this.setupListeners();
    this.applyFiltersAndRender();
  },

  renderPropertyCard(prop) {
    const isFav = typeof FavoritesManager !== 'undefined' ? FavoritesManager.isFavorite(prop.id) : false;
    const isComp = typeof ComparisonManager !== 'undefined' ? ComparisonManager.getComparisonList().includes(prop.id) : false;

    return `
      <article class="property-card" data-id="${prop.id}">
        <div class="property-media">
          <img src="${prop.images[0]}" alt="${prop.title}" loading="lazy">
          <div class="property-card-badges">
            <span class="badge ${prop.badgeType || 'badge-sale'}">${prop.status}</span>
            ${prop.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
          </div>
          <div class="property-card-actions">
            <button class="property-action-btn ${isFav ? 'is-favorited' : ''}" 
                    data-action="toggle-fav" 
                    data-id="${prop.id}" 
                    data-title="${prop.title}" 
                    title="Save to favorites"
                    aria-label="Save ${prop.title} to favorites">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            ${this.currentTemplate === 'listing' ? `
              <button class="property-action-btn ${isComp ? 'is-compared' : ''}" 
                      data-action="toggle-compare" 
                      data-id="${prop.id}" 
                      title="Compare property"
                      aria-label="Compare ${prop.title}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
              </button>
            ` : ''}
          </div>
          <div class="property-card-price-overlay">
            ${prop.priceFormatted}
          </div>
        </div>

        <div class="property-content">
          <span class="property-type-tag">${prop.type}</span>
          <h3 class="property-title">
            <a href="#" data-action="view-details" data-id="${prop.id}">${prop.title}</a>
          </h3>
          <div class="property-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${prop.location}</span>
          </div>

          <div class="property-meta-row">
            ${prop.beds !== undefined && prop.beds !== null && prop.beds > 0 ? `
              <div class="property-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M21 11H3"/><path d="M7 7v4"/><path d="M17 7v4"/></svg>
                <span>${prop.beds} Beds</span>
              </div>
            ` : ''}
            ${prop.baths !== undefined && prop.baths !== null && prop.baths > 0 ? `
              <div class="property-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0 1.5 1.5 0 0 0 0 2.12L6.88 8.12"/><path d="M2 13h20"/><path d="M4 13v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4"/></svg>
                <span>${prop.baths} Baths</span>
              </div>
            ` : ''}
            <div class="property-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <span>${prop.sqft ? prop.sqft.toLocaleString() : '—'} sq.ft</span>
            </div>
          </div>

          <div class="property-card-footer">
            ${prop.agent ? `
              <div class="property-agent-chip">
                <img src="${prop.agent.photo}" alt="${prop.agent.name}" class="property-agent-avatar">
                <span class="property-agent-name">${prop.agent.name}</span>
              </div>
            ` : '<div></div>'}
            <button class="btn btn-sm btn-primary" data-action="view-details" data-id="${prop.id}">View Details</button>
          </div>
        </div>
      </article>
    `;
  },

  applyFiltersAndRender() {
    const container = document.getElementById('propertiesGrid');
    if (!container) return;

    let list = typeof getAllProperties === 'function' ? getAllProperties() : [];

    // Filter by template context
    if (this.currentTemplate !== 'all') {
      list = list.filter(p => p.template === this.currentTemplate);
    }

    // Filter by keyword (Search)
    if (this.activeFilters.keyword) {
      const q = this.activeFilters.keyword.toLowerCase().trim();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.amenities && p.amenities.some(a => a.toLowerCase().includes(q)))
      );
    }

    // Filter by Type
    if (this.activeFilters.type && this.activeFilters.type !== 'all') {
      list = list.filter(p => p.type.toLowerCase() === this.activeFilters.type.toLowerCase());
    }

    // Filter by Purpose
    if (this.activeFilters.purpose && this.activeFilters.purpose !== 'all') {
      list = list.filter(p => p.purpose.toLowerCase() === this.activeFilters.purpose.toLowerCase());
    }

    // Filter by Beds
    if (this.activeFilters.beds && this.activeFilters.beds !== 'all') {
      const minBeds = parseInt(this.activeFilters.beds, 10);
      list = list.filter(p => p.beds >= minBeds);
    }

    // Filter by Baths
    if (this.activeFilters.baths && this.activeFilters.baths !== 'all') {
      const minBaths = parseFloat(this.activeFilters.baths);
      list = list.filter(p => p.baths >= minBaths);
    }

    // Filter by Price
    if (this.activeFilters.minPrice > 0) {
      list = list.filter(p => p.price >= this.activeFilters.minPrice);
    }
    if (this.activeFilters.maxPrice < Infinity) {
      list = list.filter(p => p.price <= this.activeFilters.maxPrice);
    }

    // Sorting
    if (this.activeFilters.sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.activeFilters.sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.activeFilters.sortBy === 'sqft-high') {
      list.sort((a, b) => (b.sqft || 0) - (a.sqft || 0));
    } else if (this.activeFilters.sortBy === 'newest') {
      list.sort((a, b) => ((b.specs && b.specs.yearBuilt) || 0) - ((a.specs && a.specs.yearBuilt) || 0));
    }

    // Update Results Count Label
    const countLabels = document.querySelectorAll('.results-count-label, #resultsCount');
    countLabels.forEach(lbl => {
      lbl.textContent = `Showing ${list.length} ${list.length === 1 ? 'property' : 'properties'}`;
    });

    // Render cards
    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #f8fafc; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" style="margin: 0 auto 16px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No matching properties found</h3>
          <p style="color: #64748b; margin-bottom: 20px;">Try adjusting your search criteria or resetting filters.</p>
          <button class="btn btn-primary btn-sm" id="btnResetSearchFilters">Reset All Filters</button>
        </div>
      `;

      const resetBtn = container.querySelector('#btnResetSearchFilters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => this.resetFilters());
      }
    } else {
      container.innerHTML = list.map(p => this.renderPropertyCard(p)).join('');
    }

    if (typeof FavoritesManager !== 'undefined') FavoritesManager.updateUI();
    if (typeof ComparisonManager !== 'undefined') ComparisonManager.updateUI();
  },

  resetFilters() {
    this.activeFilters = {
      keyword: '',
      type: 'all',
      purpose: 'all',
      beds: 'all',
      baths: 'all',
      minPrice: 0,
      maxPrice: Infinity,
      sortBy: 'featured'
    };

    // Reset inputs in DOM
    const searchInputs = document.querySelectorAll('.search-input, #propertySearchInput, #heroSearchInput');
    searchInputs.forEach(inp => inp.value = '');

    const selects = document.querySelectorAll('.filter-select, select[data-filter]');
    selects.forEach(sel => sel.selectedIndex = 0);

    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      if (p.getAttribute('data-value') === 'all' || p.getAttribute('data-type') === 'all') {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    this.applyFiltersAndRender();
    if (typeof showToast === 'function') {
      showToast('Filters reset to default', 'info');
    }
  },

  setupListeners() {
    // Search input listener
    const searchInputs = document.querySelectorAll('.search-input, #propertySearchInput, #heroSearchInput');
    searchInputs.forEach(inp => {
      inp.addEventListener('input', (e) => {
        this.activeFilters.keyword = e.target.value;
        this.applyFiltersAndRender();
      });
    });

    // Filter pills (e.g., categories or types)
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filterType = pill.getAttribute('data-filter') || 'type';
        const val = pill.getAttribute('data-value') || pill.getAttribute('data-type') || 'all';
        this.activeFilters[filterType] = val;
        this.applyFiltersAndRender();
      });
    });

    // Select dropdown filters
    const selects = document.querySelectorAll('select[data-filter]');
    selects.forEach(sel => {
      sel.addEventListener('change', (e) => {
        const filterKey = sel.getAttribute('data-filter');
        this.activeFilters[filterKey] = e.target.value;
        this.applyFiltersAndRender();
      });
    });

    // Sort select
    const sortSelect = document.getElementById('sortBySelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.activeFilters.sortBy = e.target.value;
        this.applyFiltersAndRender();
      });
    }

    // Hero search form submit
    const heroSearchForm = document.getElementById('heroSearchForm');
    if (heroSearchForm) {
      heroSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const kw = heroSearchForm.querySelector('input[type="text"]');
        const typeSel = heroSearchForm.querySelector('select[name="type"]');
        const locSel = heroSearchForm.querySelector('select[name="location"]');
        const purpSel = heroSearchForm.querySelector('select[name="purpose"]');

        if (kw) this.activeFilters.keyword = kw.value;
        if (typeSel && typeSel.value) this.activeFilters.type = typeSel.value;
        if (purpSel && purpSel.value) this.activeFilters.purpose = purpSel.value;

        this.applyFiltersAndRender();

        const gridEl = document.getElementById('propertiesGrid') || document.getElementById('listings');
        if (gridEl) {
          gridEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
};
