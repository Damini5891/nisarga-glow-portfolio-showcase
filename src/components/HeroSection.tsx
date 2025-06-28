import React from 'react';
import { Sparkles, Mic, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/events/13.png"
          alt="Nisarga Gowda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-royal-violet-dark/70 to-black/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="text-champagne-gold opacity-60" size={32} />
        </div>
        {/* Star on left side */}
        <div className="absolute top-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="text-coral-pink opacity-60" size={64} />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Mic className="text-champagne-gold opacity-60" size={28} />
        </div>
        
        {/* 3D Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-royal-violet to-coral-pink rounded-full opacity-30 blur-3xl animate-pulse transform-gpu perspective-1000 rotate-x-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-coral-pink to-champagne-gold rounded-full opacity-30 blur-3xl animate-pulse transform-gpu perspective-1000 rotate-y-12" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-champagne-gold/20 to-coral-pink/20 rounded-full backdrop-blur-sm border border-white/10 animate-float transform-gpu rotate-45" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-royal-violet/20 to-champagne-gold/20 rounded-full backdrop-blur-sm border border-white/10 animate-float transform-gpu -rotate-45" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content container with flex */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-center gap-12 max-w-7xl">
          {/* Text Content on left */}
          <div className="flex-1 text-center md:text-left max-w-xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
              <span className="block drop-shadow-2xl">Emcee</span>
              <span className="gradient-text drop-shadow-2xl animate-shimmer bg-gradient-to-r from-coral-pink via-champagne-gold to-royal-violet bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000">Nisarga Gowda</span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-200 mb-4 font-light drop-shadow-lg">
              Multilingual Emcee • Entertainer • Corporate Presenter
            </div>
            
            <div className="text-lg md:text-xl text-coral-pink mb-8 font-medium drop-shadow-lg">
              Anchor ~ Moderator ~ Energizer ~ Presenter
            </div>

            <div className="text-gray-300 mb-8 text-sm md:text-base drop-shadow-lg">
              Languages: <span className="text-champagne-gold font-semibold">Kannada • English • Hindi • Telugu</span> <span className="text-gray-400">(conversational Tamil)</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
              <a
                href="#contact"
                className="relative overflow-hidden bg-gradient-to-r from-coral-pink to-royal-violet text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl group transform-gpu"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-champagne-gold to-coral-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
              
              <a
                href="#about"
                className="border-2 border-champagne-gold text-champagne-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-champagne-gold hover:text-black transition-all duration-500 hover:scale-110 hover:shadow-2xl transform-gpu backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto md:mx-0">
              <div className="text-center glassmorphism p-4 rounded-xl hover:scale-105 transition-transform duration-300 transform-gpu">
                <div className="text-3xl font-bold text-coral-pink drop-shadow-lg">500+</div>
                <div className="text-gray-300 text-sm">Events</div>
              </div>
              <div className="text-center glassmorphism p-4 rounded-xl hover:scale-105 transition-transform duration-300 transform-gpu">
                <div className="text-3xl font-bold text-champagne-gold drop-shadow-lg">3000+</div>
                <div className="text-gray-300 text-sm">Audience</div>
              </div>
              <div className="text-center glassmorphism p-4 rounded-xl hover:scale-105 transition-transform duration-300 transform-gpu">
                <div className="text-3xl font-bold text-royal-violet-light drop-shadow-lg">3+</div>
                <div className="text-gray-300 text-sm">Years Exp</div>
              </div>
              <div className="text-center glassmorphism p-4 rounded-xl hover:scale-105 transition-transform duration-300 transform-gpu">
                <div className="text-3xl font-bold text-coral-pink drop-shadow-lg">4</div>
                <div className="text-gray-300 text-sm">Languages</div>
              </div>
            </div>
          </div>

          {/* Picture Circle on right */}
          <div className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-coral-pink via-royal-violet to-champagne-gold p-1 animate-glow transform-gpu hover:scale-105 transition-transform duration-500 overflow-visible">
            <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-lg flex items-center justify-center border border-white/20 relative overflow-visible">
              <img
                src="/random/IMG_5904.JPEG"
                alt="Profile"
                className="rounded-full w-3/4 h-3/4 object-cover"
              />
              {/* Left light ray */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-24 h-2 bg-gradient-to-r from-yellow-300/80 to-transparent rounded-full blur-xl animate-pulse"></div>
              {/* Right light ray */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-2 bg-gradient-to-l from-yellow-300/80 to-transparent rounded-full blur-xl animate-pulse"></div>
            </div>
            {/* Mic Icon */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-champagne-gold to-coral-pink text-black rounded-full p-4 animate-bounce shadow-2xl">
              <Mic size={28} />
            </div>
            {/* 3D Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-champagne-gold/30 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-4 rounded-full border border-coral-pink/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
