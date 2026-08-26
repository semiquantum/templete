/**
 * Template 01: School Website JS
 * Oakridge International Academy
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Drawer
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerCloseBtn');
  const mobileLinks = document.querySelectorAll('.mobile-links a');

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // Navbar Scroll & Back-to-Top State
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('active');
    } else {
      backToTopBtn?.classList.remove('active');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Animated Statistics Counter
  const counterElements = document.querySelectorAll('.counter-number');
  let animated = false;

  const counterSection = document.getElementById('statsCounterSection');
  if (counterSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const speed = Math.max(1, Math.floor(target / 80));

          const updateCounter = () => {
            count += speed;
            if (count < target) {
              counter.innerText = count + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target + suffix;
            }
          };
          updateCounter();
        });
      }
    }, { threshold: 0.3 });

    counterObserver.observe(counterSection);
  }

  // FAQ Accordion
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.faq-body');
      const isActive = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.faq-body');
        if (otherBody) otherBody.style.maxHeight = null;
        const otherHeader = otherItem.querySelector('.faq-header');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Testimonials Slider
  const testimonials = [
    {
      name: "Eleanor Vance",
      role: "Parent of Grade 5 Student",
      avatar: "EV",
      text: "Oakridge International Academy has provided a truly nurturing and stimulating environment for my daughter. The teachers treat every child with individual care and encouragement."
    },
    {
      name: "Marcus Thorne",
      role: "Alumni Parent & PTA Member",
      avatar: "MT",
      text: "The balanced focus between STEM innovation and creative arts at Oakridge gave my son the confidence to gain admission into top global secondary programs."
    },
    {
      name: "Sophia Chen",
      role: "Senior High School Prefect",
      avatar: "SC",
      text: "Studying at Oakridge is an inspiring journey. The interactive smart labs, passionate faculty, and vibrant student clubs make learning a joy every single day."
    }
  ];

  let currentTestimonial = 0;
  const tAvatar = document.getElementById('testiAvatar');
  const tText = document.getElementById('testiText');
  const tName = document.getElementById('testiName');
  const tRole = document.getElementById('testiRole');
  const dotsContainer = document.getElementById('testiDots');

  function renderTestimonial(index) {
    if (!tText) return;
    const item = testimonials[index];
    tAvatar.textContent = item.avatar;
    tText.textContent = `"${item.text}"`;
    tName.textContent = item.name;
    tRole.textContent = item.role;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
    }
  }

  if (dotsContainer) {
    testimonials.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = `dot ${i === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        currentTestimonial = i;
        renderTestimonial(i);
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Form Validation & Modal
  const admissionForm = document.getElementById('admissionForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const parentName = document.getElementById('parentName');
      const email = document.getElementById('parentEmail');
      const phone = document.getElementById('parentPhone');
      const studentGrade = document.getElementById('studentGrade');

      // Clear errors
      document.querySelectorAll('.error-msg').forEach(msg => msg.style.display = 'none');

      if (!parentName.value.trim()) {
        showError('parentNameError', 'Parent full name is required');
        isValid = false;
      }

      if (!email.value.trim() || !validateEmail(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
      }

      if (!phone.value.trim() || phone.value.length < 7) {
        showError('phoneError', 'Valid contact phone number is required');
        isValid = false;
      }

      if (!studentGrade.value) {
        showError('gradeError', 'Please select a grade/class');
        isValid = false;
      }

      if (isValid) {
        // Open Modal
        if (successModal) {
          successModal.classList.add('active');
        }
        admissionForm.reset();
      }
    });
  }

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  function showError(id, message) {
    const errorEl = document.getElementById(id);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
