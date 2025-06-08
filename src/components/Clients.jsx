import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

import Profile from '../assets/Profile.png'
import Profile1 from '../assets/Profile1.png'


const Clients = () => {
  return (
    <section className="bg-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              What Our Clients Say
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              Read the success stories and heartfelt testimonials from our valued Clients. Discover why they choose Estatein for their Real Estate needs
            </p>
          </div>
            <div className="hidden md:block">
                <div className="flex pb-2 ml-32 gap-2">
            <FaArrowLeft className="rounded-full h-7 w-7 p-2 bg-[#141414] border border-white/50 cursor-pointer" />
            <FaArrowRight className="rounded-full h-7 w-7 p-2 bg-[#141414] border border-white/50 cursor-pointer" />

          </div>
          <button className="bg-white/5 text-white px-6 rounded-sm transition duration-300 border border-white/10 hover:border-indigo-500 text-md py-2">
            View all Testimonials
          </button>
            </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex flex-row gap-2 py-6">
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
            </div>
            <h2 className="text-lg text-white font-medium mb-2">Exceptional Service!</h2>
            <p className="text-sm text-gray-400 mb-4">
              Our experience with Estatein was outstanding.<br/>
              Their teams's dedication and professionalismmade finding our dream home a breeze. Highly recommended!
              
            </p>
            <div className="flex text-sm text-gray-300 gap-2 items-center">
              <img src={Profile}/>
              <div>
                <h3 className="font-semibold">Wade Warren</h3>
                <p>USA, California</p>
              </div>
            </div>
            
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex flex-row gap-2 py-6">
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
            </div>
            <h2 className="text-lg text-white font-medium mb-2">Efficient and Reliable</h2>
            <p className="text-sm text-gray-400 mb-4">
              Our experience with Estatein was outstanding.<br/>
              Their teams's dedication and professionalismmade finding our dream home a breeze. Highly recommended!
              
            </p>
            <div className="flex text-sm text-gray-300 gap-2 items-center">
              <img src={Profile1}/>
              <div>
                <h3 className="font-semibold">Emelie Thompson</h3>
                <p>USA, Florida</p>
              </div>
            </div>
            
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex flex-row gap-2 py-6">
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
                <FaStar  className="text-yellow-500 rounded-full h-6 w-6 px-1 text-2xl border bg-[#141414] border-white/10"/>
            </div>
            <h2 className="text-lg text-white font-medium mb-2">Exceptional Service!</h2>
            <p className="text-sm text-gray-400 mb-4">
              Our experience with Estatein was outstanding.<br/>
              Their teams's dedication and professionalismmade finding our dream home a breeze. Highly recommended!
              
            </p>
            <div className="flex text-sm text-gray-300 gap-2 items-center">
              <img src={Profile}/>
              <div>
                <h3 className="font-semibold">Wade Warren</h3>
                <p>USA, California</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Clients;
