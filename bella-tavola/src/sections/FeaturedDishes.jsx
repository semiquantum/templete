import React from 'react';
import SectionHeading from '../components/SectionHeading';
import FoodCard from '../components/FoodCard';
import Button from '../components/Button';
import { menuItems } from '../data/menuData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FeaturedDishes() {
  const featuredItems = menuItems.filter((item) => item.isFeatured).slice(0, 4);

  return (
    <section id="featured" className="py-24 sm:py-32 bg-beige-100/70 text-forest-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CHEF'S FAVORITES"
          title="Signature Dishes Worth Coming Back For"
          subtitle="Handcrafted by Chef Marco Valenti, representing the peak of authentic Italian culinary craftsmanship."
          align="center"
          theme="light"
        />

        {/* Featured Food Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((dish) => (
            <FoodCard key={dish.id} item={dish} />
          ))}
        </div>

        {/* Bottom Menu Action Prompt */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-8 sm:py-4 rounded-xl bg-forest-900 text-cream-100 shadow-xl border border-forest-800">
            <div className="flex items-center gap-2 text-gold-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Looking for more handcrafted Italian creations?</span>
            </div>
            <Button href="#menu" variant="gold" size="sm" icon={ArrowRight}>
              View Full A La Carte Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
