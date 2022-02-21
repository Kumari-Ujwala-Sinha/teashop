import React from "react";

const Founder = () => {
  return (
    <div className="p-2 md:p-6 shadow-2xl">
      <h1 className="titleColor text-5xl font-semibold text-center pt-6 pb-2">
        Founder
      </h1>
      {/* <h3 className="titleColor text-3xl font-semibold text-center p-5 pb-6">There is More Tea in my veins, than blood!</h3> */}
      <h3 className="titleColor text-3xl font-semibold text-center p-5 pb-6">
        Why should Women only make tea in kitchen & pluck leaves in the garden
        <br /> It's time they innovate TEA....
      </h3>
      <div className="flex justify-center items-center py-4 px-4 md:px-40">
        <div className="w-1/4">
          <img
            className="w-full h-full"
            src="/aboutImg/founder.jpeg"
            alt="Founder"
          />
        </div>
        <div className="w-3/4 px-2 md:px-28">
          <h2 className="text-3xl mb-4 font-light textColor">
            Payalh Agarwwal
          </h2>
          <p className="text-xl font-light mb-3 textColor ">
            Payalh Agarwwal is an entrepreneur. Who is a passionate innovator
            who loves to experiment with all life puts on my plate. And she
            really likes challenging her own existing targets and achievements.
          </p>
          <p className="text-xl font-light textColor">
            She has 22 years of diversified experience ranging from education,
            finance, marketing, brand management, business development,
            marketing strategy, and food and beverage industry and all this
            without any formal education. She never saw doors to any college and
            today at age 39 she is proud mom to 18 year old teenager Romharsh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
