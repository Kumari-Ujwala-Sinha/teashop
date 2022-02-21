import React from "react";

const PepperMint = () => {
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
                src="/homeImg/peppermint.png"
                alt="PepperMint"
                className="h-80 w-60 rounded bg-transparent"
              />
            </div>
            <h3 className="mt-2 text-lg font-bold bg-transparent">
            PepperMint
            </h3>
            <p className="mt-4  text-light bg-transparent">
            Boost<span className=" bg-transparent"> liver health</span>.
            </p>
            <p className="mt-1 text-md bg-transparent">
            Could Promote<span className=" bg-transparent"> Weight Loss.</span>
            </p>
            <p className="mt-1 text-md bg-transparent">
            May help to <span className=" bg-transparent">Lower Blood Pressure</span>.
            </p>
          </div>
        </div>
        {/* Hover Effect */}
        <div className="p-2 h-full w-full transition-all customHover bg-transparent rounded-xl">
          <img className="w-full h-full rounded-xl" src="/homeImg/ingredientHover/peppermint.jpeg" alt="Peppermint" />
        </div>
      </div>
    </div>
  );
};

export default PepperMint;
