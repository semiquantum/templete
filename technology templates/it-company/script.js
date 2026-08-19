/**
 * CoreMatrix IT Solutions — Interactive Engine
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

  // Close on menu link click
  navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // Auto-close on resize to desktop
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
  // Accessible FAQ Accordion
  // ==========================================
  const faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach((btn, index) => {
    const panel = btn.nextElementSibling;
    if (panel) {
      const panelId = `it-faq-panel-${index + 1}`;
      panel.id = panelId;
      btn.setAttribute('aria-controls', panelId);
    }

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other items
      faqButtons.forEach(otherBtn => {
        otherBtn.setAttribute('aria-expanded', 'false');
        const otherPanel = otherBtn.nextElementSibling;
        if (otherPanel) otherPanel.hidden = true;
        const icon = otherBtn.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
      });

      // Toggle clicked item
      btn.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) panel.hidden = isExpanded;
      const icon = btn.querySelector('.faq-icon');
      if (icon) icon.textContent = isExpanded ? '+' : '−';
    });
  });

  // ==========================================
  // Contact Form Validation & State Handling
  // ==========================================
  const contactForm = document.getElementById('itContactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    let firstInvalidField = null;

    const fieldsToValidate = contactForm.querySelectorAll('[required]');

    fieldsToValidate.forEach(field => {
      const errorContainer = contactForm.querySelector(`[data-error-for="${field.id}"]`);
      let errorMessage = '';

      if (!field.value.trim()) {
        errorMessage = 'This field is required.';
      } else if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          errorMessage = 'Please enter a valid email address.';
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

    const formStatus = contactForm.querySelector('.form-status');
    if (!formStatus) return;

    formStatus.className = 'form-status';

    if (!isValid) {
      formStatus.textContent = 'Please review and correct the highlighted fields.';
      formStatus.classList.add('error');
      firstInvalidField?.focus();
    } else {
      formStatus.textContent = 'Thank you! Your architecture consultation request has been submitted successfully.';
      formStatus.classList.add('success');
      contactForm.reset();

      // Clear aria-invalid and errors
      contactForm.querySelectorAll('[aria-invalid]').forEach(f => f.setAttribute('aria-invalid', 'false'));
      contactForm.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    }
  });
});
