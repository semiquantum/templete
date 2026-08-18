/* ============================================================
   FILTERS, SEARCH & SORT ENGINE
   ============================================================ */

const ProductCatalog = (function() {
  let storeName = null;
  let allProducts = [];
  let currentCategory = 'All';
  let searchQuery = '';
  let maxPrice = 2000;
  let minRating = 0;
  let sortOption = 'default';
  let gridContainer = null;
  let countLabel = null;

  function init(store) {
    storeName = store;
    allProducts = getProductsByStore(store);
    gridContainer = document.getElementById('productsGrid') || document.querySelector('.products-grid');
    countLabel = document.getElementById('resultsCount') || document.querySelector('.results-count-label');

    initCategoryPills();
    initSearch();
    initPriceSlider();
    initSort();
    initQuickCartButtons();
    render();
  }

  function initCategoryPills() {
    const pills = document.querySelectorAll('.filter-pill[data-category]');
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.getAttribute('data-category');
        render();
      });
    });
  }

  function initSearch() {
    const searchInputs = document.querySelectorAll('.search-input, #searchInput');
    const searchDropdown = document.getElementById('searchDropdown');

    searchInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        render();

        // Autocomplete dropdown if present
        if (searchDropdown) {
          if (searchQuery.length >= 2) {
            const matches = allProducts.filter(p => 
              p.name.toLowerCase().includes(searchQuery) ||
              p.category.toLowerCase().includes(searchQuery)
            ).slice(0, 5);

            if (matches.length > 0) {
              searchDropdown.innerHTML = matches.map(p => `
                <div class="search-result-item" onclick="ProductModal.open('${p.id}')">
                  <img src="${p.image}" alt="${p.name}" class="search-result-thumb" />
                  <div class="search-result-details">
                    <h5>${p.name}</h5>
                    <span>$${p.price.toLocaleString()}</span>
                  </div>
                </div>
              `).join('');
              searchDropdown.classList.add('show');
            } else {
              searchDropdown.innerHTML = `<div style="padding:16px;text-align:center;color:var(--color-gray-500);font-size:0.85rem;">No matching products found</div>`;
              searchDropdown.classList.add('show');
            }
          } else {
            searchDropdown.classList.remove('show');
          }
        }
      });
    });

    // Close autocomplete on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container') && searchDropdown) {
        searchDropdown.classList.remove('show');
      }
    });

    // Clear search buttons
    document.querySelectorAll('.search-clear-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        searchInputs.forEach(i => i.value = '');
        searchQuery = '';
        if (searchDropdown) searchDropdown.classList.remove('show');
        render();
      });
    });
  }

  function initPriceSlider() {
    const slider = document.getElementById('priceRangeSlider');
    const display = document.getElementById('priceRangeDisplay');
    if (slider) {
      slider.addEventListener('input', (e) => {
        maxPrice = parseFloat(e.target.value);
        if (display) display.textContent = `$${maxPrice}`;
        render();
      });
    }
  }

  function initSort() {
    const sortSelect = document.getElementById('sortSelect') || document.querySelector('.sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        sortOption = e.target.value;
        render();
      });
    }
  }

  function initQuickCartButtons() {
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.add-to-cart-quick-btn');
      if (addBtn) {
        e.preventDefault();
        e.stopPropagation();
        const productId = addBtn.getAttribute('data-product-id');
        if (productId) {
          const product = getProductById(productId);
          if (product) {
            Cart.addItem(product, 1);
          }
        }
      }
    });
  }

  function filterAndSortProducts() {
    let list = [...allProducts];

    // Filter Category
    if (currentCategory && currentCategory !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }

    // Filter Search Query
    if (searchQuery) {
      list = list.filter(p => 
        p.name.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery)
      );
    }

    // Filter Price
    if (maxPrice) {
      list = list.filter(p => p.price <= maxPrice);
    }

    // Filter Rating
    if (minRating > 0) {
      list = list.filter(p => p.rating >= minRating);
    }

    // Sort
    switch (sortOption) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'default':
      default:
        // maintain default curated order
        break;
    }

    return list;
  }

  function render() {
    if (!gridContainer) return;
    const filtered = filterAndSortProducts();

    if (countLabel) {
      countLabel.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <svg style="width: 56px; height: 56px; color: var(--color-gray-300); margin: 0 auto 1rem;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">No matching products found</h3>
          <p style="color: var(--color-gray-500); margin-bottom: 1.5rem;">Try adjusting your search query, price range, or category filter.</p>
          <button type="button" class="btn btn-primary btn-sm" id="resetFiltersBtn">Reset All Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'All';
          searchQuery = '';
          maxPrice = 2000;
          sortOption = 'default';
          document.querySelectorAll('.filter-pill').forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-category') === 'All');
          });
          document.querySelectorAll('.search-input').forEach(i => i.value = '');
          const slider = document.getElementById('priceRangeSlider');
          if (slider) slider.value = 2000;
          const sortSelect = document.getElementById('sortSelect');
          if (sortSelect) sortSelect.value = 'default';
          render();
        });
      }
      return;
    }

    const starSvg = `<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;

    gridContainer.innerHTML = filtered.map(p => {
      const inWishlist = Wishlist.isInWishlist(p.id);
      const fullStars = Math.floor(p.rating);
      return `
        <article class="product-card hover-lift" data-product-id="${p.id}">
          <div class="product-media">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
            
            <div class="product-card-badges">
              ${p.badge ? `<span class="badge badge-sale">${p.badge}</span>` : ''}
              ${p.discount ? `<span class="badge badge-new">-${p.discount}%</span>` : ''}
            </div>

            <div class="product-card-actions">
              <button type="button" class="product-action-icon wishlist-toggle-btn ${inWishlist ? 'is-active' : ''}" data-product-id="${p.id}" aria-label="Save to wishlist">
                <svg width="18" height="18" fill="${inWishlist ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
            </div>

            <button type="button" class="quick-view-overlay-btn" data-product-id="${p.id}">Quick View</button>
          </div>

          <div class="product-content">
            <span class="product-category-tag">${p.category}</span>
            <h4 class="product-title">
              <a href="#" onclick="ProductModal.open('${p.id}'); return false;">${p.name}</a>
            </h4>

            <div class="product-rating">
              <span class="rating-stars">${starSvg.repeat(fullStars)}</span>
              <span class="rating-count">(${p.reviewCount})</span>
            </div>

            <div class="product-price-row">
              <div class="price-box">
                <span class="price-current">$${p.price.toLocaleString()}</span>
                ${p.originalPrice ? `<span class="price-original">$${p.originalPrice.toLocaleString()}</span>` : ''}
              </div>
              <button type="button" class="add-to-cart-quick-btn" data-product-id="${p.id}" aria-label="Add ${p.name} to cart" title="Add to Bag">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    Wishlist.updateHeartIcons();
  }

  return {
    init,
    render,
    filterAndSortProducts
  };
})();
