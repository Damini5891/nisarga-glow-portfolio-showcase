import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

interface EventItem {
  title: string;
  date: string;
  description?: string;
  image: string;
}

const EventsPage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 container mx-auto px-6">
        <a href="/" className="flex items-center text-coral-pink hover:text-white mb-6">
          <ArrowLeft className="mr-2" size={20} /> Back
        </a>
        <h2 className="text-4xl font-playfair font-bold text-white mb-8 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((ev, idx) => (
            <div key={idx} className="glassmorphism p-4 rounded-xl text-white">
              <img src={ev.image} alt={ev.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="font-semibold">{ev.title}</h3>
              <p className="text-sm text-gray-300 mb-1">{ev.date}</p>
              {ev.description && <p className="text-gray-400 text-sm">{ev.description}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
