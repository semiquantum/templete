import React from 'react';
import { UtensilsCrossed, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-900 text-cream-100 pt-16 pb-12 border-t border-gold-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-forest-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm border border-gold-500/80 flex items-center justify-center bg-forest-800 text-gold-400">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest uppercase text-cream-100">
                Bella Tavola
              </span>
            </div>

            <p className="text-sm text-cream-200/70 font-light leading-relaxed">
              Authentic Italian flavors, crafted with passion. Handcrafted pasta, wood-fired pizzas, and heritage recipes in Mumbai since 2011.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {restaurantInfo.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-9 h-9 rounded-full bg-forest-800 hover:bg-gold-500 hover:text-forest-900 text-cream-100 flex items-center justify-center transition-all border border-forest-700 text-xs font-bold"
                >
                  {soc.name.substring(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home Experience</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Our Culinary Story</a></li>
              <li><a href="#menu" className="hover:text-gold-400 transition-colors">Full A La Carte Menu</a></li>
              <li><a href="#featured" className="hover:text-gold-400 transition-colors">Chef's Signature Picks</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Atmosphere & Gallery</a></li>
              <li><a href="#reservation" className="hover:text-gold-400 transition-colors">Table Reservation</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-5 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              Opening Hours
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-cream-200/80">
              <div>
                <p className="font-semibold text-cream-100">Monday – Thursday</p>
                <p className="text-muted text-xs mt-0.5">12:00 PM – 10:30 PM</p>
                <p className="text-[11px] text-gold-400/80">Lunch & Dinner Service</p>
              </div>
              <div className="pt-2 border-t border-forest-800">
                <p className="font-semibold text-cream-100">Friday – Sunday</p>
                <p className="text-muted text-xs mt-0.5">12:00 PM – 11:30 PM</p>
                <p className="text-[11px] text-gold-400/80">Weekend Aperitivo & Late Dinner</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-5">
              Contact & Visit
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-cream-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>123 Heritage Lane, Kala Ghoda, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:hello@bellatavola.com" className="hover:text-gold-400 transition-colors">hello@bellatavola.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60">
          <p>© 2026 Bella Tavola Ristorante. All rights reserved. Crafted for food lovers.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gold-400 hover:text-cream-100 transition-colors group"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded-full bg-forest-800 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-forest-900 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
