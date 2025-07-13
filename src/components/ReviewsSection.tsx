import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  title: string;
  text: string;
  rating: number;
  author: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data.reverse()));
  }, []);

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
        <div className="text-center mt-8">
          <a
            href="/all-reviews"
            className="px-6 py-3 rounded-full border transition-all duration-500 transform-gpu hover:scale-105 border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white glassmorphism"
          >
            See All Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
