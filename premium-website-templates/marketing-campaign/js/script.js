// Marketing Campaign Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Live Countdown Timer
    let totalSeconds = 2 * 86400 + 14 * 3600 + 38 * 60 + 45; // 2 days, 14 hrs, 38 mins

    const tDays = document.getElementById('tDays');
    const tHours = document.getElementById('tHours');
    const tMins = document.getElementById('tMins');
    const tSecs = document.getElementById('tSecs');

    const updateTimer = () => {
        if (totalSeconds <= 0) return;
        totalSeconds--;

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        if (tDays) tDays.textContent = String(days).padStart(2, '0');
        if (tHours) tHours.textContent = String(hours).padStart(2, '0');
        if (tMins) tMins.textContent = String(mins).padStart(2, '0');
        if (tSecs) tSecs.textContent = String(secs).padStart(2, '0');
    };

    setInterval(updateTimer, 1000);

    // 3. Claim Modal
    const claimModal = document.getElementById('claimModal');
    const claimOverlay = document.getElementById('claimOverlay');
    const claimClose = document.getElementById('claimClose');
    const claimForm = document.getElementById('claimForm');
    const claimStatus = document.getElementById('claimStatus');
    const openClaimBtns = document.querySelectorAll('.open-claim-modal-btn');

    openClaimBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (claimModal) {
                claimModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeClaimModal = () => {
        if (claimModal) {
            claimModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (claimClose) claimClose.addEventListener('click', closeClaimModal);
    if (claimOverlay) claimOverlay.addEventListener('click', closeClaimModal);

    if (claimForm && claimStatus) {
        claimForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('clName').value;
            claimStatus.textContent = "🎉 Congratulations " + name + "! Your 50% discount pass has been reserved. Check your email to complete registration.";
            claimForm.reset();
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
