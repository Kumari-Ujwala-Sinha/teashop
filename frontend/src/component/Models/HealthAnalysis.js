import React, { useState } from "react";
import BmiIndexForm from "./BmiIndexForm";
import DeseasePrediction from "./DeseasePrediction";
import HomeHeader from "../HomeHeader/HomeHeader";

const HealthAnalysis = () => {
  const [dp, setDp] = useState(true);
  const [bmi, setBmi] = useState(false);
  return (
    <div>
      <HomeHeader />
      <div>
        <div className="flex items-center justify-center w-full h-full bg-opacity-50">
          <div
            className="bg-center bg-cover main-img mb-5"
            style={{
              backgroundImage: `url("images/health-analysis-banner.png")`,
              width: "100%",
              height: "85vh",
            }}
          />
          <div className="text-center">
            <h1 className="text-2xl font-semibold uppercase lg:text-3xl cursor-pointer">
              {/* text */}
            </h1>
          </div>
        </div>
      </div>
      <div className="py-3 md:py-6 px-4 flex justify-center items-center">
        <div
          className="py-2 px-4 font-medium text-lg md:text-xl shadow-lg rounded-xl mr-4 cursor-pointer bg-green-300"
          onClick={() => {
            setDp(true);
            setBmi(false);
          }}
        >
          Disease Prediction
        </div>
        <div
          className="py-2 px-4 font-medium text-lg md:text-xl shadow-lg rounded-xl cursor-pointer bg-green-300"
          onClick={() => {
            setBmi(true);
            setDp(false);
          }}
        >
          Body Health Status
        </div>
      </div>
      {bmi && <BmiIndexForm />}
      {dp && <DeseasePrediction />}
    </div>
  );
};

export default HealthAnalysis;
