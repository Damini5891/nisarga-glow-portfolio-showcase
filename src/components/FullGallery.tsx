import React, { useState } from 'react';
import { Camera, Play, ExternalLink, ArrowLeft } from 'lucide-react';
import { galleryItems, categories } from '../data/galleryItems';

const FullGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-royal-violet-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center mb-8">
          <a href="/" className="flex items-center text-coral-pink hover:text-white transition-colors">
            <ArrowLeft className="mr-2" size={20} /> Back
          </a>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 transform-gpu hover:scale-105 transition-transform duration-300">
            Full <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6 animate-shimmer"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-x-auto pb-2">
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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl"
            >
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-champagne-gold text-sm font-medium mb-1 animate-shimmer">
                    {item.category}
                  </div>
                  <h3 className="text-white font-semibold mb-2 transform-gpu group-hover:scale-105 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{item.description}</p>
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

              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform-gpu group-hover:scale-110">
                <span className="px-3 py-1 bg-gradient-to-r from-coral-pink/80 to-champagne-gold/80 backdrop-blur-sm rounded-full text-white text-xs font-medium shadow-lg">
                  {item.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform-gpu group-hover:scale-110 group-hover:rotate-12">
                <div className="w-10 h-10 bg-gradient-to-r from-coral-pink to-champagne-gold rounded-full flex items-center justify-center shadow-lg">
                  {item.type === 'video' ? (
                    <Play className="text-white" size={18} />
                  ) : (
                    <ExternalLink className="text-white" size={18} />
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default FullGallery;
