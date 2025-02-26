import React from 'react';

const Card = ({ title, description, image, tags }) => (
    <div className="w-[300px] h-[400px] flex flex-col rounded-md border bg-gray-900 shadow-lg transition-all duration-500">
        <img src={image} alt={title} className="h-[200px] w-full rounded-t-md object-cover" />
        <div className="p-4 flex-grow flex flex-col">
            <h1 className="text-lg font-semibold text-white">{title}</h1>
            <p className="mt-2 text-sm text-gray-300 line-clamp-3">
                {description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-300"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
            <div className="mt-auto">
                <button className="mt-4 w-full rounded-sm bg-gradient-to-r from-teal-400 to-blue-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-300">
                    Join Now 
                </button>
            </div>
        </div>
    </div>
);

export default Card;
