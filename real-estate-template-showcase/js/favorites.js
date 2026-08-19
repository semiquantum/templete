/**
 * FAVORITES / WISHLIST SYSTEM
 * SQ Studio Real Estate Website Template Showcase
 */

const FavoritesManager = {
  storageKey: 'sq_realestate_favorites',

  getFavorites() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('LocalStorage error reading favorites:', e);
      return [];
    }
  },

  saveFavorites(list) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    } catch (e) {
      console.warn('LocalStorage error saving favorites:', e);
    }
  },

  isFavorite(id) {
    const list = this.getFavorites();
    return list.includes(id);
  },

  toggleFavorite(id, propertyTitle = 'Property') {
    let list = this.getFavorites();
    const index = list.indexOf(id);
    let added = false;

    if (index > -1) {
      list.splice(index, 1);
      added = false;
    } else {
      list.push(id);
      added = true;
    }

    this.saveFavorites(list);
    this.updateUI();

    if (added) {
      if (typeof showToast === 'function') {
        showToast(`Added "${propertyTitle}" to Saved Homes`, 'success');
      }
    } else {
      if (typeof showToast === 'function') {
        showToast(`Removed "${propertyTitle}" from Saved Homes`, 'info');
      }
    }

    return added;
  },

  updateUI() {
    const list = this.getFavorites();
    const count = list.length;

    // Update all favorite badges in navbar
    const badges = document.querySelectorAll('.favorites-count-badge, .nav-badge-count');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });

    // Update all favorite heart buttons on property cards
    const favButtons = document.querySelectorAll('[data-action="toggle-fav"]');
    favButtons.forEach(btn => {
      const propId = btn.getAttribute('data-id');
      if (list.includes(propId)) {
        btn.classList.add('is-favorited', 'is-active');
        btn.setAttribute('aria-pressed', 'true');
        const svg = btn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', 'currentColor');
        }
      } else {
        btn.classList.remove('is-favorited', 'is-active');
        btn.setAttribute('aria-pressed', 'false');
        const svg = btn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', 'none');
        }
      }
    });
  },

  init() {
    this.updateUI();

    // Delegate favorite clicks
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="toggle-fav"]');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const title = btn.getAttribute('data-title') || 'Property';
        this.toggleFavorite(id, title);
      }
    });
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => FavoritesManager.init());
} else {
  FavoritesManager.init();
}
