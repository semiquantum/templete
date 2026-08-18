/* ============================================================
   MAIN APPLICATION SCRIPTS & COMMON UTILITIES
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Core Engines
  if (typeof Cart !== 'undefined') Cart.init();
  if (typeof Wishlist !== 'undefined') Wishlist.init();
  if (typeof ProductModal !== 'undefined') ProductModal.init();

  // Initialize Navigation & Menus
  initMobileNavigation();
  initStickyHeader();
  initScrollAnimations();
  initCountdownTimers();
  initNewsletterForms();
  initContactForms();
  initAccordions();
});

/* ============================================================
   MOBILE NAVIGATION MENU
   ============================================================ */
function initMobileNavigation() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileNav = document.getElementById('mobileNavDrawer');
  const navBackdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileNavClose');

  if (!hamburgerBtn || !mobileNav) return;

  function openMobileNav() {
    hamburgerBtn.classList.add('is-active');
    mobileNav.classList.add('active');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    hamburgerBtn.classList.remove('is-active');
    mobileNav.classList.remove('active');
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (mobileNav.classList.contains('active')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  if (navBackdrop) navBackdrop.addEventListener('click', closeMobileNav);

  // Close when clicking nav links
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

/* ============================================================
   STICKY HEADER SCROLL EFFECT
   ============================================================ */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-init, .reveal-on-scroll');
  if (revealElements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* ============================================================
   FLASH DEAL COUNTDOWN TIMERS
   ============================================================ */
function initCountdownTimers() {
  const timerContainers = document.querySelectorAll('[data-countdown]');
  if (timerContainers.length === 0) return;

  // Set target to 24 hours from current visit for demo realism
  let targetTime = new Date().getTime() + (18 * 60 * 60 * 1000) + (42 * 60 * 1000) + (15 * 1000);

  function update() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);
      return;
    }

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => n < 10 ? '0' + n : n;

    document.querySelectorAll('.timer-hours').forEach(el => el.textContent = pad(hours));
    document.querySelectorAll('.timer-minutes').forEach(el => el.textContent = pad(minutes));
    document.querySelectorAll('.timer-seconds').forEach(el => el.textContent = pad(seconds));
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================
   NEWSLETTER FORMS & VALIDATION
   ============================================================ */
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form, #newsletterForm');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;

      const email = emailInput.value.trim();

      if (!email) {
        Toast.error('Please enter your email address.');
        emailInput.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        Toast.error('Please enter a valid email address.');
        emailInput.focus();
        return;
      }

      // Success
      Toast.success(`Thank you for subscribing! Your <strong>$20 VIP Welcome Voucher</strong> has been sent to <em>${email}</em>.`);
      emailInput.value = '';
    });
  });
}

/* ============================================================
   CONTACT FORMS & VALIDATION
   ============================================================ */
function initContactForms() {
  const forms = document.querySelectorAll('.contact-form, #contactForm');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('input[name="name"], #contactName');
      const emailInput = form.querySelector('input[name="email"], #contactEmail');
      const messageInput = form.querySelector('textarea[name="message"], #contactMessage');

      let isValid = true;

      if (nameInput && !nameInput.value.trim()) {
        nameInput.classList.add('error');
        isValid = false;
      } else if (nameInput) {
        nameInput.classList.remove('error');
      }

      if (emailInput && (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim()))) {
        emailInput.classList.add('error');
        isValid = false;
      } else if (emailInput) {
        emailInput.classList.remove('error');
      }

      if (messageInput && !messageInput.value.trim()) {
        messageInput.classList.add('error');
        isValid = false;
      } else if (messageInput) {
        messageInput.classList.remove('error');
      }

      if (!isValid) {
        Toast.error('Please fill out all required fields with valid information.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending message...`;
      }

      setTimeout(() => {
        Toast.success(`Message sent successfully! Our concierge team will reach out to you within 2 business hours.`);
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 700);
    });
  });
}

/* ============================================================
   FAQ ACCORDIONS
   ============================================================ */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      if (!item) return;

      const isAlreadyActive = item.classList.contains('active');
      
      // Close other accordion items in same group
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(other => other.classList.remove('active'));
      }

      if (!isAlreadyActive) {
        item.classList.add('active');
      }
    });
  });
}
