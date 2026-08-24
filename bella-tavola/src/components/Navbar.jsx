import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Featured', href: '#featured' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest-900/95 backdrop-blur-md py-3.5 shadow-lg border-b border-forest-700/60'
          : 'bg-gradient-to-b from-dark-900/80 via-dark-900/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
        >
          <div className="w-9 h-9 rounded-sm border border-gold-500/70 flex items-center justify-center bg-forest-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-forest-900 transition-colors">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase text-cream-100 group-hover:text-gold-400 transition-colors leading-none">
              Bella Tavola
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-semibold mt-1">
              Ristorante Italiano
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-gold-400 font-semibold'
                    : 'text-cream-100/90 hover:text-gold-300'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400 rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="hidden xl:flex items-center gap-1.5 text-xs text-cream-200/80 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>+91 98765 43210</span>
          </a>

          <Button href="#reservation" variant="gold" size="sm">
            Book a Table
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Button href="#reservation" variant="gold" size="sm" className="!px-3 !py-1.5 !text-xs sm:hidden">
            Book
          </Button>
          
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-md text-cream-100 hover:text-gold-400 hover:bg-forest-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-forest-900/98 backdrop-blur-xl border-b border-forest-700 shadow-2xl p-6 transition-all duration-300 animate-slide-up">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`text-sm uppercase tracking-widest py-2 border-b border-forest-800/70 transition-colors flex items-center justify-between ${
                    isActive ? 'text-gold-400 font-bold pl-2' : 'text-cream-100 hover:text-gold-300'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>}
                </a>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-xs text-cream-200/90 py-2"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+91 98765 43210 (Direct Table Line)</span>
              </a>

              <Button
                href="#reservation"
                variant="gold"
                size="md"
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Book a Table Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
