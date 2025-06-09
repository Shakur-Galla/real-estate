import React from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const FrequentlyAskedQuestions = () => {
  return (
        <section className="bg-[#141414] text-white body-font">
          <div className="max-w-6xl px-5 py-12 mx-auto">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center w-full mb-12">
              <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                  Frequently Asked Questions
                </h1>
                <p className="w-full leading-relaxed text-gray-500">
                  Find answers to common questions about Estatein's services, propery listings, and the real estate process. We are here to provide clarity and assist you every step of the way.
                </p>
              </div>
                <div className="hidden md:block">
                    <div className="flex pb-2 ml-32 gap-2">
                <FaArrowLeft className="rounded-full h-7 w-7 p-2 bg-[#141414] border border-white/50 cursor-pointer" />
                <FaArrowRight className="rounded-full h-7 w-7 p-2 bg-[#141414] border border-white/50 cursor-pointer" />
    
              </div>
              <button className="bg-white/5 text-white px-6 rounded-sm transition duration-300 border border-white/10 hover:border-indigo-500 text-md py-2">
                View all FAQ's
              </button>
                </div>
            </div>
    
            {/* Property Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                
                <h2 className="text-lg text-white font-medium mb-2">How do I search for properties on Estatein?</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Learn how to use our user-friendly search tools to find properties that match your criteria
                  
                </p>
                <button className='bg-[#141414] px-2 py-2 rounded-md border border-white/10'>Read More</button>
                
              </div>
    
              {/* Card 2 */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                
                <h2 className="text-lg text-white font-medium mb-2">What documents do I need to sell my property through Estatein?</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Find out the necessary documentation for listing your property with us
                  
                </p>
                <button className='bg-[#141414] px-2 py-2 rounded-md border border-white/10'>Read More</button>
                
              </div>
    
              {/* Card 3 */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                
                <h2 className="text-lg text-white font-medium mb-2">How can I contact an Estatein agent</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Discover the different ways you can get in touch with our experienced agents
                  
                </p>
                <button className='bg-[#141414] px-2 py-2 rounded-md border border-white/10'>Read More</button>
                
              </div>
    
            </div>
          </div>
          
        </section>
  )
}

export default FrequentlyAskedQuestions