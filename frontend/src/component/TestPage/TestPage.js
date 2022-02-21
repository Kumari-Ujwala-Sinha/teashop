import React, { useState } from "react";
import BmiIndexForm from "../Models/BmiIndexForm";
import DeseasePrediction from "../Models/DeseasePrediction";
import { Helmet } from "react-helmet";
import HomeHeader from "../HomeHeader/HomeHeader";

import "../Models/models.css";

const Test = () => {
  const [dp, setDp] = useState(true);
  const [bmi, setBmi] = useState(false);

  return (
    <div className="">
      <HomeHeader />
      <Helmet>
        <script async="true" type="text/javascript">
          {` !function () {
                            if (window.JOONBOT_WIDGET_ID) {
                              console.warn("Joonbot snippet included twice");
                            } else {
                              window.JOONBOT_MODE = "embed";
                              window.JOONBOT_WIDGET_ID = "888d829c-935c-4c94-9f0d-306626a3a9b2";
                              var n, o;
                              o = document.createElement("script");
                              o.src = "https://js.joonbot.com/init.js", o.defer = !0, o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous";
                              n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
                            }
                          }()`}
        </script>
      </Helmet>
      <div className="w-full flex justify-center my-20">
        <div
          id="joonbot-embed"
          style={{
            // backgroundColor: "#F8CF2C",
            backgroundColor: "rgb(247, 247, 240)",
            width: "80vw",
            height: "80vh",
          }}
        ></div>
      </div>
      {/* <div>
                <div className="flex items-center justify-center w-full h-full bg-opacity-50">
                    <div
                        className="bg-center bg-cover main-img mb-5"
                        style={{
                            backgroundImage: `url("/images/health-analysis-banner.png")`,
                            width: "100%",
                            height: "85vh",
                        }}
                    />
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold uppercase lg:text-3xl cursor-pointer">
                            
                        </h1>
                       
                    </div>
                </div>
            </div> */}
      <section
        className="custom-bg"
        id="form-sec"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/tea-cropped.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-3 md:py-6 px-4 flex justify-center items-center">
          <div
            className="py-2 px-4 font-medium text-lg md:text-xl shadow-lg mr-4 cursor-pointer"
            style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
            onClick={() => {
              setDp(true);
              setBmi(false);
            }}
          >
            Disease Prediction
          </div>
          <div
            className="py-2 px-4 font-medium text-lg md:text-xl shadow-lg cursor-pointer"
            style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
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
      </section>
    </div>
  );
};

export default Test;
