import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { MdVilla } from "react-icons/md";

import House1 from "../assets/house.png";
import House2 from "../assets/house1.png";
import House3 from "../assets/house3.png";

const PropertyList = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Discover New Properties
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click 'View Details' for more
              information.
            </p>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <img
              className="h-40 rounded w-full object-cover object-center mb-4"
              src={House1}
              alt="content"
            />
            <h2 className="text-lg text-white font-medium mb-2">
              Seaside Serenity Villa
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
              neighborhood...{" "}
              <Link className="text-indigo-400 hover:underline">Read More</Link>
            </p>
            <div className="flex justify-between text-sm text-gray-300">
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <MdOutlineBedroomParent /> 4 Beds
              </div>
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <GiBathtub /> 3 Baths
              </div>
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <MdVilla /> Villa
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-300 mt-2">
              <div className="gird items-center gap-1 px-2 py-1 rounded">
                <p className="text-sm">Price</p>
                <p>₦ 90,000</p>
              </div>
              <div className="flex items-center gap-1 bg-indigo-500 px-2 py-2 rounded">
                <button
                  onClick={() => navigate("/property-detail")}
                  className="hover:cursor-pointer"
                >
                  View Property Details
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <img
              className="h-40 rounded w-full object-cover object-center mb-4"
              src={House2}
              alt="content"
            />
            <h2 className="text-lg text-white font-medium mb-2">
              Seaside Serenity Villa
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
              neighborhood...{" "}
              <Link className="text-indigo-400 hover:underline">Read More</Link>
            </p>
            <div className="flex justify-between text-sm text-gray-300">
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <MdOutlineBedroomParent /> 4 Beds
              </div>
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <GiBathtub /> 3 Baths
              </div>
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <MdVilla /> Villa
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-300 mt-2">
              <div className="gird items-center gap-1 px-2 py-1 rounded">
                <p className="text-sm">Price</p>
                <p>₦ 90,000</p>
              </div>
              <div className="flex items-center gap-1 bg-indigo-500 px-2 py-2 rounded">
                <button
                  onClick={() => navigate("/property-detail")}
                  className="hover:cursor-pointer"
                >
                  View Property Details
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <img
              className="h-40 rounded w-full object-cover object-center mb-4"
              src={House3}
              alt="content"
            />
            <h2 className="text-lg text-white font-medium mb-2">
              Seaside Serenity Villa
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
              neighborhood...{" "}
              <Link className="text-indigo-400 hover:underline">Read More</Link>
            </p>
            <div className="flex justify-between text-sm text-gray-300">
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <MdOutlineBedroomParent /> 4 Beds
              </div>
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <GiBathtub /> 3 Baths
              </div>
              <div className="flex items-center gap-1 bg-[#1d1c1c] px-2 py-1 rounded">
                <MdVilla /> Villa
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-300 mt-2">
              <div className="gird items-center gap-1 px-2 py-1 rounded">
                <p className="text-sm">Price</p>
                <p>₦ 90,000</p>
              </div>
              <div className="flex items-center gap-1 bg-indigo-500 px-2 py-2 rounded">
                <button
                  onClick={() => navigate("/property-detail")}
                  className="hover:cursor-pointer"
                >
                  View Property Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
