
import React from 'react';
import { Camera, Play, ExternalLink } from 'lucide-react';

const GallerySection = () => {
  // Placeholder for gallery items
  const galleryItems = [
    { type: 'image', title: 'Concert Hosting', category: 'Music Events' },
    { type: 'image', title: 'Wedding Ceremony', category: 'Weddings' },
    { type: 'image', title: 'Corporate Event', category: 'Business' },
    { type: 'video', title: 'Vijay Prakash Concert', category: 'Featured', url: 'https://www.instagram.com/reel/DJOZpguv6He/' },
    { type: 'image', title: 'Fashion Show', category: 'Fashion' },
    { type: 'image', title: 'Award Night', category: 'Ceremonies' },
    { type: 'image', title: 'Sports Event', category: 'Sports' },
    { type: 'image', title: 'Product Launch', category: 'Corporate' }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-royal-violet-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Event <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Moments captured from memorable events and celebrations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Music Events', 'Weddings', 'Corporate', 'Fashion', 'Sports'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 rounded-full border border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square cursor-pointer"
            >
              {/* Placeholder for actual images */}
              <div className="w-full h-full bg-gradient-to-br from-coral-pink/20 to-royal-violet/20 flex items-center justify-center">
                {item.type === 'video' ? (
                  <Play className="text-white" size={48} />
                ) : (
                  <Camera className="text-white" size={48} />
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-champagne-gold text-sm font-medium mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-coral-pink hover:text-white transition-colors duration-300"
                    >
                      <span className="mr-2">View</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-coral-pink rounded-full flex items-center justify-center">
                  <ExternalLink className="text-white" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="glassmorphism px-8 py-4 rounded-full text-white hover:bg-coral-pink/20 transition-all duration-300 font-medium">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
