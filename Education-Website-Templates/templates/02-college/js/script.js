/**
 * Template 02: College Website JS
 * Apex Institute of Arts & Sciences
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Drawer Toggle
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.style.display === 'flex';
      navMenu.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '76px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#FFFFFF';
        navMenu.style.padding = '1.5rem';
        navMenu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      }
    });
  }

  // Program Tab Switcher
  const tabButtons = document.querySelectorAll('.tab-btn');
  const degreeCards = document.querySelectorAll('.degree-card');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      degreeCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Fee Calculator Widget
  const degreeSelect = document.getElementById('calcDegree');
  const housingSelect = document.getElementById('calcHousing');
  const scholarshipSelect = document.getElementById('calcScholarship');
  const calcOutput = document.getElementById('calcOutput');

  function calculateFee() {
    if (!degreeSelect || !calcOutput) return;

    let baseFee = parseInt(degreeSelect.value || '12000', 10);
    let housingFee = parseInt(housingSelect?.value || '0', 10);
    let scholarshipWaiver = parseFloat(scholarshipSelect?.value || '0');

    let totalTuition = baseFee + housingFee;
    let discount = totalTuition * scholarshipWaiver;
    let finalFee = Math.max(0, totalTuition - discount);

    calcOutput.textContent = `$${finalFee.toLocaleString()} / year`;
  }

  if (degreeSelect) degreeSelect.addEventListener('change', calculateFee);
  if (housingSelect) housingSelect.addEventListener('change', calculateFee);
  if (scholarshipSelect) scholarshipSelect.addEventListener('change', calculateFee);

  // Animated Placement Statistics
  const counters = document.querySelectorAll('.placement-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        let current = 0;
        const step = Math.ceil(target / 60);

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.textContent = target + suffix;
            clearInterval(timer);
          } else {
            counter.textContent = current + suffix;
          }
        }, 30);
      });
    }
  }, { threshold: 0.3 });

  const placementSec = document.getElementById('placementSec');
  if (placementSec) observer.observe(placementSec);

  // Contact Form Validation
  const collegeForm = document.getElementById('collegeInquiryForm');
  const formModal = document.getElementById('collegeModal');
  const closeModal = document.getElementById('closeCollegeModal');

  if (collegeForm) {
    collegeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cName').value.trim();
      const email = document.getElementById('cEmail').value.trim();

      if (name && email) {
        if (formModal) formModal.style.display = 'flex';
        collegeForm.reset();
      } else {
        alert('Please fill out your Name and Email Address.');
      }
    });
  }

  if (closeModal && formModal) {
    closeModal.addEventListener('click', () => {
      formModal.style.display = 'none';
    });
  }
});
