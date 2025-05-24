
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-playfair font-bold gradient-text">
          ENG
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-coral-pink transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-royal-violet to-coral-pink text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 font-medium"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism mt-4 mx-6 rounded-lg p-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-white hover:text-coral-pink transition-colors duration-300 py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-gradient-to-r from-royal-violet to-coral-pink text-white px-6 py-2 rounded-full text-center mt-4 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
