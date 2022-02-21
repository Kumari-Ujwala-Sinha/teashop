import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="md:pt-8 pt-4 bg-header mt-1" style={{ color: "#fff" }}>
      <footer className="bg-header">
        <div className="footerContainer px-6 py-2 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <div className="bg-transparent">
                  <Link
                    onClick={scrollToTop}
                    to="/"
                    className="text-xl font-bold"
                  >
                    <img
                      className="h-14 w-28 md:h-24 md:w-26"
                      src="/images/teaLogo2.png"
                      alt=""
                    />
                    {/* Company Name */}
                  </Link>
                </div>

                <div className="max-w-md mt-2 px-2 md:pr-32">
                  Till now, you have only seen tea as a beverage...
                  <br /> ... Now let us show you how tea can work as a medicine
                  leveraging technology as an enabler!
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1 lg:ml-4">
              <div className="grid grid-cols-2 md:gap-6 gap-2 sm:grid-cols-3 md:grid-cols-3 ">
                <div className="">
                  <h3 className=" font-semibold uppercase">Quick Links</h3>
                  <Link
                    onClick={scrollToTop}
                    to="/"
                    className="block mt-2 text-sm  hover:underline"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/health_analysis"
                    className="block mt-2 text-sm  dark: hover:underline"
                  >
                    Health Analysis
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/ingredient_analysis"
                    className="block mt-2 text-sm  dark: hover:underline bg-transparent"
                  >
                    Ingredient Analysis
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/tea_tannin_analysis"
                    className="block mt-2 text-sm  dark: hover:underline bg-transparent"
                  >
                    Tea Tannin Analysis
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/about_us"
                    className="block mt-2 text-sm hover:underline bg-transparent"
                  >
                    About
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/contact_us"
                    className="block mt-2 text-sm  dark: hover:underline bg-transparent"
                  >
                    Contact
                  </Link>
                </div>

                <div className="bg-transparent">
                  <h3 className=" font-semibold uppercase dark: bg-transparent">
                    Get Support
                  </h3>
                  <div className="block mt-2 text-sm  dark: bg-transparent">
                    <div className="inline-flex md:pr-4 mb-2 hover:underline bg-transparent">
                      <svg
                        className="w-4 h-4 rounded-md bg-transparent"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>{" "}
                      <div className="pl-1 bg-transparent">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="tel: +919832044477"
                          className="bg-transparent"
                        >
                          +91 98320 44477
                        </a>{" "}
                      </div>
                    </div>
                    {/* <div className="inline-flex md:pr-4 mb-2 hover:underline bg-transparent">
                      <svg
                        className=" w-4 h-4 rounded-md bg-transparent"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>{" "}
                      <div className="pl-1 bg-transparent">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="tel: +919713063623"
                          className="bg-transparent"
                        >
                          +91 xxxx
                        </a>{" "}
                      </div>
                    </div> */}
                  </div>
                  <div className="block mt-2 text-sm  dark: hover:underline bg-transparent">
                    <div className="inline-flex bg-transparent">
                      <svg
                        className="w-5 h-5 bg-transparent"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div className="pl-1 bg-transparent">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:theteatechnology@gmail.com"
                          className="bg-transparent"
                        >
                          theteatechnology@ gmail.com
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="block mt-2 text-sm  dark: hover:underline bg-transparent">
                    <div className="inline-flex bg-transparent">
                      <svg
                        className="w-5 h-5 bg-transparent"
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
                      <div className="pl-1 bg-transparent">
                        <a
                          target="_blank"
                          className="bg-transparent"
                          rel="noreferrer"
                          href="https://www.google.com/maps/place/Ominvest+Business+Center/@23.5746516,58.2950687,17z/data=!3m1!4b1!4m5!3m4!1s0x3e8e016752655811:0x2b30e06b8368993f!8m2!3d23.5746467!4d58.2972574"
                        >
                          106, I block southcity 2, Sector 50, Gurugram, Haryana
                          122018
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-transparent">
                  <h3 className=" font-semibold uppercase dark: bg-transparent">
                    Find Us
                  </h3>
                  <div className="flex mt-4 -mx-2 bg-transparent">
                    <a
                      href="https://www.linkedin.com/in/payalhagarwwal/"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                      aria-label="Linkden"
                    >
                      <img
                        className="w-10 h-10 bg-transparent"
                        src="https://image.flaticon.com/icons/png/512/145/145807.png"
                        alt="linkedin"
                      />
                    </a>

                    {/* <a
                      href="https://instagram.com/chaiomt?utm_medium=copy_link"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                      aria-label="Facebook"
                    >
                      <img
                        className="w-10 h-10 bg-transparent"
                        src=""
                        alt="instagram"
                      />
                    </a> */}
                    {/* <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 cursor-pointer text-gray-200 dark:text-gray-200 bg-transparent hover:text-gray-200 dark:hover:text-gray-400"
                      aria-label="Facebook"
                    >
                      <img
                        className="w-10 h-10 bg-transparent"
                        src="https://image.flaticon.com/icons/png/512/1384/1384053.png"
                        alt="facebook"
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-green-500 border-none dark:bg-gray-900" />

          <div className="bg-transparent">
            <div className="md:flex-row flex flex-col text-center  dark:text-white justify-center bg-transparent">
              <p className="md:border-r-2 px-2 bg-transparent">
                © The Tea Wonders - All rights reserved
              </p>{" "}
              <p className="px-2 bg-transparent"> Developed by EnR Team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
