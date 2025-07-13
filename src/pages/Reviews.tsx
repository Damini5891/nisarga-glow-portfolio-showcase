import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

interface Review {
  title: string;
  text: string;
  rating: number;
  author: string;
}

const ReviewsPage = () => {
  const [form, setForm] = useState({ title: '', text: '', rating: 5, author: '' });

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    // review list managed in admin page
    setForm({ title: '', text: '', rating: 5, author: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 container mx-auto px-6">
        <a href="/" className="flex items-center text-coral-pink hover:text-white mb-6">
          <ArrowLeft className="mr-2" size={20} /> Back
        </a>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto glassmorphism p-6 rounded-xl text-white">
          <h2 className="text-xl mb-4">Add Review</h2>
          <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full mb-2 p-2" />
          <textarea value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} placeholder="Description" className="w-full mb-2 p-2" />
          <input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} placeholder="Author" className="w-full mb-2 p-2" />
          <input type="number" min="1" max="5" value={form.rating} onChange={e => setForm({ ...form, rating: Number(e.target.value) })} className="w-full mb-4 p-2" />
          <button type="submit" className="px-4 py-2 bg-coral-pink text-white rounded">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
