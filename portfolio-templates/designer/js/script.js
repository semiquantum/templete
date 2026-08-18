// Designer Portfolio - Interactive JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Hamburger Toggle & Smooth Scrolling
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

                // If clicking Start Project, focus the name input field
                if (targetId === '#contact') {
                    setTimeout(() => {
                        const nameInput = document.getElementById('designerClientName');
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

    // 2. Design Process Tab Switcher
    const processData = {
        1: {
            title: "01. Discovery & User Research",
            desc: "Uncovering core user pain points through quantitative surveys, 1-on-1 interviews, and competitor benchmark analysis to align business goals with user needs.",
            deliverables: ["User Personas", "Customer Journey Maps", "Usability Audit", "Product Metrics"],
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
        },
        2: {
            title: "02. Information Architecture & Wireframing",
            desc: "Translating research insights into structural site maps, interactive user flows, and low-fidelity wireframe blueprints for rapid testing.",
            deliverables: ["User Flows", "Low-Fi Wireframes", "Site Architecture", "Clickable Sketches"],
            img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80"
        },
        3: {
            title: "03. High-Fidelity UI Design & Systems",
            desc: "Crafting modern, accessible, and scalable design systems with atomic component tokens, typography rules, color palettes, and micro-animations.",
            deliverables: ["Design System Library", "Hi-Fi UI Layouts", "Dark/Light Modes", "Micro-Interactions"],
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
        },
        4: {
            title: "04. Prototyping & Developer Handoff",
            desc: "Delivering fully interactive Figma prototypes and comprehensive redline specs to engineering teams for seamless production code implementation.",
            deliverables: ["Interactive Prototypes", "Developer Handoff Specs", "Component Documentation", "Usability Testing Report"],
            img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80"
        }
    };

    const tabBtns = document.querySelectorAll('.process-tab-btn');
    const processTitle = document.getElementById('processTitle');
    const processDesc = document.getElementById('processDesc');
    const processDeliverables = document.getElementById('processDeliverables');
    const processImg = document.getElementById('processImg');

    if (tabBtns) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const step = btn.getAttribute('data-step');
                const data = processData[step];
                if (data) {
                    if (processTitle) processTitle.innerText = data.title;
                    if (processDesc) processDesc.innerText = data.desc;
                    if (processImg) processImg.src = data.img;

                    if (processDeliverables) {
                        processDeliverables.innerHTML = data.deliverables
                            .map(item => `<li style="margin-bottom:6px; color:var(--text-main); font-weight:500;">✓ ${item}</li>`)
                            .join('');
                    }
                }
            });
        });
    }

    // 3. Portfolio Category Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const caseCards = document.querySelectorAll('.case-card');

    if (filterBtns && caseCards) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                caseCards.forEach(card => {
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

    // 4. Interactive Case Study Modal & Prototype Switcher
    const caseModal = document.getElementById('caseStudyModal');
    const modalClose = document.getElementById('modalCloseBtn');
    const caseModalTitle = document.getElementById('caseModalTitle');
    const caseModalCategory = document.getElementById('caseModalCategory');
    const caseModalOverview = document.getElementById('caseModalOverview');
    const protoDisplayImg = document.getElementById('protoDisplayImg');

    const caseStudyData = {
        1: {
            title: "FinPulse - NextGen Mobile Banking & Asset App",
            category: "Mobile UI/UX Design",
            overview: "Redesigned the mobile banking experience for 250k+ daily users, resulting in a 42% increase in monthly investments and 4.9/5 App Store rating.",
            wireframe: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
            hifi: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
        },
        2: {
            title: "Aura Design System - Enterprise UI Component Architecture",
            category: "Design System & Tokens",
            overview: "Created a unified cross-platform design system with over 120+ accessible Figma components, saving engineering 4,000+ development hours.",
            wireframe: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            hifi: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        3: {
            title: "Veloce SaaS - Analytics & Data Workflow Dashboard",
            category: "Web Application",
            overview: "Designed an intuitive data exploration interface for enterprise analysts, reducing onboarding time from 3 weeks down to 2 days.",
            wireframe: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
            hifi: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        }
    };

    let activeCaseId = 1;

    window.openCaseModal = function(id) {
        activeCaseId = id;
        const data = caseStudyData[id];
        if (data && caseModal) {
            if (caseModalTitle) caseModalTitle.innerText = data.title;
            if (caseModalCategory) caseModalCategory.innerText = data.category;
            if (caseModalOverview) caseModalOverview.innerText = data.overview;
            if (protoDisplayImg) protoDisplayImg.src = data.hifi; // default hi-fi

            document.querySelectorAll('.proto-btn').forEach(b => b.classList.remove('active'));
            const hifiBtn = document.getElementById('protoBtnHifi');
            if (hifiBtn) hifiBtn.classList.add('active');

            caseModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.switchProtoView = function(type) {
        const data = caseStudyData[activeCaseId];
        if (data && protoDisplayImg) {
            document.querySelectorAll('.proto-btn').forEach(b => b.classList.remove('active'));
            if (type === 'wireframe') {
                protoDisplayImg.src = data.wireframe;
                document.getElementById('protoBtnWire').classList.add('active');
            } else {
                protoDisplayImg.src = data.hifi;
                document.getElementById('protoBtnHifi').classList.add('active');
            }
        }
    };

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            caseModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (caseModal) {
        caseModal.addEventListener('click', (e) => {
            if (e.target === caseModal) {
                caseModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 5. Interactive Service Detail Modal
    const serviceModal = document.getElementById('serviceModal');
    const serviceModalTitle = document.getElementById('serviceModalTitle');
    const serviceModalDesc = document.getElementById('serviceModalDesc');
    const serviceModalTags = document.getElementById('serviceModalTags');

    window.openServiceModal = function(title, desc, deliverables) {
        if (serviceModal && serviceModalTitle && serviceModalDesc) {
            serviceModalTitle.innerText = title;
            serviceModalDesc.innerText = desc;
            if (serviceModalTags) {
                serviceModalTags.innerHTML = deliverables.map(item => 
                    `<span class="mono" style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 6px 14px; border-radius: 4px; color: var(--accent-amber); font-size: 0.82rem;">✓ ${item}</span>`
                ).join('');
            }
            serviceModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeServiceModal = function() {
        if (serviceModal) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    if (serviceModal) {
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) closeServiceModal();
        });
    }

    // 6. Contact Form Submission Handler
    const contactForm = document.getElementById('designerContactForm');
    const formStatus = document.getElementById('formStatusMsg');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('designerClientName')?.value || 'Client';
            formStatus.innerHTML = `✨ Thank you, ${clientName}! Elena Vance will review your project brief and respond within 24 hours.`;
            formStatus.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 6000);
        });
    }

    // Escape key handler for all modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (caseModal) caseModal.classList.remove('active');
            closeServiceModal();
            document.body.style.overflow = 'auto';
        }
    });
});
