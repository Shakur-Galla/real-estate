import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import House from '../assets/house.png'
import House1 from '../assets/house1.png'
import House2 from '../assets/house.png'
import House3 from '../assets/house3.png'
import House4 from '../assets/house.png'
import House5 from '../assets/house1.png'
import House6 from '../assets/house3.png'
import House7 from '../assets/house.png'
import House8 from '../assets/house1.png'

const images = [
  [House, House1],
  [House2, House3],
  [House4, House5],
  [House6, House7],
  [House8, House]
];

const thumbnails = images.map(pair => pair[0]);

const PropertyDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const selectSlide = (index) => {
    setCurrentIndex(index % images.length);
  };

  return (
    <section className="bg-[#141414] text-white body-font min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full py-8 mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-8 md:mb-12 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h4 className="text-2xl sm:text-3xl font-medium title-font text-white">
              Seaside Serenity Villa
            </h4>
            <div className="px-3 py-1 text-gray-500 border border-white/10 rounded-md shadow-md text-sm sm:text-base">
              <p>Malibu, California</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm sm:text-base">Price</p>
            <h4 className="text-xl sm:text-2xl">₦ 90,000</h4>
          </div>
        </div>

        <div className='border border-white/10 rounded-md p-4'>

          {/* Thumbnails for Desktop (Above Main Images) */}
          <div className="hidden md:flex flex-wrap justify-between gap-2 mb-6 p-2 bg-[#1d1c1c] rounded-md">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                onClick={() => selectSlide(index)}
                className={`h-16 flex-1 cursor-pointer border-2 rounded-md object-cover ${currentIndex === index ? 'border-indigo-500' : 'border-transparent'}`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <img src={images[currentIndex][0]} className="w-full h-80 object-cover rounded-md" alt="Main 1" />
            <img src={images[currentIndex][1]} className="hidden md:flex w-full h-80 object-cover rounded-md" alt="Main 2" />
          </div>

          {/* Thumbnails for Mobile (Below Main Images) */}
          <div className="flex md:hidden flex-wrap justify-between gap-2 mb-6 p-2 bg-[#1d1c1c] rounded-md">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                onClick={() => selectSlide(index)}
                className={`h-16 flex-1 cursor-pointer border-2 rounded-md object-cover ${currentIndex === index ? 'border-indigo-500' : 'border-transparent'}`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <FaArrowLeft onClick={prevSlide} className="text-white border border-white/10 rounded-full p-2 h-8 w-8 cursor-pointer hover:bg-white/10" />
            <div className="flex gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-indigo-500' : 'bg-white/20'}`}
                  onClick={() => selectSlide(index)}
                ></span>
              ))}
            </div>
            <FaArrowRight onClick={nextSlide} className="text-white border border-white/10 rounded-full p-2 h-8 w-8 cursor-pointer hover:bg-white/10" />
          </div>
        </div>

        {/* more detail */}
        <div className='w-full items-center'>
            <div className='w-1/2'></div>

        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;
