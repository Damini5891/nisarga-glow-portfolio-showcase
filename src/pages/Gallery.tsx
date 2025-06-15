import React from 'react';
import Navigation from '../components/Navigation';
import FullGallery from '../components/FullGallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24">
        <FullGallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
