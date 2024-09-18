"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // 'sending', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      const response = await axios.post('/api/subscribe', { email, name });
      if (response.data.error) {
        setStatus('error');
        setMessage(response.data.error);
      } else {
        setStatus('success');
        setMessage('Subscribed!');
      }
    } catch (error) {
      console.error('Form submission error:', error.response?.data);
      setStatus('error');
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <section className="relative bg-gray-900 text-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bg-1.jpg')" }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8">Stay updated with our latest news, insights, and exclusive offers!</p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="bg-main5 p-8 rounded-lg shadow-lg space-y-4 mx-auto max-w-lg border border-main2">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-gray-300 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-gray-300 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-main2 to-main1 text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Subscribe
          </button>
          {/* Status Message */}
          {status === 'sending' && <p className="text-yellow-500 mt-4">Sending...</p>}
          {status === 'success' && <p className="text-green-500 mt-4">{message}</p>}
          {status === 'error' && <p className="text-red-500 mt-4">{message}</p>}
        </form>
      </div>
    </section>
  );
}
