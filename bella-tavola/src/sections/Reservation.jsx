import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ReservationForm from '../components/ReservationForm';
import { Clock, Phone, Sparkles, GlassWater, HeartHandshake } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 sm:py-32 bg-forest-900 text-cream-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="RESERVE YOUR TABLE"
          title="Good Food Deserves Good Company"
          subtitle="Whether joining us for an intimate date night, milestone celebration, or business dinner, we invite you to experience authentic Italian hospitality."
          align="center"
          theme="dark"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Perks & Reservation Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-800/80 rounded-xl p-6 sm:p-8 border border-forest-700/80 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                Dining Experience Notes
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-cream-200/80 leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Table Hold Time:</strong> Tables are held for 15 minutes past your reserved time before being released.</span>
                </li>
                <li className="flex items-start gap-3">
                  <GlassWater className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Private Dining:</strong> For private wine cellar bookings of 10+ guests, customized degustation menus are available.</span>
                </li>
                <li className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Dress Code:</strong> Smart Casual attire is appreciated in our main dining hall and garden terrace.</span>
                </li>
              </ul>
            </div>

            {/* Direct Phone Assistance Card */}
            <div className="bg-gradient-to-br from-forest-800 to-forest-900 rounded-xl p-6 border border-gold-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0 border border-gold-500/40">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-400">
                  Prefer to speak with us?
                </h4>
                <a
                  href={`tel:${restaurantInfo.contact.phoneClean}`}
                  className="font-serif text-xl sm:text-2xl font-bold text-cream-100 hover:text-gold-400 transition-colors"
                >
                  {restaurantInfo.contact.phone}
                </a>
                <p className="text-[11px] text-muted mt-0.5">Concierge desk open daily from 11:00 AM</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Component */}
          <div className="lg:col-span-7">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
