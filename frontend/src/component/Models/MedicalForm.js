import React, { useState } from "react";

import "./models.css";
import Loader from "../CustomLoader/Loader";

function MedicalForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [children, setChildren] = useState("");
  const [smoker, setSmoker] = useState("");
  const [md, setMd] = useState("");
  const [region, setRegion] = useState("");
  const [div, setDiv] = useState(false);
  const [detail, setDetail] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(
      name,
      age,
      gender,
      bmi,
      weight,
      height,
      md,
      detail,
      children,
      smoker,
      region
    );
    // if (name === "" || age === "") {
    //   swal({
    //     title: "Please fill all the fields",
    //     text: "",
    //     icon: "warning",
    //     buttons: {
    //       confirm: { text: "Okay", className: "sweet-warning" },
    //     },
    //   });
    //   return;
    // }

    setLoading(false);
  };

  return (
    <div className="App flex justify-center items-center bg-indigo-400 p-4">
      <div className="w-full lg:w-7/12 py-5 px-2 rounded-xl lg:rounded-lg bg-indigo-300 shadow-xl">
        <h1 className="text-center font-semibold text-2xl md:text-4xl">
          Medical Form
        </h1>
        <form onSubmit={handleSubmit} className="pt-6 pb-8 lg:px-4 rounded">
          <div className="mb-4 md:flex md:justify-between">
            <div className="w-full mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
            </div>
            <div className="w-full md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="age"
              >
                Age
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                placeholder="Age"
              />
            </div>
          </div>

          <div className="mb-4 md:flex md:justify-between">
            <div className="w-full mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="gender"
              >
                Gender
              </label>

              <select
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                id="gender"
                type="gender"
                name="gender"
              >
                <option className="text-center" value="" disabled defaultValue>
                  Select Gender
                </option>
                <option className="text-center" value="1">
                  Male
                </option>
                <option className="text-center" value="0">
                  Female
                </option>
                {/* <option className="text-center" value="Other">
                    Other
                  </option> */}
              </select>
            </div>
            <div className="w-full md:ml-2">
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
            </div>
          </div>

          <div className="mb-4 md:flex md:justify-between mt-3">
            <div className="w-full mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="weight"
              >
                Weight
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="weight"
                type="text"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                placeholder="Weight"
              />
            </div>
            <div className="w-full md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="height"
              >
                Height
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="height"
                type="text"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                placeholder="Height"
              />
            </div>
          </div>

          <div className="max-w-sm">
            <h2 className="mb-2 pt-2 font-bold text-gray-700">
              Do you have any medical history in your family?
            </h2>

            <div className="flex flex-col group-hover:bg-purple-500">
              <span className="text-gray-700">
                <input
                  type="radio"
                  id="one"
                  name="check"
                  value="Yes"
                  onChange={(e) => {
                    setMd(e.target.value);
                    setDiv(true);
                  }}
                />{" "}
                Yes
              </span>
              <span className="text-gray-700">
                <input
                  type="radio"
                  id="one"
                  name="check"
                  value="No"
                  onChange={(e) => {
                    setMd(e.target.value);
                    setDetail("No History");
                    setDiv(false);
                  }}
                />{" "}
                No
              </span>
            </div>
          </div>

          {div && (
            <div className="relative mb-4">
              <label
                htmlFor="detail"
                className="leading-7 text-sm text-gray-700 font-bold"
              >
                Please explain in detail:
              </label>
              <textarea
                id="detail"
                name="detail"
                onChange={(e) => setDetail(e.target.value)}
                value={detail}
                className="w-full bg-whit rounded border border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          )}

          <div className="mb-4 md:flex md:justify-between mt-3">
            <div className="w-full mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="children"
              >
                Children
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="children"
                type="text"
                onChange={(e) => setChildren(e.target.value)}
                value={children}
                placeholder="children"
              />
            </div>
            <div className="w-full md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="smoker"
              >
                Smoker
              </label>

              <select
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => setSmoker(e.target.value)}
                value={smoker}
                id="smoker"
                type="smoker"
                name="smoker"
              >
                <option className="text-center" value="" disabled defaultValue>
                  Select option
                </option>
                <option className="text-center" value="1">
                  Yes
                </option>
                <option className="text-center" value="0">
                  No
                </option>
                {/* <option className="text-center" value="Other">
                    Other
                  </option> */}
              </select>
            </div>
          </div>

          <div className="w-full mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="region"
            >
              Region
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="region"
              type="text"
              onChange={(e) => setRegion(e.target.value)}
              value={region}
              placeholder="region"
            />
          </div>

          <div className="mb-2 text-center mt-6">
            <button
              className=" px-12 py-2 font-bold rounded-full button-change transition-all duration-700 hover:shadow-xl focus:outline-none focus:shadow-outline"
              type="submit"
              style={{ background: "#f7f7f0" }}
            >
              Submit
            </button>
          </div>
        </form>
        {loading && <Loader />}
      </div>
    </div>
  );
}

export default MedicalForm;
