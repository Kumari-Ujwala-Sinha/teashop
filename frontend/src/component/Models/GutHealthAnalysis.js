import React, { useState } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
// import axios from "axios";
import "./models.css";
import Loader from "../CustomLoader/Loader";

const GutHealthAnalysis = () => {
  const [data, setData] = useState({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
    ans6: "",
    ans7: "",
  });

  const [display, setDisplay] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);
    // setLoading(false);

    // axios({
    //   method: "post",
    //   header: { "Content-Type": "application/json" },
    //   url: "http://ec2-34-227-27-69.compute-1.amazonaws.com:8080/dieases_pre",
    //   data: data,
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //     setResult("Data Recieved");
    //     setLoading(false)
    //     setDisplay(true);
    //   })
    //   .catch((err) =>{
    //     console.log(err)
    //     setResult("Something went wrong");
    //     setLoading(false)
    //     setDisplay(true);
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
                Gut Health Analysis
              </h1>

              <div className="mb-4 mt-3">
                <h1
                  className="w-full px-2 py-4 text-center font-semibold text-lg text-white font-sans md:text-xl mt-2 shadow-sm"
                  style={{ background: "rgba(0, 86, 47, 0.9)" }}
                >
                  In Recent times did you have any stomach discomfort? if yes explain the symtomps you are facing.
                </h1>
                <div
                  className="w-full px-2 py-2 mb-4 text-white"
                  style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                >
                  <input
                    className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                    autoComplete="off"
                    type="text"
                    name="ans1"
                    required
                    onChange={onChangeInput}
                    value={data.ans1}
                    placeholder="Write Your Answer"
                  />
                </div>
              </div>

              {data.ans1 && (
                <div className="mb-4 mt-3">
                  <h1
                    className="w-full px-2 py-4 text-center font-semibold text-lg text-white font-sans md:text-xl mt-2 shadow-sm"
                    style={{ background: "rgba(0, 86, 47, 0.9)" }}
                  >
                   In recent times did you have any food cravings? if yes explain the symtomps you are facing.
                  </h1> 
                  <div
                    className="w-full px-2 py-2 mb-4 text-white"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                  >
                    <input
                      className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                      style={{
                        color: "rgba(0, 86, 47, 0.9)",
                        background: "#fff",
                      }}
                      autoComplete="off"
                      type="text"
                      name="ans2"
                      onChange={onChangeInput}
                      value={data.ans2}
                      placeholder="Write Your Answer"
                    />
                  </div>
                </div>
              )}

              {data.ans2 && (
                <div className="mb-4 mt-3">
                  <h1
                    className="w-full px-2 py-4 text-center font-semibold text-lg text-white font-sans md:text-xl mt-2 shadow-sm"
                    style={{ background: "rgba(0, 86, 47, 0.9)" }}
                  >
                    In recent times is there is any unintensional weight changes in your body?
                  </h1>
                  <div
                    className="w-full px-2 py-2 mb-4 text-white"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                  >
                    <input
                      className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                      style={{
                        color: "rgba(0, 86, 47, 0.9)",
                        background: "#fff",
                      }}
                      autoComplete="off"
                      type="text"
                      name="ans3"
                      onChange={onChangeInput}
                      value={data.ans3}
                      placeholder="Write Your Answer"
                    />
                  </div>
                </div>
              )}

              {data.ans3 && (
                <div className="mb-4 mt-3">
                  <h1
                    className="w-full px-2 py-4 text-center font-semibold text-lg text-white font-sans md:text-xl mt-2 shadow-sm"
                    style={{ background: "rgba(0, 86, 47, 0.9)" }}
                  >
                    In recent times have you ever experienced the migrane?
                  </h1>
                  <div
                    className="w-full px-2 py-2 mb-4 text-white"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                  >
                    <input
                      className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                      style={{
                        color: "rgba(0, 86, 47, 0.9)",
                        background: "#fff",
                      }}
                      autoComplete="off"
                      type="text"
                      name="ans4"
                      onChange={onChangeInput}
                      value={data.ans4}
                      placeholder="Write Your Answer"
                    />
                  </div>
                </div>
              )}

              {data.ans4 && (
                <div className="mb-4 mt-3">
                  <h1
                    className="w-full px-2 py-4 text-center font-semibold text-lg text-white font-sans md:text-xl mt-2 shadow-sm"
                    style={{ background: "rgba(0, 86, 47, 0.9)" }}
                  >
                    In recent time did you have sudden mood swings or change in behaviour?
                  </h1>
                  <div
                    className="w-full px-2 py-2 mb-4 text-white"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                  >
                    <input
                      className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                      style={{
                        color: "rgba(0, 86, 47, 0.9)",
                        background: "#fff",
                      }}
                      autoComplete="off"
                      type="text"
                      name="ans5"
                      onChange={onChangeInput}
                      value={data.ans5}
                      placeholder="Write Your Answer"
                    />
                  </div>
                </div>
              )}
              
              <div className="mb-2 text-center mt-6 bg-transparent">
                <button
                  className=" px-12 py-2 font-bold transition-all duration-700 hover:shadow-xl focus:outline-none focus:shadow-outline"
                  type="submit"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                >
                  Predict
                </button>
              </div>
            </form>
          </section>
          <section>
            {loading && <Loader />}

            {display && (
              <div
                className="mb-2 md:mx-40 text-xl md:text-2xl font-semibold rounded-xl shadow-lg text-center mt-4 bg-white py-4 text-black bg-transparent"
                style={{ color: "#0C2D48" }}
              >
                Results: {result}
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default GutHealthAnalysis;
