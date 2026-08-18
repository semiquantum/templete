/* ==========================================================================
   Template 05: Professional Agency Website - Aetheria Creative Studio
   Vanilla JavaScript (ES6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Pill Navigation Toggle
  const toggleBtn = document.getElementById('agencyMobileToggle');
  const menuNav = document.getElementById('agencyMenu');

  if (toggleBtn && menuNav) {
    toggleBtn.addEventListener('click', () => {
      menuNav.classList.toggle('active');
    });
  }

  // 2. Portfolio Filter Tabs
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Portfolio Project Lightbox Modal
  const modal = document.getElementById('lightboxModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalClient = document.getElementById('modalClient');
  const modalStack = document.getElementById('modalStack');
  const modalDesc = document.getElementById('modalDesc');
  const closeModal = document.getElementById('closeLightbox');

  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const client = card.getAttribute('data-client');
      const stack = card.getAttribute('data-stack');
      const desc = card.getAttribute('data-desc');

      if (modalTitle) modalTitle.textContent = title;
      if (modalClient) modalClient.textContent = 'Client: ' + client;
      if (modalStack) modalStack.textContent = 'Tech Stack: ' + stack;
      if (modalDesc) modalDesc.textContent = desc;

      if (modal) modal.classList.add('active');
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // 4. Project Form Submission
  const agencyForm = document.getElementById('agencyContactForm');
  if (agencyForm) {
    agencyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('⚡ Project inquiry received! The Aetheria creative team will review your proposal and schedule a discovery sprint call within 24 hours.');
      agencyForm.reset();
    });
  }
});
