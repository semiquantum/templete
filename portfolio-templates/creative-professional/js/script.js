// Creative Professional Portfolio - Interactive JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle & Smooth Scroll
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

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

    // 2. Live Clock Display (UTC)
    const clockElement = document.getElementById('liveClock');
    function updateClock() {
        if (!clockElement) return;
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const mins = String(now.getUTCMinutes()).padStart(2, '0');
        const secs = String(now.getUTCSeconds()).padStart(2, '0');
        clockElement.innerText = `${hours}:${mins}:${secs} UTC`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 3. Staggered Work Category Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    if (filterBtns && workCards) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                workCards.forEach(card => {
                    const cat = card.getAttribute('data-category');
                    if (filter === 'all' || cat === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 4. Capability Detail Modal
    const capModal = document.getElementById('capabilityModal');
    const capModalTitle = document.getElementById('capModalTitle');
    const capModalDesc = document.getElementById('capModalDesc');
    const capModalTags = document.getElementById('capModalTags');

    window.openCapabilityModal = function(title, desc, tags) {
        if (capModal && capModalTitle && capModalDesc) {
            capModalTitle.innerText = title;
            capModalDesc.innerText = desc;
            if (capModalTags) {
                capModalTags.innerHTML = tags.map(tag => 
                    `<span class="mono" style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 6px 12px; border-radius: 4px; color: var(--accent-lime); font-size: 0.8rem;">${tag}</span>`
                ).join('');
            }
            capModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeCapabilityModal = function() {
        if (capModal) {
            capModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    if (capModal) {
        capModal.addEventListener('click', (e) => {
            if (e.target === capModal) closeCapabilityModal();
        });
    }

    // 5. Interactive Video Showreel Player Modal Logic
    const showreelModal = document.getElementById('showreelModal');
    const reelModalTitle = document.getElementById('reelModalTitle');
    const reelScreenImg = document.getElementById('reelScreenImg');
    const reelPlayBtn = document.getElementById('reelPlayBtn');
    const reelControlBtn = document.getElementById('reelControlBtn');
    const reelStatusBadge = document.getElementById('reelStatusBadge');
    const reelTimeDisplay = document.getElementById('reelTimeDisplay');
    const waveBars = document.querySelectorAll('.wave-bar');

    let isPlaying = false;
    let secondsElapsed = 0;
    let reelTimer = null;
    let waveAnimTimer = null;

    window.openShowreelModal = function(title, imgSrc) {
        if (showreelModal) {
            if (title && reelModalTitle) reelModalTitle.innerText = title;
            if (imgSrc && reelScreenImg) reelScreenImg.src = imgSrc;

            showreelModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Auto play stream on open
            if (!isPlaying) toggleReelPlay();
        }
    };

    window.closeShowreelModal = function() {
        if (showreelModal) {
            showreelModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            if (isPlaying) toggleReelPlay();
        }
    };

    window.toggleReelPlay = function() {
        isPlaying = !isPlaying;

        if (isPlaying) {
            if (reelPlayBtn) {
                reelPlayBtn.innerText = '⏸';
                reelPlayBtn.style.opacity = '0.3';
            }
            if (reelControlBtn) reelControlBtn.innerText = '⏸ PAUSE STREAM';
            if (reelStatusBadge) {
                reelStatusBadge.innerText = '● LIVE STREAMING // 4K 60FPS';
                reelStatusBadge.style.color = 'var(--accent-lime)';
            }
            if (reelScreenImg) reelScreenImg.style.opacity = '1';

            // Start timer
            reelTimer = setInterval(() => {
                secondsElapsed++;
                const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
                const secs = String(secondsElapsed % 60).padStart(2, '0');
                if (reelTimeDisplay) reelTimeDisplay.innerText = `${mins}:${secs} / 02:45`;
            }, 1000);

            // Animate waveform equalizer
            waveAnimTimer = setInterval(() => {
                waveBars.forEach(bar => {
                    const randomHeight = Math.floor(Math.random() * 75) + 20;
                    bar.style.height = `${randomHeight}%`;
                });
            }, 150);

        } else {
            if (reelPlayBtn) {
                reelPlayBtn.innerText = '▶';
                reelPlayBtn.style.opacity = '1';
            }
            if (reelControlBtn) reelControlBtn.innerText = '▶ PLAY STREAM';
            if (reelStatusBadge) {
                reelStatusBadge.innerText = 'PAUSED // 4K 60FPS';
                reelStatusBadge.style.color = 'var(--text-muted)';
            }
            if (reelScreenImg) reelScreenImg.style.opacity = '0.85';

            clearInterval(reelTimer);
            clearInterval(waveAnimTimer);
        }
    };

    window.switchReelTrack = function(title, imgSrc) {
        if (reelModalTitle) reelModalTitle.innerText = title;
        if (reelScreenImg) reelScreenImg.src = imgSrc;
        secondsElapsed = 0;
        if (reelTimeDisplay) reelTimeDisplay.innerText = '00:00 / 02:45';
        if (!isPlaying) toggleReelPlay();
    };

    if (showreelModal) {
        showreelModal.addEventListener('click', (e) => {
            if (e.target === showreelModal) closeShowreelModal();
        });
    }

    // 6. Contact Form Handler
    const contactForm = document.getElementById('creativeContactForm');
    const formStatus = document.getElementById('formStatusMsg');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameVal = document.getElementById('contactName')?.value || 'Client';
            formStatus.innerHTML = `⚡ Transmission Received, ${nameVal}! KAIROS Studio will review your project brief and respond within 24 hours.`;
            formStatus.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 6000);
        });
    }

    // Escape key modal handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCapabilityModal();
            closeShowreelModal();
        }
    });
});
