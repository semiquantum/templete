import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import GalleryModal from '../components/GalleryModal';
import { galleryImages } from '../data/galleryData';
import { Eye, Camera } from 'lucide-react';

export default function GallerySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-forest-900 text-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EXPERIENCE THE AMBIANCE"
          title="Moments at Bella Tavola"
          subtitle="From our candlelit dining hall to the scent of freshly rolled dough, explore the atmosphere that makes dining with us unforgettable."
          align="center"
          theme="dark"
        />

        {/* Asymmetric Gallery Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => {
            const isWide = index === 1 || index === 5;
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                className={`group relative rounded-lg overflow-hidden bg-forest-800 cursor-pointer shadow-card border border-forest-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 h-64 sm:h-72 ${
                  isWide ? 'sm:col-span-2' : 'col-span-1'
                }`}
              >
                <img
                  src={img.thumb}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="inline-block px-2 py-0.5 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400 bg-forest-900/90 rounded-sm self-start">
                    {img.category}
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-cream-100 leading-snug">
                    {img.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1 text-xs text-gold-400 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to view full photo</span>
                  </div>
                </div>

                {/* Subtle Persistent Corner Badge */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-forest-900/60 text-cream-100 opacity-60 group-hover:opacity-0 transition-opacity">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        isOpen={modalOpen}
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
