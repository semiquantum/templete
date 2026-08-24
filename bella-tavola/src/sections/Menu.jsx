import React, { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import MenuCard from '../components/MenuCard';
import Button from '../components/Button';
import { categories, menuItems } from '../data/menuData';
import { Sparkles, Utensils, Calendar } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-cream-100 text-forest-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR MENU"
          title="A Menu Made With Passion"
          subtitle="Explore our curated collection of time-honored Italian delicacies, made with imported San Marzano tomatoes, freshly rolled pasta, and pure extra virgin olive oil."
          align="center"
          theme="light"
        />

        {/* Category Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all'
              ? menuItems.length
              : menuItems.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  isActive
                    ? 'bg-forest-900 text-gold-400 shadow-md border border-forest-800'
                    : 'bg-white text-forest-900 hover:bg-beige-200/80 border border-beige-300'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-forest-800 text-gold-300' : 'bg-beige-200 text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dietary Legend */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm border border-green-600 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
            </span>
            <span>Vegetarian</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm border border-red-600 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            </span>
            <span>Non-Vegetarian</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-red-500 font-bold">🌶</span>
            <span>Chef's Spicy Touch</span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
          {filteredItems.map((dish) => (
            <MenuCard key={dish.id} item={dish} />
          ))}
        </div>

        {/* Menu Footer Note & Table Reservation Prompt */}
        <div className="mt-16 bg-beige-200/60 rounded-xl p-6 sm:p-8 border border-beige-300 text-center max-w-2xl mx-auto">
          <h4 className="font-serif text-xl font-bold text-forest-900">
            Have Dietary Preferences or Special Occasions?
          </h4>
          <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
            Our culinary team happily accommodates gluten-sensitive, vegan, and bespoke dining preferences with advance notice.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button href="#reservation" variant="gold" size="md" icon={Calendar}>
              Reserve Your Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
