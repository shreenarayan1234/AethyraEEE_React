import React, { useState, useEffect } from 'react';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/2024-2.webp';
import img4 from '../assets/3.webp';
import img5 from '../assets/1974ad.jpg';
import img6 from '../assets/pastevent.webp';

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const services = [
    {
      title: 'Event Management',
      description:
        '3E Entertainment offers comprehensive event management solutions for both non-profit and profit-based organizations. We understand the challenges and complexities involved in organizing events, and we are here to alleviate the stress and deliver a seamless experience.',
      img: img1,
      icon: '🎤',
    },
    {
      title: 'Global Family',
      description:
        'In addition to its event management services, 3E Entertainment is planning to establish its charitable wing, known as GLOBAL FAMILY. Under the umbrella of GLOBAL FAMILY, we are planning to organize non-profit events dedicated to supporting various causes and initiatives.',
      img: img2,
      icon: '🌍',
    },
    {
      title: 'Music & Movie Promotions',
      description:
        'We actively support and promote talented singers, musicians, and filmmakers from Nepal by organizing concerts, premieres, and cultural showcases in the U.S. and beyond. Our goal is to create global exposure for local talents.',
      img: img3,
      icon: '🎬',
    },
    {
      title: 'Cultural Showcases',
      description:
        'Experience the vibrant culture of Nepal through our meticulously organized events featuring traditional dance, music, and art exhibitions that bridge communities across continents.',
      img: img4,
      icon: '🎭',
    },
    {
      title: 'Artist Development',
      description:
        'We provide platforms for emerging Nepali artists to showcase their talents internationally, helping them grow their audience and professional networks.',
      img: img5,
      icon: '🌟',
    },
    {
      title: 'Community Events',
      description:
        'From local gatherings to large-scale festivals, we create memorable experiences that celebrate Nepali heritage while fostering community connections.',
      img: img6,
      icon: '👨‍👩‍👧‍👦',
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('our-services');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="our-services" className="py-16 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-4">
            EVENTS & MOVIES
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            3E Entertainment is dedicated to promoting Nepal and its rich cultural heritage by showcasing talented singers, musicians, movies, and emerging artists through our meticulously organized events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
                activeCard === index ? 'ring-2 ring-red-500 scale-[1.03]' : 'hover:ring-1 hover:ring-red-400'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={service.img}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    activeCard === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="mr-2">{service.icon}</span>
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 text-red-400 hover:text-red-300 font-medium text-sm flex items-center transition-colors">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;