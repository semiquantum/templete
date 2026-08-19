// ApexTemplates Master Hub JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Template Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const templateCards = document.querySelectorAll('.template-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            templateCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 2. Device Modal Previewer
    const deviceModal = document.getElementById('deviceModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const previewBtns = document.querySelectorAll('.preview-btn');
    const previewIframe = document.getElementById('previewIframe');
    const modalTitle = document.getElementById('modalTitle');
    const modalUrlBadge = document.getElementById('modalUrlBadge');
    const modalOpenTab = document.getElementById('modalOpenTab');
    const deviceFrame = document.getElementById('deviceFrame');
    const vpBtns = document.querySelectorAll('.vp-btn');

    previewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            const title = btn.getAttribute('data-title');

            modalTitle.textContent = title;
            modalUrlBadge.textContent = url;
            modalOpenTab.href = url;
            previewIframe.src = url;

            deviceModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        deviceModal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            previewIframe.src = '';
        }, 300);
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && deviceModal.classList.contains('active')) {
            closeModal();
        }
    });

    vpBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            vpBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const vp = btn.getAttribute('data-vp');
            deviceFrame.className = "device-frame vp-" + vp;
        });
    });

    // 3. Back to Top Button
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
