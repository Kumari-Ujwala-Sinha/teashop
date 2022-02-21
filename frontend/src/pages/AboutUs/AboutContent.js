import React from "react";

const AboutContent = () => {
  return (
    <div className="aboutGoal">
      <div className="goalTextWrapper">
        <h2 className="font-semibold text-5xl titleColor">Our Goal</h2>
        <div className="mt-8 text-xl textColor">
          We provide you with a wide range of tea products breaking the
          stereotype and perception of people regarding tea what they merely
          think of as a mixture of milk and sugar which counts up a lot of
          calories but at <span className="font-semibold"> Tea Wonders </span> we show that the story of tea is way beyond
          that, we propagate how to live a healthy life by involving tea in your
          routine.
        </div>
        <div className="mt-5 text-xl textColor">
          We are a women-owned start up growing with the Vocal for Local mission
          and vision of sustainability and Natural products going back to the
          roots. We as a team focus on the wellness and health of our clients
          which in contemporary life is important to an individual.
        </div>
      </div>
      <img
        className="goalImg"
        src="/aboutImg/goal.jpg"
        alt="tea home"
      />
    </div>
  );
};

export default AboutContent;
