import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube,FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[rgb(22,39,50,0.9)] text-white py-8 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left section */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-cyan-400">SHREE BALAJI FOUNDATION</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering communities and making the world a better place.  
            Join us in creating positive change through compassion and unity.
          </p>
        </div>

        {/* Middle Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 ">Quick Links</h3>
          <ul className="flex flex-wrap space-x-4 text-gray-400 text-center">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/events" className="hover:text-cyan-400">Activities</Link></li>
            <li><Link to="/gallery" className="hover:text-cyan-400">Gallery</Link></li>
            <li><Link to="/donate" className="hover:text-cyan-400">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Right section: Social icons */}
        <div  >
          <h3 className="text-lg font-semibold mb-3 ">Contact with Us</h3>
          <h1 >Email : shreebalajifoundation74@gmail.com</h1>
                   

          <h1>Phone :  +91 8087678977  | +91 8459485202</h1>
        <div className="mt-6 md:mt-4 flex justify-center space-x-6">
          <a href="https://www.facebook.com/shreebalajifoundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-2xl">
          <FaFacebook />
          </a>
          <a href="https://www.instagram.com/shreebalajifoundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-2xl">
          <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/shreebalajifoundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-2xl">
          <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/shreebalajifoundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-2xl">
          <FaYoutube />
          </a>
        </div>
        
        </div>
        
      </div>
      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} SHREE BALAJI FOUNDATION. All rights reserved.
      </div>
        
    </footer>
  );
};

export default Footer;
