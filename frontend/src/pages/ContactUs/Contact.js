import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./sweetalert.css";
import HomeHeader from "../../component/HomeHeader/HomeHeader";

function Contact() {
  //   useLayoutEffect(() => {
  //     window.scrollTo(0, 0)
  // });

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [mailBody, setmailBody] = useState("");
  const [subject, setSubject] = useState("");
  // const [reason, setReason] = useState("");

  const handleContactSubmit = (e) => {
    if (name === "" || email === "" || mailBody === "" || subject === "") {
      swal({
        title: "Please fill all the fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      return;
    }
    e.preventDefault();
    axios
      .post("https://tea-wonder-backend.herokuapp.com/api/postcontactmail", {
        name,
        email,
        subject,
        // reason,
        mailBody,
      })
      .catch((err) => console.log(err));
    swal({
      title: "Email Sent Successfully!",
      text: "",
      icon: "success",
      buttons: {
        confirm: { text: "Okay", className: "sweet-warning" },
      },
    });
    setName("");
    setemail("");
    setmailBody("");
    setSubject("");
  };
  return (
    <div className="mt-2 bg-white">
    <HomeHeader />
    <div className="contactWrapper">
      <div>
        <div className="flex items-center justify-center w-full h-full bg-opacity-50">
          <div
            className="bg-center bg-cover main-img mb-5"
            style={{
              backgroundImage: `url("/aboutImg/contact-us-banner.png")`,
            }}
          />
          <div className="text-center">
            <h1 className="text-2xl font-semibold uppercase lg:text-3xl cursor-pointer">
              {/* Network <span className="text-blue-400 underline">Saas</span> */}
              {/* Contact Us */}
            </h1>
            {/* <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auemail hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button> */}
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-semibold uppercase lg:text-3xl">
        Get in Touch
      </h1>
      {/* <div className="h-32 bg-black md:-mt-28 md:visible invisible"></div> */}
      <div className="flex flex-wrap align-middle">
        <div className="lg:w-2/5 lg:mt-60 w-full">
          <div className="flex flex-col justify-items-center items-center align-middle lg:pl-8 lg:mt-0 mt-4 mx-3">
            <div className="md:text-2xl text-md text-center">
              Looking for help? Fill in the form and one of our experts will get
              in touch with you.
            </div>
            <div className="inline-flex pt-6">
              <div>
                <a
                  href="https://www.linkedin.com/in/payalhagarwwal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                    src="https://image.flaticon.com/icons/png/512/145/145807.png"
                    alt="LinkedIn"
                    title="LinkedIn"
                  />
                </a>
              </div>
              {/* <div>
                <img
                  className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                  src="https://image.flaticon.com/icons/png/512/145/145812.png"
                  alt="Twitter"
                  title="Twitter"
                />
              </div>
              <div>
                <img
                  className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                  src="https://image.flaticon.com/icons/png/512/145/145802.png"
                  alt="Facebook"
                  title="Facebook"
                />
              </div> */}
              <div>
                <a
                  href="https://instagram.com/chaiomt?utm_medium=copy_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                    src="https://image.flaticon.com/icons/png/512/1409/1409946.png"
                    alt="Instagram"
                    title="Instagram"
                  />
                </a>
              </div>
              {/* <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                    src="https://image.flaticon.com/icons/png/512/1384/1384053.png"
                    alt="Facebook"
                    title="Facebook"
                  />
                </a>
              </div> */}
              {/* <div>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="md:h-12 md:w-12 h-8 w-8 mx-2 cursor-pointer"
                    src="https://image.flaticon.com/icons/png/512/187/187209.png"
                    alt="YouTube"
                    title="YouTube"
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 w-full">
          <section className="px-6 py-4 mx-auemail mt-20 rounded-md">
            <div className="grid grid-cols-1 lg:gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="tel:+919832044477"
                className="flex flex-col cursor-pointer items-center px-4 py-4 rounded-md dark: hover:bg-gray-900 hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5 grid-bg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="mt-2 grid-bg">+91 98320 44477</span>
              </a>
              {/* <a
                href="tel:+919713734443"
                className="flex flex-col cursor-pointer items-center px-4 py-4 rounded-md dark:"
              >
                <svg
                  className="w-5 h-5 grid-bg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="mt-2">+91 97137 34443</span>
              </a> */}
              <a
                href="mailemail:theteatechnology@gmail.com"
                className="flex flex-col items-center cursor-pointer px-4 py-4 rounded-md dark: hover:bg-gray-900 hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5 grid-bg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="mt-2 grid-bg">theteatechnology@gmail.com</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://g.page/ttbsl?share"
                className="flex flex-col items-center px-4 py-3 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5 grid-bg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mt-2 text-center grid-bg">
                  106, I block southcity 2, Sector 50, Gurugram, Haryana 122018
                </span>
              </a>
            </div>

            <div className="mt-6 ">
              <form onSubmit={handleContactSubmit}>
                <div className="items-center -mx-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium  dark:">
                      Name
                    </label>

                    <input
                      name="name"
                      id="name"
                      className="block w-full px-4 py-2 bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:border-gray-600 focus:ring-2 focus:outline-none focus:border-none focus:ring-green-400"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                    />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium  dark:">
                      E-mail
                    </label>

                    <input
                      className="block w-full px-4 py-2 bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:outline-none focus:border-none focus:ring-green-400"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="-ml-2 pt-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium  dark:text-gray-200">
                      Subject
                    </label>

                    <input
                      className="block w-full px-4 py-2 bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:outline-none focus:border-none focus:ring-green-400"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      id="subject"
                      type="text"
                      name="subject"
                    />
                  </div>
                  {/* <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium  dark:">
                      Reason for Contact
                    </label>

                    <select
                      className="block w-full md:w-auto px-4 py-2 bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-2 focus:outline-none focus:border-none focus:ring-green-400"
                      onChange={(e) => setReason(e.target.value)}
                      value={reason}
                      id="reason"
                      type="reason"
                      name="reason"
                    >
                      <option
                        className="text-center hover:bg-green-400 setFocus"
                        value="Business Enquiry"
                      >
                        Query1
                      </option>
                      <option className="text-center" value="HR Assistance">
                        Query 2
                      </option>
                      <option
                        className="text-center"
                        value="I want to Work for TechnoTask"
                      >
                        Query 3
                      </option>
                      <option
                        className="text-center"
                        value="I am an industry expert/analyst and want to get in touch with TechnoTask"
                      >
                        Query 4
                      </option>
                    </select>
                  </div> */}
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm font-medium  dark:">
                    Message
                  </label>

                  <textarea
                    onChange={(e) => setmailBody(e.target.value)}
                    value={mailBody}
                    name="mailBody"
                    id="mailBody"
                    className="block w-full h-40 px-4 py-2 bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:outline-none focus:border-none focus:ring-green-400"
                  ></textarea>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="px-4 py-3 font-bold text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Contact;
