import React, { useState } from 'react';

const events = ['Corporate', 'Wedding', 'Host', 'Concerts', 'Others'];

const Admin = () => {
  const [event, setEvent] = useState('Corporate');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [other, setOther] = useState('');
  const [images, setImages] = useState<FileList | null>(null);
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewText, setReviewText] = useState('');

  const submitGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!images) return;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('event', event);
    if (event === 'Others') formData.append('other_event', other);
    Array.from(images).forEach((img) => formData.append('images', img));
    await fetch('/api/gallery', { method: 'POST', body: formData });
    setTitle('');
    setDescription('');
    setImages(null);
    setOther('');
  };

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: reviewText, author: reviewAuthor })
    });
    setReviewAuthor('');
    setReviewText('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-12">
      <h1 className="text-3xl mb-4">Admin</h1>

      <form onSubmit={submitGallery} className="space-y-4">
        <h2 className="text-xl">Add Gallery Images</h2>
        <div>
          <label className="block mb-1">Event</label>
          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="text-black p-2"
          >
            {events.map((ev) => (
              <option key={ev} value={ev}>
                {ev}
              </option>
            ))}
          </select>
        </div>
        {event === 'Others' && (
          <div>
            <label className="block mb-1">Event Name</label>
            <input
              value={other}
              onChange={(e) => setOther(e.target.value)}
              className="p-2 text-black"
            />
          </div>
        )}
        <div>
          <label className="block mb-1">Title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 text-black"
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 text-black"
          />
        </div>
        <div>
          <label className="block mb-1">Images</label>
          <input type="file" multiple onChange={(e) => setImages(e.target.files)} />
        </div>
        <button type="submit" className="px-4 py-2 bg-coral-pink rounded">
          Upload
        </button>
      </form>

      <form onSubmit={submitReview} className="space-y-4">
        <h2 className="text-xl">Add Review</h2>
        <div>
          <label className="block mb-1">Author</label>
          <input
            required
            value={reviewAuthor}
            onChange={(e) => setReviewAuthor(e.target.value)}
            className="p-2 text-black"
          />
        </div>
        <div>
          <label className="block mb-1">Review</label>
          <textarea
            required
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="p-2 text-black"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-coral-pink rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Admin;
