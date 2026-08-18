/**
 * Form & Foundry — Business Agency Template Script
 * Modern Vanilla JavaScript ES6
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mark JS as loaded for smooth reveal transitions
  document.documentElement.classList.add('js-ready');
  document.documentElement.classList.remove('no-js');

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryMenu = document.querySelector('#primary-menu');

  function openMenu() {
    if (!menuToggle || !primaryMenu) return;
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation menu');
    primaryMenu.classList.add('open');
  }

  function closeMenu() {
    if (!menuToggle || !primaryMenu) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    primaryMenu.classList.remove('open');
  }

  if (menuToggle && primaryMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking on any navigation link
    primaryMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Close menu on resize if screen becomes larger than mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });
  }

  /* ==========================================================================
     SMOOTH SCROLLING FOR ANCHOR LINKS
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });

        // Update URL hash safely without jump
        if (history.pushState) {
          history.pushState(null, '', targetId);
        }
      }
    });
  });

  /* ==========================================================================
     INTERSECTION OBSERVER FOR SCROLL REVEALS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
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

  /* ==========================================================================
     FAQ ACCORDION (ACCESSIBLE ARIA)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item, index) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (trigger && panel) {
      const panelId = `faq-panel-${index + 1}`;
      const triggerId = `faq-trigger-${index + 1}`;

      trigger.id = triggerId;
      trigger.setAttribute('aria-controls', panelId);
      panel.id = panelId;
      panel.setAttribute('aria-labelledby', triggerId);
      panel.setAttribute('role', 'region');

      trigger.addEventListener('click', () => {
        const isCurrentlyExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other items in this accordion
        faqItems.forEach(otherItem => {
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherPanel = otherItem.querySelector('.faq-panel');
          if (otherTrigger && otherPanel && otherTrigger !== trigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherPanel.hidden = true;
          }
        });

        // Toggle clicked item
        trigger.setAttribute('aria-expanded', String(!isCurrentlyExpanded));
        panel.hidden = isCurrentlyExpanded;
      });
    }
  });

  /* ==========================================================================
     CONTACT FORM VALIDATION & FEEDBACK
     ========================================================================== */
  const contactForm = document.querySelector('#agency-contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      let firstInvalidInput = null;

      // Required text inputs, selects, textareas
      const requiredInputs = contactForm.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        const fieldName = input.id;
        const errorContainer = contactForm.querySelector(`[data-error-for="${fieldName}"]`);
        let errorMessage = '';

        const value = input.value.trim();

        if (!value) {
          errorMessage = 'This field is required.';
        } else if (input.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid work email address.';
          }
        }

        if (errorMessage) {
          isValid = false;
          input.setAttribute('aria-invalid', 'true');
          if (errorContainer) {
            errorContainer.textContent = errorMessage;
          }
          if (!firstInvalidInput) {
            firstInvalidInput = input;
          }
        } else {
          input.setAttribute('aria-invalid', 'false');
          if (errorContainer) {
            errorContainer.textContent = '';
          }
        }
      });

      const statusContainer = contactForm.querySelector('.form-status');

      if (!isValid) {
        if (statusContainer) {
          statusContainer.className = 'form-status error';
          statusContainer.textContent = 'Please review and correct the required fields above.';
        }
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
      } else {
        if (statusContainer) {
          statusContainer.className = 'form-status success';
          statusContainer.textContent = 'Thank you! Your creative brief has been received. Our partners will be in touch shortly (Frontend Demo).';
        }
        contactForm.reset();
        contactForm.querySelectorAll('[aria-invalid]').forEach(el => el.setAttribute('aria-invalid', 'false'));
        contactForm.querySelectorAll('[data-error-for]').forEach(el => el.textContent = '');
      }
    });

    // Real-time error clearing on input
    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        if (input.getAttribute('aria-invalid') === 'true') {
          input.setAttribute('aria-invalid', 'false');
          const err = contactForm.querySelector(`[data-error-for="${input.id}"]`);
          if (err) err.textContent = '';
        }
      });
    });
  }
});
