import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import leftback from "./assets/leftback.png";
import bg7 from "./assets/psp.png";
import logo from './assets/logo.png';
import background from "./assets/background3.png";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const HeroSection = () => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const toggleCategoryDropdown = () => setShowCategoryDropdown(!showCategoryDropdown);

  return (
    <section className="h-[600px] bg-cover bg-center flex relative bg-gray-200 opacity-90"
    style={{
      backgroundImage: `url(${background})`,
    }}>
     
      <div className="absolute top-4 left-4 w-full flex items-center justify-between px-8">
        
        <img src={logo} alt="Logo" className="w-[150px]" />
       
        <nav className="flex gap-6">
          <button className="bg-white px-4 py-2 rounded-md">About</button>
          <button className="bg-white px-4 py-2 rounded-md">Guide</button>
          <div className="relative">
            <button
              className="bg-white px-4 py-2 rounded-md flex items-center"
              onClick={toggleCategoryDropdown}
            >
              Categories <MdArrowDropDown className="ml-2" />
            </button>
            {showCategoryDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-2">
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">Technology</a>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">Health</a>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">Sport</a>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">Business</a>
              </div>
            )}
          </div>
        </nav>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Login</button>
      </div>

      
      <div className="w-1/2 relative">
        <img
          src={bg7}
          alt="Left Image"
          className="absolute mt-20 right-0 w-[600px] h-[500px] object-cover rounded-2xl mr-32"
        />
      </div>

     
      <div className="w-1/2 p-10 flex flex-col justify-center">
     
        <div>
          <h1 className="text-4xl font-bold mb-4  mt-48">Welcome to InfoSphere</h1>
          <p className="text-lg mb-6 text-gray-500">Stay updated with the latest blog posts, guides, and articles on various topics.</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md">Subscribe</button>
          <div className="flex mt-4 gap-4">
            <a href="https://facebook.com" className="text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="text-blue-400">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="flex mt-6">
          <img
            src={leftback}
            alt="Blog Preview"
            className="w-1/2 h-48 object-cover rounded-md"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Blog Title</h3>
            <p>Blog description</p>
            <a href="/" className="text-blue-500">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
