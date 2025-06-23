
import React from 'react';
import { Quote, Award, Users, Mic } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-royal-violet-dark relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-coral-pink rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-champagne-gold rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-coral-pink/10 to-royal-violet/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
            About <span className="gradient-text">Nisarga</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto animate-shimmer"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-2xl transform-gpu hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <Quote className="text-coral-pink mb-4 animate-float" size={32} />
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Nisarga Gowda is a <span className="text-coral-pink font-semibold">Professional Multilingual Emcee</span>, 
                TV Anchor, Model, and Influencer with <span className="text-champagne-gold font-semibold">3+ years of experience</span> and 
                <span className="text-royal-violet-light font-semibold"> 500+ shows</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                She has entertained <span className="text-coral-pink font-semibold">30,000+ live audiences</span> and hosted 
                legendary events like <span className="text-champagne-gold font-semibold">Vijay Prakash's concert (3 times)</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Fluent in <span className="text-royal-violet-light font-semibold">4 languages</span> with conversational Tamil, she lights up weddings,
                corporate gigs, celebrity events, and concerts with grace, energy, and charm.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With a passion for connecting with diverse audiences, she thrives on both high-energy concerts and intimate gatherings.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Her confident stage presence is matched by a warm, friendly charm that leaves lasting impressions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Beyond hosting, Nisarga loves exploring new cultures and capturing memories through her lens.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glassmorphism p-6 rounded-xl text-center transform-gpu hover:scale-105 hover:-rotate-1 transition-all duration-300">
                <Users className="text-coral-pink mx-auto mb-3 animate-float" size={32} />
                <div className="text-champagne-gold font-semibold">Crowd Favorite</div>
                <div className="text-gray-400 text-sm">30K+ Happy Audience</div>
              </div>
               <div className="glassmorphism p-6 rounded-xl text-center transform-gpu hover:scale-105 hover:-rotate-1 transition-all duration-300">
                <Users className="text-coral-pink mx-auto mb-3 animate-float" size={32} />
                <div className="text-champagne-gold font-semibold">Crowd Favorite</div>
                <div className="text-gray-400 text-sm">30K+ Happy Audience</div>
              </div>
            </div>
            
          </div>

          {/* Right Side - Enhanced Image with new photo */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image with new photo */}
              <div className="w-full h-96 bg-gradient-to-br from-coral-pink via-royal-violet to-champagne-gold rounded-2xl p-1 transform-gpu hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="w-full h-96 rounded-2xl overflow-hidden relative">
                  <img
                    src="/events/ad0e8442-6354-4420-8ba0-3f2cb1421c08.png"
                    alt="Nisarga Gowda with microphone"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              
              {/* Enhanced Floating Cards */}
              <div className="absolute -top-6 -left-6 glassmorphism p-4 rounded-xl animate-float transform-gpu hover:scale-110 transition-transform duration-700">
                <Mic className="text-coral-pink" size={24} />
                <div className="text-white font-semibold text-sm mt-2">Live Events</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glassmorphism p-4 rounded-xl animate-float transform-gpu hover:scale-110 transition-transform duration-700" style={{ animationDelay: '2s' }}>
                <Quote className="text-champagne-gold" size={24} />
                <div className="text-white font-semibold text-sm mt-2">Multilingual</div>
              </div>
            </div>

            {/* Enhanced Background Decorations */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-coral-pink to-royal-violet rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute inset-0 rounded-2xl border border-champagne-gold/20 transform rotate-3 scale-110 -z-10"></div>
            <div className="absolute inset-0 rounded-2xl border border-coral-pink/20 transform -rotate-2 scale-105 -z-10"></div>
          </div>
        </div>

        {/* Enhanced Social Media Links */}
        <div className="text-center mt-16">
          <div className="text-gray-400 mb-4">Follow the Journey</div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/thecurlygirly__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral-pink hover:text-white transition-all duration-300 font-semibold transform-gpu hover:scale-110 hover:rotate-3"
            >
              @thecurlygirly__
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://youtube.com/@thecrazycurly__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-gold hover:text-white transition-all duration-300 font-semibold transform-gpu hover:scale-110 hover:-rotate-3"
            >
              @thecrazycurly__
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
