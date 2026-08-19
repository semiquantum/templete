// Service Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Interactive Quote Estimator
    const tierRadios = document.querySelectorAll('input[name="tier"]');
    const sModules = document.querySelectorAll('.s-module');
    const quoteVal = document.getElementById('quoteVal');

    const updateQuote = () => {
        let total = 0;
        tierRadios.forEach(r => {
            if (r.checked) total += parseInt(r.value, 10);
        });
        sModules.forEach(cb => {
            if (cb.checked) total += parseInt(cb.value, 10);
        });
        if (quoteVal) {
            quoteVal.textContent = "$" + total.toLocaleString();
        }
    };

    tierRadios.forEach(r => r.addEventListener('change', updateQuote));
    sModules.forEach(cb => cb.addEventListener('change', updateQuote));
    updateQuote();

    // 3. Consultation Modal
    const consultModal = document.getElementById('consultModal');
    const consultOverlay = document.getElementById('consultOverlay');
    const consultClose = document.getElementById('consultClose');
    const consultForm = document.getElementById('consultForm');
    const consultStatus = document.getElementById('consultStatus');
    const openConsultBtns = document.querySelectorAll('.open-consult-modal-btn');

    const cDate = document.getElementById('cDate');
    if (cDate) {
        const today = new Date().toISOString().split('T')[0];
        cDate.value = today;
        cDate.min = today;
    }

    openConsultBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (consultModal) {
                consultModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeConsultModal = () => {
        if (consultModal) {
            consultModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (consultClose) consultClose.addEventListener('click', closeConsultModal);
    if (consultOverlay) consultOverlay.addEventListener('click', closeConsultModal);

    if (consultForm && consultStatus) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cNameVal = document.getElementById('cName').value;
            consultStatus.textContent = "✓ Strategy session reserved for " + cNameVal + "! Calendar invitation sent.";
            consultForm.reset();
        });
    }

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
