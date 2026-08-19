/* ==========================================================================
   Template 04: Coaching Institute - Apex Academy JS Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Live Countdown Timer ---
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secsEl = document.getElementById('secs');

  // Set target deadline: 3 days from now
  const targetDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
      if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
      if (minsEl) minsEl.innerText = mins < 10 ? '0' + mins : mins;
      if (secsEl) secsEl.innerText = secs < 10 ? '0' + secs : secs;
    }
  };

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // --- 2. FAQ Accordion ---
  const apexFaqItems = document.querySelectorAll('.apex-faq-item');
  apexFaqItems.forEach(item => {
    const btn = item.querySelector('.apex-faq-btn');
    const content = item.querySelector('.apex-faq-content');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      apexFaqItems.forEach(el => {
        el.classList.remove('active');
        const c = el.querySelector('.apex-faq-content');
        if (c) c.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // --- 3. Hero Lead Capture Form ---
  const heroForm = document.getElementById('heroLeadForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName').value;
      const targetExam = document.getElementById('leadExam').value;
      
      alert(`⚡ Congratulations ${name}! Your seat reservation for ${targetExam} has been initiated. Our Academic Counselor will call you shortly.`);
      heroForm.reset();
    });
  }
});
