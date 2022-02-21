import React from "react";

const TanningAnalysis = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center w-full h-full bg-opacity-50">
          <div
            className="bg-center bg-cover main-img mb-5 object-scale-down"
            style={{
              backgroundImage: `url("images/tea-tanning-banner.png")`,
              width: "100%",
              height: "120vh",
            }}
          />
          <div className="text-center">
            <h1 className="text-2xl font-semibold uppercase lg:text-3xl cursor-pointer">
              {/* text */}
            </h1>
            {/* <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auemail hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanningAnalysis;
