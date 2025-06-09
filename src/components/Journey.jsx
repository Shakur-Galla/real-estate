import React from 'react'
import BannerImage from "../assets/hand.png";
import { MdArrowOutward } from "react-icons/md";

const Journey = () => {
  return (
    <div className="bg-[#141414] min-h-screen flex items-center py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section - Right Column */}
              <div className="block md:hidden lg:order-2 justify-center">
                <div className="relative">
                  {/* Circular Image Container */}
                  <div className="overflow-hidden ">
                    <img src={BannerImage} />
                  </div>
                </div>
              </div>
              
              <div className="">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Our Journey
                </h1>
    
                <p className="text-lg text-gray-300 max-w-xl mb-8">
                    Our story is one of continuous growth and evolution. We started as a small team wth big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reac, forged valuable partnerships, and gained the trust of countless clients.
                </p>
    
                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-[#1d1c1c] p-5 rounded-xl border border-white/10 hover:border-indigo-500 transition-colors">
                    <h3 className="text-3xl font-bold text-white mb-1">200+</h3>
                    <p className="text-gray-400 text-sm">Happy Customers</p>
                  </div>
                  <div className="bg-[#1d1c1c] p-5 rounded-xl border border-white/10 hover:border-indigo-500 transition-colors">
                    <h3 className="text-3xl font-bold text-white mb-1">10k+</h3>
                    <p className="text-gray-400 text-sm">Properties For Clients</p>
                  </div>
                  <div className="bg-[#1d1c1c] p-5 rounded-xl border border-white/10 hover:border-indigo-500 transition-colors">
                    <h3 className="text-3xl font-bold text-white mb-1">16+</h3>
                    <p className="text-gray-400 text-sm">Years of Experience</p>
                  </div>
                </div>
              </div>
              {/* Image Section - Right Column */}
              <div className="hidden lg:order-2 md:flex justify-center">
                <div className="relative">
                  {/* Circular Image Container */}
                  <div className="overflow-hidden border border-white/10">
                    <img src={BannerImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Journey