import React from "react";
import PropertySearch from "./PropertySearch";

const PropertyBanner = () => {
  return (
    <>
    <section className="bg-linear-to-r from-[#222222] to-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Find Your Dream Property
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              Welcome to Eastein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <PropertySearch/>
    </section>
    
    </>
  );
};

export default PropertyBanner;
