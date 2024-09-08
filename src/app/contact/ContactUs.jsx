'use client'
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message(1).');
      }
    } catch (error) {
      setStatus('Failed to send message(2).');
    }
  };

  return (
    <section>
      <h2 className="text-white text-3xl font-bold p-3 pl-0">Message Us</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
      <a id="contact-us"></a>
        <label className="block text-lg">Name</label>
        <input
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-orange-600"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg">Email</label>
        <input
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-orange-600"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg">Message</label>
        <textarea
          className="w-full h-32 px-4 py-2 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-main2"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your message..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-main2 hover:bg-opacity-70 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
        >
        Send Message
      </button>
        {status && <p className="text-sm text-yellow-400 my-2">{status}</p>}
    </form>
</section>

  )
}

export default ContactUs