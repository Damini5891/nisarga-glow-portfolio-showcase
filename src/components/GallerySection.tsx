
import React, { useState } from 'react';
import { Camera, Play, ExternalLink } from 'lucide-react';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Real gallery items using the uploaded photos
  const galleryItems = [
    {
      type: 'image',
      src: '/lovable-uploads/614d296f-e30d-47ab-873d-d7a78d2f9e58.png',
      title: 'Concert Performance',
      category: 'Music Events',
      description: 'Hosting major music concerts with energy and grace'
    },
    {
      type: 'image',
      src: '/lovable-uploads/886d7bac-7931-4ba3-bad3-9802faa41539.png',
      title: 'Stage Presentation',
      category: 'Music Events',
      description: 'Professional stage hosting at large venues'
    },
    {
      type: 'image',
      src: '/lovable-uploads/a671bda0-afdd-4510-97ee-754259c21e44.png',
      title: 'Crowd Engagement',
      category: 'Music Events',
      description: 'Connecting with thousands of audience members'
    },
    {
      type: 'image',
      src: '/lovable-uploads/3fc3b40e-506b-4beb-acf7-7d7c6c388af0.png',
      title: 'Award Ceremony',
      category: 'Corporate',
      description: 'Elegant hosting for prestigious award functions'
    },
    {
      type: 'image',
      src: '/lovable-uploads/329327c5-d612-470e-aa06-8173ddbab3c3.png',
      title: 'Mall Event',
      category: 'Corporate',
      description: 'Interactive hosting at retail and lifestyle events'
    },
    {
      type: 'image',
      src: '/lovable-uploads/fe3863ff-3975-4735-ae90-2a4917a973b9.png',
      title: 'Red Saree Performance',
      category: 'Ceremonies',
      description: 'Traditional elegance meets modern presentation'
    },
    {
      type: 'image',
      src: '/lovable-uploads/2c3d3f88-1cea-4375-8480-5bae9ee6bee1.png',
      title: 'Grand Stage Event',
      category: 'Music Events',
      description: 'Commanding the stage at premium venues'
    },
    {
      type: 'image',
      src: '/lovable-uploads/7d7f1e59-b6b8-44f0-8e1a-90078f012b23.png',
      title: 'Evening Performance',
      category: 'Ceremonies',
      description: 'Captivating audiences with charismatic presentation'
    },
    {
      type: 'image',
      src: '/lovable-uploads/b6fcb384-fb23-40c8-8ed5-210f23b55c55.png',
      title: 'Corporate Hosting',
      category: 'Corporate',
      description: 'Professional corporate event management'
    },
    {
      type: 'image',
      src: '/lovable-uploads/f0f84489-9331-4a86-a44f-4afc3f382778.png',
      title: 'Traditional Concert',
      category: 'Music Events',
      description: 'Blending tradition with contemporary hosting'
    },
    {
      type: 'image',
      src: '/lovable-uploads/66497824-2186-4e4b-995a-a2dbd9a8678f.png',
      title: 'Foundation Day',
      category: 'Corporate',
      description: 'Hosting significant milestone celebrations'
    },
    {
      type: 'image',
      src: '/lovable-uploads/c03318ca-e6e6-4a10-b854-806749b19a31.png',
      title: 'Healthcare Event',
      category: 'Corporate',
      description: 'Supporting meaningful causes through events'
    },
    {
      type: 'image',
      src: '/lovable-uploads/7cb06e82-dc2d-4d5b-ab27-5e7674ea19b1.png',
      title: 'Charity Foundation',
      category: 'Corporate',
      description: 'Contributing to social causes through entertainment'
    },
    {
      type: 'image',
      src: '/lovable-uploads/32f34c96-18a3-4a32-8b1b-c65771396d03.png',
      title: 'Dynamic Presentation',
      category: 'Ceremonies',
      description: 'Bringing energy and excitement to every event'
    },
    {
      type: 'video',
      title: 'Vijay Prakash Concert',
      category: 'Featured',
      url: 'https://www.instagram.com/reel/DJOZpguv6He/',
      description: 'Exclusive collaboration with music maestro Vijay Prakash'
    },
    {
      type: 'image',
      src: '/lovable-uploads/0e8d413e-1843-425a-9d6e-4aed049a86ff.png',
      title: 'Audience Connection',
      category: 'Music Events',
      description: 'Creating memorable moments with live audiences'
    }
  ];

  const categories = ['All', 'Music Events', 'Corporate', 'Ceremonies', 'Featured'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-royal-violet-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Event <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Capturing moments from 500+ successful events and 30,000+ entertained audiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-coral-pink text-white border-coral-pink'
                  : 'border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image or Video Placeholder */}
              {item.type === 'image' && item.src ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-coral-pink/20 to-royal-violet/20 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="text-white" size={48} />
                  ) : (
                    <Camera className="text-white" size={48} />
                  )}
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-champagne-gold text-sm font-medium mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
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
                      className="inline-flex items-center text-coral-pink hover:text-white transition-colors duration-300"
                    >
                      <span className="mr-2">View Reel</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-coral-pink/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {item.category}
                </span>
              </div>

              {/* Hover Effect Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-coral-pink rounded-full flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="text-white" size={16} />
                  ) : (
                    <ExternalLink className="text-white" size={16} />
                  )}
                </div>
              </div>
            </div>
          ))}
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
            <div className="text-3xl font-bold gradient-text">5</div>
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

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-violet/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default GallerySection;
