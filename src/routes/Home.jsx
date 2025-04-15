import React, { useState } from 'react';

// Hero carousel images
import img1 from '../assets/2024-1.webp';
import img2 from '../assets/2024-2.webp';
import img3 from '../assets/2024-3.jpg';
import img4 from '../assets/2024-4.webp';
import img5 from '../assets/2024-5.webp';
import img6 from '../assets/2024-6.webp';

// Import the additional sections/components
import Services from './Services';
import About from './About';
import PastEvents from './PastEvents';
import UpcomingEvents from './Upcomming';
import ContactUs from './Contact';

const images = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-red-600">OUR COMMITMENT</h1>
            <h2 className="text-2xl font-semibold text-gray-300">
              ENCOURAGING · ENGAGING · EMPOWERING
            </h2>
            <p className="text-gray-400 leading-relaxed text-justify">
              3E Entertainment is on a mission to unite and celebrate the Nepalese diaspora by showcasing Nepal's
              rich culture, art, music, and cuisine—all while introducing Nepal to the American audience and promoting tourism.
              Our entertainment and movie wings embody our core values: Encourage, Engage, and Empower the community.
              Beyond entertainment, we are also committed to social impact through partnerships with organizations like SOARWAY FOUNDATION
              and TEACH FOR NEPAL. Our GLOBAL FAMILY initiative works to build a vibrant community through celebration, empowerment,
              and meaningful contributions.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              Explore Events
            </button>
          </div>

          {/* Carousel */}
          <div className="w-full lg:w-1/2 relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={images[current]}
                alt={`Event ${current + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors"
              aria-label="Previous Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors"
              aria-label="Next Slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Past Events Section */}
      <PastEvents />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Contact Section */}
      <ContactUs />
    </div>
  );
};

export default Home;
