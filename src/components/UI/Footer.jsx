import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-800 py-4 text-[#F5FCE1] mt-10">
                <div className="container px-4 mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        <div className="px-4 my-4 w-full sm:w-auto">
                            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-teal-400">Company</h2>
                            <ul className="leading-8">
                                <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
                                <li><Link to="/careers" className="hover:text-blue-400">Careers</Link></li>
                                <li><Link to="/termsofservice" className="hover:text-blue-400">Terms of Service</Link></li>
                                <li><Link to="privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto">
                            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-teal-400">Blog</h2>
                            <ul className="leading-8">
                                <li><Link to="/newsfeed" className="hover:text-blue-400">AI Insights</Link></li>
                                <li><Link to="#" className="hover:text-blue-400">Newsletter Signup</Link></li>
                            </ul>
                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                            <h2 className="text-2xl pb-4 mb-4 border-b-4 border-teal-400">Connect With Us</h2>
                            <div className="flex space-x-2">
                                {/* facebook */}
                                <Link to="#" className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                    </svg>
                                </Link>
                                {/* twitter */}
                                <Link to="#" className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                </Link>
                                {/* linkedin */}
                                <Link to="#" className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.9C24.9 107.1 0 81.6 0 51.1S24.9-5 55.06-5s55.06 26.5 55.06 56.1-24.9 55.9-55.06 55.9zM447.9 448h-92.77V302.4c0-34.7-.7-79.4-48.44-79.4-48.44 0-55.87 37.9-55.87 77.1V448h-92.8V148.9h89.05v40.8h1.3c12.4-23.4 42.74-48.44 87.92-48.44 94 0 111.2 61.9 111.2 142.3V448z" />
                                    </svg>
                                </Link>
                                {/* Instagram */}
                                <Link to="#" className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 186.7c-39.7 0-71.9-32.2-71.9-71.9s32.2-71.9 71.9-71.9 71.9 32.2 71.9 71.9-32.2 71.9-71.9 71.9zm146.4-194.3c0 14.1-11.4 25.5-25.5 25.5s-25.5-11.4-25.5-25.5 11.4-25.5 25.5-25.5 25.5 11.4 25.5 25.5zm76.1 27.2c-1.7-36.9-9.6-69.6-35.2-95.2s-58.3-33.5-95.2-35.2c-37.5-2.1-149.9-2.1-187.4 0-36.9 1.7-69.6 9.6-95.2 35.2s-33.5 58.3-35.2 95.2c-2.1 37.5-2.1 149.9 0 187.4 1.7 36.9 9.6 69.6 35.2 95.2s58.3 33.5 95.2 35.2c37.5 2.1 149.9 2.1 187.4 0 36.9-1.7 69.6-9.6 95.2-35.2s33.5-58.3 35.2-95.2c2.1-37.5 2.1-149.9 0-187.4zm-48.2 224.8c-7.8 19.6-22.9 34.7-42.5 42.5-29.5 11.7-99.5 9-132.8 9s-103.3 2.7-132.8-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.5-9-99.5-9-132.8s-2.7-103.3 9-132.8c7.8-19.6 22.9-34.7 42.5-42.5 29.5-11.7 99.5-9 132.8-9s103.3-2.7 132.8 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.5 9 99.5 9 132.8s2.7 103.3-9 132.8z" />
                                    </svg>
                                </Link>

                                {/* YouTube */}
                                <Link to="#" className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M549.7 124.1c-6.3-23.6-24.9-42.2-48.5-48.5C456.3 64 288 64 288 64s-168.3 0-213.2 11.6c-23.6 6.3-42.2 24.9-48.5 48.5C16 168 16 256 16 256s0 88 11.6 131.9c6.3 23.6 24.9 42.2 48.5 48.5C119.7 448 288 448 288 448s168.3 0 213.2-11.6c23.6-6.3 42.2-24.9 48.5-48.5C560 344 560 256 560 256s0-88-11.6-131.9zM232 336V176l144 80-144 80z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-[#F5FCE1] text-sm mt-6 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} AgilityAI . All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
