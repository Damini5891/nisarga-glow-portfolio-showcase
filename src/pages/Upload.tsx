import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const UploadPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'images' | 'events' | 'reviews'>('images');
  const [form, setForm] = useState({ eventType: 'concert', title: '', description: '', image: null as File | null });
  const [items, setItems] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [eventForm, setEventForm] = useState({ title: '', date: '', description: '', image: null as File | null });
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    if (loggedIn) {
      fetch('/api/gallery')
        .then(res => res.json())
        .then(data => setItems(data));
      fetch('/api/events')
        .then(res => res.json())
        .then(data => setEvents(data));
      fetch('/api/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }
  }, [loggedIn]);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'nisarga123') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

const handleImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.image) return;

    if (form.image.size > 25 * 1024 * 1024) {
      alert('File is larger than 25MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const payload = {
        eventType: form.eventType,
        title: form.title,
        description: form.description,
        image: (reader.result as string).split(',')[1],
      };
      await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const itemsRes = await fetch('/api/gallery');
      setItems(await itemsRes.json());
      alert('Uploaded');
    };
    reader.readAsDataURL(form.image);
  };

  const handleDelete = async (src: string) => {
    await fetch(`/api/gallery?src=${encodeURIComponent(src)}`, { method: 'DELETE' });
    setItems(items.filter(item => item.src !== src));
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.image) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const payload = {
        title: eventForm.title,
        date: eventForm.date,
        description: eventForm.description,
        image: (reader.result as string).split(',')[1],
      };
      await fetch('/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      fetch('/api/events')
        .then(res => res.json())
        .then(data => setEvents(data));
      alert('Uploaded');
    };
    reader.readAsDataURL(eventForm.image);
  };

  const handleEventDelete = async (displayIndex: number) => {
    const originalIndex = events.length - 1 - displayIndex;
    await fetch(`/api/event?index=${originalIndex}`, { method: 'DELETE' });
    setEvents(events.filter((_, i) => i !== originalIndex));
  };

  const handleReviewDelete = async (displayIndex: number) => {
    const originalIndex = reviews.length - 1 - displayIndex;
    await fetch(`/api/review?index=${originalIndex}`, { method: 'DELETE' });
    setReviews(reviews.filter((_, idx) => idx !== originalIndex));
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 container mx-auto px-6">
        {!loggedIn ? (
          <form onSubmit={handleLogin} className="max-w-md mx-auto glassmorphism p-6 rounded-xl">
            <h2 className="text-white mb-4 text-xl">Admin Login</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full mb-2 p-2" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full mb-4 p-2" />
            <button className="px-4 py-2 bg-coral-pink text-white rounded" type="submit">Login</button>
          </form>
        ) : (
          <>
            <div className="flex space-x-4 mb-6 justify-center">
              {(['images', 'events', 'reviews'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-coral-pink text-white' : 'glassmorphism text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'images' && (
              <>
                <form onSubmit={handleImageSubmit} className="max-w-md mx-auto glassmorphism p-6 rounded-xl mb-12">
                  <h2 className="text-white mb-4 text-xl">Upload Image</h2>
                  <select className="w-full mb-2 p-2" value={form.eventType} onChange={e => setForm({ ...form, eventType: e.target.value })}>
                    <option value="concert">concert</option>
                    <option value="corporate">corporate</option>
                    <option value="crowd">crowd</option>
                    <option value="wedding">wedding</option>
                    <option value="random">random</option>
                  </select>
                  <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full mb-2 p-2" />
                  <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" className="w-full mb-2 p-2" />
                  <input type="file" onChange={e => setForm({ ...form, image: e.target.files ? e.target.files[0] : null })} className="w-full mb-4" />
                  <button className="px-4 py-2 bg-coral-pink text-white rounded" type="submit">Upload</button>
                </form>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...items].reverse().map(item => (
                    <div key={item.src} className="relative">
                      <button
                        className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        onClick={() => handleDelete(item.src)}
                      >
                        ×
                      </button>
                      <img src={item.src} className="w-full h-32 object-cover rounded" />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'events' && (
              <>
                <form onSubmit={handleEventSubmit} className="max-w-md mx-auto glassmorphism p-6 rounded-xl mb-12">
                  <h2 className="text-white mb-4 text-xl">Add Event</h2>
                  <input value={eventForm.title} onChange={e => setEventForm({ ...eventForm, title: e.target.value })} placeholder="Event Name" className="w-full mb-2 p-2" />
                  <input type="date" value={eventForm.date} onChange={e => setEventForm({ ...eventForm, date: e.target.value })} className="w-full mb-2 p-2" />
                  <textarea value={eventForm.description} onChange={e => setEventForm({ ...eventForm, description: e.target.value })} placeholder="Description (optional)" className="w-full mb-2 p-2" />
                  <input type="file" onChange={e => setEventForm({ ...eventForm, image: e.target.files ? e.target.files[0] : null })} className="w-full mb-4" />
                  <button className="px-4 py-2 bg-coral-pink text-white rounded" type="submit">Upload</button>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[...events].reverse().map((ev, idx) => (
                    <div key={idx} className="glassmorphism p-4 rounded-xl relative text-white">
                      <button
                        className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        onClick={() => handleEventDelete(idx)}
                      >
                        ×
                      </button>
                      <img src={ev.image} className="w-full h-32 object-cover rounded mb-2" />
                      <h3 className="font-semibold">{ev.title}</h3>
                      <p className="text-sm text-gray-300">{ev.date}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'reviews' && (
              <div className="grid md:grid-cols-3 gap-4">
                {[...reviews].reverse().map((rev, idx) => (
                  <div key={idx} className="glassmorphism p-4 rounded-xl relative text-white">
                    <button
                      className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={() => handleReviewDelete(idx)}
                    >
                      ×
                    </button>
                    <h3 className="font-semibold mb-2">{rev.title}</h3>
                    <p className="text-sm mb-2">{rev.text}</p>
                    <p className="text-sm mb-2">- {rev.author}</p>
                    <div className="flex space-x-1">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UploadPage;
