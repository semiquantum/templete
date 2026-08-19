/* ==========================================================================
   Template 02: College Website - Crestview Institute JS Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Program Category Filter Tabs ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const degreeCards = document.querySelectorAll('.degree-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      degreeCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 2. FAQ Accordion ---
  const collegeFaqItems = document.querySelectorAll('.college-faq-item');

  collegeFaqItems.forEach(item => {
    const btn = item.querySelector('.college-faq-btn');
    const content = item.querySelector('.college-faq-content');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      collegeFaqItems.forEach(el => {
        el.classList.remove('active');
        const c = el.querySelector('.college-faq-content');
        if (c) c.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // --- 3. Animated Placement Counters ---
  const counters = document.querySelectorAll('.counter-val');
  let counted = false;

  const runCounter = () => {
    counters.forEach(c => {
      const target = +c.getAttribute('data-target');
      const increment = target / 80;
      let val = 0;

      const update = () => {
        val += increment;
        if (val < target) {
          c.innerText = Math.ceil(val);
          requestAnimationFrame(update);
        } else {
          c.innerText = target;
        }
      };
      update();
    });
  };

  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counted) {
        runCounter();
        counted = true;
      }
    }, { threshold: 0.3 });
    observer.observe(statsStrip);
  }

  // --- 4. Form Submission ---
  const applyForm = document.getElementById('collegeApplyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const applicantName = document.getElementById('applicantName').value;
      const applicantProgram = document.getElementById('applicantProgram').value;
      
      alert(`Application initiated for ${applicantName}! Confirmation details for ${applicantProgram} have been sent to your email.`);
      applyForm.reset();
    });
  }
});
