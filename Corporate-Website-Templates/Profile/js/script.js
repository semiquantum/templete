/* ==========================================================================
   Template 04: Company Profile Website - Nexus Holdings Group
   Vanilla JavaScript (ES6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const toggleBtn = document.getElementById('nexusMobileToggle');
  const menuNav = document.getElementById('nexusMenu');

  if (toggleBtn && menuNav) {
    toggleBtn.addEventListener('click', () => {
      menuNav.classList.toggle('active');
    });
  }

  // 2. Regional Major Projects Tab Filter
  const regionBtns = document.querySelectorAll('.region-btn');
  const projectCards = document.querySelectorAll('.project-card');

  regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      regionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const region = btn.getAttribute('data-region');

      projectCards.forEach(card => {
        if (region === 'all' || card.getAttribute('data-region') === region) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Contact Form Submission
  const nexusForm = document.getElementById('nexusContactForm');
  if (nexusForm) {
    nexusForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting Nexus Holdings Group Investor Relations & Corporate Affairs. Your message has been routed to our corporate secretary.');
      nexusForm.reset();
    });
  }
});
