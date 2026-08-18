/* ============================================================
   WISHLIST ENGINE & PERSISTENCE
   ============================================================ */

const Wishlist = (function() {
  const STORAGE_KEY = 'agy_ecommerce_wishlist';

  function getWishlist() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading wishlist from localStorage', e);
      return [];
    }
  }

  function saveWishlist(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      updateBadges();
      updateHeartIcons();
    } catch (e) {
      console.error('Error saving wishlist to localStorage', e);
    }
  }

  function isInWishlist(productId) {
    const list = getWishlist();
    return list.some(item => item.id === productId);
  }

  function toggle(product) {
    if (!product) return;
    let list = getWishlist();
    const index = list.findIndex(item => item.id === product.id);

    if (index > -1) {
      list.splice(index, 1);
      saveWishlist(list);
      Toast.info(`Removed <strong>${product.name}</strong> from your wishlist.`);
    } else {
      list.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
        store: product.store
      });
      saveWishlist(list);
      Toast.success(`Added <strong>${product.name}</strong> to your wishlist!`);
    }
  }

  function remove(productId) {
    let list = getWishlist();
    list = list.filter(item => item.id !== productId);
    saveWishlist(list);
    Toast.info('Item removed from wishlist.');
  }

  function getCount() {
    return getWishlist().length;
  }

  function updateBadges() {
    const count = getCount();
    const badges = document.querySelectorAll('.wishlist-badge-count, #wishlistBadge, .wishlist-count');
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  function updateHeartIcons() {
    const list = getWishlist();
    const heartBtns = document.querySelectorAll('.wishlist-toggle-btn, .product-action-wishlist');
    
    heartBtns.forEach(btn => {
      const productId = btn.getAttribute('data-product-id');
      if (productId) {
        const active = list.some(item => item.id === productId);
        if (active) {
          btn.classList.add('is-active');
          const svg = btn.querySelector('svg');
          if (svg) svg.setAttribute('fill', 'currentColor');
        } else {
          btn.classList.remove('is-active');
          const svg = btn.querySelector('svg');
          if (svg) svg.setAttribute('fill', 'none');
        }
      }
    });
  }

  function init() {
    updateBadges();
    updateHeartIcons();

    // Delegate wishlist clicks
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.wishlist-toggle-btn, .product-action-wishlist');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const productId = btn.getAttribute('data-product-id');
        if (productId) {
          const product = getProductById(productId);
          if (product) {
            toggle(product);
            btn.classList.add('heart-pop');
            setTimeout(() => btn.classList.remove('heart-pop'), 300);
          }
        }
      }
    });

    // Wishlist header icon demo interaction
    document.querySelectorAll('.nav-wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const count = getCount();
        if (count === 0) {
          Toast.info('Your wishlist is currently empty. Click the heart icon on any product to save items.');
        } else {
          Toast.info(`You have <strong>${count}</strong> item${count > 1 ? 's' : ''} saved in your wishlist.`);
        }
      });
    });
  }

  return {
    init,
    getWishlist,
    toggle,
    remove,
    isInWishlist,
    getCount,
    updateBadges,
    updateHeartIcons
  };
})();
