import React from "react";

const Turmeric = () => {
  return (
    <div>
      <div className="ingredientWrapper">
        <div
          className="w-60 shadow-xl border border-yellow-100 p-2 md:p-4 rounded-xl"
          style={{ background: "#252827",color: "#ffffff",textAlign:'center',height: '74vh' }}
        >
          {/*backup card brown color #e7c39c */}
          <div className="bg-transparent">
            <div className="bg-transparent">
              <img
                src="/homeImg/turmeric.png"
                alt="Turmeric"
                className="h-80 w-60 rounded bg-transparent"
              />
            </div>
            <h3 className="mt-2 text-lg font-bold bg-transparent">
              Turmeric
            </h3>
            <p className="mt-4  text-light bg-transparent">
            Hign in <span className="bg-transparent">Antioxidants</span>.
            </p>
            <p className="mt-1  text-md bg-transparent">
              The potential to{" "}
              <span className=" bg-transparent">
                improve heart health
              </span>
              .
            </p>
            <p className="mt-1  text-md bg-transparent">
              Prevent against
              <span className=" bg-transparent">
                {" "}
                Alzheimer's{" "}
              </span>
              and <span className=" bg-transparent">cancer</span>.
            </p>
          </div>
        </div>
        {/* Hover Effect */}
        <div className="p-2 h-full w-full transition-all customHover bg-transparent rounded-xl">
          <img className="w-full h-full rounded-xl" src="/homeImg/ingredientHover/turmeric.jpeg" alt="turmeric" />
        </div>
      </div>
    </div>
  );
};

export default Turmeric;
