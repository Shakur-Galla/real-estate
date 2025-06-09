import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const Achievements = () => {
  return (
    <section className="bg-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Our Achievements
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border-2 shadow-md shadow-gray-100 border-white/10 p-4 rounded-lg">
            <h2 className="text-lg text-white font-medium mb-2 py-4">
              3+ Years of Excellence
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              With over 3 years in the industry, we've amassed a wealth of
              knowledge and experience, becoming a go-to resource for all things
              real estate.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 shadow-md shadow-gray-100 border-white/10 p-4 rounded-lg">
            <h2 className="text-lg text-white font-medium mb-2 py-4">
              Happy Clients
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              With over 3 years in the industry, we've amassed a wealth of
              knowledge and experience, becoming a go-to resource for all things
              real estate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 shadow-md shadow-gray-100 border-white/10 p-4 rounded-lg">
            <h2 className="text-lg text-white font-medium mb-2 py-4">
              Industry Recognition
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              With over 3 years in the industry, we've amassed a wealth of
              knowledge and experience, becoming a go-to resource for all things
              real estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
