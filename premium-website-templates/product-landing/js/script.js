// Product Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Color Variant Selector
    const colorDots = document.querySelectorAll('.color-dot');
    const colorName = document.getElementById('colorName');
    const editionBadge = document.getElementById('editionBadge');

    const colorMap = {
        'obsidian': { name: 'Obsidian Black Edition', badge: 'OBSIDIAN EDITION' },
        'silver': { name: 'Alpine Silver Edition', badge: 'ALPINE SILVER EDITION' },
        'cyan': { name: 'Electric Cyan Edition', badge: 'ELECTRIC CYAN EDITION' }
    };

    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            colorDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            const colorKey = dot.getAttribute('data-color');
            const data = colorMap[colorKey];

            if (data && colorName && editionBadge) {
                colorName.textContent = data.name;
                editionBadge.textContent = data.badge;
            }
        });
    });

    // 3. Feature Hotspot Inspector
    const hotspotBtns = document.querySelectorAll('.hotspot-btn');
    const spotTitle = document.getElementById('spotTitle');
    const spotDesc = document.getElementById('spotDesc');

    const spotData = {
        'driver': {
            title: '40mm Titanium Acoustic Drivers',
            desc: 'Custom-tuned diaphragms delivering crystal clear highs, rich midranges, and deep resonant bass with zero distortion.'
        },
        'cushion': {
            title: 'Memory Foam Plush Ear Cushions',
            desc: 'Wrapped in breathable perforated protein leather for all-day ergonomic comfort during long sessions.'
        },
        'mic': {
            title: '6-Microphone Beamforming Array',
            desc: 'Isolates your voice from background wind and environmental noise for crystal-clear phone & video calls.'
        }
    };

    hotspotBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            hotspotBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const sKey = btn.getAttribute('data-spot');
            const data = spotData[sKey];

            if (data && spotTitle && spotDesc) {
                spotTitle.textContent = data.title;
                spotDesc.textContent = data.desc;
            }
        });
    });

    // 4. Package Configurator Add-on Calculator
    const configAddons = document.querySelectorAll('.config-addon');
    const configTotal = document.getElementById('configTotal');

    const updateTotal = () => {
        let base = 299;
        configAddons.forEach(cb => {
            if (cb.checked) {
                base += parseInt(cb.value, 10);
            }
        });
        if (configTotal) {
            configTotal.textContent = "$" + base;
        }
    };

    configAddons.forEach(cb => cb.addEventListener('change', updateTotal));
    updateTotal();

    // 5. Express Checkout Modal
    const buyModal = document.getElementById('buyModal');
    const buyOverlay = document.getElementById('buyOverlay');
    const buyClose = document.getElementById('buyClose');
    const buyForm = document.getElementById('buyForm');
    const buyStatus = document.getElementById('buyStatus');
    const openBuyBtns = document.querySelectorAll('.open-buy-modal-btn');

    openBuyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (buyModal) {
                buyModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeBuyModal = () => {
        if (buyModal) {
            buyModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (buyClose) buyClose.addEventListener('click', closeBuyModal);
    if (buyOverlay) buyOverlay.addEventListener('click', closeBuyModal);

    if (buyForm && buyStatus) {
        buyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const bName = document.getElementById('bName').value;
            buyStatus.textContent = "✓ Order confirmed for " + bName + "! Tracking number sent to your email.";
            buyForm.reset();
        });
    }

    // 6. Back to Top Button
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
