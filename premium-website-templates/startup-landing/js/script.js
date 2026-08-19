// Startup Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Waitlist Form Submission with Queue Position Generator
    const waitlistForm = document.getElementById('waitlistForm');
    const waitlistStatus = document.getElementById('waitlistStatus');

    if (waitlistForm && waitlistStatus) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const queueNum = Math.floor(Math.random() * 500) + 1200;
            waitlistStatus.textContent = "🎉 Success! You are #" + queueNum + " in line for early developer access.";
            waitlistForm.reset();
        });
    }

    // 3. Demo Modal
    const demoModal = document.getElementById('demoModal');
    const openDemoBtn = document.getElementById('openDemoBtn');
    const demoClose = document.getElementById('demoClose');
    const demoOverlay = document.getElementById('demoOverlay');

    if (openDemoBtn && demoModal) {
        openDemoBtn.addEventListener('click', () => {
            demoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeDemoModal = () => {
        if (demoModal) {
            demoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (demoClose) demoClose.addEventListener('click', closeDemoModal);
    if (demoOverlay) demoOverlay.addEventListener('click', closeDemoModal);

    // 4. Back to Top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
