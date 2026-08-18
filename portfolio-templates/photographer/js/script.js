// Photographer Portfolio - Interactive JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle & Smooth Scroll
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scroll Handler for all internal links
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

                if (targetId === '#booking') {
                    setTimeout(() => {
                        const nameInput = document.getElementById('photoClientName');
                        if (nameInput) nameInput.focus();
                    }, 500);
                }
            }
        });
    });

    // Active navigation highlighting on scroll
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

    // 2. Hero Background Image Slider
    const heroBgs = document.querySelectorAll('.hero-slide-bg');
    let currentHeroIndex = 0;

    if (heroBgs.length > 0) {
        setInterval(() => {
            heroBgs[currentHeroIndex].classList.remove('active');
            currentHeroIndex = (currentHeroIndex + 1) % heroBgs.length;
            heroBgs[currentHeroIndex].classList.add('active');
        }, 5000);
    }

    // 3. Masonry Gallery Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns && galleryItems) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const cat = item.getAttribute('data-category');
                    if (filter === 'all' || cat === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // 4. Custom Lightbox Modal with EXIF Telemetry
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxLocation = document.getElementById('lightboxLocation');
    const exifCamera = document.getElementById('exifCamera');
    const exifLens = document.getElementById('exifLens');
    const exifFocal = document.getElementById('exifFocal');
    const exifIso = document.getElementById('exifIso');

    const photoDataList = [
        {
            src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
            title: "Solitude in Fog",
            category: "landscape",
            location: "Reykjavík, Iceland",
            camera: "Leica M11",
            lens: "Noctilux-M 50mm f/0.95",
            focal: "f/1.4 | 1/1000s",
            iso: "ISO 100"
        },
        {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
            title: "The Editorial Muse",
            category: "portrait",
            location: "Paris Fashion Week",
            camera: "Hasselblad X2D 100C",
            lens: "XCD 90mm f/2.5",
            focal: "f/2.8 | 1/500s",
            iso: "ISO 64"
        },
        {
            src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
            title: "Brutalist Geometry",
            category: "architecture",
            location: "Tokyo, Japan",
            camera: "Sony A1",
            lens: "FE 16-35mm f/2.8 GM II",
            focal: "f/8.0 | 1/250s",
            iso: "ISO 200"
        },
        {
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
            title: "Majestic Ridge at Dawn",
            category: "landscape",
            location: "Dolomites, Italy",
            camera: "Leica M11",
            lens: "Summilux-M 35mm f/1.4",
            focal: "f/5.6 | 1/640s",
            iso: "ISO 100"
        },
        {
            src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
            title: "Monochrome Gaze",
            category: "portrait",
            location: "Studio 404, New York",
            camera: "Hasselblad X2D 100C",
            lens: "XCD 55mm f/2.5",
            focal: "f/2.0 | 1/800s",
            iso: "ISO 100"
        },
        {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            title: "Glass Monoliths",
            category: "architecture",
            location: "Manhattan, NYC",
            camera: "Sony A1",
            lens: "FE 24-70mm f/2.8 GM II",
            focal: "f/11 | 1/125s",
            iso: "ISO 100"
        }
    ];

    let currentLightboxIdx = 0;

    window.openLightbox = function(idx) {
        currentLightboxIdx = idx;
        const photo = photoDataList[idx];
        if (photo && lightboxModal) {
            lightboxImg.src = photo.src;
            lightboxTitle.innerText = photo.title;
            lightboxLocation.innerText = photo.location;
            exifCamera.innerText = photo.camera;
            exifLens.innerText = photo.lens;
            exifFocal.innerText = photo.focal;
            exifIso.innerText = photo.iso;

            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = function() {
        if (lightboxModal) {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    window.navLightbox = function(direction) {
        currentLightboxIdx = (currentLightboxIdx + direction + photoDataList.length) % photoDataList.length;
        openLightbox(currentLightboxIdx);
    };

    // Keyboard navigation for Lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navLightbox(1);
        if (e.key === 'ArrowLeft') navLightbox(-1);
    });

    // 5. Booking Form Submission
    const bookingForm = document.getElementById('photoBookingForm');
    const bookingStatus = document.getElementById('bookingStatusMsg');

    if (bookingForm && bookingStatus) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('photoClientName')?.value || 'Client';
            bookingStatus.innerHTML = `✦ Shoot Inquiry Transmitted for ${clientName}! Marcus Vance will review availability for your requested date.`;
            bookingStatus.style.display = 'block';
            bookingForm.reset();
            setTimeout(() => {
                bookingStatus.style.display = 'none';
            }, 6000);
        });
    }
});
