import React from 'react';
import { useState } from 'react';
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
            name: "",
            email: "",
            company: "",
            description: "" 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    
        // console.log("Form Data:", formData);
    
        try {
            const response = await axios.post("http://localhost:5000/api/enquiry", formData);
            console.log("Response:", response.data);
            alert("Application Submitted Successfully!");
            
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("Failed to submit application.");
        }
    };

    
    return (
        <div className="max-w-7xl mx-auto pt-10 pb-8 px-6">
            <section className="bg-transparent border border-neutral-600 p-6 rounded-lg" id="contact">
                <div className="relative mt-20 border-b border-neutral-600 min-h-[800px]">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                                Get{" "}
                                <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
                                in Touch
                                </span>
                            </h2>

                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                                Business Inquiry Form
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-gray-300">
                                    Hi! Let us know how we can help and we’ll respond shortly.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Abhay Khand-3, Indirapuram, Suraksha Apartment,</p>
                                            <p className="text-gray-600 dark:text-slate-300">Ghaziabad, Uttar Pradesh 201010, IN</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Mobile: +1 (123) 456-7890</p>
                                            <p className="text-gray-600 dark:text-gray-300">Mail: tailnext@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working hours</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 08:00 - 17:00</p>
                                            <p className="text-gray-600 dark:text-gray-300">Saturday & Sunday: 08:00 - 12:00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <input type="text"
                                             id="name"
                                             value={formData.name}
                                             onChange={handleChange}
                                             autoComplete="given-name" 
                                             placeholder="Your name" 
                                             className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" 
                                             name="name" 
                                             required/>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <input type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoComplete="email" 
                                            placeholder="Your email address"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            name="email"
                                            required/>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="company" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <input type="text"
                                             id="company" value={formData.company}
                                              onChange={handleChange}
                                               autoComplete="given-company" 
                                               placeholder="Your company" 
                                               className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                               name="company"
                                               required/>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <textarea id="textarea"
                                               name="description"
                                               value={formData.description}
                                               onChange={handleChange} 
                                               cols="30" rows="5" 
                                               placeholder="How can we help ?" 
                                               className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bg-gradient-to-r from-teal-400 to-blue-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message 📩</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
