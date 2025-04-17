import React, { useState, useEffect } from 'react';

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
import UpcomingEvents from './Upcoming';
import ContactUs from './Contact';

const images = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              OUR COMMITMENT
            </h1>
            <h2 className="text-2xl font-semibold text-gray-300">
              ENCOURAGING · ENGAGING · EMPOWERING
            </h2>
            <p className="text-gray-400 leading-relaxed text-justify">
              3E Entertainment is on a mission to unite and celebrate the Nepalese diaspora by showcasing Nepal's
              rich culture, art, music, and cuisine—all while introducing Nepal to the American audience and promoting tourism.
              Our entertainment and movie wings embody our core values: Encourage, Engage, and Empower the community.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
              Explore Events
            </button>
          </div>

          {/* Carousel */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Event ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${current === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Previous Slide"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Next Slide"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-red-600 w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;