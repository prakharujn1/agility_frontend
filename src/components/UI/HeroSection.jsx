import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
        <div className="mx-auto">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/background.png')`,
                    }}
                ></div>

                <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Left Side: Company Info */}
                        <div className="w-full md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight sm:leading-snug bg-gradient-to-r from-teal-200 to-white text-transparent bg-clip-text">
                                Evolving<br/>Intelligence &<br />Innovation
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-white mb-8 tracking-wide">
                                Empowering Businesses and Education with Cutting-Edge AI for a Digital Future.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link
                                    to="/contact"
                                    className="bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    to="/Aiacademy"
                                    className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                                >
                                    AI Academy
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Features */}
                        <div className="w-full md:w-1/2 md:pl-12">
                            <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                                {/* Typewriter Effect for Heading */}
                                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
                                    <Typewriter
                                        words={['Why AgilityAI ?']}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span>AI-Powered Business Innovation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                        <span>Ethical & Scalable AI</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA33F7">
                                            <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                                        </svg>
                                        <span>AI Education & Upskilling</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
