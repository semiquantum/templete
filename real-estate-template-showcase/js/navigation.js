/**
 * NAVIGATION & HEADER SYSTEM
 * SQ Studio Real Estate Website Template Showcase
 */

const NavigationManager = {
  header: null,
  hamburgerBtn: null,
  mobileDrawer: null,
  mobileBackdrop: null,

  init() {
    this.header = document.querySelector('.site-header');
    this.hamburgerBtn = document.querySelector('.hamburger-btn');
    this.mobileDrawer = document.querySelector('.mobile-nav-drawer');
    this.mobileBackdrop = document.querySelector('.mobile-nav-backdrop');

    // Sticky header scroll detection
    window.addEventListener('scroll', () => {
      if (this.header) {
        if (window.scrollY > 30) {
          this.header.classList.add('scrolled');
        } else {
          this.header.classList.remove('scrolled');
        }
      }
    });

    // Mobile drawer toggle
    if (this.hamburgerBtn && this.mobileDrawer) {
      this.hamburgerBtn.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    if (this.mobileBackdrop) {
      this.mobileBackdrop.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    }

    // Close on navigation link click
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Escape key closes mobile menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
      }
    });

    // Active link highlighting on scroll
    this.setupScrollSpy();
  },

  toggleMobileMenu() {
    if (!this.mobileDrawer) return;
    const isOpen = this.mobileDrawer.classList.contains('is-open');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  },

  openMobileMenu() {
    if (this.mobileDrawer) this.mobileDrawer.classList.add('is-open');
    if (this.mobileBackdrop) this.mobileBackdrop.classList.add('is-open');
    if (this.hamburgerBtn) this.hamburgerBtn.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  },

  closeMobileMenu() {
    if (this.mobileDrawer) this.mobileDrawer.classList.remove('is-open');
    if (this.mobileBackdrop) this.mobileBackdrop.classList.remove('is-open');
    if (this.hamburgerBtn) this.hamburgerBtn.classList.remove('is-active');
    document.body.style.overflow = '';
  },

  setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
};

// Auto initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => NavigationManager.init());
} else {
  NavigationManager.init();
}
