import React, { useState } from "react";
import axios from "axios";

import "./models.css";
import Loader from "../CustomLoader/Loader";

function BmiIndexForm() {
  const [res, setRes] = useState("");
  const [disp, setDisp] = useState(false);
  const [gender, setGender] = useState("");
  // const [bmi, setBmi] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    setRes("");
    setDisp(false);
    e.preventDefault();
    const data = { gender, weight, height };

    axios({
      method: "post",
      header: { "Content-Type": "application/json" },
      url: "https://api.lyfespirit.com/bmi",
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        setRes("data");
        setDisp(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setRes("Something went wrong");
        setDisp(true);
        setLoading(false);
      });
  };

  return (
    <div className="mt-7 App flex flex-col justify-center items-center p-4">
      <section className="w-full md:w-11/12 md:flex flex-col justify-center items-center pt-3 pb-4 lg:px-4 ">
        <form
          onSubmit={handleSubmit}
          className="rounded font-sans w-full md:w-2/3"
        >
          <h1
            className="w-full px-2 py-4 text-center font-semibold text-2xl text-white font-sans md:text-4xl my-2 shadow-sm"
            style={{ background: "rgba(0, 86, 47, 0.9)" }}
          >
            Body Health Status
          </h1>
          <div className="mb-4 md:justify-between">
            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              {/* <label className="block mb-2 text-sm font-bold" htmlFor="gender">
                Gender
              </label> */}

              <select
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                id="gender"
                name="gender"
              >
                <option
                  className="text-center bg-white"
                  value=""
                  disabled
                  defaultValue
                >
                  Select Gender
                </option>
                <option
                  className="text-center py-2"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                  value="Male"
                >
                  Male
                </option>
                <option
                  className="text-center py-2"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                  value="Female"
                >
                  Female
                </option>
                {/* <option className="text-center" value="Other">
                    Other
                  </option> */}
              </select>
            </div>
            {/* <div className="w-full md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="bmi"
              >
                BMI
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="bmi"
                type="text"
                onChange={(e) => setBmi(e.target.value)}
                value={bmi}
                placeholder="bmi"
              />
            </div> */}
          </div>

          <div className="mb-4 md:justify-between mt-3 bg-transparent">
            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              {/* <label
                className="block mb-2 text-sm font-bold text-gray-700 textColor bg-transparent"
                htmlFor="weight"
              >
                Weight in kgs
              </label> */}
              <input
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                autoComplete="off"
                id="weight"
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                placeholder="Enter Weight in kgs"
              />
            </div>

            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              {/* <label
                className="block mb-2 text-sm font-bold textColor bg-transparent"
                htmlFor="height"
              >
                Height in feet or inch
              </label> */}
              <input
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                autoComplete="off"
                id="height"
                type="number"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                placeholder="Enter Height in feet or inch"
              />
            </div>
          </div>

          <div className="mb-2 text-center mt-6 bg-transparent">
            <button
              className=" px-12 py-2 font-bold transition-all duration-700 hover:shadow-xl focus:outline-none focus:shadow-outline"
              type="submit"
              style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className="w-full md:w-11/12 md:flex flex-col justify-center items-center pt-3 pb-8 lg:px-4">
        {loading && <Loader />}

        {disp && (
          <div
            className="w-full px-2 py-4 text-center font-semibold text-2xl text-white font-sans md:text-4xl my-2 shadow-sm"
            style={{ background: "rgba(0, 86, 47, 0.9)" }}
          >
            Results: {res}
          </div>
        )}
      </section>
    </div>
  );
}

export default BmiIndexForm;
