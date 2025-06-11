import React from 'react'

const CallToAction = () => {
  return (
        <section className="bg-[#141414] text-white body-font border-t border-b border-white/10">
          <div className="max-w-6xl px-5 py-12 mx-auto">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center w-full mb-12">
              <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                  Start Your Real Estate Journey Today
                </h1>
                <p className="w-full leading-relaxed text-gray-500">
                  Your dream property is just a click away. Whether your're looking for a new home, a strategic investment, or expert real estate advice. Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                </p>
              </div>
              <button className="bg-indigo-500 text-white font-medium px-6 rounded-sm transition duration-300 border border-white/10 hover:border-indigo-500 text-md py-2">
                Explore Properties
              </button>
            </div>
    
          </div>
          
        </section>
  )
}

export default CallToAction