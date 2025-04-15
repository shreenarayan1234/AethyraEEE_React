import React from 'react';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/2024-2.webp';
import img4 from '../assets/3.webp';
import img5 from '../assets/1974ad.jpg';
import img6 from '../assets/pastevent.webp'

const Services = () => {
  const services = [
    {
      title: 'Event Management',
      description:
        '3E Entertainment offers comprehensive event management solutions for both non-profit and profit-based organizations. We understand the challenges and complexities involved in organizing events, and we are here to alleviate the stress and deliver a seamless experience.',
      img: img1,
    },
    {
      title: 'Global Family',
      description:
        'In addition to its event management services, 3E Entertainment is planning to establish its charitable wing, known as GLOBAL FAMILY. Under the umbrella of GLOBAL FAMILY, we are planning to organize non-profit events dedicated to supporting various causes and initiatives.',
      img: img2,
    },
    {
      title: 'Music & Movie Promotions',
      description:
        'We actively support and promote talented singers, musicians, and filmmakers from Nepal by organizing concerts, premieres, and cultural showcases in the U.S. and beyond. Our goal is to create global exposure for local talents.',
      img: img3,
    },
    {
        title: 'Event Management',
        description:
          '3E Entertainment offers comprehensive event management solutions for both non-profit and profit-based organizations. We understand the challenges and complexities involved in organizing events, and we are here to alleviate the stress and deliver a seamless experience.',
        img: img4,
      },
      {
        title: 'Global Family',
        description:
          'In addition to its event management services, 3E Entertainment is planning to establish its charitable wing, known as GLOBAL FAMILY. Under the umbrella of GLOBAL FAMILY, we are planning to organize non-profit events dedicated to supporting various causes and initiatives.',
        img: img5,
      },
      {
        title: 'Music & Movie Promotions',
        description:
          'We actively support and promote talented singers, musicians, and filmmakers from Nepal by organizing concerts, premieres, and cultural showcases in the U.S. and beyond. Our goal is to create global exposure for local talents.',
        img: img6,
      },
  ];

  return (
    <section id="our-services" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-6">EVENTS & MOVIES</h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          3E Entertainment is dedicated to promoting Nepal and its rich cultural heritage by showcasing talented singers, musicians, movies, and emerging artists through our meticulously organized events.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
