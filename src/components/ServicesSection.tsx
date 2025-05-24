
import React from 'react';
import { Heart, Building, Music, Gift, Users, Film, Camera, Newspaper, Package, Trophy, GraduationCap, Award } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: Heart, title: "Weddings", description: "Making your special day magical with multilingual hosting", color: "from-pink-500 to-rose-500" },
    { icon: Building, title: "Corporate Events", description: "Professional presentations and team engagements", color: "from-blue-500 to-indigo-500" },
    { icon: Music, title: "Concerts", description: "High-energy music event hosting and crowd engagement", color: "from-purple-500 to-violet-500" },
    { icon: Gift, title: "Anniversaries", description: "Celebrating milestones with grace and elegance", color: "from-amber-500 to-orange-500" },
    { icon: Users, title: "Team Building", description: "Interactive sessions for corporate team bonding", color: "from-emerald-500 to-teal-500" },
    { icon: Film, title: "Movie Promotions", description: "Star-studded events and celebrity interactions", color: "from-red-500 to-pink-500" },
    { icon: Camera, title: "Fashion Shows", description: "Glamorous runway events and style showcases", color: "from-fuchsia-500 to-purple-500" },
    { icon: Newspaper, title: "Press Meets", description: "Media events and professional announcements", color: "from-slate-500 to-gray-500" },
    { icon: Package, title: "Product Launches", description: "Brand reveals and marketing activations", color: "from-cyan-500 to-blue-500" },
    { icon: Trophy, title: "Sport Events", description: "Athletic competitions and sports ceremonies", color: "from-yellow-500 to-amber-500" },
    { icon: GraduationCap, title: "College Fests", description: "Youth events and educational celebrations", color: "from-green-500 to-emerald-500" },
    { icon: Award, title: "Award Nights", description: "Prestigious ceremonies and recognition events", color: "from-gold-500 to-yellow-500" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-royal-violet-dark to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-64 h-64 border border-coral-pink rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-champagne-gold rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-coral-pink/10 to-champagne-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bringing energy, professionalism, and multilingual expertise to every occasion
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6 animate-shimmer"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-1 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-white/30">
                        <IconComponent className="text-white drop-shadow-lg" size={24} />
                      </div>
                      {/* Floating Ring */}
                      <div className="absolute inset-0 w-16 h-16 mx-auto border-2 border-white/30 rounded-full scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* 3D Shadow Effect */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to make your event unforgettable?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-coral-pink to-champagne-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-110 transition-all duration-500 hover:shadow-2xl transform-gpu hover:rotate-1 relative overflow-hidden"
          >
            <span className="relative z-10">Book Your Event Now</span>
            <div className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
