import React from "react";
import Slider from "./HomeComponents/Slider";
import Featured from "./OurScience/OurScience";
import Review from "./review/Review";
import Qualityaccom from "./qualityaccom/Qualityaccom";
import HomeHeader from "../../component/HomeHeader/HomeHeader";
import ReasonBeing from "./ReasonBeing/ReasonBeing";
import LyfeBox from "../Home/LyfeBox/LyfeBox";
import Ingredient from "./Ingredient/Ingredient";
import HomeModels from "./HomeModels/HomeModels";

const Home = () => {
  return (
    <div className="homePage">
      <HomeHeader />
      <Slider />
      <Featured />
      <Qualityaccom />
      <Ingredient />
      <LyfeBox />
      <HomeModels />
      <ReasonBeing />
      <Review />
    </div>
  );
};

export default Home;
