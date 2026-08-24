import React, { useEffect, useCallback, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryModal({ isOpen, images, activeIndex, onClose, onPrev, onNext }) {
  const [imgError, setImgError] = useState(false);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setImgError(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown, activeIndex]);

  if (!isOpen || !images || images.length === 0) return null;

  const current = images[activeIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900/95 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Gallery Lightbox"
      onClick={onClose}
    >
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-cream-100 z-50 pointer-events-auto">
        <div className="text-xs sm:text-sm tracking-widest uppercase font-medium text-cream-200/80 bg-forest-900/60 px-3 py-1.5 rounded-sm border border-forest-700/50">
          <span className="text-gold-400 font-bold">{activeIndex + 1}</span> of {images.length}
        </div>
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2.5 rounded-full bg-forest-900/80 hover:bg-gold-500 hover:text-forest-900 text-cream-100 transition-all border border-forest-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-forest-900/70 hover:bg-gold-500 hover:text-forest-900 text-cream-100 transition-all border border-forest-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-forest-900/70 hover:bg-gold-500 hover:text-forest-900 text-cream-100 transition-all border border-forest-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gold-500/20 max-h-[72vh] flex items-center justify-center bg-black">
          <img
            src={imgError ? 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80' : current.url}
            alt={current.title}
            onError={() => setImgError(true)}
            className="max-h-[72vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        <div className="mt-4 text-center max-w-xl">
          <div className="inline-block px-2.5 py-0.5 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold-400 bg-forest-900/90 rounded-sm border border-gold-500/30">
            {current.category}
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-cream-100">
            {current.title}
          </h3>
          {current.caption && (
            <p className="text-xs sm:text-sm text-cream-200/70 mt-1 font-light">
              {current.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
