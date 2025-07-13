import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-royal-violet-dark to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-coral-pink rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-champagne-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to make your event unforgettable? Reach out today!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-pink to-royal-violet rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-medium">nisarga@example.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-champagne-gold to-coral-pink rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white font-medium">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-royal-violet to-champagne-gold rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white font-medium">Bangalore, Karnataka</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-xl font-playfair font-bold text-white mb-6">Follow My Journey</h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/thecurlygirly__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-coral-pink/10 transition-colors duration-300 group"
                >
                  <Instagram className="text-coral-pink group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <div className="text-white font-medium">@thecurlygirly__</div>
                    <div className="text-gray-400 text-sm">Instagram</div>
                  </div>
                </a>
                <a
                  href="https://youtube.com/@thecrazycurly__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-champagne-gold/10 transition-colors duration-300 group"
                >
                  <Youtube className="text-champagne-gold group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <div className="text-white font-medium">@thecrazycurly__</div>
                    <div className="text-gray-400 text-sm">YouTube</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="glassmorphism p-8 rounded-2xl flex flex-col items-center justify-center text-center">
            <img src="/contact.svg" alt="Contact" className="w-96 h-96 mb-6" />
            <a
              href="mailto:nisarga@example.com"
              className="bg-gradient-to-r from-coral-pink to-royal-violet text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <p className="text-gray-300 mt-6">I'd love to hear from you! Click above to send an email.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

