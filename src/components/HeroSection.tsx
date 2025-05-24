
import React from 'react';
import { Sparkles, Mic, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-royal-violet-dark to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="text-champagne-gold opacity-60" size={32} />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="text-coral-pink opacity-60" size={24} />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Mic className="text-champagne-gold opacity-60" size={28} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-royal-violet to-coral-pink rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-coral-pink to-champagne-gold rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-coral-pink via-royal-violet to-champagne-gold p-2 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-4xl font-playfair">
                NG
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-champagne-gold text-black rounded-full p-3 animate-bounce">
              <Mic size={24} />
            </div>
          </div>

          {/* Main Text */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            <span className="block">Emcee</span>
            <span className="gradient-text">Nisarga Gowda</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Multilingual Emcee • Entertainer • Corporate Presenter
          </div>
          
          <div className="text-lg md:text-xl text-coral-pink mb-8 font-medium">
            Anchor ~ Moderator ~ Energizer ~ Presenter
          </div>

          <div className="text-gray-400 mb-8 text-sm md:text-base">
            Languages: <span className="text-champagne-gold">Kannada • English • Hindi • Telugu • Tamil</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="relative overflow-hidden bg-gradient-to-r from-coral-pink to-royal-violet text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-champagne-gold to-coral-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#about"
              className="border-2 border-champagne-gold text-champagne-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-champagne-gold hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Social Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-pink">500+</div>
              <div className="text-gray-400 text-sm">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-champagne-gold">30,000+</div>
              <div className="text-gray-400 text-sm">Audience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-royal-violet-light">3+</div>
              <div className="text-gray-400 text-sm">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-pink">5</div>
              <div className="text-gray-400 text-sm">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
