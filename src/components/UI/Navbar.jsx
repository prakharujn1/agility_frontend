import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.jpg";
import React from 'react';
import { navItems } from "../../constants";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
    const { user, token, logout } = useAuth();
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    // Handle logout
    const handleLogout = () => {
        logout(); // Call the logout function from your AuthContext
        navigate("/login"); // Redirect to the login page
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-gray-700/30 border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <NavLink to="/" className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">AgilityAI</span>
                    </NavLink>
                    <ul className="hidden lg:flex ml-14 space-x-12 text-[#F5FCE1]">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.href}>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        {token ? ( // If user is authenticated, show Logout button
                            <button
                                onClick={handleLogout} // Use handleLogout
                                className="py-2 px-3 border rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                            >
                                Logout
                            </button>
                        ) : ( // If user is not authenticated, show Sign In and Create Account buttons
                            <>
                                <NavLink to="/login" className="py-2 px-3 border rounded-md">
                                    Sign In
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="bg-gradient-to-r from-teal-400 to-blue-600 py-2 px-3 rounded-md"
                                >
                                    Create account
                                </NavLink>
                            </>
                        )}
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4 text-[#F5FCE1]">
                                    <NavLink to={item.href}>{item.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            {token ? ( // If user is authenticated, show Logout button
                                <button
                                    onClick={handleLogout} // Use handleLogout
                                    className="py-2 px-3 border rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                                >
                                    Logout
                                </button>
                            ) : ( // If user is not authenticated, show Sign In and Create Account buttons
                                <>
                                    <NavLink to="/login" className="py-2 px-3 border rounded-md">
                                        Sign In
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        className="py-2 px-3 rounded-md bg-gradient-to-r from-teal-400 to-blue-600"
                                    >
                                        Create account
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;