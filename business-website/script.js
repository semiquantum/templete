/**
 * MERIDIAN & HOLT — STRATEGIC ADVISORY & ARCHITECTURE
 * Client-side ES6 Logic & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. HEADER SCROLL EFFECT & ACTIVE NAVIGATION TRACKING
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderScroll = () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Highlight active navigation link on scroll using IntersectionObserver
  if ('IntersectionObserver' in window) {
    const navObserverOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('data-nav') === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));
  }

  /* ==========================================================================
     2. ACCESSIBLE MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const focusableDrawerElements = mobileDrawer ? mobileDrawer.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) : [];
  const firstFocusable = focusableDrawerElements[0];
  const lastFocusable = focusableDrawerElements[focusableDrawerElements.length - 1];

  const openMobileMenu = () => {
    mobileDrawer.classList.add('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Set focus to close button
    setTimeout(() => {
      if (mobileCloseBtn) mobileCloseBtn.focus();
    }, 100);
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    mobileMenuBtn.focus();
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileMenu);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Keyboard navigation inside mobile drawer: Trap Focus & ESC support
  if (mobileDrawer) {
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  /* ==========================================================================
     3. PRACTICE AREAS ACCORDION
     ========================================================================== */
  const practiceItems = document.querySelectorAll('.practice-item');

  practiceItems.forEach(item => {
    const btn = item.querySelector('.practice-header-btn');
    const body = item.querySelector('.practice-body');

    if (!btn || !body) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items for clean editorial accordion experience
      practiceItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherBtn = otherItem.querySelector('.practice-header-btn');
          const otherBody = otherItem.querySelector('.practice-body');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.hidden = true;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        body.hidden = true;
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        body.hidden = false;
      }
    });
  });

  /* ==========================================================================
     4. IMPACT METRIC COUNTERS (ANIMATED)
     ========================================================================== */
  const counterElements = document.querySelectorAll('[data-counter]');

  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const isDecimal = target % 1 !== 0;
    const duration = prefersReducedMotion ? 0 : 1600;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;

    if (duration === 0) {
      el.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      const displayVal = isDecimal ? current.toFixed(1) : Math.floor(current);
      el.textContent = `${prefix}${displayVal}${suffix}`;
    }, stepTime);
  };

  if ('IntersectionObserver' in window && counterElements.length > 0) {
    let animated = false;
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counterElements.forEach(animateCounter);
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.25 });

    const metricsPanel = document.querySelector('.impact-metrics-panel');
    if (metricsPanel) {
      counterObserver.observe(metricsPanel);
    }
  }

  /* ==========================================================================
     5. LIVE OFFICE TIME CLOCKS
     ========================================================================== */
  const updateOfficeTimes = () => {
    const timeElements = document.querySelectorAll('.office-time[data-tz]');
    timeElements.forEach(el => {
      const tz = el.getAttribute('data-tz');
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        const timeStr = formatter.format(now);
        
        let tzAbbr = 'GMT';
        if (tz.includes('Zurich')) tzAbbr = 'CET';
        if (tz.includes('New_York')) tzAbbr = 'EST';
        if (tz.includes('Singapore')) tzAbbr = 'SGT';

        el.textContent = `${timeStr} ${tzAbbr}`;
      } catch (err) {
        // Fallback gracefully
      }
    });
  };

  updateOfficeTimes();
  setInterval(updateOfficeTimes, 60000);

  /* ==========================================================================
     6. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const elementsToReveal = document.querySelectorAll(
      '.tenet-card, .practice-item, .case-study-card, .distinction-card, .testimonial-card'
    );

    elementsToReveal.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      if (index % 3 === 1) el.classList.add('delay-100');
      if (index % 3 === 2) el.classList.add('delay-200');
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elementsToReveal.forEach(el => revealObserver.observe(el));
  }

  /* ==========================================================================
     7. FORM VALIDATION & CONFIDENTIAL BRIEF SUBMISSION
     ========================================================================== */
  const consultationForm = document.getElementById('consultation-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateField = (input, errorId, validatorFn, errorMsg) => {
    const errorEl = document.getElementById(errorId);
    const isValid = validatorFn(input.value.trim());

    if (!isValid) {
      input.classList.add('has-error');
      input.setAttribute('aria-invalid', 'true');
      if (errorEl) errorEl.textContent = errorMsg;
      return false;
    } else {
      input.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
      if (errorEl) errorEl.textContent = '';
      return true;
    }
  };

  if (consultationForm) {
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const orgInput = document.getElementById('organization');
    const practiceSelect = document.getElementById('practice');
    const messageInput = document.getElementById('message');
    const ndaCheckbox = document.getElementById('nda-consent');

    // Real-time blur validation
    if (fullnameInput) {
      fullnameInput.addEventListener('blur', () => {
        validateField(fullnameInput, 'err-fullname', val => val.length >= 2, 'Please enter your full legal or professional name.');
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        validateField(emailInput, 'err-email', val => emailRegex.test(val), 'Please provide a valid corporate email address.');
      });
    }

    if (orgInput) {
      orgInput.addEventListener('blur', () => {
        validateField(orgInput, 'err-organization', val => val.length >= 2, 'Please specify your institution or entity name.');
      });
    }

    if (practiceSelect) {
      practiceSelect.addEventListener('change', () => {
        validateField(practiceSelect, 'err-practice', val => val !== '', 'Please select a primary practice focus.');
      });
    }

    if (messageInput) {
      messageInput.addEventListener('blur', () => {
        validateField(messageInput, 'err-message', val => val.length >= 10, 'Please provide at least 10 characters outlining the mandate.');
      });
    }

    // Form submission handler
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(fullnameInput, 'err-fullname', val => val.length >= 2, 'Please enter your full legal or professional name.');
      const isEmailValid = validateField(emailInput, 'err-email', val => emailRegex.test(val), 'Please provide a valid corporate email address.');
      const isOrgValid = validateField(orgInput, 'err-organization', val => val.length >= 2, 'Please specify your institution or entity name.');
      const isPracticeValid = validateField(practiceSelect, 'err-practice', val => val !== '', 'Please select a primary practice focus.');
      const isMessageValid = validateField(messageInput, 'err-message', val => val.length >= 10, 'Please provide at least 10 characters outlining the mandate.');
      
      const errNdaEl = document.getElementById('err-nda');
      const isNdaChecked = ndaCheckbox.checked;
      if (!isNdaChecked) {
        if (errNdaEl) errNdaEl.textContent = 'Please confirm non-disclosure consultation agreement.';
      } else {
        if (errNdaEl) errNdaEl.textContent = '';
      }

      const isFormValid = isNameValid && isEmailValid && isOrgValid && isPracticeValid && isMessageValid && isNdaChecked;

      if (!isFormValid) {
        formStatus.hidden = false;
        formStatus.className = 'form-status-alert is-error';
        formStatus.textContent = 'Please review and resolve the highlighted fields before submitting.';
        
        // Focus first erroneous input
        const firstError = consultationForm.querySelector('.has-error, input:invalid');
        if (firstError) firstError.focus();
        return;
      }

      // Simulate senior partner intake submission
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;
      formStatus.hidden = true;

      setTimeout(() => {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;

        formStatus.hidden = false;
        formStatus.className = 'form-status-alert is-success';
        formStatus.innerHTML = `
          <strong>Mandate Brief Received.</strong><br>
          Thank you, ${fullnameInput.value}. Your brief has been securely routed to the Managing Partners desk. We will reach out to <em>${emailInput.value}</em> within 24 business hours.
        `;

        consultationForm.reset();
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1100);
    });
  }

  /* ==========================================================================
     8. FOOTER DISPATCH SUBSCRIPTION
     ========================================================================== */
  const dispatchForm = document.getElementById('dispatch-form');
  const dispatchEmail = document.getElementById('dispatch-email');
  const dispatchStatus = document.getElementById('dispatch-status');

  if (dispatchForm && dispatchEmail && dispatchStatus) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = dispatchEmail.value.trim();

      if (!emailRegex.test(email)) {
        dispatchStatus.className = 'dispatch-status-msg is-error';
        dispatchStatus.textContent = 'Please enter a valid corporate email.';
        dispatchEmail.focus();
        return;
      }

      dispatchStatus.className = 'dispatch-status-msg is-success';
      dispatchStatus.textContent = 'Subscribed to the Quarterly Meridian Dispatch.';
      dispatchForm.reset();
    });
  }

  /* ==========================================================================
     9. BACK TO TOP BUTTON
     ========================================================================== */
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // Update current year dynamically
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
