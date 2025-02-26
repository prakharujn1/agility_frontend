import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

const AIacademy = () => {
    const [events, setEvents] = useState([]);
    const [webinars, setWebinars] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch Events
        fetch("http://localhost:5000/events")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error("Error fetching events:", err));

        // Fetch Webinars
        fetch("http://localhost:5000/webinars")
            .then((res) => res.json())
            .then((data) => setWebinars(data))
            .catch((err) => console.error("Error fetching webinars:", err));

        // Fetch Courses
        fetch("http://localhost:5000/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Error fetching courses:", err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="min-h-screen text-white p-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 mb-12 tracking-wide">
                    Welcome {" "}
                    <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
                        to AIacademy
                    </span>
                </h1>

                {/* Events Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Our Upcoming Events</h2>
                    <div className="flex flex-wrap gap-6">
                        {events.map((event) => (
                            <Card key={event.id} {...event} />
                        ))}
                    </div>
                </section>

                {/* Webinars Section */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Upcoming Webinars</h2>
                    <div className="flex flex-wrap gap-6">
                        {webinars.map((webinar) => (
                            <Card key={webinar.id} {...webinar} />
                        ))}
                    </div>
                </section>

                {/* Courses Section */}
                <div className="w-full h-full text-gray-400 p-10">
                    <div className="container mx-auto px-4">
                        <div className="text-center my-10">
                            <h1 className="text-white text-4xl font-bold">AI Courses</h1>
                            <p className="text-gray-500 text-xl">Explore AI learning paths</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="rounded-lg text-center p-6 bg-gray-900 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                                >
                                    <div className="py-5 border-b border-gray-800">
                                        <h2 className="text-white text-3xl font-bold">{course.title}</h2>
                                        <h3 className="text-indigo-500 text-xl mt-2">{course.price}</h3>
                                    </div>
                                    <div className="my-5 text-5xl">{course.icon}</div>
                                    <p className="text-gray-500 text-lg">{course.description}</p>
                                    <div className="mt-10">
                                        <Link
                                            to="#"
                                            className="block bg-indigo-600 text-white font-medium text-xl py-3 rounded-lg hover:bg-indigo-500 transition"
                                        >
                                            Enroll Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AIacademy;



