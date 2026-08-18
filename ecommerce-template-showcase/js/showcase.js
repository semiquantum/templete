/* ============================================================
   SHOWCASE HUB SCRIPTS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initShowcaseFilters();
  initStatsCounters();
});

function initShowcaseFilters() {
  const filterBtns = document.querySelectorAll('.showcase-filter-btn');
  const templateCards = document.querySelectorAll('.template-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.style.backgroundColor = 'transparent';
        b.style.color = '#9ca3af';
        b.style.borderColor = 'var(--showcase-border)';
      });

      btn.classList.add('active');
      btn.style.backgroundColor = 'rgba(56, 189, 248, 0.15)';
      btn.style.color = '#38bdf8';
      btn.style.borderColor = '#38bdf8';

      const filter = btn.getAttribute('data-filter');

      templateCards.forEach(card => {
        const storeType = card.getAttribute('data-store');
        if (filter === 'all' || storeType === filter) {
          card.style.display = 'flex';
          card.style.animation = 'scaleUp 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initStatsCounters() {
  const statNumbers = document.querySelectorAll('.stat-counter');
  
  statNumbers.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, stepTime);
  });
}
