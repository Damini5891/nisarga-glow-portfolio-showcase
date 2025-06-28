import React, { useState } from 'react';
import { Camera, Play, ExternalLink } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const fetchGallery = async () => {
  const res = await fetch('/api/gallery');
  return res.json();
};

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { data: galleryItems = [] } = useQuery({ queryKey: ['gallery'], queryFn: fetchGallery });
  const categories = ['All', ...Array.from(new Set(galleryItems.map((g: any) => g.category)))]
  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item: any) => item.category === activeFilter);

  const displayItems = filteredItems.slice(0, 8);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-royal-violet-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
            Event <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Capturing moments from 500+ successful events and 30,000+ entertained audiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6 animate-shimmer"></div>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full border transition-all duration-500 transform-gpu hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-coral-pink to-champagne-gold text-white border-transparent shadow-2xl'
                  : 'border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white glassmorphism'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square cursor-pointer transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl"
            >
              {/* Image or Video Placeholder */}
              {item.type === 'image' && item.src ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-coral-pink/20 to-royal-violet/20 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="text-white drop-shadow-lg" size={48} />
                  ) : (
                    <Camera className="text-white drop-shadow-lg" size={48} />
                  )}
                </div>
              )}

              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-champagne-gold text-sm font-medium mb-1 animate-shimmer">
                    {item.category}
                  </div>
                  <h3 className="text-white font-semibold mb-2 transform-gpu group-hover:scale-105 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {item.description}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-coral-pink hover:text-white transition-colors duration-300 transform-gpu hover:scale-110"
                    >
                      <span className="mr-2">View Reel</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Enhanced Category Badge */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform-gpu group-hover:scale-110">
                <span className="px-3 py-1 bg-gradient-to-r from-coral-pink/80 to-champagne-gold/80 backdrop-blur-sm rounded-full text-white text-xs font-medium shadow-lg">
                  {item.category}
                </span>
              </div>

              {/* Enhanced Hover Effect Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform-gpu group-hover:scale-110 group-hover:rotate-12">
                <div className="w-10 h-10 bg-gradient-to-r from-coral-pink to-champagne-gold rounded-full flex items-center justify-center shadow-lg">
                  {item.type === 'video' ? (
                    <Play className="text-white" size={18} />
                  ) : (
                    <ExternalLink className="text-white" size={18} />
                  )}
                </div>
              </div>

              {/* 3D Effect Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-2xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/gallery"
            className="px-6 py-3 rounded-full border transition-all duration-500 transform-gpu hover:scale-105 border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white glassmorphism"
          >
            View Full Gallery
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glassmorphism p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-gray-300 mt-2">Events Hosted</div>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text">30,000+</div>
            <div className="text-gray-300 mt-2">Audience Entertained</div>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text">4</div>
            <div className="text-gray-300 mt-2">Languages</div>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text">3+</div>
            <div className="text-gray-300 mt-2">Years Experience</div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/thecurlygirly__"
            target="_blank"
            rel="noopener noreferrer"
            className="glassmorphism px-8 py-4 rounded-full text-white hover:bg-coral-pink/20 transition-all duration-300 font-medium inline-flex items-center space-x-2"
          >
            <span>View More on Instagram</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default GallerySection;
