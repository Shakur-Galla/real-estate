import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const menuItems = ['Home', 'About Us', 'Properties', 'Services'];

  return (
    <header className=" bg-[#141414] text-white">
      {/* Top Banner */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-2 text-center">
          <p className="text-xs md:text-sm">
            Discover Your Dream Property with Estatein{' '}
            <Link to="/" className="underline font-medium hover:text-blue-300 transition">
              Learn More
            </Link>
          </p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="bg- backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center py-3">
            <div>
              <img src={Logo} alt="Estatein Logo" className="h-8" />
            </div>
            <div className="flex space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to="#"
                  onClick={() => handleItemClick(item)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeItem === item
                      ? 'bg-black shadow-sm border border-white/10 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-[#141414]'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <Link
              to="#"
              className="bg-black shadow-sm border border-white/10 text-white py-3 px-6 rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between">
                <img src={Logo} alt="Estatein Logo" className="h-8 mr-4" />
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none p-2 pl-52 rounded-lg hover:bg-gray-800"
                >
                  {isMenuOpen ? (
                    <IoClose className='text-2xl hover:cursor-pointer'/>
                  ) : (
                    <BiMenuAltRight className='text-2xl hover:cursor-pointer' />
                  )}
                </button>
              </div>
              
            </div>

            {/* Mobile Menu Items */}
            {isMenuOpen && (
              <div className="mt-4 bg-[#141414] rounded-lg p-2 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to="#"
                    onClick={() => handleItemClick(item)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeItem === item
                        ? 'bg-black shadow-sm border border-white/10 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;