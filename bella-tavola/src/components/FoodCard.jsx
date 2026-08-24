import React, { useState } from 'react';
import { Star, Sparkles } from 'lucide-react';

export default function FoodCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item.image);
  const [hasError, setHasError] = useState(false);
  const isVeg = item.dietary?.includes('veg');

  const handleImgError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80');
    }
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border border-beige-300/80 shadow-soft hover:shadow-card-hover transition-all duration-500 flex flex-col h-full">
      {/* Badge Top Left */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {item.badge && (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-forest-900/90 backdrop-blur-sm text-gold-400 text-xs font-semibold uppercase tracking-wider rounded-sm border border-gold-500/30 shadow-sm">
            <Sparkles className="w-3 h-3 text-gold-400" />
            {item.badge}
          </span>
        )}
      </div>

      {/* Dietary Indicator Top Right */}
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span
          className={`inline-flex items-center justify-center w-6 h-6 rounded-sm border ${
            isVeg ? 'border-green-600 bg-white/95' : 'border-red-600 bg-white/95'
          } shadow-sm`}
          title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
        >
          <span className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
        </span>
      </div>

      {/* Image Container with Zoom */}
      <div className="relative h-64 overflow-hidden bg-forest-900">
        <img
          src={imgSrc}
          alt={item.name}
          onError={handleImgError}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Rating overlay */}
        {item.rating && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-forest-900/80 backdrop-blur-md px-2.5 py-1 rounded-sm text-xs font-medium text-cream-100 border border-forest-700/50">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>{item.rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 className="font-serif text-xl font-bold text-forest-900 group-hover:text-gold-600 transition-colors leading-snug mb-2">
            {item.name}
          </h3>
          <p className="text-sm text-muted line-clamp-2 leading-relaxed mb-4 font-light">
            {item.description}
          </p>
        </div>

        <div className="pt-4 border-t border-beige-200 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-muted font-medium">Price</span>
            <span className="font-serif text-2xl font-bold text-forest-900 tracking-tight">
              ₹{item.price}
            </span>
          </div>

          <a
            href="#reservation"
            className="text-xs uppercase tracking-wider font-semibold text-gold-600 hover:text-forest-900 flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
          >
            Order at Table →
          </a>
        </div>
      </div>
    </div>
  );
}
