import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jobListings } from "../constants";

const Careers = () => {
    const navigate = useNavigate();
    // const [jobListings, setjobListings] = useState([]);   

    // useEffect(() => {
    //     //Fetch Jobs
    //     fetch("http://localhost:5000/api/joblistings")
    //         .then((res) => res.json())
    //         .then((data) => setjobListings(data))
    //         .catch((err) => console.log("Error in fetching jobs", err));
    // }, []);

    return (
        <section>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                        Join{" "}
                        <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
                            Our Team
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-300">
                        We’re looking for talented individuals to help us shape the future. Explore our current opportunities and find your perfect role.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {jobListings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-[#44515A] shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col justify-between relative"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-[#F5FCE1]">{job.title}</h3>
                                <p className="mt-2 text-gray-300">📍 {job.location}</p>
                                <h5 className="mt-6 text-2xl font-semibold">💡 Skills Required:</h5>
                                <ul className="mt-3 space-y-2 text-gray-300 min-h-[80px] max-h-[120px] overflow-auto">
                                    {job.skills.length > 0 ? (
                                        job.skills.map((skill, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                🔹 <span>{skill}</span>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-gray-400">No specific skills mentioned.</li>
                                    )}
                                </ul>
                            </div>

                            {/* Fixed Apply Now Button */}
                            <div className="absolute bottom-4 left-0 w-full px-6">
                                <button
                                    className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white text-lg font-semibold rounded-lg hover:scale-105 transition"
                                    onClick={() => navigate(`/jobs/${job.id}`)}
                                >
                                    Apply Now 🚀
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
