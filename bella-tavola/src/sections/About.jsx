import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { restaurantInfo } from '../data/restaurantData';
import { Award, Utensils, Sparkles, Check } from 'lucide-react';

export default function About() {
  const { story, stats } = restaurantInfo;

  return (
    <section id="about" className="py-24 sm:py-32 bg-cream-100 text-forest-900 relative overflow-hidden">
      {/* Background Subtle Italian Floral Pattern Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Imagery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparing fresh handcrafted Italian pasta at Bella Tavola"
                className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlapping Secondary Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-64 bg-forest-900 text-cream-100 p-6 rounded-xl border border-gold-500/40 shadow-2xl">
              <div className="flex items-center gap-2 text-gold-400 mb-2">
                <Award className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-semibold">Excellence</span>
              </div>
              <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                "Honoring genuine Italian culinary traditions in the heart of Mumbai."
              </p>
              <div className="mt-3 pt-3 border-t border-forest-700/70 text-[11px] text-gold-400/90 font-medium">
                Established 2011 • Kala Ghoda
              </div>
            </div>

            {/* Decorative Gold Frame Outline */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-gold-500/30 -z-0 pointer-events-none"></div>
          </div>

          {/* Right Column: Editorial Narrative & Statistics */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={story.eyebrow}
              title={story.title}
              align="left"
              theme="light"
            />

            <div className="mt-6 space-y-4 text-muted text-sm sm:text-base leading-relaxed font-light">
              <p>{story.p1}</p>
              <p>{story.p2}</p>
              <p>{story.p3}</p>
            </div>

            {/* Chef Quote Card */}
            <div className="mt-8 p-5 rounded-lg bg-beige-200/60 border-l-4 border-gold-500 flex items-start gap-4">
              <div className="flex-1">
                <p className="font-serif italic text-forest-900 text-sm leading-relaxed">
                  "{story.chef.quote}"
                </p>
                <div className="mt-2 text-xs font-semibold text-gold-700 uppercase tracking-wider">
                  — {story.chef.name}, <span className="font-normal text-muted">{story.chef.title}</span>
                </div>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-beige-300">
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="text-left">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-gold-700 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-muted mt-0.5 hidden sm:block">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-4">
              <Button href="#menu" variant="forest" size="md">
                Discover Our Menu
              </Button>
              <Button href="#reservation" variant="outline-gold" size="md">
                Book a Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
