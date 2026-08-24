import React from 'react';

export default function Button({
  children,
  variant = 'gold', // 'gold', 'outline', 'outline-gold', 'forest', 'dark', 'cream'
  size = 'md', // 'sm', 'md', 'lg'
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none tracking-wide';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 uppercase font-semibold tracking-wider',
    md: 'text-sm px-6 py-3 gap-2 uppercase font-semibold tracking-wider',
    lg: 'text-base px-8 py-4 gap-2.5 uppercase font-semibold tracking-widest',
  };

  const variantStyles = {
    gold: 'bg-gold-500 text-forest-900 hover:bg-gold-400 hover:shadow-gold-glow shadow-md border border-gold-400',
    outline: 'bg-transparent text-cream-100 border border-cream-100/40 hover:border-gold-500 hover:text-gold-400 hover:bg-gold-500/10',
    'outline-gold': 'bg-transparent text-gold-500 border border-gold-500/60 hover:bg-gold-500 hover:text-forest-900',
    forest: 'bg-forest-700 text-cream-100 hover:bg-forest-800 border border-forest-600 shadow-sm',
    dark: 'bg-forest-900 text-gold-400 hover:bg-dark-900 border border-forest-800 shadow-sm',
    cream: 'bg-cream-100 text-forest-900 hover:bg-white border border-beige-300 shadow-sm'
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.gold} ${className}`;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClass}
      {...props}
    >
      {content}
    </button>
  );
}
