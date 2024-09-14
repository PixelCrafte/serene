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
    <section className='overflow-x-hidden flex flex-col justify-center items-center w-full p-4'>
      <h2 className="text-black text-center text-3xl font-bold p-3 pl-0 sm:w-[80%]">Message Us</h2>
    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center md:w-[80%] flex-shrink-0">
      <div className="space-y-2">
      <a id="contact-us"></a>
        <input
          className="w-full px-4 py-2 bg-slate-100 text-black focus:ring-2 focus:ring-main2 outline-none"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div className="space-y-2">
        <input
          className="w-full md:text-xl px-4 py-2 bg-slate-100 text-black focus:ring-2 focus:ring-main2 outline-none"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="space-y-2">
        <textarea
          className="w-full px-4 py-2 bg-slate-100 text-black focus:ring-2 focus:ring-main2 outline-none"
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
        className="w-full py-3 bg-main2 hover:bg-opacity-70 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-yellow-500"
        >
        Send Message
      </button>
        {status && <p className="text-sm text-yellow-400 my-2">{status}</p>}
    </form>
</section>

  )
}

export default ContactUs