import React from "react";
import { MdArrowOutward, MdLightMode, MdLinkedCamera } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { PiBuildingOfficeBold } from "react-icons/pi";

const StatisticsGrid = () => {
  const stats = [
    {
      id: 1,
      title: "Find Your Dream Home",

      icon: (
        <IoStorefront className="text-indigo-500 text-2xl mx-auto my-4 rounded-full h-12 w-12 border p-2" />
      ),
    },
    {
      id: 2,
      title: "Unlock Property Value",
      icon: (
        <MdLinkedCamera className="text-indigo-500 text-2xl mx-auto my-4 rounded-full h-12 w-12 border p-2" />
      ),
    },
    {
      id: 3,
      title: "Effortless Property Management",

      icon: (
        <PiBuildingOfficeBold className="text-indigo-500 text-2xl mx-auto my-4 rounded-full h-12 w-12 border p-2" />
      ),
    },
    {
      id: 4,
      title: "Smart Investments, Informed Decisions",

      icon: (
        <MdLightMode className="text-indigo-500 text-2xl mx-auto my-4 rounded-full h-12 w-12 border p-2 " />
      ),
    },
  ];

  return (
    <div className="bg-[#141414] py-2 px-4 sm:px-6 lg:px-8 border-2 border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#1d1c1c] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 transform"
            >
              <div className="">
                <div className="grid items-center px-2 py-3">
                  <div className="items-center text-center">{stat.icon}</div>
                  <h5 className="text-md text-center text-white py-2 px-4">
                    {stat.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsGrid;
