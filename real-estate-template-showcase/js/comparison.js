/**
 * PROPERTY COMPARISON SYSTEM (HOMEHUB)
 * SQ Studio Real Estate Website Template Showcase
 */

const ComparisonManager = {
  storageKey: 'sq_homehub_comparison',
  maxItems: 4,
  floatingBar: null,
  modalEl: null,

  getComparisonList() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Error reading comparison list:', e);
      return [];
    }
  },

  saveComparisonList(list) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    } catch (e) {
      console.warn('Error saving comparison list:', e);
    }
  },

  toggle(id) {
    let list = this.getComparisonList();
    const index = list.indexOf(id);

    if (index > -1) {
      list.splice(index, 1);
      this.saveComparisonList(list);
      this.updateUI();
      if (typeof showToast === 'function') {
        showToast('Property removed from comparison', 'info');
      }
    } else {
      if (list.length >= this.maxItems) {
        if (typeof showToast === 'function') {
          showToast(`You can compare up to ${this.maxItems} properties at once.`, 'warning');
        }
        return false;
      }
      list.push(id);
      this.saveComparisonList(list);
      this.updateUI();
      if (typeof showToast === 'function') {
        showToast('Property added to comparison list', 'success');
      }
    }
    return true;
  },

  clearAll() {
    this.saveComparisonList([]);
    this.updateUI();
    this.closeModal();
    if (typeof showToast === 'function') {
      showToast('Comparison list cleared', 'info');
    }
  },

  createUI() {
    // Only build if not existing
    if (!document.getElementById('comparisonFloatingBar')) {
      const bar = document.createElement('div');
      bar.id = 'comparisonFloatingBar';
      bar.className = 'comparison-floating-bar';
      bar.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-weight: 700;">Compare (<span id="compareCountNum">0</span>/${this.maxItems})</span>
          <div class="comparison-thumbs-preview" id="compareThumbsPreview"></div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn btn-sm btn-white" id="btnOpenCompareModal">View Comparison</button>
          <button class="btn btn-sm btn-outline-white" id="btnClearCompare">Clear</button>
        </div>
      `;
      document.body.appendChild(bar);
      this.floatingBar = bar;

      bar.querySelector('#btnOpenCompareModal').addEventListener('click', () => this.openModal());
      bar.querySelector('#btnClearCompare').addEventListener('click', () => this.clearAll());
    }

    if (!document.getElementById('comparisonModalOverlay')) {
      const modal = document.createElement('div');
      modal.id = 'comparisonModalOverlay';
      modal.className = 'comparison-modal-overlay';
      modal.innerHTML = `
        <div class="comparison-modal-dialog">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
            <div>
              <h3 style="font-size: 1.5rem; margin-bottom: 4px;">Side-by-Side Property Comparison</h3>
              <p style="color: #64748b; font-size: 0.9rem; margin: 0;">Compare technical specifications, amenities, and pricing</p>
            </div>
            <button class="modal-close-btn" id="compareModalCloseBtn" style="position: static; background: #0f172a;">&times;</button>
          </div>

          <div style="overflow-x: auto;" id="comparisonTableWrapper">
            <!-- Dynamic comparison table -->
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      this.modalEl = modal;

      modal.querySelector('#compareModalCloseBtn').addEventListener('click', () => this.closeModal());
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal();
      });
    }
  },

  updateUI() {
    this.createUI();
    const list = this.getComparisonList();
    const count = list.length;

    // Update floating bar
    const bar = document.getElementById('comparisonFloatingBar');
    const countNum = document.getElementById('compareCountNum');
    const thumbsPreview = document.getElementById('compareThumbsPreview');

    if (countNum) countNum.textContent = count;

    if (thumbsPreview) {
      thumbsPreview.innerHTML = '';
      list.forEach(id => {
        const prop = typeof getPropertyById === 'function' ? getPropertyById(id) : null;
        if (prop && prop.images && prop.images[0]) {
          const img = document.createElement('img');
          img.src = prop.images[0];
          img.alt = prop.title;
          img.className = 'comparison-mini-thumb';
          thumbsPreview.appendChild(img);
        }
      });
    }

    if (bar) {
      if (count > 0) {
        bar.classList.add('is-visible');
      } else {
        bar.classList.remove('is-visible');
      }
    }

    // Update buttons in property cards
    const compButtons = document.querySelectorAll('[data-action="toggle-compare"]');
    compButtons.forEach(btn => {
      const propId = btn.getAttribute('data-id');
      if (list.includes(propId)) {
        btn.classList.add('is-compared');
        btn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Compared</span>
        `;
      } else {
        btn.classList.remove('is-compared');
        btn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
          <span>Compare</span>
        `;
      }
    });

    if (this.modalEl && this.modalEl.classList.contains('is-active')) {
      this.renderTable();
    }
  },

  renderTable() {
    const list = this.getComparisonList();
    const wrapper = document.getElementById('comparisonTableWrapper');
    if (!wrapper) return;

    if (list.length === 0) {
      wrapper.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: #64748b;">
          <p style="font-size: 1.1rem; margin-bottom: 12px;">No properties selected for comparison.</p>
          <button class="btn btn-primary btn-sm" onclick="ComparisonManager.closeModal()">Browse Properties</button>
        </div>
      `;
      return;
    }

    const properties = list.map(id => typeof getPropertyById === 'function' ? getPropertyById(id) : null).filter(Boolean);

    let html = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Property</th>
            ${properties.map(p => `
              <td style="min-width: 220px; vertical-align: top;">
                <img src="${p.images[0]}" alt="${p.title}" style="width: 100%; height: 130px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
                <h4 style="font-size: 1.05rem; margin-bottom: 4px;">${p.title}</h4>
                <div style="font-size: 1.15rem; font-weight: 800; color: #2563eb; margin-bottom: 8px;">${p.priceFormatted}</div>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-primary" onclick="PropertyModal.open('${p.id}')">Details</button>
                  <button class="btn btn-sm btn-secondary" onclick="ComparisonManager.toggle('${p.id}')">Remove</button>
                </div>
              </td>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Type</th>
            ${properties.map(p => `<td><strong>${p.type}</strong></td>`).join('')}
          </tr>
          <tr>
            <th>Location</th>
            ${properties.map(p => `<td>${p.location}</td>`).join('')}
          </tr>
          <tr>
            <th>Bedrooms</th>
            ${properties.map(p => `<td>${p.beds || 'N/A'}</td>`).join('')}
          </tr>
          <tr>
            <th>Bathrooms</th>
            ${properties.map(p => `<td>${p.baths || 'N/A'}</td>`).join('')}
          </tr>
          <tr>
            <th>Total Area</th>
            ${properties.map(p => `<td>${p.sqft ? p.sqft.toLocaleString() + ' sq.ft' : 'N/A'}</td>`).join('')}
          </tr>
          <tr>
            <th>Status</th>
            ${properties.map(p => `<td><span class="badge ${p.badgeType || 'badge-sale'}">${p.status}</span></td>`).join('')}
          </tr>
          <tr>
            <th>Year Built</th>
            ${properties.map(p => `<td>${(p.specs && p.specs.yearBuilt) || '2023'}</td>`).join('')}
          </tr>
          <tr>
            <th>Top Amenities</th>
            ${properties.map(p => `
              <td>
                <ul style="font-size: 0.825rem; color: #475569; display: flex; flex-direction: column; gap: 4px;">
                  ${(p.amenities || []).slice(0, 4).map(a => `<li>✓ ${a}</li>`).join('')}
                </ul>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    `;

    wrapper.innerHTML = html;
  },

  openModal() {
    this.createUI();
    this.renderTable();
    this.modalEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    if (this.modalEl) {
      this.modalEl.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  },

  init() {
    this.updateUI();

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="toggle-compare"]');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.toggle(id);
      }
    });
  }
};

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ComparisonManager.init());
} else {
  ComparisonManager.init();
}
