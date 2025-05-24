
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Send, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast.success("Message sent! I'll get back to you soon!");
    setFormData({ name: '', email: '', eventType: '', eventDate: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const eventTypes = [
    'Wedding', 'Corporate Event', 'Concert', 'Anniversary', 'Team Building',
    'Movie Promotion', 'Fashion Show', 'Press Meet', 'Product Launch',
    'Sports Event', 'College Fest', 'Award Night', 'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-royal-violet-dark to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-coral-pink rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-champagne-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to make your event unforgettable? Let's discuss your vision!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-pink to-champagne-gold mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-pink to-royal-violet rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-medium">nisarga@example.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-champagne-gold to-coral-pink rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white font-medium">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-royal-violet to-champagne-gold rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white font-medium">Bangalore, Karnataka</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-xl font-playfair font-bold text-white mb-6">Follow My Journey</h3>
              
              <div className="space-y-4">
                <a
                  href="https://instagram.com/thecurlygirly__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-coral-pink/10 transition-colors duration-300 group"
                >
                  <Instagram className="text-coral-pink group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <div className="text-white font-medium">@thecurlygirly__</div>
                    <div className="text-gray-400 text-sm">Instagram</div>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@thecrazycurly__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-champagne-gold/10 transition-colors duration-300 group"
                >
                  <Youtube className="text-champagne-gold group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <div className="text-white font-medium">@thecrazycurly__</div>
                    <div className="text-gray-400 text-sm">YouTube</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">Book Your Event</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-coral-pink focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-coral-pink focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-coral-pink focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-black">{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-coral-pink focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-coral-pink focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your event, requirements, and any special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-coral-pink to-royal-violet text-white py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
