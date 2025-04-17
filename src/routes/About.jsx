import React, { useState, useEffect } from 'react';
import aboutImg from '../assets/img11.webp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-4"
          >
            About 3E Entertainment
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Uniting communities through culture, entertainment, and social responsibility
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              variants={{
                ...itemVariants,
                ...hoverVariants
              }}
              onHoverStart={() => setActiveCard(1)}
              onHoverEnd={() => setActiveCard(null)}
              className={`relative border border-gray-800 rounded-xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl overflow-hidden transition-all duration-300 ${
                activeCard === 1 ? 'ring-2 ring-red-500' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">🎭</span>
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  3E Entertainment is a registered organization based in Virginia, dedicated to uniting the Nepalese diaspora and promoting Nepalese culture through entertainment. We've successfully organized impactful events that resonate throughout the community.
                </p>
              </div>
            </motion.div>

            {/* Target Audience Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              variants={{
                ...itemVariants,
                ...hoverVariants
              }}
              onHoverStart={() => setActiveCard(2)}
              onHoverEnd={() => setActiveCard(null)}
              className={`relative border border-gray-800 rounded-xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl overflow-hidden transition-all duration-300 ${
                activeCard === 2 ? 'ring-2 ring-red-500' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">🌎</span>
                  Our Audience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our events bridge cultures, bringing together Nepalese and American audiences. We provide a global platform for Nepali artists to showcase their talents while fostering cross-cultural understanding and appreciation.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Social Responsibility */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            variants={{
              ...itemVariants,
              ...hoverVariants
            }}
            onHoverStart={() => setActiveCard(3)}
            onHoverEnd={() => setActiveCard(null)}
            className={`relative border border-gray-800 rounded-xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl overflow-hidden transition-all duration-300 ${
              activeCard === 3 ? 'ring-2 ring-red-500' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">❤️</span>
                  Social Impact
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  At 3E Entertainment, we're committed to making a difference. Our unique business model dedicates 20% of all revenue to charitable causes, supporting education, healthcare, and community development initiatives in Nepal.
                </p>
              </div>
              <motion.div 
                className="mt-auto rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={aboutImg}
                  alt="Social Responsibility in Action"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-medium">
                  Making a difference through entertainment
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
            <div className="text-gray-300">Successful Events</div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-red-500 mb-2">1000+</div>
            <div className="text-gray-300">Community Members</div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-red-500 mb-2">20%</div>
            <div className="text-gray-300">Revenue to Charity</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;