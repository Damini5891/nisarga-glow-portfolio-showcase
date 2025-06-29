import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const UploadPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({ eventType: 'concert', title: '', description: '', image: null as File | null });
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'nisarga123') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.image) return;

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
      alert('Uploaded');
    };
    reader.readAsDataURL(form.image);
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
          <form onSubmit={handleSubmit} className="max-w-md mx-auto glassmorphism p-6 rounded-xl">
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
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UploadPage;
