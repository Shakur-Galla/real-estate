import React from 'react'
import { FiSearch, FiHeart, FiMessageSquare, FiHome, FiClipboard, FiDollarSign } from 'react-icons/fi';

const Experience =() =>{
const steps = [
    {
      id: 1,
      title: "Discover a World of Possibilities",
      description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
      icon: <FiSearch className="text-indigo-500" />
    },
    {
      id: 2,
      title: "Narrowing Down Your Choices",
      description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
      icon: <FiHeart className="text-indigo-500" />
    },
    {
      id: 3,
      title: "Personalized Guidance",
      description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
      icon: <FiMessageSquare className="text-indigo-500" />
    },
    {
      id: 4,
      title: "See It for Yourself",
      description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
      icon: <FiHome className="text-indigo-500" />
    },
    {
      id: 5,
      title: "Making Informed Decisions",
      description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
      icon: <FiClipboard className="text-indigo-500" />
    },
    {
      id: 6,
      title: "Getting the Best Deal",
      description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
      icon: <FiDollarSign className="text-indigo-500" />
    }
  ];

  return (
    <div className="bg-[#141414] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Navigating the Estatein Experience
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-900 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline circle */}
                <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10">
                  <div className="text-white font-bold">{step.id}</div>
                </div>
                
                {/* Content container */}
                <div className={`md:w-1/2 mt-12 md:mt-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'
                }`}>
                  <div className="bg-[#1d1c1c] border border-white/10 rounded-2xl p-6 shadow-lg hover:border-indigo-500 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="bg-indigo-900/30 p-3 rounded-lg mr-4">
                        {step.icon}
                      </div>
                      <h2 className="text-xl font-bold text-white">Step {step.id < 10 ? '0' + step.id : step.id}</h2>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center justify-center mx-auto">
            Get Started Today
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Experience