/**
 * PROPERTY DETAILS MODAL & GALLERY
 * SQ Studio Real Estate Website Template Showcase
 */

const PropertyModal = {
  modalEl: null,
  currentImages: [],
  currentImageIndex: 0,

  createModalDOM() {
    if (this.modalEl) return;

    const overlay = document.createElement('div');
    overlay.className = 'property-modal-overlay';
    overlay.id = 'propertyDetailModal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = `
      <div class="property-modal-dialog">
        <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close property details">&times;</button>
        
        <!-- Gallery Area -->
        <div class="modal-gallery-wrapper">
          <div class="modal-gallery-main">
            <img id="modalMainImage" src="" alt="Property main view">
            <button class="modal-gallery-nav modal-gallery-prev" id="modalPrevImg" aria-label="Previous photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="modal-gallery-nav modal-gallery-next" id="modalNextImg" aria-label="Next photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          <div class="modal-gallery-thumbs" id="modalThumbsContainer"></div>
        </div>

        <!-- Body Area -->
        <div class="modal-body">
          <div class="modal-main-content">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <span class="badge badge-sale" id="modalStatusBadge">For Sale</span>
              <span style="font-size: 0.85rem; font-weight: 600; color: #64748b;" id="modalPropertyType">Villa</span>
            </div>
            
            <h2 id="modalPropertyTitle" style="font-size: 1.8rem; margin-bottom: 6px;">The Grand Haven Villa</h2>
            <p id="modalPropertyTagline" style="font-size: 1.05rem; color: #64748b; margin-bottom: 12px; font-weight: 500;">Exquisite Modern Masterpiece</p>
            
            <div style="display: flex; align-items: center; gap: 6px; color: #475569; margin-bottom: 18px;" id="modalPropertyLocation">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Oakridge Hills, Austin, TX</span>
            </div>

            <div style="font-size: 1.85rem; font-weight: 800; color: #0f172a; margin-bottom: 20px;" id="modalPropertyPrice">$2,450,000</div>

            <!-- Specs Grid -->
            <div class="modal-specs-grid" id="modalSpecsGrid">
              <div class="modal-spec-box">
                <div class="modal-spec-label">Bedrooms</div>
                <div class="modal-spec-val" id="modalBedCount">5 Beds</div>
              </div>
              <div class="modal-spec-box">
                <div class="modal-spec-label">Bathrooms</div>
                <div class="modal-spec-val" id="modalBathCount">5.5 Baths</div>
              </div>
              <div class="modal-spec-box">
                <div class="modal-spec-label">Total Area</div>
                <div class="modal-spec-val" id="modalSqft">5,200 sq.ft</div>
              </div>
              <div class="modal-spec-box">
                <div class="modal-spec-label">Status</div>
                <div class="modal-spec-val" id="modalSpecStatus">Active</div>
              </div>
            </div>

            <h4 style="margin: 20px 0 8px; font-size: 1.15rem;">About This Property</h4>
            <p id="modalPropertyDesc" style="line-height: 1.7; color: #475569; margin-bottom: 24px;"></p>

            <h4 style="margin: 20px 0 12px; font-size: 1.15rem;">Key Features & Amenities</h4>
            <div class="amenities-list-wrap" id="modalAmenitiesWrap"></div>
          </div>

          <!-- Sidebar Inquiry & Agent Card -->
          <div class="modal-sidebar-area">
            <div class="modal-sidebar-card">
              <h4 style="margin-bottom: 16px; font-size: 1.1rem;">Listing Agent</h4>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <img id="modalAgentPhoto" src="" alt="Agent" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover;">
                <div>
                  <h5 id="modalAgentName" style="font-size: 1rem; margin-bottom: 2px;">Marcus Vance</h5>
                  <p id="modalAgentRole" style="font-size: 0.8rem; color: #64748b; margin: 0;"></p>
                </div>
              </div>

              <div style="font-size: 0.85rem; color: #475569; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span id="modalAgentPhone">(512) 884-2190</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span id="modalAgentEmail">m.vance@agency.com</span>
                </div>
              </div>

              <!-- Quick Inquiry Form -->
              <h4 style="margin-bottom: 12px; font-size: 1rem; border-top: 1px solid #e2e8f0; padding-top: 16px;">Schedule a Private Tour</h4>
              <form id="modalInquiryForm" class="inquiry-form" novalidate>
                <input type="hidden" id="modalFormPropertyId" name="propertyId" value="">
                <div class="form-group">
                  <input type="text" class="form-control" id="modalClientName" placeholder="Your Full Name" required>
                  <span class="form-error-msg">Please enter your name</span>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="modalClientEmail" placeholder="Your Email Address" required>
                  <span class="form-error-msg">Please enter a valid email</span>
                </div>
                <div class="form-group">
                  <input type="tel" class="form-control" id="modalClientPhone" placeholder="Phone Number" required>
                  <span class="form-error-msg">Please enter your phone number</span>
                </div>
                <div class="form-group">
                  <textarea class="form-control" id="modalClientMsg" rows="3" placeholder="I am interested in scheduling a viewing..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Request Tour / Inquire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalEl = overlay;

    // Attach listeners
    const closeBtn = overlay.querySelector('#modalCloseBtn');
    closeBtn.addEventListener('click', () => this.close());

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl && this.modalEl.classList.contains('is-active')) {
        this.close();
      }
      if (this.modalEl && this.modalEl.classList.contains('is-active')) {
        if (e.key === 'ArrowLeft') this.prevImage();
        if (e.key === 'ArrowRight') this.nextImage();
      }
    });

    overlay.querySelector('#modalPrevImg').addEventListener('click', () => this.prevImage());
    overlay.querySelector('#modalNextImg').addEventListener('click', () => this.nextImage());

    // Modal Inquiry Form Submit
    const form = overlay.querySelector('#modalInquiryForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = overlay.querySelector('#modalClientName');
      const emailInput = overlay.querySelector('#modalClientEmail');
      const phoneInput = overlay.querySelector('#modalClientPhone');

      let isValid = true;
      [nameInput, emailInput, phoneInput].forEach(inp => {
        const grp = inp.closest('.form-group');
        if (!inp.value.trim() || (inp.type === 'email' && !/\S+@\S+\.\S+/.test(inp.value))) {
          grp.classList.add('has-error');
          isValid = false;
        } else {
          grp.classList.remove('has-error');
        }
      });

      if (isValid) {
        if (typeof showToast === 'function') {
          showToast('Tour request received! Our agent will contact you within 2 business hours.', 'success');
        }
        form.reset();
        setTimeout(() => this.close(), 1200);
      }
    });
  },

  open(propertyId) {
    this.createModalDOM();
    const prop = typeof getPropertyById === 'function' ? getPropertyById(propertyId) : null;
    if (!prop) {
      console.warn('Property not found:', propertyId);
      return;
    }

    // Set images
    this.currentImages = prop.images && prop.images.length ? prop.images : [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ];
    this.currentImageIndex = 0;
    this.updateGalleryUI();

    // Populate data
    document.getElementById('modalFormPropertyId').value = prop.id;
    document.getElementById('modalPropertyTitle').textContent = prop.title;
    document.getElementById('modalPropertyTagline').textContent = prop.tagline || prop.type;
    document.getElementById('modalPropertyType').textContent = prop.type;
    document.getElementById('modalPropertyLocation').querySelector('span').textContent = prop.location;
    document.getElementById('modalPropertyPrice').textContent = prop.priceFormatted;
    document.getElementById('modalPropertyDesc').textContent = prop.description;

    // Badge
    const badge = document.getElementById('modalStatusBadge');
    badge.textContent = prop.status;
    badge.className = `badge ${prop.badgeType || 'badge-sale'}`;

    // Specs
    document.getElementById('modalBedCount').textContent = prop.beds ? `${prop.beds} Beds` : 'N/A';
    document.getElementById('modalBathCount').textContent = prop.baths ? `${prop.baths} Baths` : 'N/A';
    document.getElementById('modalSqft').textContent = prop.sqft ? `${prop.sqft.toLocaleString()} sq.ft` : 'N/A';
    document.getElementById('modalSpecStatus').textContent = prop.status;

    // Amenities
    const amWrap = document.getElementById('modalAmenitiesWrap');
    amWrap.innerHTML = '';
    (prop.amenities || []).forEach(am => {
      const chip = document.createElement('div');
      chip.className = 'amenity-chip';
      chip.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${am}</span>
      `;
      amWrap.appendChild(chip);
    });

    // Agent
    if (prop.agent) {
      document.getElementById('modalAgentName').textContent = prop.agent.name;
      document.getElementById('modalAgentRole').textContent = prop.agent.role;
      document.getElementById('modalAgentPhoto').src = prop.agent.photo;
      document.getElementById('modalAgentPhone').textContent = prop.agent.phone;
      document.getElementById('modalAgentEmail').textContent = prop.agent.email;
    }

    // Open
    this.modalEl.classList.add('is-active');
    this.modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  close() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('is-active');
    this.modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  updateGalleryUI() {
    const mainImg = document.getElementById('modalMainImage');
    mainImg.src = this.currentImages[this.currentImageIndex];

    const thumbsContainer = document.getElementById('modalThumbsContainer');
    thumbsContainer.innerHTML = '';

    this.currentImages.forEach((imgUrl, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `modal-gallery-thumb ${idx === this.currentImageIndex ? 'is-active' : ''}`;
      thumb.innerHTML = `<img src="${imgUrl}" alt="Thumbnail ${idx + 1}">`;
      thumb.addEventListener('click', () => {
        this.currentImageIndex = idx;
        this.updateGalleryUI();
      });
      thumbsContainer.appendChild(thumb);
    });
  },

  nextImage() {
    if (this.currentImages.length <= 1) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.currentImages.length;
    this.updateGalleryUI();
  },

  prevImage() {
    if (this.currentImages.length <= 1) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.updateGalleryUI();
  },

  init() {
    this.createModalDOM();

    // Delegate view details clicks
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="view-details"]');
      if (btn) {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        this.open(id);
      }
    });
  }
};

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => PropertyModal.init());
} else {
  PropertyModal.init();
}
