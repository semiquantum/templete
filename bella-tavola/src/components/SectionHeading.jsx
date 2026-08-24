import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs tracking-[0.25em] uppercase font-semibold text-gold-500 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-6 h-[1.5px] bg-gold-500/80 inline-block"></span>
          <span>{eyebrow}</span>
          <span className="w-6 h-[1.5px] bg-gold-500/80 inline-block"></span>
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight ${isDark ? 'text-cream-100' : 'text-forest-900'}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${isDark ? 'text-cream-200/80' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-[1px] bg-gold-500/40"></div>
        <div className="w-2 h-2 rotate-45 border border-gold-500"></div>
        <div className="w-12 h-[1px] bg-gold-500/40"></div>
      </div>
    </div>
  );
}
