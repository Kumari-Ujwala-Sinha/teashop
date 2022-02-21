import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import "../home.css";

const Slider = () => {
  const arr=[
    {
      title:"Healing Health the Ayurveda way!",
      img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/homeImg/homeSlider1.jpg)"
    },
    {
      title:"Our Future With Technology!",
      img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/homeImg/homeSlider2.jpg)"
    },
    {
      title:"Be Infused – Tea & Technology",
      img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/homeImg/homeSlider3.jpg)"
    },
    // {
    //   title:"Food & Drinks",
    //   img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/homeImg/homeSlider2.jpg)"
    // }
  ]
  return (
    <div className="sliderWrapper">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      interval={3000}
      stopOnHover={false}
    >

    {arr.map((val)=>{
      return(
        
        <div
        className="header__images"
        style={{
          background: `${val.img}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="sliderContainer">
          <div className="sliderText">
            <p className="slider__text1">WELCOME TO LYFESPIRIT CLUB!</p>
            <h2 className="slider__text2">
              {val.title}
            </h2>
            <p className="slider__subheading">DRINK GOOD, FEEL GOOD.</p>
            <Link
              to="/products"
              className="slider__btn"
            >
              KNOW YOUR HERBS
            </Link>
            <Link
              to="/products"
              className="slider__btn"
            >
              GET YOUR LYFE
            </Link>
          </div>
        </div>
      </div>
      )
    })}
      

    </Carousel>
    
    </div>
  );
};

export default Slider;
