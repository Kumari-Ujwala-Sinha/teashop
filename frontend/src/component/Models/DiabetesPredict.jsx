import React, { useState } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import axios from "axios";
import "./models.css";
import Loader from "../CustomLoader/Loader";

const DiabetesPredict = () => {
  const [glucose, setGlucose] = useState("");
  const [insulin, setInsulin] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  // const [disp, setDisp] = useState(false);
  // const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let heightConverted = parseFloat(height) / 100;
    let bmi = (
      parseFloat(weight) /
      (heightConverted * heightConverted)
    ).toFixed(3);

    let data = { glucose, insulin, bmi, height, weight, age };
    console.log(data);

    axios
      .get("https://34.202.226.214:4430/")
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    // axios({
    //   method: "post",
    //   header: { "Content-Type": "application/json" },
    //   url: "https://34.202.226.214:4430/",
    //   data: data,
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  };
  return (
    <>
      <HomeHeader />
      <section
        className="-mt-6 w-full"
        id="form-sec"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/tea-cropped.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-28 App flex flex-col justify-center items-center p-4">
          <section className="w-full md:w-11/12 md:flex flex-col justify-center items-center pt-3 pb-4 lg:px-4 ">
            <form
              onSubmit={handleSubmit}
              className="rounded font-sans w-full md:w-2/3"
            >
              <h1
                className="w-full px-2 py-4 text-center font-semibold text-2xl text-white font-sans md:text-4xl my-2 shadow-sm"
                style={{ background: "rgba(0, 86, 47, 0.9)" }}
              >
                Diabetes Prediction
              </h1>
              <div className="mb-4 md:justify-between bg-transparent">
                <div
                  className="w-full px-2 py-2 my-4 text-white"
                  style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                >
                  {/* <label
                    className="block mb-2 text-sm font-bold text-gray-700 textColor bg-transparent"
                    htmlFor="glucose"
                  >
                    Glucose Level
                  </label> */}
                  <input
                    className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                    autoComplete="off"
                    id="glucose"
                    type="text"
                    onChange={(e) => setGlucose(e.target.value)}
                    value={glucose}
                    placeholder="Enter Glocose Level"
                  />
                </div>
              </div>

              <div className="mb-4 md:justify-between mt-3 bg-transparent">
                <div
                  className="w-full px-2 py-2 my-4 text-white"
                  style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                >
                  {/* <label
                    className="block mb-2 text-sm font-bold textColor bg-transparent"
                    htmlFor="insulin"
                  >
                    Insulin
                  </label> */}
                  <input
                    className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                    autoComplete="off"
                    id="insulin"
                    type="text"
                    onChange={(e) => setInsulin(e.target.value)}
                    value={insulin}
                    placeholder="Enter Insulin"
                  />
                </div>
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
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                    autoComplete="off"
                    id="weight"
                    type="text"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                    placeholder="Enter Weight in kilograms"
                  />
                </div>
              </div>

              <div className="mb-4 md:justify-between mt-3 bg-transparent">
                <div
                  className="w-full px-2 py-2 my-4 text-white"
                  style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                >
                  {/* <label
                    className="block mb-2 text-sm font-bold textColor bg-transparent"
                    htmlFor="height"
                  >
                    Height in cm
                  </label> */}
                  <input
                    className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                    autoComplete="off"
                    id="height"
                    type="text"
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                    placeholder="Enter Height centimeters"
                  />
                </div>
              </div>

              <div className="mb-4 md:justify-between mt-3 bg-transparent">
                <div
                  className="w-full px-2 py-2 my-4 text-white"
                  style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                >
                  {/* <label
                    className="block mb-2 text-sm font-bold textColor bg-transparent"
                    htmlFor="age"
                  >
                    Age
                  </label> */}
                  <input
                    className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                    autoComplete="off"
                    id="age"
                    type="text"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    placeholder="Enter Age"
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
            {loading && <Loader />}
          </section>
          <section className="w-full md:w-11/12 md:flex flex-col justify-center items-center pt-3 pb-8 lg:px-4">
            {loading && <Loader />}

            {/* {disp && (
              <div
                className="w-full px-2 py-4 text-center font-semibold text-2xl text-white font-sans md:text-4xl my-2 shadow-sm"
                style={{ background: "rgba(0, 86, 47, 0.9)" }}
              >
                Results: {result}
              </div>
            )} */}
          </section>
        </div>
      </section>
    </>
  );
};

export default DiabetesPredict;
