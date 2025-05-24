
import React from 'react';
import { Heart, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-playfair font-bold gradient-text mb-4">
              Emcee Nisarga Gowda
            </div>
            <p className="text-gray-400 mb-4">
              Multilingual Emcee • Entertainer • Corporate Presenter
            </p>
            <div className="text-sm text-gray-500">
              Making every event unforgettable with energy, professionalism, and multilingual expertise.
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-coral-pink">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">About</a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors duration-300">Services</a>
              <a href="#gallery" className="block text-gray-400 hover:text-white transition-colors duration-300">Gallery</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-champagne-gold">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail size={16} />
                <span>nisarga@example.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a
                href="https://instagram.com/thecurlygirly__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral-pink hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@thecrazycurly__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-gold hover:text-white transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="text-coral-pink" size={16} />
            <span>for unforgettable events</span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            © 2024 Emcee Nisarga Gowda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
