
import React from 'react';
import { Quote, Award, Users, Mic } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-royal-violet-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-coral-pink rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-champagne-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            About <span className="gradient-text">Nisarga</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-2xl">
              <Quote className="text-coral-pink mb-4" size={32} />
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
                Fluent in <span className="text-royal-violet-light font-semibold">5 languages</span>, she lights up weddings, 
                corporate gigs, celebrity events, and concerts with grace, energy, and charm.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="service-card p-6 rounded-xl text-center">
                <Award className="text-champagne-gold mx-auto mb-3" size={32} />
                <div className="text-coral-pink font-semibold">Award Winner</div>
                <div className="text-gray-400 text-sm">Excellence in Entertainment</div>
              </div>
              
              <div className="service-card p-6 rounded-xl text-center">
                <Users className="text-coral-pink mx-auto mb-3" size={32} />
                <div className="text-champagne-gold font-semibold">Crowd Favorite</div>
                <div className="text-gray-400 text-sm">30K+ Happy Audience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image and floating elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-coral-pink via-royal-violet to-champagne-gold rounded-2xl p-1">
                <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center text-white text-6xl font-playfair">
                  NG
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 glassmorphism p-4 rounded-xl animate-float">
                <Mic className="text-coral-pink" size={24} />
                <div className="text-white font-semibold text-sm mt-2">Live Events</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glassmorphism p-4 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                <Quote className="text-champagne-gold" size={24} />
                <div className="text-white font-semibold text-sm mt-2">Multilingual</div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-coral-pink to-royal-violet rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-16">
          <div className="text-gray-400 mb-4">Follow the Journey</div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/thecurlygirly__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral-pink hover:text-white transition-colors duration-300 font-semibold"
            >
              @thecurlygirly__
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://youtube.com/@thecrazycurly__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-gold hover:text-white transition-colors duration-300 font-semibold"
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
