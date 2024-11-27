import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from "./assets/logo.png";
import leftback from "./assets/leftback.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import background2 from "./assets/background3.png";

const HeroSection = () => {
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const toggleCategoryDropdown = () => setShowCategoryDropdown(!showCategoryDropdown);

    return (
        <section
            className="bg-gray-200 h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${background2})` }}
        >

            <nav>
                <div className="flex justify-between items-center p-6 bg-opacity-70">
                    <div className="ml-8">
                        <img src={logo} className="w-48 p-1" alt="Logo" />
                    </div>
                    <div className="relative flex gap-2">
                        <button className="bg-white rounded-xl px-4 py-2">About</button>
                        <button className="bg-white rounded-xl px-4 py-2">Guide</button>
                        <button
                            onClick={toggleCategoryDropdown}
                            className="bg-white rounded-xl px-4 py-2 flex items-center"
                        >
                            Categories <MdArrowDropDown className="ml-2" />
                        </button>
                        {showCategoryDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-xl p-2">
                                <a href="/" className="block px-4 py-2 text-blue-500 hover:bg-gray-100">Technology</a>
                                <a href="/" className="block px-4 py-2 text-blue-500 hover:bg-gray-100">Health</a>
                                <a href="/" className="block px-4 py-2 text-blue-500 hover:bg-gray-100">Lifestyle</a>
                                <a href="/" className="block px-4 py-2 text-blue-500 hover:bg-gray-100">Business</a>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <IoIosSearch className="w-8" />
                        <input
                            type="text"
                            placeholder="Search author..."
                            className="p-1 w-[400px] rounded-xl text-black"
                        />
                    </div>
                    <button className="bg-orange-600 text-white py-2 px-4 rounded-xl hover:bg-yellow-400">
                        Login
                    </button>
                </div>
            </nav>
            <div className="flex justify-center mt-2">
                <div>
                    <img
                        src={leftback}
                        alt="Blog Image"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <div className="ml-8 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4 text-white">Welcome to InfoSphere</h1>
                    <p className="text-lg text-white mb-6">
                        Stay updated with the latest blog posts, guides, and articles on various topics.
                    </p>
                    <button className="bg-orange-600 w-[200px] text-white py-2 px-6 rounded-xl hover:bg-yellow-400">
                        Subscribe
                    </button>
                    <hr className="my-4" />
                    <p className="font-bold mb-2 text-white">Follow Us:</p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-blue-500 w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-pink-500 w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-blue-400 w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}; 


export default HeroSection;
