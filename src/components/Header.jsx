import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const menuItems = ['Home', 'About Us', 'Properties', 'Services'];

  return (
    <header className="bg-[#141414] text-white">
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

      {/* Navigation */}
      <nav className="backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          {/* Desktop */}
          <div className="hidden md:flex justify-between items-center py-4">
            <img src={Logo} alt="Estatein Logo" className="h-8" />
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

          {/* Mobile */}
          <div className="md:hidden py-3 flex justify-between items-center">
            <img src={Logo} alt="Estatein Logo" className="h-8" />

            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              role="button"
              className="text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <IoClose className="text-2xl" /> : <BiMenuAltRight className="text-2xl" />}
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#141414] rounded-lg mt-2 p-3 space-y-1 transition-all duration-300">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to="#"
                  onClick={() => handleItemClick(item)}
                  className={`block px-4 py-3 rounded-lg ${
                    activeItem === item
                      ? 'bg-black shadow-sm border border-white/10 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item}
                </Link>
              ))}
              <Link
                to="#"
                className="block mt-3 bg-indigo-500 border border-white/10 text-white py-3 text-center rounded-md"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
