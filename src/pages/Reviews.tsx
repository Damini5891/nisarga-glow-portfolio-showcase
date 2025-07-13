import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowLeft, Star } from "lucide-react";

interface Review {
  title: string;
  text: string;
  rating: number;
  author: string;
}

const ReviewsPage = () => {
  const [form, setForm] = useState({
    title: "",
    text: "",
    rating: 5,
    author: "",
  });

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    // review list managed in admin page
    setForm({ title: "", text: "", rating: 5, author: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-royal-violet-dark to-black">
      <Navigation />
      <div className="pt-24 pb-10 container mx-auto px-6">
        <a
          href="/"
          className="flex items-center text-coral-pink hover:text-white mb-6"
        >
          <ArrowLeft className="mr-2" size={20} /> Back
        </a>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto glassmorphism p-6 rounded-xl text-white"
        >
          <h2 className="text-xl mb-4 text-center font-semibold">Add Review</h2>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Title"
            className="w-full mb-2 p-2 bg-black/40 rounded"
          />
          <textarea
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            placeholder="Description"
            className="w-full mb-2 p-2 bg-black/40 rounded"
          />
          <input
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            placeholder="Author"
            className="w-full mb-2 p-2 bg-black/40 rounded"
          />
          <div className="flex justify-center mb-4 space-x-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setForm({ ...form, rating: n })}
              >
                <Star
                  size={20}
                  className={
                    n <= form.rating ? "text-champagne-gold" : "text-gray-500"
                  }
                />
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-coral-pink rounded text-white font-medium hover:bg-coral-pink/80 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
