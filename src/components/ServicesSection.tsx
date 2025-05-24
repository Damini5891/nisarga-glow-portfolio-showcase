
import React from 'react';
import { Heart, Building, Music, Gift, Users, Film, Camera, Newspaper, Package, Trophy, GraduationCap, Award } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: Heart, title: "Weddings", description: "Making your special day magical with multilingual hosting" },
    { icon: Building, title: "Corporate Events", description: "Professional presentations and team engagements" },
    { icon: Music, title: "Concerts", description: "High-energy music event hosting and crowd engagement" },
    { icon: Gift, title: "Anniversaries", description: "Celebrating milestones with grace and elegance" },
    { icon: Users, title: "Team Building", description: "Interactive sessions for corporate team bonding" },
    { icon: Film, title: "Movie Promotions", description: "Star-studded events and celebrity interactions" },
    { icon: Camera, title: "Fashion Shows", description: "Glamorous runway events and style showcases" },
    { icon: Newspaper, title: "Press Meets", description: "Media events and professional announcements" },
    { icon: Package, title: "Product Launches", description: "Brand reveals and marketing activations" },
    { icon: Trophy, title: "Sport Events", description: "Athletic competitions and sports ceremonies" },
    { icon: GraduationCap, title: "College Fests", description: "Youth events and educational celebrations" },
    { icon: Award, title: "Award Nights", description: "Prestigious ceremonies and recognition events" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-royal-violet-dark to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-64 h-64 border border-coral-pink rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-champagne-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bringing energy, professionalism, and multilingual expertise to every occasion
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="service-card p-6 rounded-xl text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-coral-pink to-royal-violet rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br from-champagne-gold to-coral-pink rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-coral-pink transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral-pink/10 to-royal-violet/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to make your event unforgettable?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-coral-pink to-champagne-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg"
          >
            Book Your Event Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
