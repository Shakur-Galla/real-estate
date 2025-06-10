import React, { useState } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaHome, 
  FaMoneyBillWave, 
  FaCube, 
  FaCalendarAlt,
  FaFilter,
  FaTimes
} from 'react-icons/fa';

const PropertySearch = () => {
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <div className="flex flex-col items-center p-4 rounded-xl w-full max-w-6xl mx-auto -mt-12">
      {/* Search Bar */}
      <div className="flex w-full max-w-3xl items-center bg-[#141414] border-5 border-white/10 p-3 rounded-md">
        <input
          type="text"
          placeholder="Search For A Property"
          className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none"
        />
        <button className="hidden md:flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg ml-4 transition-colors">
          <FaSearch className="mr-2" />
          Find Property
        </button>
        <button 
          className="md:hidden flex items-center bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg ml-2 transition-colors"
          onClick={toggleFilters}
        >
          {showFilters ? <FaTimes /> : <FaFilter />}
        </button>
      </div>

      {/* Filters */}
      <div 
        className={`${
          showFilters ? 'grid' : 'hidden'
        } md:grid w-full grid-cols-1 md:grid-cols-5 bg-[#222222] py-4 px-2 gap-4 mt-4 md:-mt-2 rounded-sm`}
      >
        {/* Location */}
        <div className="flex items-center bg-[#141414] text-gray-300 px-4 py-3 rounded-lg cursor-pointer">
          <FaMapMarkerAlt className="mr-2" />
          <span className="flex-1">Location</span>
          <span className="ml-2">&#9662;</span>
        </div>

        {/* Property Type */}
        <div className="flex items-center bg-[#141414] text-gray-300 px-4 py-3 rounded-lg cursor-pointer">
          <FaHome className="mr-2" />
          <span className="flex-1">Property Type</span>
          <span className="ml-2">&#9662;</span>
        </div>

        {/* Pricing Range */}
        <div className="flex items-center bg-[#141414] text-gray-300 px-4 py-3 rounded-lg cursor-pointer">
          <FaMoneyBillWave className="mr-2" />
          <span className="flex-1">Pricing Range</span>
          <span className="ml-2">&#9662;</span>
        </div>

        {/* Property Size */}
        <div className="flex items-center bg-[#141414] text-gray-300 px-4 py-3 rounded-lg cursor-pointer">
          <FaCube className="mr-2" />
          <span className="flex-1">Property Size</span>
          <span className="ml-2">&#9662;</span>
        </div>

        {/* Build Year */}
        <div className="flex items-center bg-[#141414] text-gray-300 px-4 py-3 rounded-lg cursor-pointer">
          <FaCalendarAlt className="mr-2" />
          <span className="flex-1">Build Year</span>
          <span className="ml-2">&#9662;</span>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;