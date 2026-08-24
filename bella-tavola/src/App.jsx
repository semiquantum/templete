import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedDishes from './sections/FeaturedDishes';
import Menu from './sections/Menu';
import GallerySection from './sections/GallerySection';
import Reservation from './sections/Reservation';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 text-dark-800 flex flex-col selection:bg-gold-500 selection:text-forest-900">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <GallerySection />
        <Reservation />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
