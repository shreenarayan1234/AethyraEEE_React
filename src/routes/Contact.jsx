import React, { useState } from 'react';
import contact1 from '../assets/contact1.webp';
import contact2 from '../assets/contact2.jpg';
import contact3 from '../assets/contact3.webp';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here
    console.log({ name, email, message });
  };

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-10">Contact Us</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Contact Form */}
          <div className="lg:w-1/2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/40">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  rows="5"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Image Collage */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={contact1}
              alt="Contact Illustration 1"
              className="w-full h-full object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            />
            <img
              src={contact2}
              alt="Contact Illustration 2"
              className="w-full h-full object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            />
            <img
              src={contact3}
              alt="Contact Illustration 3"
              className="col-span-2 w-full h-full object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
