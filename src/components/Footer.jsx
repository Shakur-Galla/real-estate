import React from 'react';
import { FiMail } from 'react-icons/fi';
import { IoSend } from 'react-icons/io5';

import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Logo and Email Subscription */}
        <div>
          {/* Logo */}
          <div className="flex items-center mb-6">
            <img src={Logo} alt="Shakur Galla"/>
          </div>

          {/* Email Input */}
          <div className="flex items-center bg-[#1f1f1f] text-gray-400 rounded-lg px-4 py-2 w-fit">
            <FiMail className="text-xl mr-2" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none text-gray-300 placeholder-gray-400 w-full"
            />
            <button className="ml-3 text-white">
              <IoSend className="text-xl hover:text-blue-400 transition" />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {/* Home */}
          <div>
            <h4 className="mb-3 font-semibold text-gray-300">Home</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Hero Section</li>
              <li className="hover:underline cursor-pointer">Features</li>
              <li className="hover:underline cursor-pointer">Properties</li>
              <li className="hover:underline cursor-pointer">Testimonials</li>
              <li className="hover:underline cursor-pointer">FAQ's</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="mb-3 font-semibold text-gray-300">About Us</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Our Story</li>
              <li className="hover:underline cursor-pointer">Our Works</li>
              <li className="hover:underline cursor-pointer">How It Works</li>
              <li className="hover:underline cursor-pointer">Our Team</li>
              <li className="hover:underline cursor-pointer">Our Clients</li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="mb-3 font-semibold text-gray-300">Properties</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Portfolio</li>
              <li className="hover:underline cursor-pointer">Categories</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 font-semibold text-gray-300">Services</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Valuation Mastery</li>
              <li className="hover:underline cursor-pointer">Strategic Marketing</li>
              <li className="hover:underline cursor-pointer">Negotiation Wizardry</li>
              <li className="hover:underline cursor-pointer">Closing Success</li>
              <li className="hover:underline cursor-pointer">Property Management</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-3 font-semibold text-gray-300">Contact Us</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Contact Form</li>
              <li className="hover:underline cursor-pointer">Our Offices</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
