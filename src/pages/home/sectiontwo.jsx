import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";

import ButtonComponent from "../../components/button/buttoncomponent";
import NavbarComponent from "../../components/navbar/navbarcomponent";

import { PiCertificateFill } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { IoFolderOpen } from "react-icons/io5";
import { TiSocialFlickr } from "react-icons/ti";

export default function SectionTwo() {
  AOS.init();
  const [time, setTime] = useState(new Date());

  const location = useLocation();
  const [key, setKey] = useState(0);

  const isActive = (path) => {
    return location.pathname === path
      ? "dark:border-white border-black-300"
      : "border-transparent";
  };
  const checkLocation = () => {
    if (location.pathname === "/project") {
      return "Project";
    } else if (location.pathname === "/certification") {
      return "Certificates";
    } else if (location.pathname === "/gettoknow") {
      return "Get to Know";
    } else {
      return "Home"
    }
  };
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
    setInterval(() => setTime(new Date()), 1000);
  }, [location]);

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
      if (window.innerWidth > 960) {
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
        <div className="max-w-screen-2xl mx-auto h-full px-4 py-8">
          <div className="relative flex justify-between lg:justify-end">
            {/* Time */}
            {/* <div className=" w-max">
              <div className=" pt-12 text-lg font-poppins font-medium text-black-300 lg:text-xl dark:text-black-300 w-max">
                Today is {dayOfWeek}
              </div>
              <div className=" text-2xl font-poppins font-bold text-black lg:text-3xl dark:text-light-200 w-max">
                {time.toLocaleTimeString()}
              </div>
            </div> */}
            {/* Navbar */}
            {isModalOpen && (
              <div
                ref={modalRef}
                className="absolute right-8 top-12 dark:bg-black-200 bg-light-100 rounded-xl p-2 z-20"
              >
                <ul className="flex flex-col items-center justify-center text-gray-900 dark:text-white gap-2 xl:gap-6">
                  <Link to="/">
                    <li className="">
                      <button
                        type="button"
                        className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
                          "/"
                        )} transition-colors duration-300`}
                      >
                        <GoHomeFill className="text-2xl" />
                        Home
                      </button>
                    </li>
                  </Link>

                  <Link to="project">
                    <li>
                      <button
                        type="button"
                        className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
                          "/project"
                        )} transition-colors duration-300`}
                      >
                        <IoFolderOpen className="text-2xl" />
                        Project
                      </button>
                    </li>
                  </Link>

                  <Link to="certification">
                    <li>
                      <button
                        type="button"
                        className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
                          "/certification"
                        )} transition-colors duration-300`}
                      >
                        <PiCertificateFill className="text-2xl" />
                        Certification
                      </button>
                    </li>
                  </Link>

                  {/* <Link to="blog">
                    <li>
                      <button
                        type="button"
                        className={`text-gray-800 dark:text-white bg-none hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
                          "/blog"
                        )} transition-colors duration-300`}
                      >
                        Blog
                      </button>
                    </li>
                  </Link> */}

                  <Link to="gettoknow">
                    <li>
                      <button
                        type="button"
                        className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
                          "/gettoknow"
                        )} transition-colors duration-300`}
                      >
                        <TiSocialFlickr className="text-2xl" />
                        Get To Know
                      </button>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            <div
              className="dark:text-white lg:hidden text-4xl animate-slideInNav opacity-0 mt-4"
              style={{ "--delay": "0.5s" }}
              key={key}
            >
              {checkLocation()}
            </div>
            <div className="w-max mx-8">
              <NavbarComponent
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
            {/* Social Media */}
            {/* <div className="inline-flex gap-6 lg:gap-8 pt-12">
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
