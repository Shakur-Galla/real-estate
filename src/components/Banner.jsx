import React from "react";
import BannerImage from "../assets/banner.png";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
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

              {/* Experience Badge */}
              <div className="absolute top-24 right-96 -left-12 w-20 h-20 rounded-full flex items-center justify-center">
                <div className="bg-[#1d1c1c] w-16 h-16 rounded-full flex items-center justify-center border-white/10">
                  <MdArrowOutward className="text-white text-2xl"/>
                </div>
              </div>
            </div>
          </div>
          
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover Your Dream Property with Estatein
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-8">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>

            {/* Action Buttons */}
            <div className="block md:flex flex-wrap gap-4 mb-10">
              <button className="bg-transparent hover:bg-white/5 text-white font-medium py-3 px-8 rounded-sm transition duration-300 border border-white/10 hover:border-indigo-500 w-full mb-2">
                Learn More
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-sm transition duration-300 shadow-lg hover:shadow-indigo-900/30 w-full">
                Browse Properties
              </button>
            </div>

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
              <div className="overflow-hidden ">
                <img src={BannerImage} />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-24 right-96 -left-12 w-20 h-20 rounded-full flex items-center justify-center">
                <div className="bg-[#1d1c1c] w-16 h-16 rounded-full flex items-center justify-center border-white/10">
                  <MdArrowOutward className="text-white text-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
