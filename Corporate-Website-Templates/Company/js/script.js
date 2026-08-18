/* ==========================================================================
   Template 01: Corporate Company Website - Apex Global
   Vanilla JavaScript (ES6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Navigation Toggle
  const hamburger = document.getElementById('hamburgerToggle');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Header Scroll Shadow & Sticky Effect
  const header = document.querySelector('.header');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Back to top button toggle
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('active');
    } else {
      backToTopBtn?.classList.remove('active');
    }

    // Active Section Tracking
    highlightActiveNavLink();
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Highlight Active Navigation Link on Scroll
  function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }

  // 4. Animated Counters using IntersectionObserver
  const counterElements = document.querySelectorAll('.stat-number[data-target]');
  let animatedCounters = false;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedCounters) {
        startCounters();
        animatedCounters = true;
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('achievements');
  if (statsSection) {
    counterObserver.observe(statsSection);
  }

  function startCounters() {
    counterElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000; // 2 seconds
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = prefix + target.toLocaleString() + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }
      }, stepTime);
    });
  }

  // 5. Case Study Category Tabs Filter
  const tabBtns = document.querySelectorAll('.tab-btn');
  const caseCards = document.querySelectorAll('.case-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      caseCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Contact Form Validation UI & Success Modal
  const contactForm = document.getElementById('corporateContactForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Input fields
      const nameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('emailAddress');
      const messageInput = document.getElementById('userMessage');

      // Clear previous errors
      clearErrors([nameInput, emailInput, messageInput]);

      // Validate Name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Full Name is required');
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Work Email is required');
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Project details are required');
        isValid = false;
      }

      if (isValid) {
        // Show success modal
        if (successModal) {
          successModal.classList.add('active');
        }
        contactForm.reset();
      }
    });
  }

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  function showError(input, message) {
    input.classList.add('error');
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-msg')) {
      errorElement.textContent = message;
      errorElement.classList.add('active');
    }
  }

  function clearErrors(inputs) {
    inputs.forEach(input => {
      if (input) {
        input.classList.remove('error');
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-msg')) {
          errorElement.classList.remove('active');
        }
      }
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
