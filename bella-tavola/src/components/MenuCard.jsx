import React, { useState } from 'react';
import { Flame } from 'lucide-react';

export default function MenuCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item.image);
  const [hasError, setHasError] = useState(false);
  const isVeg = item.dietary?.includes('veg');
  const isSpicy = item.dietary?.includes('spicy');

  const handleImgError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80');
    }
  };

  return (
    <div className="group p-4 sm:p-5 rounded-lg bg-white/80 hover:bg-white border border-beige-300/70 hover:border-gold-500/60 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      {/* Thumbnail */}
      <div className="relative w-full sm:w-28 h-44 sm:h-28 rounded-md overflow-hidden flex-shrink-0 bg-forest-900">
        <img
          src={imgSrc}
          alt={item.name}
          onError={handleImgError}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 sm:top-1.5 sm:left-1.5">
          <span
            className={`inline-flex items-center justify-center w-5 h-5 rounded-sm border ${
              isVeg ? 'border-green-600 bg-white' : 'border-red-600 bg-white'
            } shadow-sm`}
            title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
          </span>
        </div>
      </div>

      {/* Description & Title */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
          <div className="flex items-center gap-2">
            <h4 className="font-serif text-lg font-bold text-forest-900 group-hover:text-gold-600 transition-colors">
              {item.name}
            </h4>
            {isSpicy && (
              <span title="Spicy" className="inline-flex items-center text-red-500">
                <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              </span>
            )}
          </div>
          <span className="font-serif text-xl font-bold text-forest-900 whitespace-nowrap">
            ₹{item.price}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2 font-light">
          {item.description}
        </p>

        {item.badge && (
          <div className="mt-2.5">
            <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-forest-800 bg-beige-200/90 rounded-sm">
              {item.badge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
