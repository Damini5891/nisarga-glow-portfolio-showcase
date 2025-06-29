import React from 'react';
import { Star } from 'lucide-react';
import reviewsData from '../data/reviews.json';

interface Review {
  title: string;
  text: string;
  rating: number;
  author: string;
}

const reviews = reviewsData as Review[];

const ReviewsSection = () => {
  const display = reviews.slice(0, 3);
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-black to-royal-violet-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6 animate-shimmer"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {display.map((review, idx) => (
            <div key={idx} className="glassmorphism p-6 rounded-xl flex flex-col justify-between h-full">
              <p className="text-gray-300 mb-4 flex-1">“{review.text}”</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-white font-medium">{review.author}</span>
                <span className="flex space-x-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-champagne-gold" />
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
