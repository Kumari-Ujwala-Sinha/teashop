import React from "react";
// import Form from "../Form/Form";
// import Form2 from "../Form/Form2";

const IngredientAnalysis = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center w-full h-full bg-opacity-50">
          <div
            className="bg-center bg-cover main-img mb-5"
            style={{
              backgroundImage: `url("images/ingredient-analysis-banner.png")`,
              width: "100%",
              height: "85vh",
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

      {/* //For Testing only// */}
      {/* <Form />
      <Form2/> */}
    </div>
  );
};

export default IngredientAnalysis;
