import React from "react";

const Experience = () => {
  const steps = [
    {
      id: 1,
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",

    },
    {
      id: 2,
      title: "Narrowing Down Your Choices",
      description:
        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
      
    },
    {
      id: 3,
      title: "Personalized Guidance",
      description:
        "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      id: 4,
      title: "See It for Yourself",
      description:
        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
      
    },
    {
      id: 5,
      title: "Making Informed Decisions",
      description:
        "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
    {
      id: 6,
      title: "Getting the Best Deal",
      description:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];

  return (
    <section className="bg-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Navigating the Experience
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              At Estatein, we've designed a straightforward process to help you
              find and purchase your dream property with ease. Here's a
              step-by-step guide to how it all works.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#141414] rounded-lg border border-white/10 p-6 text-white relative overflow-hidden"
            >
              {/* Step Label */}
              <div className="text-sm mb-4">Step 0{step.id}</div>

              {/* Diagonal Gradient */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500 to-blue-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-0" />

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
