// Freelancer Portfolio - Interactive JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle & Smooth Scroll
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scroll Handler for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (navMenu) navMenu.classList.remove('active');

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                if (targetId === '#contact') {
                    setTimeout(() => {
                        const nameInput = document.getElementById('freelancerClientName');
                        if (nameInput) nameInput.focus();
                    }, 500);
                }
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // 2. Pricing Tier Toggle Switch (Project vs Monthly)
    const toggleSwitch = document.getElementById('pricingToggle');
    const priceCards = document.querySelectorAll('.pricing-card');

    if (toggleSwitch && priceCards) {
        toggleSwitch.addEventListener('click', () => {
            toggleSwitch.classList.toggle('monthly');
            const isMonthly = toggleSwitch.classList.contains('monthly');

            document.getElementById('billingLabelFixed').style.color = isMonthly ? 'var(--text-muted)' : 'var(--primary-indigo)';
            document.getElementById('billingLabelMonthly').style.color = isMonthly ? 'var(--primary-indigo)' : 'var(--text-muted)';

            priceCards.forEach(card => {
                const fixedPrice = card.getAttribute('data-fixed');
                const monthlyPrice = card.getAttribute('data-monthly');
                const priceDisplay = card.querySelector('.price-num');
                const periodDisplay = card.querySelector('.price-period');

                if (isMonthly) {
                    if (priceDisplay) priceDisplay.innerText = monthlyPrice;
                    if (periodDisplay) periodDisplay.innerText = '/month';
                } else {
                    if (priceDisplay) priceDisplay.innerText = fixedPrice;
                    if (periodDisplay) priceDisplay.innerText = ' fixed';
                }
            });
        });
    }

    // 3. Interactive Project Quote Calculator
    const calcCheckboxes = document.querySelectorAll('.calc-checkbox');
    const calcTotalPrice = document.getElementById('calcTotalPrice');
    const calcTimeline = document.getElementById('calcTimeline');
    const copyEstimateBtn = document.getElementById('copyEstimateBtn');

    function updateCalculator() {
        let totalCost = 1500; // Base package cost
        let totalDays = 7;

        calcCheckboxes.forEach(cb => {
            if (cb.checked) {
                totalCost += parseInt(cb.getAttribute('data-cost') || 0);
                totalDays += parseInt(cb.getAttribute('data-days') || 0);
            }
        });

        if (calcTotalPrice) calcTotalPrice.innerText = `$${totalCost.toLocaleString()}`;
        if (calcTimeline) calcTimeline.innerText = `${totalDays} Business Days`;
    }

    if (calcCheckboxes) {
        calcCheckboxes.forEach(cb => {
            cb.addEventListener('change', updateCalculator);
        });
    }

    if (copyEstimateBtn) {
        copyEstimateBtn.addEventListener('click', () => {
            const cost = calcTotalPrice ? calcTotalPrice.innerText : '';
            const days = calcTimeline ? calcTimeline.innerText : '';

            const projectInput = document.getElementById('freelancerMessage');
            if (projectInput) {
                projectInput.value = `Hi Sarah, I used your project calculator and calculated an estimated quote of ${cost} (${days} timeline). I would like to get started!`;
                
                const contactSec = document.getElementById('contact');
                if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                
                setTimeout(() => {
                    const nameInput = document.getElementById('freelancerClientName');
                    if (nameInput) nameInput.focus();
                }, 500);
            }
        });
    }

    // 4. Contact Form Submission
    const contactForm = document.getElementById('freelancerContactForm');
    const formStatus = document.getElementById('formStatusMsg');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('freelancerClientName')?.value || 'Client';
            formStatus.innerHTML = `🚀 Proposal Request Received, ${clientName}! Sarah will respond with a discovery booking link within 4 hours.`;
            formStatus.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 6000);
        });
    }
});
