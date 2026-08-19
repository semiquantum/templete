/**
 * MAIN INTERACTION ORCHESTRATOR
 * SQ Studio Real Estate Website Template Showcase
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Generic Form Validation & Submission Handling
  const forms = document.querySelectorAll('form:not(#heroSearchForm):not(#modalInquiryForm)');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const requiredInputs = form.querySelectorAll('[required]');
      requiredInputs.forEach(input => {
        const grp = input.closest('.form-group') || input.parentElement;
        let fieldValid = true;

        if (!input.value.trim()) {
          fieldValid = false;
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          fieldValid = false;
        }

        if (!fieldValid) {
          grp.classList.add('has-error');
          isValid = false;
        } else {
          grp.classList.remove('has-error');
        }
      });

      if (isValid) {
        const successBanner = form.querySelector('.form-success-banner');
        if (successBanner) {
          successBanner.classList.add('is-visible');
        }

        if (typeof showToast === 'function') {
          showToast('Inquiry received! Our team will contact you shortly.', 'success');
        }

        form.reset();
        setTimeout(() => {
          if (successBanner) successBanner.classList.remove('is-visible');
        }, 5000);
      }
    });
  });

  // 2. Interactive Floor Plan Switcher (for NESTORA LIVING)
  const floorPlanTabs = document.querySelectorAll('.floor-plan-tab-btn');
  const floorPlanPanels = document.querySelectorAll('.floor-plan-panel');
  if (floorPlanTabs.length > 0 && floorPlanPanels.length > 0) {
    floorPlanTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        floorPlanTabs.forEach(t => t.classList.remove('active'));
        floorPlanPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  }

  // 3. Commercial Lease & ROI Calculator (for URBANEDGE COMMERCIAL)
  const leaseCalcForm = document.getElementById('commercialLeaseCalc');
  if (leaseCalcForm) {
    const calcOutput = document.getElementById('calcMonthlyTotal');
    const calcAnnualOutput = document.getElementById('calcAnnualTotal');
    const sqftInput = document.getElementById('calcSqftInput');
    const rateInput = document.getElementById('calcRateInput');
    const opexInput = document.getElementById('calcOpexInput');

    function calculateLease() {
      const sqft = parseFloat(sqftInput?.value) || 0;
      const rate = parseFloat(rateInput?.value) || 0;
      const opex = parseFloat(opexInput?.value) || 0;

      const totalAnnualRate = rate + opex;
      const annualTotal = sqft * totalAnnualRate;
      const monthlyTotal = annualTotal / 12;

      if (calcOutput) calcOutput.textContent = `$${Math.round(monthlyTotal).toLocaleString()}`;
      if (calcAnnualOutput) calcAnnualOutput.textContent = `$${Math.round(annualTotal).toLocaleString()}`;
    }

    [sqftInput, rateInput, opexInput].forEach(inp => {
      if (inp) inp.addEventListener('input', calculateLease);
    });

    calculateLease();
  }

  // 4. FAQ Accordion handler
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(hdr => {
    hdr.addEventListener('click', () => {
      const item = hdr.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');

      // Close other items in same accordion
      const parentAcc = item.closest('.accordion');
      if (parentAcc) {
        parentAcc.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));
      }

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

  // 5. Scroll Reveal with Intersection Observer
  const revealElements = document.querySelectorAll('.reveal-init');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
});
