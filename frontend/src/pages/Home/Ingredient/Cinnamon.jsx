import React from "react";

// backup color #9DE3F6

const Cinnamon = () => {
  return (
    <div>
      <div className="ingredientWrapper">
        <div
          className="w-60 h-1/2 shadow-xl border border-yellow-100 p-2 md:p-4 rounded-xl"
          style={{ background: "#252827",color: "#ffffff",textAlign:'center', height: '74vh' }}
        >
          {/*backup card brown color #e7c39c */}
          <div className="bg-transparent">
            <div className="bg-transparent">
              <img
                src="/homeImg/cinnamon.png"
                alt="cinnamon"
                className="h-80 w-60 rounded bg-transparent"
              />
            </div>
            <h3 className="mt-2  text-lg font-bold bg-transparent">
            Cinnamon
            </h3>
            <p className="mt-4  text-light bg-transparent">
            Relieves <span className=" bg-transparent">digestive discomfort</span>
            </p>
            <p className="mt-1 text-md bg-transparent">
            Reduces<span className=" bg-transparent"> blood pressure</span>
            </p>
            <p className="mt-1  text-md bg-transparent">
            It has <span className=" bg-transparent">anti-viral, anti-bacterial</span> and <span className="font-semibold bg-transparent">anti-fungal properties.</span>
            </p>
          </div>
        </div>
        {/* Hover Effect */}
        <div className="p-2 h-full w-full transition-all customHover bg-transparent rounded-xl">
          <img className="w-full h-full rounded-xl" src="/homeImg/ingredientHover/cinnamon.jpeg" alt="Cinnamon" />
        </div>
      </div>
    </div>
  );
};

export default Cinnamon;
