import React from 'react';

const Banner = () => {
    return (
         <div
      className="h-[300px] rounded-sm px-10 py-10 bg-center lg:flex gap-4 container mx-auto"
    >
      <div className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-sm flex flex-col justify-center items-center shadow-lg">
        <h2 className=" text-white text-lg font-medium">In-Progress</h2>
        <p className="text-white text-6xl font-bold mt-2">0</p>
      </div>

      <div className="flex-1 bg-gradient-to-r from-green-400 to-teal-500 rounded-sm flex flex-col justify-center items-center shadow-lg">
        <h2 className="text-white text-lg font-medium">Resolved</h2>
        <p className="text-white text-6xl font-bold mt-2">0</p>
      </div>
    </div>
    );
};

export default Banner;