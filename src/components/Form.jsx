import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Form = () => {
  const [contactMethod, setContactMethod] = useState("phone");

  return (
    <section className="bg-[#141414] text-white body-font">
      <div className="max-w-6xl px-5 py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center w-full mb-12">
          <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Let's Make it Happen
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
              Ready to take the first step toward your dream property? I'll fill out the form below and our real estate wizards will work their magic to find your perfect match. Don't wait, lets embark on this exciting journet together
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="border border-white/10 p-6 px-5 py-12 rounded-md mx-auto text-white space-y-6">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full bg-[#1e1e1e] p-3 rounded-md placeholder-gray-400 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full bg-[#1e1e1e] p-3 rounded-md placeholder-gray-400 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full bg-[#1e1e1e] p-3 rounded-md placeholder-gray-400 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full bg-[#1e1e1e] p-3 rounded-md placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          {/* Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block mb-1">Preferred Location</label>
              <select className="w-full bg-[#1e1e1e] p-3 rounded-md text-gray-400 outline-none">
                <option>Select Location</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Property Type</label>
              <select className="w-full bg-[#1e1e1e] p-3 rounded-md text-gray-400 outline-none">
                <option>Select Property Type</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">No. of Bathrooms</label>
              <select className="w-full bg-[#1e1e1e] p-3 rounded-md text-gray-400 outline-none">
                <option>Select no. of Bathrooms</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">No. of Bedrooms</label>
              <select className="w-full bg-[#1e1e1e] p-3 rounded-md text-gray-400 outline-none">
                <option>Select no. of Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Budget & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Budget</label>
              <select className="w-full bg-[#1e1e1e] p-3 rounded-md text-gray-400 outline-none">
                <option>Select Budget</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Preferred Contact Method</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div
                  className={`flex items-center bg-[#1e1e1e] p-3 rounded-md cursor-pointer w-full ${
                    contactMethod === "phone" ? "ring-2 ring-purple-600" : ""
                  }`}
                  onClick={() => setContactMethod("phone")}
                >
                  <FaPhone className="mr-2" />
                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    className="bg-transparent outline-none text-white flex-1"
                  />
                  <input
                    type="radio"
                    name="contactMethod"
                    checked={contactMethod === "phone"}
                    readOnly
                    className="ml-2"
                  />
                </div>

                <div
                  className={`flex items-center bg-[#1e1e1e] p-3 rounded-md cursor-pointer w-full ${
                    contactMethod === "email" ? "ring-2 ring-purple-600" : ""
                  }`}
                  onClick={() => setContactMethod("email")}
                >
                  <FaEnvelope className="mr-2" />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-transparent outline-none text-white flex-1"
                  />
                  <input
                    type="radio"
                    name="contactMethod"
                    checked={contactMethod === "email"}
                    readOnly
                    className="ml-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Enter your Message here.."
              className="w-full bg-[#1e1e1e] p-3 rounded-md placeholder-gray-400 outline-none h-32"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            {/* Agreement */}
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <input type="checkbox" className="mt-1 w-4 h-4" />
              <span>
                I agree with{" "}
                <a href="#" className="underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </span>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md w-full md:w-auto"
              >
                Send Your Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
