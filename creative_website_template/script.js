/* ==========================================================================
   AURA Studio — Modern Creative Website Template JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Theme Switcher (Dark / Light Mode)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('aura_theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('aura_theme', newTheme);
        });
    }

    // ----------------------------------------------------------------------
    // 2. Header Shrink & Glassmorphism on Scroll
    // ----------------------------------------------------------------------
    const header = document.getElementById('header');
    
    const handleScrollHeader = () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScrollHeader);

    // ----------------------------------------------------------------------
    // 3. Mobile Navigation Drawer Toggle
    // ----------------------------------------------------------------------
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking any navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ----------------------------------------------------------------------
    // 4. Scroll Active Section Link Highlighting
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');

    const scrollActiveNav = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-list a[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', scrollActiveNav);

    // ----------------------------------------------------------------------
    // 5. Portfolio Filter Functionality
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
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

    // ----------------------------------------------------------------------
    // 6. Portfolio Project Detail Modal
    // ----------------------------------------------------------------------
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.getElementById('modal-backdrop');

    const modalImg = document.getElementById('modal-img');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalClient = document.getElementById('modal-client');
    const modalTimeline = document.getElementById('modal-timeline');
    const modalDeliverables = document.getElementById('modal-deliverables');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img')?.getAttribute('src') || '';
            const category = card.querySelector('.project-category')?.textContent || '';
            const title = card.querySelector('.project-title')?.textContent || '';
            const desc = card.querySelector('.project-desc')?.textContent || '';

            const client = card.getAttribute('data-client') || 'Enterprise Client';
            const timeline = card.getAttribute('data-timeline') || '6 Weeks';
            const deliverables = card.getAttribute('data-deliverables') || 'Full Design & Tech';

            if (modalImg) modalImg.src = imgSrc;
            if (modalCategory) modalCategory.textContent = category;
            if (modalTitle) modalTitle.textContent = title;
            if (modalDesc) modalDesc.textContent = desc;
            if (modalClient) modalClient.textContent = client;
            if (modalTimeline) modalTimeline.textContent = timeline;
            if (modalDeliverables) modalDeliverables.textContent = deliverables;

            modal?.classList.add('active');
            modal?.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal?.classList.remove('active');
        modal?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    modalClose?.addEventListener('click', closeModal);
    modalBackdrop?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });

    // ----------------------------------------------------------------------
    // 7. Testimonials Slider
    // ----------------------------------------------------------------------
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentIndex = 0;
    let autoSlideInterval;

    const showTestimonial = (index) => {
        testimonialCards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentIndex = index;
    };

    const nextTestimonial = () => {
        const newIndex = (currentIndex + 1) % testimonialCards.length;
        showTestimonial(newIndex);
    };

    const prevTestimonial = () => {
        const newIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(newIndex);
    };

    nextBtn?.addEventListener('click', () => {
        nextTestimonial();
        resetAutoSlide();
    });

    prevBtn?.addEventListener('click', () => {
        prevTestimonial();
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            resetAutoSlide();
        });
    });

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextTestimonial, 6000);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    if (testimonialCards.length > 0) {
        startAutoSlide();
    }

    // ----------------------------------------------------------------------
    // 8. Contact Form Handling
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple visual loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Sending Message...</span>';
            }

            // Simulate form submission delay
            setTimeout(() => {
                if (formStatus) {
                    formStatus.classList.add('success');
                    formStatus.textContent = '✨ Thank you! Your message has been sent successfully. We will get back to you within 24 hours.';
                }

                contactForm.reset();

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span>Send Message</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
                }

                // Hide status message after 6 seconds
                setTimeout(() => {
                    if (formStatus) {
                        formStatus.classList.remove('success');
                        formStatus.textContent = '';
                    }
                }, 6000);

            }, 1200);
        });
    }

    // ----------------------------------------------------------------------
    // 9. Back To Top Button
    // ----------------------------------------------------------------------
    const backToTopBtn = document.getElementById('back-to-top');

    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
