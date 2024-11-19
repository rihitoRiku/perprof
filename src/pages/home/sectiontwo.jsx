import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import ButtonComponent from "../../components/button/buttoncomponent";
import NavbarComponent from "../../components/navbar/navbarcomponent";

export default function SectionTwo() {
  AOS.init();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Get the day name

  const modalRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth > 1024) {
        setIsModalOpen(false);
      }
    }

    // Bind the event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      // Unbind the event listeners on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative w-full bg-white dark:bg-black">
        <div className="max-w-screen-2xl mx-auto h-full px-4">
          <div className="relative flex items-center justify-between">
            {/* Time */}
            <div className=" w-max">
              <div className=" pt-12 text-lg font-poppins font-medium text-black-300 lg:text-xl dark:text-black-300 w-max">
                Today is {dayOfWeek}
              </div>
              <div className=" text-2xl font-poppins font-bold text-black lg:text-3xl dark:text-light-200 w-max">
                {time.toLocaleTimeString()}
              </div>
            </div>
            {/* Navbar */}
            {isModalOpen && (
              <div
                ref={modalRef}
                className="w-40 absolute right-8 top-28 dark:bg-black-200 bg-light-100 rounded-xl p-2 z-20"
              >
                <ul className="flex flex-col items-center justify-center text-gray-900 dark:text-white gap-2 xl:gap-6">
                  <Link to="/">
                    <li className="">
                      <button
                        type="button"
                        className="w-36 text-gray-800 dark:text-white bg-none hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                      >
                        Home
                      </button>
                    </li>
                  </Link>

                  <Link to="project">
                    <li>
                      <button
                        type="button"
                        className="w-36 text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                      >
                        Project
                      </button>
                    </li>
                  </Link>

                  <Link to="certification">
                    <li>
                      <button
                        type="button"
                        className="w-36 text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                      >
                        Certification
                      </button>
                    </li>
                  </Link>

                  <Link to="blog">
                    <li>
                      <button
                        type="button"
                        className="w-36 text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                      >
                        Blog
                      </button>
                    </li>
                  </Link>

                  <Link to="roadmap">
                    <li>
                      <button
                        type="button"
                        className="w-36 text-gray-800 bg-none dark:text-white hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 dark:border-gray-700"
                      >
                        Get To Know
                      </button>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            <div className="w-full mt-12 mx-8">
              <NavbarComponent
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
            {/* Social Media */}
            {/* <div className="inline-flex gap-6 lg:gap-8 pt-12 ">
              <a className="w-max" href="">
                <img
                  className=" w-8 h-8 lg:w-10 lg:h-10"
                  src="./Assets/instagram.png"
                  alt=""
                />
              </a>
              <a className="w-max" href="">
                <img
                  className=" w-8 h-8 lg:w-10 lg:h-10"
                  src="./Assets/facebook.png"
                  alt=""
                />
              </a>
            </div> */}
          </div>
          {/* <div className="flex items-center justify-center"></div> */}
        </div>
      </div>
    </>
  );
}
