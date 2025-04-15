import React from 'react';
import aboutImg from '../assets/img11.webp';

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-10">
          About 3E Entertainment
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About Card */}
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 hover:shadow-lg">
              <p className="text-gray-300">
                3E Entertainment is a registered organization based in the state of Virginia,
                with a primary objective of uniting the Nepalese diaspora and promoting
                Nepal and Nepalese culture through entertainment. Over the years, we have
                successfully organized a variety of events that have left a lasting impact on the community.
              </p>
            </div>

            {/* Target Audience Card */}
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Target Audience and Goals</h3>
              <p className="text-gray-300">
                Our events cater to both the Nepalese and American audience, successfully bringing together
                diverse communities. Our primary goal is to provide a platform for artists from Nepal,
                enabling them to showcase their talent to a wider audience.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 hover:shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Social Responsibility</h3>
              <p className="text-gray-300">
                At 3E Entertainment, we firmly believe in the power of giving back to society.
                To embody this principle, our company structure incorporates a unique model where 20%
                of the total revenue generated is dedicated to supporting charitable causes.
              </p>
            </div>
            <img
              src={aboutImg}
              alt="Social Responsibility"
              className="mt-6 rounded-lg w-full object-cover shadow-lg transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
