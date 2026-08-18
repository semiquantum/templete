/* ==========================================================================
   Template 03: Business Consulting Website - Vanguard Strategic Advisory
   Vanilla JavaScript (ES6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const toggleBtn = document.getElementById('vanguardMobileToggle');
  const menuNav = document.getElementById('vanguardMenu');

  if (toggleBtn && menuNav) {
    toggleBtn.addEventListener('click', () => {
      menuNav.classList.toggle('active');
    });
  }

  // 2. Strategy Domain Tabs Switcher
  const tabBtns = document.querySelectorAll('.strategy-tab-btn');
  const domainTitle = document.getElementById('domainTitle');
  const domainDesc = document.getElementById('domainDesc');
  const domainBullets = document.getElementById('domainBullets');

  const domainData = {
    ma: {
      title: 'Mergers & Acquisitions Advisory',
      desc: 'End-to-end strategic deal advisory, buy-side due diligence, valuation modeling, and post-merger operational integration.',
      bullets: [
        'Cross-border valuation & synergist modeling',
        'Post-merger leadership & culture integration',
        'Regulatory antitrust approval strategies'
      ]
    },
    restructuring: {
      title: 'Digital Business Model Transformation',
      desc: 'Re-engineering legacy business units into agile, high-margin enterprise platforms powered by machine learning and cloud infrastructure.',
      bullets: [
        'Legacy unit rationalization & spin-offs',
        'AI & automation roadmap execution',
        'Enterprise margin expansion optimization'
      ]
    },
    governance: {
      title: 'Executive & C-Suite Governance',
      desc: 'Aligning corporate board governance, ESG frameworks, executive compensation alignment, and investor relations.',
      bullets: [
        'Board governance & audit committee structure',
        'ESG integration & sustainability reporting',
        'Crisis communications & shareholder defense'
      ]
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const domainKey = btn.getAttribute('data-domain');
      const data = domainData[domainKey];

      if (data && domainTitle && domainDesc && domainBullets) {
        domainTitle.textContent = data.title;
        domainDesc.textContent = data.desc;
        domainBullets.innerHTML = data.bullets.map(b => `
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${b}</span>
          </li>
        `).join('');
      }
    });
  });

  // 3. Interactive Budget Selector Toggle
  const budgetBtns = document.querySelectorAll('.budget-btn');
  budgetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      budgetBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // 4. Booking Form Validation & Submission
  const bookingForm = document.getElementById('vanguardBookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your private advisory session request has been submitted to Vanguard Strategic Advisory. A Senior Partner will contact your executive office within 12 hours.');
      bookingForm.reset();
    });
  }
});
