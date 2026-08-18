/* ============================================================
   PRODUCT DETAILS MODAL ENGINE
   ============================================================ */

const ProductModal = (function() {
  let modalEl = null;
  let activeProduct = null;
  let selectedVariant = null;
  let selectedColor = null;
  let currentQuantity = 1;

  function init() {
    modalEl = document.getElementById('productQuickViewModal');
    if (!modalEl) {
      createModalElement();
    }
    attachGlobalEvents();
  }

  function createModalElement() {
    modalEl = document.createElement('div');
    modalEl.id = 'productQuickViewModal';
    modalEl.className = 'modal-backdrop';
    modalEl.innerHTML = `
      <div class="modal-container" role="dialog" aria-modal="true">
        <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Close product view">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="modal-grid" id="modalGridContent">
          <!-- Dynamic Content -->
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);
  }

  function open(productId) {
    const product = getProductById(productId);
    if (!product) return;

    activeProduct = product;
    currentQuantity = 1;
    selectedVariant = (product.variants && product.variants.options) ? product.variants.options[0] : 'Default';
    selectedColor = (product.colors && product.colors.length > 0) ? product.colors[0] : null;

    renderModalContent();

    if (modalEl) {
      modalEl.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function close() {
    if (modalEl) {
      modalEl.classList.remove('active');
      document.body.style.overflow = '';
      activeProduct = null;
    }
  }

  function renderModalContent() {
    const grid = document.getElementById('modalGridContent');
    if (!grid || !activeProduct) return;

    const p = activeProduct;
    const galleryImages = p.gallery || [p.image];
    const inWishlist = Wishlist.isInWishlist(p.id);

    // Generate stars
    const fullStars = Math.floor(p.rating);
    const starSvg = `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    const starsHtml = starSvg.repeat(fullStars);

    // Variants HTML
    let variantsHtml = '';
    if (p.variants && p.variants.options) {
      variantsHtml = `
        <div class="modal-variant-group">
          <span class="variant-label">${p.variants.label}: <strong id="selectedVariantText">${selectedVariant}</strong></span>
          <div class="variant-options">
            ${p.variants.options.map(opt => `
              <button type="button" class="variant-btn ${opt === selectedVariant ? 'active' : ''}" data-variant="${opt}">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Colors HTML
    let colorsHtml = '';
    if (p.colors && p.colors.length > 0) {
      colorsHtml = `
        <div class="modal-variant-group">
          <span class="variant-label">Color / Finish: <strong id="selectedColorText">${selectedColor}</strong></span>
          <div class="variant-options">
            ${p.colors.map(col => `
              <button type="button" class="variant-btn ${col === selectedColor ? 'active' : ''}" data-color="${col}">
                ${col}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Specs HTML
    let specsHtml = '';
    if (p.specs) {
      specsHtml = `
        <div style="margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--color-gray-200);">
          <h5 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Specifications</h5>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 0.825rem; color: var(--color-gray-600);">
            ${Object.entries(p.specs).map(([k, v]) => `
              <div><strong>${k}:</strong> ${v}</div>
            `).join('')}
          </div>
        </div>
      `;
    }

    grid.innerHTML = `
      <div class="modal-gallery-col">
        <div class="modal-gallery-main">
          <img id="modalMainImg" src="${galleryImages[0]}" alt="${p.name}" />
        </div>
        ${galleryImages.length > 1 ? `
          <div class="modal-gallery-thumbs">
            ${galleryImages.map((img, idx) => `
              <div class="modal-thumb ${idx === 0 ? 'active' : ''}" data-src="${img}">
                <img src="${img}" alt="Thumbnail ${idx + 1}" />
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="modal-info-col">
        <span class="modal-category">${p.category}</span>
        <h3 class="modal-title">${p.name}</h3>

        <div class="modal-rating">
          <span class="rating-stars">${starsHtml}</span>
          <span style="font-size: 0.85rem; font-weight: 700;">${p.rating}</span>
          <span class="rating-count">(${p.reviewCount} customer reviews)</span>
        </div>

        <div class="modal-price-row">
          <span class="modal-price-current">$${p.price.toLocaleString()}</span>
          ${p.originalPrice ? `<span class="modal-price-original">$${p.originalPrice.toLocaleString()}</span>` : ''}
          ${p.discount ? `<span class="badge badge-sale">-${p.discount}% OFF</span>` : ''}
        </div>

        <p class="modal-desc">${p.description}</p>

        ${variantsHtml}
        ${colorsHtml}

        <div style="display: flex; align-items: center; gap: 12px; margin-top: 1rem;">
          <span style="font-size: 0.875rem; font-weight: 600;">Quantity:</span>
          <div class="qty-stepper">
            <button type="button" class="qty-btn" id="modalQtyDec" aria-label="Decrease quantity">−</button>
            <span class="qty-value" id="modalQtyVal">1</span>
            <button type="button" class="qty-btn" id="modalQtyInc" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <div class="modal-actions-row">
          <button type="button" class="btn btn-primary btn-lg flex-1" id="modalAddToCartBtn">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            Add To Bag • $${p.price.toLocaleString()}
          </button>
          <button type="button" class="btn btn-outline btn-lg product-action-wishlist ${inWishlist ? 'is-active' : ''}" data-product-id="${p.id}" id="modalWishlistBtn" aria-label="Add to Wishlist">
            <svg width="20" height="20" fill="${inWishlist ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
        </div>

        ${specsHtml}
      </div>
    `;

    // Attach Gallery Thumbnails
    grid.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        grid.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const mainImg = document.getElementById('modalMainImg');
        if (mainImg) mainImg.src = thumb.getAttribute('data-src');
      });
    });

    // Attach Variant Buttons
    grid.querySelectorAll('.variant-btn[data-variant]').forEach(btn => {
      btn.addEventListener('click', () => {
        grid.querySelectorAll('.variant-btn[data-variant]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedVariant = btn.getAttribute('data-variant');
        const text = document.getElementById('selectedVariantText');
        if (text) text.textContent = selectedVariant;
      });
    });

    // Attach Color Buttons
    grid.querySelectorAll('.variant-btn[data-color]').forEach(btn => {
      btn.addEventListener('click', () => {
        grid.querySelectorAll('.variant-btn[data-color]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColor = btn.getAttribute('data-color');
        const text = document.getElementById('selectedColorText');
        if (text) text.textContent = selectedColor;
      });
    });

    // Quantity Stepper
    const qtyVal = document.getElementById('modalQtyVal');
    const decBtn = document.getElementById('modalQtyDec');
    const incBtn = document.getElementById('modalQtyInc');

    if (decBtn && incBtn && qtyVal) {
      decBtn.addEventListener('click', () => {
        if (currentQuantity > 1) {
          currentQuantity--;
          qtyVal.textContent = currentQuantity;
          updateModalPriceLabel();
        }
      });

      incBtn.addEventListener('click', () => {
        currentQuantity++;
        qtyVal.textContent = currentQuantity;
        updateModalPriceLabel();
      });
    }

    function updateModalPriceLabel() {
      const addBtn = document.getElementById('modalAddToCartBtn');
      if (addBtn && activeProduct) {
        addBtn.innerHTML = `
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          Add To Bag • $${(activeProduct.price * currentQuantity).toLocaleString()}
        `;
      }
    }

    // Add to Cart Action
    const addBtn = document.getElementById('modalAddToCartBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        Cart.addItem(activeProduct, currentQuantity, selectedVariant, selectedColor);
        close();
      });
    }
  }

  function attachGlobalEvents() {
    // Delegate quick view triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.quick-view-btn, .quick-view-overlay-btn, .product-quick-view');
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        const productId = trigger.getAttribute('data-product-id');
        if (productId) {
          open(productId);
        }
      }
    });

    // Close button & backdrop click
    document.addEventListener('click', (e) => {
      if (e.target.closest('#modalCloseBtn') || e.target === modalEl) {
        close();
      }
    });

    // Keyboard ESC listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalEl && modalEl.classList.contains('active')) {
        close();
      }
    });
  }

  return {
    init,
    open,
    close
  };
})();
