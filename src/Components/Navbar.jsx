import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo0.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[rgb(22,39,50)] text-white shadow-2xl fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Shree Balaji Foundation Logo"
            className="h-14 w-14 rounded-full border-2 border-white shadow-md"
          />
          <span className="text-2xl font-bold tracking-wide text-orange-500">
            SHREE BALAJI FOUNDATION
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-[rgb(22,39,50)] text-white left-0 w-full md:w-auto transition-all duration-300 ease-in ${
            isOpen
              ? "top-[80px] opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          {/* Home */}
          <li className="text-center py-2 md:py-0">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400"
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li className="text-center py-2 md:py-0">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400"
            >
              About
            </Link>
          </li>

          <li
            className="relative text-center py-2 md:py-0"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex justify-center items-center space-x-1 cursor-pointer hover:text-cyan-400"
            >
              <span>Activities</span>
              <span className="text-xs mt-1">▼</span>
            </div>

            {/* Dropdown Menu */}
            <ul
              className={`absolute left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 bg-white text-gray-700 shadow-xl rounded-lg mt-3 w-28 transition-all duration-300 ease-in-out overflow-hidden ${
                dropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              <li>
                <Link
                  to="/activity/health"
                  onClick={() => {
                    setIsOpen(false);
                    setDropdownOpen(false);
                  }}
                  className="block px-5 py-3 hover:bg-cyan-100 font-medium"
                >
                  Health 
                </Link>
              </li>
              <li>
                <Link
                  to="/activity/education"
                  onClick={() => {
                    setIsOpen(false);
                    setDropdownOpen(false);
                  }}
                  className="block px-5 py-3 hover:bg-cyan-100 font-medium"
                >
                  Education 
                </Link>
              </li>
              <li>
                <Link
                  to="/activity/social"
                  onClick={() => {
                    setIsOpen(false);
                    setDropdownOpen(false);
                  }}
                  className="block px-5 py-3 hover:bg-cyan-100 font-medium"
                >
                  Social 
                </Link>
              </li>
            </ul>
          </li>

          {/* Gallery */}
          <li className="text-center py-2 md:py-0">
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400"
            >
              Gallery
            </Link>
          </li>

          {/* Contact */}
          <li className="text-center py-2 md:py-0">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400"
            >
              Contact
            </Link>
          </li>

          {/* Donate */}
          <li className="text-center py-2 md:py-0">
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="bg-green-400 hover:bg-green-600 text-black px-5 py-2 rounded-lg font-semibold transition duration-200"
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
