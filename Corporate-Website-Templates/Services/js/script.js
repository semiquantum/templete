/* ==========================================================================
   Template 02: Corporate Services Website - Servix Business Solutions
   Vanilla JavaScript (ES6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('servixMobileToggle');
  const servixMenu = document.getElementById('servixMenu');

  if (mobileToggle && servixMenu) {
    mobileToggle.addEventListener('click', () => {
      servixMenu.classList.toggle('active');
    });
  }

  // 2. Interactive ROI / Cost Efficiency Calculator Widget
  const teamSizeSlider = document.getElementById('teamSizeSlider');
  const hourlyRateSlider = document.getElementById('hourlyRateSlider');
  const teamSizeVal = document.getElementById('teamSizeVal');
  const hourlyRateVal = document.getElementById('hourlyRateVal');
  const annualSavingsVal = document.getElementById('annualSavingsVal');

  function calculateSavings() {
    if (!teamSizeSlider || !hourlyRateSlider || !annualSavingsVal) return;

    const teamSize = parseInt(teamSizeSlider.value);
    const hourlyRate = parseInt(hourlyRateSlider.value);

    // Servix average 32% efficiency boost calculation formula
    const hoursSavedPerYear = teamSize * 450; // 450 hrs saved per employee per year
    const estimatedSavings = Math.round(hoursSavedPerYear * hourlyRate * 0.75);

    teamSizeVal.textContent = teamSize;
    hourlyRateVal.textContent = '$' + hourlyRate + '/hr';
    annualSavingsVal.textContent = '$' + estimatedSavings.toLocaleString();
  }

  if (teamSizeSlider && hourlyRateSlider) {
    teamSizeSlider.addEventListener('input', calculateSavings);
    hourlyRateSlider.addEventListener('input', calculateSavings);
    calculateSavings(); // Initial calculation
  }

  // 3. Testimonial Carousel Slider
  const slides = document.querySelectorAll('.slide-item');
  const dotsContainer = document.getElementById('sliderDots');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length > 0 && dotsContainer) {
    // Create pagination dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');
    const wrapper = document.querySelector('.slider-wrapper');

    function goToSlide(index) {
      currentSlide = index;
      if (wrapper) {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
      }
      dots.forEach(d => d.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      goToSlide(currentSlide);
    }

    // Auto-advance every 5 seconds
    slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-play on hover
    const sliderBox = document.querySelector('.slider-container');
    if (sliderBox) {
      sliderBox.addEventListener('mouseenter', () => clearInterval(slideInterval));
      sliderBox.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
    }
  }

  // 4. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all active items
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

      // If clicked item was not active, open it
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // 5. Consultation Form Validation UI
  const servixForm = document.getElementById('servixConsultationForm');
  if (servixForm) {
    servixForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your consultation request has been logged. A Servix solution specialist will contact you shortly.');
      servixForm.reset();
    });
  }
});
