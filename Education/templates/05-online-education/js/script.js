/* ==========================================================================
   Template 05: Online Education Platform - SkillVerse JS Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('heroSearchInput');
  const courseCards = document.querySelectorAll('.course-card');
  const pillBtns = document.querySelectorAll('.pill-btn');
  const noResultsEl = document.getElementById('noResultsMsg');

  let activeCategory = 'all';
  let activeSearchTerm = '';

  // --- 1. Live Client-Side Search & Filter Engine ---
  const filterCourses = () => {
    let visibleCount = 0;

    courseCards.forEach(card => {
      const title = card.querySelector('h3').innerText.toLowerCase();
      const category = card.getAttribute('data-category').toLowerCase();
      const instructor = card.querySelector('.inst-name').innerText.toLowerCase();

      const matchesSearch = title.includes(activeSearchTerm) || instructor.includes(activeSearchTerm) || category.includes(activeSearchTerm);
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);

      if (matchesSearch && matchesCategory) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  // Listen to Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchTerm = e.target.value.toLowerCase().trim();
      filterCourses();
    });
  }

  // Listen to Category Pills
  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeCategory = btn.getAttribute('data-cat').toLowerCase();
      filterCourses();
    });
  });

  // --- 2. Interactive Course Detail Modal ---
  const courseModal = document.getElementById('courseDetailModal');
  const modalTitle = document.getElementById('mTitle');
  const modalDesc = document.getElementById('mDesc');
  const modalInst = document.getElementById('mInst');
  const modalPrice = document.getElementById('mPrice');
  const modalClose = document.querySelector('.modal-close-btn');

  document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.course-card');
      const title = card.querySelector('h3').innerText;
      const price = card.querySelector('.price-tag').innerText;
      const inst = card.querySelector('.inst-name').innerText;

      if (modalTitle && courseModal) {
        modalTitle.innerText = title;
        modalPrice.innerText = price;
        modalInst.innerText = `Taught by ${inst}`;
        modalDesc.innerText = `Master ${title} with step-by-step project-based lessons, downloadable exercise files, and personalized feedback from ${inst}.`;
        courseModal.classList.add('active');
      }
    });
  });

  if (modalClose && courseModal) {
    modalClose.addEventListener('click', () => {
      courseModal.classList.remove('active');
    });

    courseModal.addEventListener('click', (e) => {
      if (e.target === courseModal) {
        courseModal.classList.remove('active');
      }
    });
  }

  // --- 3. FAQ Accordion ---
  const edFaqItems = document.querySelectorAll('.ed-faq-item');
  edFaqItems.forEach(item => {
    const btn = item.querySelector('.ed-faq-btn');
    const content = item.querySelector('.ed-faq-content');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      edFaqItems.forEach(el => {
        el.classList.remove('active');
        const c = el.querySelector('.ed-faq-content');
        if (c) c.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
