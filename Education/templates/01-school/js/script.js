/* ==========================================================================
   Template 01: School Website - Oakwood Academy JS Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // --- 2. FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all items
      faqItems.forEach(el => {
        el.classList.remove('active');
        const elAnswer = el.querySelector('.faq-answer');
        if (elAnswer) elAnswer.style.maxHeight = null;
      });

      // Open clicked item if it wasn't open
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- 3. Animated Counter Stats ---
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasCounted = false;

  const animateCounters = () => {
    statNumbers.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1500; // ms
      const increment = target / (duration / 16);

      let current = 0;
      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Intersection Observer for Stats Counter
  const statsSection = document.querySelector('.stats-banner');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasCounted) {
        animateCounters();
        hasCounted = true;
      }
    }, { threshold: 0.4 });

    observer.observe(statsSection);
  }

  // --- 4. Modal Interactions ---
  const modal = document.getElementById('principalModal');
  const openModalBtn = document.getElementById('openPrincipalModal');
  const closeModalBtn = document.querySelector('.modal-close');

  if (modal && openModalBtn) {
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // --- 5. Form Validation & Toast ---
  const inquiryForm = document.getElementById('admissionForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('parentName').value.trim();
      const email = document.getElementById('parentEmail').value.trim();
      const phone = document.getElementById('parentPhone').value.trim();

      if (!name || !email || !phone) {
        alert('Please fill out all required fields.');
        return;
      }

      // Success Feedback
      alert(`Thank you, ${name}! Your admission inquiry has been received. Our admissions officer will call you back at ${phone}.`);
      inquiryForm.reset();
    });
  }

  // --- 6. Testimonial Carousel Simple Toggle ---
  const testimonials = [
    {
      text: '"Oakwood Academy has transformed our child\'s confidence and academic performance. The teachers are genuinely compassionate and dedicated to excellence."',
      author: 'Eleanor Vance',
      role: 'Mother of Julian (Grade 7)'
    },
    {
      text: '"The STEM and robotics programs at Oakwood gave my daughter early exposure to technology. She loves coming to school every single day!"',
      author: 'Marcus Holloway',
      role: 'Father of Chloe (Grade 5)'
    },
    {
      text: '"A perfect balance between academic rigor, athletics, and character development. We could not have asked for a better school community."',
      author: 'Dr. Sarah Jenkins',
      role: 'Parent & Education Researcher'
    }
  ];

  let currentTestimonialIndex = 0;
  const quoteEl = document.querySelector('.testimonial-text');
  const authorEl = document.querySelector('.testimonial-author');
  const roleEl = document.querySelector('.testimonial-role');

  if (quoteEl && authorEl && roleEl) {
    setInterval(() => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      const t = testimonials[currentTestimonialIndex];
      quoteEl.innerText = t.text;
      authorEl.innerText = t.author;
      roleEl.innerText = t.role;
    }, 5000);
  }
});
