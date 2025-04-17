import React from 'react';
import dashainImg from '../assets/dashain.webp';
import eventPic from '../assets/2024-1.webp';
import eventPic2 from '../assets/2024-2.webp';

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-6">Upcoming Events</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          Get ready for an extraordinary celebration at the Dashain Tihar Fest 2025—where tradition meets modern festivity.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Information Card */}
          <div className="lg:w-1/2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/40">
            <h3 className="text-2xl font-semibold text-white mb-4">Dashain Tihar Fest 2025</h3>
            <div className="text-xl font-medium text-gray-300 mb-4">
              {/* Placeholder for countdown logic */}
              <span>Countdown: <strong>Coming soon!</strong></span>
            </div>
            <p className="text-gray-400 mb-6">
              The Dashain Tihar Fest 2025 promises to be an unforgettable celebration of Nepal’s most cherished festivals—Dashain and Tihar. Enjoy mesmerizing cultural performances, traditional music and dance, delicious Nepali cuisine, and interactive experiences that immerse you in the spirit of Nepalese heritage.
            </p>
            <a
              href="#"
              className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition duration-300"
            >
              Coming Soon
            </a>
          </div>

          {/* Image Gallery */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <img
              src={dashainImg}
              alt="Dashain Tihar Fest 2025"
              className="w-full object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            />
            <div className="flex gap-4">
              <img
                src={eventPic}
                alt="Event Detail"
                className="w-1/2 object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
              />
              <img
                src={eventPic2}
                alt="Event Detail 2"
                className="w-1/2 object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
