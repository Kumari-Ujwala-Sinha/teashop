import React, { useState } from "react";
import axios from "axios";

import "./models.css";
import Loader from "../CustomLoader/Loader";

const deseaseData = [
  "itching",
  "skin_rash",
  "nodal_skin_eruptions",
  "continuous_sneezing",
  "shivering",
  "chills",
  "joint_pain",
  "stomach_pain",
  "acidity",
  "ulcers_on_tongue",
  "muscle_wasting",
  "vomiting",
  "burning_micturition",
  "spotting_ urination",
  "fatigue",
  "weight_gain",
  "anxiety",
  "cold_hands_and_feets",
  "mood_swings",
  "weight_loss",
  "restlessness",
  "lethargy",
  "patches_in_throat",
  "irregular_sugar_level",
  "cough",
  "high_fever",
  "sunken_eyes",
  "breathlessness",
  "sweating",
  "dehydration",
  "indigestion",
  "headache",
  "yellowish_skin",
  "dark_urine",
  "nausea",
  "loss_of_appetite",
  "pain_behind_the_eyes",
  "back_pain",
  "constipation",
  "abdominal_pain",
  "diarrhoea",
  "mild_fever",
  "yellow_urine",
  "yellowing_of_eyes",
  "acute_liver_failure",
  "fluid_overload",
  "swelling_of_stomach",
  "swelled_lymph_nodes",
  "malaise",
  "blurred_and_distorted_vision",
  "phlegm",
  "throat_irritation",
  "redness_of_eyes",
  "sinus_pressure",
  "runny_nose",
  "congestion",
  "chest_pain",
  "weakness_in_limbs",
  "fast_heart_rate",
  "pain_during_bowel_movements",
  "pain_in_anal_region",
  "bloody_stool",
  "irritation_in_anus",
  "neck_pain",
  "dizziness",
  "cramps",
  "bruising",
  "obesity",
  "swollen_legs",
  "swollen_blood_vessels",
  "puffy_face_and_eyes",
  "enlarged_thyroid",
  "brittle_nails",
  "swollen_extremeties",
  "excessive_hunger",
  "extra_marital_contacts",
  "drying_and_tingling_lips",
  "slurred_speech",
  "knee_pain",
  "hip_joint_pain",
  "muscle_weakness",
  "stiff_neck",
  "swelling_joints",
  "movement_stiffness",
  "spinning_movements",
  "loss_of_balance",
  "unsteadiness",
  "weakness_of_one_body_side",
  "loss_of_smell",
  "bladder_discomfort",
  "foul_smell_of urine",
  "continuous_feel_of_urine",
  "passage_of_gases",
  "internal_itching",
  "toxic_look_(typhos)",
  "depression",
  "irritability",
  "muscle_pain",
  "altered_sensorium",
  "red_spots_over_body",
  "belly_pain",
  "abnormal_menstruation",
  "dischromic _patches",
  "watering_from_eyes",
  "increased_appetite",
  "polyuria",
  "family_history",
  "mucoid_sputum",
  "rusty_sputum",
  "lack_of_concentration",
  "visual_disturbances",
  "receiving_blood_transfusion",
  "receiving_unsterile_injections",
  "coma",
  "stomach_bleeding",
  "distention_of_abdomen",
  "history_of_alcohol_consumption",
  "fluid_overload",
  "blood_in_sputum",
  "prominent_veins_on_calf",
  "palpitations",
  "painful_walking",
  "pus_filled_pimples",
  "blackheads",
  "scurring",
  "skin_peeling",
  "silver_like_dusting",
  "small_dents_in_nails",
  "inflammatory_nails",
  "blister",
  "red_sore_around_nose",
  "yellow_crust_ooze",
];

