import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { restaurantInfo } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';

export default function Contact() {
  const { address, contact, hours } = restaurantInfo;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream-100 text-forest-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VISIT BELLA TAVOLA"
          title="Find Us in Kala Ghoda, Mumbai"
          subtitle="Located on historic Heritage Lane, we welcome you to discover the aromas, sounds, and vibrant hospitality of Italy."
          align="center"
          theme="light"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address */}
            <div className="p-6 rounded-xl bg-white border border-beige-300 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-700 mb-1">
                    Location & Address
                  </h4>
                  <p className="font-serif text-lg font-bold text-forest-900">
                    {address.street}
                  </p>
                  <p className="text-sm text-muted">
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <p className="text-xs text-muted mt-2 font-light">
                    * Valet parking available directly at restaurant entrance.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-6 rounded-xl bg-white border border-beige-300 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-700 mb-1">
                    Direct Connections
                  </h4>
                  <p className="text-sm font-semibold text-forest-900">
                    Phone: <a href={`tel:${contact.phoneClean}`} className="hover:text-gold-600 transition-colors">{contact.phone}</a>
                  </p>
                  <p className="text-sm font-semibold text-forest-900 mt-1">
                    Email: <a href={`mailto:${contact.email}`} className="hover:text-gold-600 transition-colors">{contact.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="p-6 rounded-xl bg-forest-900 text-cream-100 border border-forest-800 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-800 text-gold-400 flex items-center justify-center flex-shrink-0 border border-forest-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-400 mb-2">
                    Service Hours
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    {hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-baseline border-b border-forest-800 pb-2">
                        <span className="font-semibold text-cream-100">{h.days}:</span>
                        <span className="text-gold-300">{h.allDay}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stylized Map Visual Panel */}
          <div className="lg:col-span-7 bg-forest-900 rounded-xl overflow-hidden shadow-card border border-beige-300 relative min-h-[380px] flex flex-col justify-between p-6 sm:p-8">
            {/* Map Background Pattern / Graphic */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Map overview of Mumbai Kala Ghoda heritage district"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-forest-900/80 backdrop-blur-[2px]"></div>
            </div>

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-forest-900/90 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
                <Navigation className="w-3.5 h-3.5" />
                <span>Kala Ghoda Arts District</span>
              </div>
              <span className="text-xs text-cream-200/80 bg-forest-900/90 px-3 py-1 rounded-sm border border-forest-700">
                Mumbai, India
              </span>
            </div>

            {/* Center Map Pin Marker Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-lg p-5 border border-gold-500 shadow-2xl max-w-sm mx-auto my-auto text-forest-900 text-center animate-fade-in">
              <div className="w-10 h-10 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center mx-auto mb-2 border border-gold-500 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <h5 className="font-serif text-lg font-bold text-forest-900">
                Bella Tavola Ristorante
              </h5>
              <p className="text-xs text-muted mt-1">
                123 Heritage Lane, Kala Ghoda, Mumbai
              </p>
              <div className="mt-4 pt-3 border-t border-beige-300 flex items-center justify-center gap-2 text-xs font-semibold text-gold-700">
                <span>Near Jehangir Art Gallery</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-forest-700/60">
              <span className="text-xs text-cream-200/80 font-light">
                Accessible via Fort, Marine Drive & Colaba
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-gold-500 text-forest-900 font-semibold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-md"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
