import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Star } from 'lucide-react';

interface Review {
  title: string;
  text: string;
  rating: number;
  author: string;
}

const AllReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data.reverse()));
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 container mx-auto px-6">
        <a href="/" className="flex items-center text-coral-pink hover:text-white mb-8">
          <ArrowLeft className="mr-2" size={20} /> Back
        </a>
        <h2 className="text-4xl font-playfair font-bold text-white mb-8 text-center">All Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glassmorphism p-6 rounded-xl text-white">
              <h3 className="font-semibold mb-2">{rev.title}</h3>
              <p className="mb-2">{rev.text}</p>
              <p className="text-sm mb-2">- {rev.author}</p>
              <div className="flex space-x-1">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-champagne-gold" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllReviewsPage;
