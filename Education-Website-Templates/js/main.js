/**
 * ACADEMIA INSTITUTE — EDUCATION WEBSITE TEMPLATE
 * Interactive Vanilla JavaScript Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initStickyNavbar();
  initMobileDrawer();
  initActiveNavHighlight();
  initCourseFilters();
  initAdmissionFormValidation();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. STICKY NAVBAR SCROLL BEHAVIOR
   -------------------------------------------------------------------------- */
function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   2. MOBILE DRAWER TOGGLE
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!hamburgerBtn || !mobileDrawer || !drawerOverlay) return;

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   3. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
   -------------------------------------------------------------------------- */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  if (sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   4. COURSE / PROGRAM FILTERING
   -------------------------------------------------------------------------- */
function initCourseFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  if (filterBtns.length === 0 || courseCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. ADMISSION / CONTACT FORM VALIDATION & TOAST
   -------------------------------------------------------------------------- */
function initAdmissionFormValidation() {
  const form = document.getElementById('admissionForm');
  if (!form) return;

  const submitBtn = document.getElementById('admissionSubmitBtn');
  const successMessage = document.getElementById('admissionSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('emailAddress');
    const phoneInput = document.getElementById('phoneNumber');
    const programSelect = document.getElementById('programInterest');
    const messageInput = document.getElementById('inquiryMessage');

    let isValid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length < 2) {
      setError(nameInput, 'Please enter your full name (at least 2 characters).');
      isValid = false;
    } else clearError(nameInput);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    } else clearError(emailInput);

    const phoneRegex = /^[0-9+\s()\-]{7,20}$/;
    if (!phoneRegex.test(phone)) {
      setError(phoneInput, 'Please enter a valid phone number.');
      isValid = false;
    } else clearError(phoneInput);

    if (!programSelect.value) {
      setError(programSelect, 'Please select a program of interest.');
      isValid = false;
    } else clearError(programSelect);

    if (message.length < 10) {
      setError(messageInput, 'Please enter your inquiry details (at least 10 characters).');
      isValid = false;
    } else clearError(messageInput);

    if (!isValid) {
      const firstError = form.querySelector('.has-error .form-input, .has-error .form-select, .has-error .form-textarea');
      if (firstError) firstError.focus();
      if (successMessage) successMessage.hidden = true;
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Inquiry…';
    }

    // Static-template fallback: store the inquiry locally so the form has a
    // real completion flow without pretending to send data to a server.
    const inquiry = {
      name,
      email,
      phone,
      program: programSelect.options[programSelect.selectedIndex].text,
      message,
      submittedAt: new Date().toISOString()
    };

    try {
      const saved = JSON.parse(localStorage.getItem('academiaAdmissionInquiries') || '[]');
      saved.push(inquiry);
      localStorage.setItem('academiaAdmissionInquiries', JSON.stringify(saved));
    } catch (storageError) {
      console.warn('Local inquiry storage is unavailable:', storageError);
    }

    window.setTimeout(() => {
      form.reset();
      form.querySelectorAll('.has-error').forEach(group => group.classList.remove('has-error'));
      if (successMessage) successMessage.hidden = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Application Inquiry 🚀';
      }
      showToast('Application inquiry submitted successfully!');
    }, 450);
  });

  function setError(element, message) {
    const parent = element.closest('.form-group');
    if (!parent) return;
    parent.classList.add('has-error');
    const errorSpan = parent.querySelector('.form-error-msg');
    if (errorSpan) errorSpan.textContent = message;
  }

  function clearError(element) {
    const parent = element.closest('.form-group');
    if (!parent) return;
    parent.classList.remove('has-error');
  }
}

/* --------------------------------------------------------------------------
   6. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLLING FOR INTERNAL LINKS
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