const DeseasePrediction = () => {
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState(false);
  const [symp1, setSymp1] = useState("");
  const [symp2, setSymp2] = useState("");
  const [symp3, setSymp3] = useState("");
  const [symp4, setSymp4] = useState("");
  const [symp5, setSymp5] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symp1 || !symp2 || !symp3 || !symp4 || !symp5) {
      alert("Please fill all fields");
    } else {
      setLoading(true);
      setResult("");
      setDisplay(false);

      // console.log(symp1, symp2, symp3, symp4, symp5);
      const data = { symp1, symp2, symp3, symp4, symp5 };

      axios({
        method: "post",
        header: { "Content-Type": "application/json" },
        url: "https://api.lyfespirit.com/dieases_pre",
        data: data,
      })
        .then((res) => {
          console.log(res);
          setResult(res.data.prediction1);
          setLoading(false);
          setDisplay(true);
        })
        .catch((err) => {
          console.log(err);
          setResult("Something went wrong");
          setLoading(false);
          setDisplay(true);
        });
    }
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
            Disease Prediction
          </h1>
          <div className="mb-4 md:justify-between">
            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              <select
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                onChange={(e) => setSymp1(e.target.value)}
                value={symp1}
                id="symp1"
                type="text"
                name="symp1"
              >
                <option
                  className="text-center py-2"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                  value=""
                  disabled
                  defaultValue
                >
                  Select Symptom 1
                </option>
                {deseaseData.map((data, index) => (
                  <option
                    className="text-center py-2"
                    style={{
                      color: "#fff",
                      background: "rgba(0, 86, 47, 0.9)",
                    }}
                    key={index}
                    value={data}
                  >
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4 md:justify-between">
            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              {/* <label
                className="block mb-2 text-sm font-bold text-gray-700 bg-transparent"
                htmlFor="symp2"
              >
                Symptom 2
              </label> */}

              <select
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                onChange={(e) => setSymp2(e.target.value)}
                value={symp2}
                id="symp2"
                type="text"
                name="symp2"
              >
                <option
                  className="text-center py-2"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                  value=""
                  disabled
                  defaultValue
                >
                  Select Symptom 2
                </option>
                {deseaseData.map((data, index) => (
                  <option
                    className="text-center py-2"
                    style={{
                      color: "#fff",
                      background: "rgba(0, 86, 47, 0.9)",
                    }}
                    key={index}
                    value={data}
                  >
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4 md:justify-between">
            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              {/* <label
                className="block mb-2 text-sm font-bold text-gray-700 bg-transparent"
                htmlFor="symp2"
              >
                Symptom 3
              </label> */}

              <select
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                onChange={(e) => setSymp3(e.target.value)}
                value={symp3}
                id="symp3"
                type="text"
                name="symp3"
              >
                <option
                  className="text-center py-2"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                  value=""
                  disabled
                  defaultValue
                >
                  Select Symptom 3
                </option>
                {deseaseData.map((data, index) => (
                  <option
                    className="text-center py-2"
                    style={{
                      color: "#fff",
                      background: "rgba(0, 86, 47, 0.9)",
                    }}
                    key={index}
                    value={data}
                  >
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4 md:justify-between">
            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              {/* <label
                className="block mb-2 text-sm font-bold text-gray-700 bg-transparent"
                htmlFor="symp2"
              >
                Symptom 4
              </label> */}

              <select
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                onChange={(e) => setSymp4(e.target.value)}
                value={symp4}
                id="symp4"
                type="text"
                name="symp4"
              >
                <option
                  className="text-center py-2"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                  value=""
                  disabled
                  defaultValue
                >
                  Select Symptom 4
                </option>
                {deseaseData.map((data, index) => (
                  <option
                    className="text-center py-2"
                    style={{
                      color: "#fff",
                      background: "rgba(0, 86, 47, 0.9)",
                    }}
                    key={index}
                    value={data}
                  >
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4 md:justify-between">
            <div
              className="w-full px-2 py-2 my-4 text-white"
              style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
            >
              {/* <label
                className="block mb-2 text-sm font-bold text-gray-700 bg-transparent"
                htmlFor="symp2"
              >
                Symptom 5
              </label> */}

              <select
                className="w-full text-center px-3 py-2 text-xl font-medium leading-tight appearance-none focus:outline-none focus:shadow-outline placeholderColor"
                style={{ color: "rgba(0, 86, 47, 0.9)", background: "#fff" }}
                onChange={(e) => setSymp5(e.target.value)}
                value={symp5}
                id="symp5"
                type="text"
                name="symp5"
              >
                <option
                  className="text-center py-2"
                  style={{ color: "#fff", background: "rgba(0, 86, 47, 0.9)" }}
                  value=""
                  disabled
                  defaultValue
                >
                  Select Symptom 5
                </option>
                {deseaseData.map((data, index) => (
                  <option
                    className="text-center py-2"
                    style={{
                      color: "#fff",
                      background: "rgba(0, 86, 47, 0.9)",
                    }}
                    key={index}
                    value={data}
                  >
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>

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
      <section className="w-full md:w-11/12 md:flex flex-col justify-center items-center pt-3 pb-8 lg:px-4">
        {loading && <Loader />}

        {display && (
          <div
            className="w-full px-2 py-4 text-center font-semibold text-2xl text-white font-sans md:text-4xl my-2 shadow-sm"
            style={{ background: "rgba(0, 86, 47, 0.9)" }}
          >
            Results: {result}
          </div>
        )}
      </section>
    </div>
  );
};

export default DeseasePrediction;
