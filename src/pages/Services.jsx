import React from 'react';
import { features } from "../constants";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          What{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
            We Do
          </span>
        </h2>
      </div>

      {/* Features Section */}
      <section className="text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap mx-4 justify-center">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full">
                  <div className="flex h-12 w-12 mb-4 bg-blue-600 text-white justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.text}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
