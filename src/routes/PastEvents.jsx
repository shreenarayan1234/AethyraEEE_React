import React, { useState } from 'react';
import pastEvent1 from '../assets/main_2024.webp';
import pastEvent2 from '../assets/PastEvent1.png';
import pastEvent3 from '../assets/pastevent.webp';

const pastEventData = [
  {
    image: pastEvent1,
    alt: 'Past Event 1',
    description:
      'Main Event 2024 – A celebration of culture, music, and unity in the Nepali community.'
  },
  {
    image: pastEvent2,
    alt: 'Past Event 2',
    description:
      'Live Concert – Energetic performances by rising Nepali stars and guest artists.'
  },
  {
    image: pastEvent3,
    alt: 'Past Event 3',
    description:
      'Cultural Night – Traditional dance, food, and a vibrant showcase of Nepali heritage.'
  }
];

const PastEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % pastEventData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + pastEventData.length) % pastEventData.length
    );
  };

  return (
    <section id="past-events" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-6">Past Events</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          Take a look at some of our previous events that brought joy, unity, and cultural pride to the community.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="transition duration-500 ease-in-out">
            {pastEventData.map((event, index) => (
              <div
                key={index}
                className={`${activeIndex === index ? 'block' : 'hidden'} text-center`}
              >
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-xl transition-transform duration-700 hover:scale-105"
                />
                <p className="mt-4 text-gray-400 italic">{event.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-colors"
            aria-label="Previous"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-colors"
            aria-label="Next"
          >
            &gt;
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {pastEventData.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  activeIndex === index ? 'bg-red-600' : 'bg-gray-600'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
