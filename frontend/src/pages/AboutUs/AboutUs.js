import React from "react";
import AboutCompany from "./AboutCompany";
import Founder from "./Founder";
import AboutContent from "./AboutContent";
import AboutVideo from "./AboutVideo";
import HomeHeader from "../../component/HomeHeader/HomeHeader";
import './about.css';
const AboutUs = () => {
  return (
    <div>
      <HomeHeader />
      <AboutCompany />
      <AboutContent />
      <Founder />
      <AboutVideo />
    </div>
  );
};

export default AboutUs;
