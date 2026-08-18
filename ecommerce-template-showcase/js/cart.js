/* ============================================================
   CART ENGINE & DRAWER INTERACTION
   ============================================================ */

const Cart = (function() {
  const STORAGE_KEY = 'agy_ecommerce_cart';
  const FREE_SHIPPING_THRESHOLD = 150;
  
  let promoCodes = {
    'WELCOME10': 0.10,
    'LUXE20': 0.20,
    'TECH15': 0.15,
    'SAVE15': 0.15,
    'BEAUTY20': 0.20
  };

  let appliedPromo = null;

  function getCart() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading cart from localStorage', e);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
      updateCartBadges();
      renderCartUI();
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }

  function addItem(product, quantity = 1, selectedVariant = null, selectedColor = null) {
    if (!product) return;
    const cart = getCart();
    
    // Check if matching item exists (same id + same variant/color)
    const variantKey = selectedVariant || 'Default';
    const colorKey = selectedColor || '';
    const existingIndex = cart.findIndex(item => 
      item.productId === product.id && 
      item.variant === variantKey && 
      item.color === colorKey
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
        store: product.store,
        quantity: quantity,
        variant: variantKey,
        color: colorKey
      });
    }

    saveCart(cart);
    Toast.success(`Added <strong>${product.name}</strong> to your shopping bag.`);
    openDrawer();
  }

  function removeItem(itemId) {
    let cart = getCart();
    const itemToRemove = cart.find(item => item.id === itemId);
    cart = cart.filter(item => item.id !== itemId);
    saveCart(cart);
    if (itemToRemove) {
      Toast.info(`Removed <strong>${itemToRemove.name}</strong> from bag.`);
    }
  }

  function updateQuantity(itemId, newQty) {
    const cart = getCart();
    const item = cart.find(item => item.id === itemId);
    if (item) {
      if (newQty <= 0) {
        removeItem(itemId);
      } else {
        item.quantity = newQty;
        saveCart(cart);
      }
    }
  }

  function clearCart() {
    saveCart([]);
    Toast.info('Shopping bag cleared.');
  }

  function getSubtotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  function getItemCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function getDiscountAmount() {
    if (!appliedPromo || !promoCodes[appliedPromo]) return 0;
    const subtotal = getSubtotal();
    return subtotal * promoCodes[appliedPromo];
  }

  function getShipping() {
    const subtotal = getSubtotal();
    if (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
    return 15;
  }

  function getTax() {
    const subtotal = getSubtotal();
    const discount = getDiscountAmount();
    return (subtotal - discount) * 0.08; // 8% estimated tax
  }

  function getTotal() {
    const subtotal = getSubtotal();
    if (subtotal === 0) return 0;
    const discount = getDiscountAmount();
    const shipping = getShipping();
    const tax = getTax();
    return Math.max(0, subtotal - discount + shipping + tax);
  }

  function applyPromo(code) {
    const upperCode = code.toUpperCase().trim();
    if (promoCodes[upperCode]) {
      appliedPromo = upperCode;
      const discountPercent = Math.round(promoCodes[upperCode] * 100);
      Toast.success(`Promo code <strong>${upperCode}</strong> applied! You saved ${discountPercent}%.`);
      renderCartUI();
      return true;
    } else {
      Toast.error(`Invalid promo code: "${code}". Try code <strong>SAVE15</strong> or <strong>LUXE20</strong>.`);
      return false;
    }
  }

  function updateCartBadges() {
    const count = getItemCount();
    const badges = document.querySelectorAll('.cart-badge-count, #cartBadge, .cart-count');
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  function openDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer && backdrop) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function toggleDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer && drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  function renderCartUI() {
    const cartList = document.getElementById('cartItemsList');
    const emptyView = document.getElementById('cartEmptyView');
    const cartFooter = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountLine = document.getElementById('cartDiscountLine');
    const discountEl = document.getElementById('cartDiscount');
    const shippingEl = document.getElementById('cartShipping');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');
    const progressFill = document.getElementById('shippingProgressFill');
    const progressText = document.getElementById('shippingProgressText');

    const cart = getCart();
    const subtotal = getSubtotal();
    const discount = getDiscountAmount();
    const shipping = getShipping();
    const tax = getTax();
    const total = getTotal();

    // Free shipping progress calculation
    if (progressFill && progressText) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        progressFill.style.width = '100%';
        progressText.innerHTML = `🎉 You've qualified for <strong>FREE Express Shipping</strong>!`;
      } else {
        const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        const needed = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
        progressFill.style.width = `${percent}%`;
        progressText.innerHTML = `Add <strong>$${needed}</strong> more to unlock <strong>FREE Shipping</strong>!`;
      }
    }

    if (cart.length === 0) {
      if (cartList) cartList.style.display = 'none';
      if (emptyView) emptyView.style.display = 'block';
      if (cartFooter) cartFooter.style.display = 'none';
      return;
    }

    if (cartList) cartList.style.display = 'flex';
    if (emptyView) emptyView.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';

    if (cartList) {
      cartList.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-variant">${item.variant !== 'Default' ? item.variant : ''} ${item.color ? '• ' + item.color : ''}</div>
            <div class="cart-item-bottom">
              <div class="qty-stepper">
                <button type="button" class="qty-btn dec-qty" onclick="Cart.updateQuantity('${item.id}', ${item.quantity - 1})" aria-label="Decrease quantity">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button type="button" class="qty-btn inc-qty" onclick="Cart.updateQuantity('${item.id}', ${item.quantity + 1})" aria-label="Increase quantity">+</button>
              </div>
              <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
            </div>
            <button type="button" class="cart-item-remove-btn" onclick="Cart.removeItem('${item.id}')" style="margin-top:6px;text-align:left;background:none;border:none;cursor:pointer;">Remove</button>
          </div>
        </div>
      `).join('');
    }

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    if (discountLine && discountEl) {
      if (discount > 0) {
        discountLine.style.display = 'flex';
        discountEl.textContent = `-$${discount.toFixed(2)}`;
      } else {
        discountLine.style.display = 'none';
      }
    }
  }

  function init() {
    updateCartBadges();
    renderCartUI();

    // Attach open buttons
    document.querySelectorAll('.cart-toggle-btn, .nav-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openDrawer();
      });
    });

    // Close buttons & backdrop
    const closeBtn = document.getElementById('cartDrawerClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    const backdrop = document.getElementById('drawerBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    // Promo code apply
    const promoForm = document.getElementById('cartPromoForm');
    if (promoForm) {
      promoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('cartPromoInput');
        if (input && input.value.trim()) {
          applyPromo(input.value);
          input.value = '';
        }
      });
    }

    // Demo checkout button
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        const cart = getCart();
        if (cart.length === 0) {
          Toast.warning('Your shopping bag is empty.');
          return;
        }
        Toast.success('🎉 Demo Checkout Simulated! Thank you for testing this frontend showcase.');
        closeDrawer();
      });
    }
  }

  return {
    init,
    getCart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyPromo,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    renderCartUI,
    updateCartBadges
  };
})();
