import React from "react";

const Clove = () => {
  return (
    <div>
      <div className="ingredientWrapper">
      {/* text-color #F8CF2C */}
        <div
          className="w-60 h-1/2 shadow-xl border border-yellow-100 p-2 md:p-4 rounded-xl"
          style={{ background: "#252827",color: "#ffffff",textAlign:'center', height: '74vh' }}
        >
          {/*backup card brown color #e7c39c */}
          <div className="bg-transparent">
            <div className="bg-transparent">
              <img
                src="/homeImg/clove.png"
                alt="Clove"
                className="h-80 w-60 rounded bg-transparent"
              />
            </div>
            <h3 className="mt-2 text-lg font-bold bg-transparent">
            Clove
            </h3>
            <p className="mt-4 text-light bg-transparent">
           May reduce <span className="bg-transparent"> stomach ulcers</span>.
            </p>
            <p className="mt-1 text-md bg-transparent">
            Reduces <span className=" bg-transparent">inflammation</span>
            </p>
            <p className="mt-1 text-md bg-transparent">
            It reduces<span className=" bg-transparent"> pain</span> and <span className="font-semibold bg-transparent">improve breathing</span>.
            </p>
          </div>
        </div>
        {/* Hover Effect */}
        <div className="p-2 h-full w-full transition-all customHover bg-transparent rounded-xl">
          <img className="w-full h-full rounded-xl" src="/homeImg/ingredientHover/clove.jpeg" alt="Clove" />
        </div>
      </div>
    </div>
  );
};

export default Clove;
