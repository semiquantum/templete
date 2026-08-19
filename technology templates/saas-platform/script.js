/**
 * FlowPilot SaaS Platform — Interactive Engine
 * HTML5 / CSS3 / Vanilla ES6 JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-ready');
  document.documentElement.classList.remove('no-js');

  // ==========================================
  // Mobile Navigation
  // ==========================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('#menu');

  function openMobileMenu() {
    if (!menuToggle || !navMenu) return;
    navMenu.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation');
  }

  function closeMobileMenu() {
    if (!menuToggle || !navMenu) return;
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }

  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });

  // ==========================================
  // Smooth Scrolling Navigation
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetEl.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // ==========================================
  // Scroll Reveal Animations
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // ==========================================
  // Interactive Pricing Toggle (Monthly / Annual)
  // ==========================================
  const pricingToggle = document.getElementById('pricingToggle');
  const priceValues = document.querySelectorAll('.price-val');

  pricingToggle?.addEventListener('click', () => {
    const isAnnual = pricingToggle.getAttribute('aria-checked') === 'true';
    const newAnnualState = !isAnnual;

    pricingToggle.setAttribute('aria-checked', String(newAnnualState));

    priceValues.forEach(priceEl => {
      const monthly = priceEl.getAttribute('data-monthly');
      const annual = priceEl.getAttribute('data-annual');
      priceEl.textContent = newAnnualState ? annual : monthly;
    });
  });

  // ==========================================
  // Accessible FAQ Accordion
  // ==========================================
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach((btn, index) => {
    const panel = btn.nextElementSibling;
    if (panel) {
      const panelId = `saas-faq-panel-${index + 1}`;
      panel.id = panelId;
      btn.setAttribute('aria-controls', panelId);
    }

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      faqTriggers.forEach(otherBtn => {
        otherBtn.setAttribute('aria-expanded', 'false');
        const otherPanel = otherBtn.nextElementSibling;
        if (otherPanel) otherPanel.hidden = true;
        const icon = otherBtn.querySelector('.toggle-icon');
        if (icon) icon.textContent = '+';
      });

      btn.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) panel.hidden = isExpanded;
      const icon = btn.querySelector('.toggle-icon');
      if (icon) icon.textContent = isExpanded ? '+' : '−';
    });
  });

  // ==========================================
  // Contact & Trial Form Validation
  // ==========================================
  const saasForm = document.getElementById('saasForm');
  saasForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    let firstInvalidField = null;

    const fieldsToValidate = saasForm.querySelectorAll('[required]');

    fieldsToValidate.forEach(field => {
      const errorContainer = saasForm.querySelector(`[data-error-for="${field.id}"]`);
      let errorMessage = '';

      if (!field.value.trim()) {
        errorMessage = 'This field is required.';
      } else if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          errorMessage = 'Please enter a valid work email address.';
        }
      }

      if (errorMessage) {
        field.setAttribute('aria-invalid', 'true');
        if (errorContainer) errorContainer.textContent = errorMessage;
        if (!firstInvalidField) firstInvalidField = field;
        isValid = false;
      } else {
        field.setAttribute('aria-invalid', 'false');
        if (errorContainer) errorContainer.textContent = '';
      }
    });

    const formStatus = saasForm.querySelector('.form-status');
    if (!formStatus) return;

    formStatus.className = 'form-status';

    if (!isValid) {
      formStatus.textContent = 'Please correct the highlighted fields above.';
      formStatus.classList.add('error');
      firstInvalidField?.focus();
    } else {
      formStatus.textContent = 'Success! Your trial sandbox has been provisioned. Check your email for access instructions.';
      formStatus.classList.add('success');
      saasForm.reset();

      saasForm.querySelectorAll('[aria-invalid]').forEach(f => f.setAttribute('aria-invalid', 'false'));
      saasForm.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    }
  });
});
