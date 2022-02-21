import React, { useState } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import axios from "axios";

import "./models.css";
import Loader from "../CustomLoader/Loader";

const Form = () => {
  const checkData = [
    {
      id: 1,
      value: "weightgain",
      disp: "Weight Gain",
    },
    {
      id: 2,
      value: "hair",
      disp: "Hair",
    },
    {
      id: 3,
      value: "patches",
      disp: "Patches",
    },
    {
      id: 4,
      value: "pimples",
      disp: "Pimples",
    },
    {
      id: 5,
      value: "depression",
      disp: "Depression",
    },
    {
      id: 6,
      value: "familyDiabetes",
      disp: "Family Diabetes",
    },
    {
      id: 7,
      value: "maintainingBodyweight",
      disp: "Maintaining Body Weight",
    },
    {
      id: 8,
      value: "oilyskin",
      disp: "Oily Skin",
    },
    {
      id: 9,
      value: "hairThinning",
      disp: "Hair Thinning",
    },
    {
      id: 10,
      value: "eat",
      disp: "Eat",
    },
    {
      id: 11,
      value: "exercise",
      disp: "Exercise",
    },
    {
      id: 12,
      value: "hostel",
      disp: "Hostel",
    },
    {
      id: 13,
      value: "personalProblems",
      disp: "Personal Problems",
    },
    {
      id: 14,
      value: "peerPressure",
      disp: "Peer Pressure",
    },
    {
      id: 15,
      value: "dietaryHabits",
      disp: "Dietary Habits",
    },
    {
      id: 16,
      value: "eatFastFoods",
      disp: "Eat Fast Foods",
    },
  ];
  const [selectedValues, setSelectedValues] = useState([]);
  const [display, setDisplay] = useState(false);
  const [result, setResult] = useState("");
  const [data, setData] = useState({
    periods: "",
    wakeUp: "",
    wakeAfter: "",
  });
  const [loading, setLoading] = useState(false);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (data.wakeUp === "" || data.wakeAfter === "" || data.periods === "") {
      alert("Please fill mandetory fields(*)");
      return;
    }
    data.wakeUp = Number(data.wakeUp);
    data.wakeAfter = Number(data.wakeAfter);

    let tempArr = [];

    // setting selected values to true e.g {'name': true}
    for (let i = 0; i < selectedValues.length; i++) {
      tempArr.push({ [selectedValues[i]]: 1 });
    }
    let falseArr = [];
    for (let i = 0; i < checkData.length; i++) {
      falseArr.push(checkData[i].value);
    }
    falseArr = falseArr.filter((item) => !selectedValues.includes(item));
    // console.log(falseArr);

    let tempArr2 = [];
    for (let i = 0; i < falseArr.length; i++) {
      tempArr2.push({ [falseArr[i]]: 0 });
    }

    // converting object values into array [ 0: {key: value} ]
    let resultArr = Object.keys(data).map((key) => {
      return { [key]: data[key] };
    });

    tempArr = [...tempArr, ...tempArr2, ...resultArr];
    let tempObj = Object.assign({}, ...tempArr);

    console.log(tempObj);

    axios({
      method: "post",
      header: { "Content-Type": "application/json" },
      url: "http://4dbb-1-186-160-114.ngrok.io/site",
      data: tempObj,
    })
      .then((res) => {
        console.log(res.data);
        setResult("Data Recieved");
        setLoading(false);
        setDisplay(true);
      })
      .catch((err) => {
        console.log(err);
        setResult("Something went wrong");
        setLoading(false);
        setDisplay(true);
      });
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
              className="rounded font-sans w-full md:w-1/3"
            >
              <h1
                className="w-full px-2 py-4 text-center font-semibold text-2xl text-white font-sans md:text-4xl my-2 shadow-sm"
                style={{ background: "rgba(0, 86, 47, 0.9)" }}
              >
                PCOS Detection
              </h1>
              <div className="max-w-sm bg-transparent">
                <div
                  className="flex flex-col gap-2 px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                  style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                >
                  {checkData.map((data) => (
                    <span key={data.id} className="flex gap-4 items-center">
                      <input
                        type="checkbox"
                        id="one"
                        value={data.value}
                        onChange={(e) => {
                          if (selectedValues.indexOf(`${data.value}`) >= 0) {
                            setSelectedValues((prev) =>
                              prev.filter((x) => x === `${data.value}`)
                            );
                          } else
                            setSelectedValues((prev) => [
                              ...prev,
                              `${data.value}`,
                            ]);
                        }}
                      />{" "}
                      <span className="">{data.disp}</span>
                    </span>
                  ))}
                </div>

                <div className="mb-4 md:justify-between mt-3 bg-transparent">
                  <div
                    className="w-full px-2 py-2 my-4 text-white"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                  >
                    {/* <label
                        className="block mb-2 text-sm font-bold text-gray-700 bg-transparent"
                        htmlFor="ans1"
                      >
                        Wake up (time)*
                      </label> */}
                    <input
                      className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                      style={{
                        color: "rgba(0, 86, 47, 0.9)",
                        background: "#fff",
                      }}
                      autoComplete="off"
                      type="number"
                      name="wakeUp"
                      required
                      onChange={onChangeInput}
                      value={data.wakeUp}
                      placeholder="Enter wake up time"
                    />
                  </div>
                </div>

                <div className="mb-4 md:justify-between mt-3 bg-transparent">
                  <div
                    className="w-full px-2 py-2 my-4 text-white"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                  >
                    {/* <label
                        className="block mb-2 text-sm font-bold text-gray-700 bg-transparent"
                        htmlFor="ans1"
                      >
                        Wake After (time)*
                      </label> */}
                    <input
                      className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                      style={{
                        color: "rgba(0, 86, 47, 0.9)",
                        background: "#fff",
                      }}
                      autoComplete="off"
                      type="number"
                      name="wakeAfter"
                      required
                      onChange={onChangeInput}
                      value={data.wakeAfter}
                      placeholder="Enter wake after time"
                    />
                  </div>
                </div>

                <div className="mb-4 md:justify-between mt-3 bg-transparent">
                  <div
                    className="w-full px-2 py-2 my-4 text-white"
                    style={{
                      color: "rgba(0, 86, 47, 0.9)",
                      background: "#fff",
                    }}
                  >
                    {/* <label
                        className="block mb-2 text-sm font-bold text-gray-700 bg-transparent"
                        htmlFor="periods"
                      >
                        Periods*
                      </label> */}

                    <select
                      className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                      style={{
                        color: "rgba(0, 86, 47, 0.9)",
                        background: "#fff",
                      }}
                      onChange={onChangeInput}
                      value={data.periods}
                      id="periods"
                      type="text"
                      name="periods"
                    >
                      <option
                        className="text-center bg-white"
                        value=""
                        disabled
                        defaultValue
                      >
                        Periods
                      </option>
                      <option
                        className="text-center py-2"
                        style={{
                          color: "#fff",
                          background: "rgba(0, 86, 47, 0.9)",
                        }}
                        value="hb"
                      >
                        hb
                      </option>
                      <option
                        className="text-center py-2"
                        style={{
                          color: "#fff",
                          background: "rgba(0, 86, 47, 0.9)",
                        }}
                        value="im"
                      >
                        im
                      </option>
                      <option
                        className="text-center py-2"
                        style={{
                          color: "#fff",
                          background: "rgba(0, 86, 47, 0.9)",
                        }}
                        value="ib"
                      >
                        ib
                      </option>
                      <option
                        className="text-center py-2"
                        style={{
                          color: "#fff",
                          background: "rgba(0, 86, 47, 0.9)",
                        }}
                        value="yes"
                      >
                        yes
                      </option>
                      <option
                        className="text-center py-2"
                        style={{
                          color: "#fff",
                          background: "rgba(0, 86, 47, 0.9)",
                        }}
                        value="no"
                      >
                        no
                      </option>
                      <option
                        className="text-center py-2"
                        style={{
                          color: "#fff",
                          background: "rgba(0, 86, 47, 0.9)",
                        }}
                        value="Im"
                      >
                        Im
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-2 text-center mt-6 bg-transparent">
                <button
                  className=" px-12 py-2 font-bold transition-all duration-700 hover:shadow-xl focus:outline-none focus:shadow-outline"
                  type="submit"
                  style={{
                    color: "#fff",
                    background: "rgba(0, 86, 47, 0.9)",
                  }}
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

export default Form;
