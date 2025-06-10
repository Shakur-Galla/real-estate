import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className="bg-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-white">
              Our Valued Clients
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              At Estatein, we have the priviledge of working with a diverse
              range of clients across various industries. Here are some of the
              clients we have had the pleasure of serving
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-transparent rounded-xl border-2 border-white/10 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-sm text-white mb-1">Since 2019</p>
                <h3 className="text-2xl">
                  ABC Corporation
                </h3>
                </div>
                <button className="bg-white/10 rounded-md px-2 py-3">Visit Website</button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="flex gap-1 items-center text-gray-400">
                    <AiTwotoneAppstore />
                    <p className="text-sm">Domain</p>
                  </div>
                  <p className="text-base">
                    Commercial Real Estate
                  </p>
                </div>
                <div className="border-l-2 border-white/10 px-4">
                  <div className="flex gap-1 items-center text-gray-400">
                    <BsLightningCharge />
                    <p className="text-sm">Category</p>
                  </div>
                  <p className="text-base">
                    Luxury Home Development
                  </p>
                </div>
              </div>

              <div className="border border-white/10 shadow-md rounded-md p-4 mb-6">
                <h4 className="text-md mb-3 text-gray-400">
                  What They Said
                </h4>
                <p className="text-md text-gray-200">
                  Estatents expertise in finding the perfect office space for
                  our expanding operations was invaluable. They truly understand
                  our business needs.
                </p>
              </div>
            </div>
            {/* Testimonial Card 1 */}
            <div className="bg-transparent rounded-xl border-2 border-white/10 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-sm text-white mb-1">Since 2019</p>
                <h3 className="text-2xl">
                  GreenTech Enterprises
                </h3>
                </div>
                <button className="bg-white/10 rounded-md px-2 py-3">Visit Website</button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="flex gap-1 items-center text-gray-400">
                    <AiTwotoneAppstore />
                    <p className="text-sm">Domain</p>
                  </div>
                  <p className="text-base">
                    Commercial Real Estate
                  </p>
                </div>
                <div className="border-l-2 border-white/10 px-4">
                  <div className="flex gap-1 items-center text-gray-400">
                    <BsLightningCharge />
                    <p className="text-sm">Category</p>
                  </div>
                  <p className="text-base">
                    Retail Space
                  </p>
                </div>
              </div>

              <div className="border border-white/10 shadow-md rounded-md p-4 mb-6">
                <h4 className="text-md mb-3 text-gray-400">
                  What They Said
                </h4>
                <p className="text-md text-gray-300">
                  Estatents ability to identify prime retail locations helped
                  us expand our brand presence. They are a trusted partner in
                  our growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
