import React from "react";
import { FiSend } from "react-icons/fi";

import Member from "../assets/team.png";
import Member1 from "../assets/team1.png";
import Member2 from "../assets/team2.png";
import Member3 from "../assets/team1.png";

const Team = () => {
  const steps = [
    {
      id: 1,
      image: Member,
      name: "Max Mitchell",
      position: "Founder",
    },
    {
      id: 2,
      image: Member2,
      name: "Sarah Johnson",
      position: "Chief Real Estate Officer",
    },
    {
      id: 3,
      image: Member3,
      name: "David Brown",
      position: "Head of Property Management",
    },
    {
      id: 4,
      image: Member1,
      name: "Michael Turner",
      position: "Legal Counsel",
    },
  ];

  return (
    <section className="bg-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-white">
              Meet the Estatein Team
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              At Estatein, our success is driven by the dedication and expertise of our team.
              Get to know the people behind our mission to make your real estate dreams a reality.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#1f1f1f] rounded-lg border border-white/10 p-6 text-white relative overflow-hidden flex flex-col items-center"
            >
              {/* Card Content */}
              <img src={step.image} alt={step.name} className="w-65 h-60 rounded-md object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-center">{step.name}</h3>
              <p className="text-gray-400 text-sm mb-4 text-center">{step.position}</p>
              <div className="flex items-center bg-[#2a2a2a] text-gray-400 rounded-full px-4 py-2 mt-auto hover:bg-[#3a3a3a] transition gap-9">
                <p className="mr-3">Say Hello</p>
                <button className="text-white">
                  <FiSend className="text-xl rounded-full p-1 bg-indigo-500 h-9 w-9 hover:bg-blue-500 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
