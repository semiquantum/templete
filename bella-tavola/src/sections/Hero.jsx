import React from 'react';
import { ArrowRight, Calendar, Sparkles, Award } from 'lucide-react';
import Button from '../components/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center bg-forest-900 text-cream-100 overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with Dark Vignette Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
          alt="Bella Tavola Italian Restaurant Ambiance"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-forest-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(23,37,29,0.85)_100%)]"></div>
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Trust Line & Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/80 backdrop-blur-md border border-gold-500/30 text-gold-400 text-xs sm:text-xs font-semibold tracking-[0.25em] uppercase mb-6 shadow-soft animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Authentic Italian Cuisine</span>
        </div>

        {/* Dramatic Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream-100 leading-[1.1] max-w-4xl animate-slide-up">
          Authentic Italian Flavors, <br />
          <span className="italic font-normal text-gold-400">Crafted With Passion.</span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-cream-200/85 font-light max-w-2xl leading-relaxed animate-fade-in">
          Experience handcrafted fresh pasta, 48-hour fermented wood-fired pizza, and timeless Italian recipes made with certified imported ingredients.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center animate-slide-up">
          <Button
            href="#menu"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto shadow-gold-glow"
            icon={ArrowRight}
          >
            Explore Our Menu
          </Button>

          <Button
            href="#reservation"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            icon={Calendar}
            iconPosition="left"
          >
            Book a Table
          </Button>
        </div>

        {/* Bottom Trust Line Badges */}
        <div className="mt-14 pt-8 border-t border-forest-700/60 w-full max-w-2xl flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-cream-200/70 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>Open Daily</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>Fresh Ingredients</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>Family Crafted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
