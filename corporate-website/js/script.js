/**
 * ApexCorp - Corporate Website Template JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. DYNAMIC COPYRIGHT YEAR
  // ==========================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 2. MOBILE MENU TOGGLE
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMobileMenu = () => {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  const closeMobileMenu = () => {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
  };

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu when clicking on any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // ==========================================
  // 3. STICKY HEADER ON SCROLL
  // ==========================================
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // ==========================================
  // 4. SCROLLSPY ACTIVE LINK HIGHLIGHTING
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  
  const highlightActiveSection = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightActiveSection);

  // ==========================================
  // 5. CONTACT FORM VALIDATION
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Helper: Email validation regex
    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    // Helper: Set error message
    const setError = (inputElement, errorElement, message) => {
      inputElement.classList.add('is-invalid');
      if (errorElement) {
        errorElement.textContent = message;
      }
    };

    // Helper: Clear error message
    const clearError = (inputElement, errorElement) => {
      inputElement.classList.remove('is-invalid');
      if (errorElement) {
        errorElement.textContent = '';
      }
    };

    // Real-time input listeners to clear errors on typing
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          const errorSpan = document.getElementById(`${input.id}Error`) || 
                            (input.id === 'fullName' ? nameError : null);
          clearError(input, errorSpan);
          if (formStatus) formStatus.className = 'form-status';
        });
      }
    });

    // Form Submission Handler
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        setError(nameInput, nameError, 'Full name is required.');
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        setError(nameInput, nameError, 'Name must be at least 2 characters.');
        isValid = false;
      } else {
        clearError(nameInput, nameError);
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        setError(emailInput, emailError, 'Email address is required.');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, emailError, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, emailError);
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        setError(subjectInput, subjectError, 'Subject is required.');
        isValid = false;
      } else if (subjectInput.value.trim().length < 3) {
        setError(subjectInput, subjectError, 'Subject must be at least 3 characters.');
        isValid = false;
      } else {
        clearError(subjectInput, subjectError);
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        setError(messageInput, messageError, 'Message is required.');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        setError(messageInput, messageError, 'Message must be at least 10 characters long.');
        isValid = false;
      } else {
        clearError(messageInput, messageError);
      }

      // If valid, submit form
      if (isValid) {
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.innerHTML = '<img src="images/success.png" alt="Thank you! Your message has been sent successfully. Our team will get back to you shortly.">';
        }
        contactForm.reset();
        
        // Hide success message after 6 seconds
        setTimeout(() => {
          if (formStatus) {
            formStatus.className = 'form-status';
            formStatus.innerHTML = '';
          }
        }, 6000);
      } else {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fix the errors above before submitting.';
        }
      }
    });
  }
});
