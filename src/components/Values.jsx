import React from 'react';
import { FaStar, FaUsers, FaGraduationCap } from 'react-icons/fa';

const Values = () => {
  const values = [
    {
      icon: <FaStar className="text-2xl text-purple-500" />,
      title: 'Trust',
      description: 'Trust is the cornerstone of every successful real estate transaction.',
    },
    {
      icon: <FaGraduationCap className="text-2xl text-purple-500" />,
      title: 'Excellence',
      description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
    },
    {
      icon: <FaUsers className="text-2xl text-purple-500" />,
      title: 'Client-Centric',
      description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
    },
    {
      icon: <FaStar className="text-2xl text-purple-500" />,
      title: 'Our Commitment',
      description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
    },
  ];

  return (
    <section className="max-w-6xl container mx-auto px-4 py-16 flex flex-col md:flex-row items-start gap-8">
      {/* Left Text Section */}
      <div className="md:w-2/4">
        <div className="flex items-center space-x-2 mb-4 md:mt-16">

          <h2 className="text-3xl font-semibold text-white">Our Values</h2>
        </div>
        <p className="text-gray-400">
          Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
        </p>
      </div>

      {/* Right Values Grid */}
      <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#141414] rounded-lg p-6 border-2 shadow-md shadow-gray-100 border-white/10">
        {values.map((value, index) => (
          <div key={index} className={`flex items-start space-x-4 p-4 ${index === 0 || index === 1 ? 'border-b border-white/10' : ''} ${index === 1 ? 'sm:border-l' : ''} ${index === 3 ? 'sm:border-l' : ''}`}>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full border border-purple-500 flex items-center justify-center">
                {value.icon}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
