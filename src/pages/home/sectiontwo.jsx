import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";

import ButtonComponent from "../../components/button/buttoncomponent";

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
  return (
    <>
      <div className="w-full bg-white dark:bg-black">
        <div className="max-w-screen-2xl mx-auto h-full px-4">
          
          <div className="flex items-center justify-between">
            <div className="">
              <div className=" pt-12 text-lg font-poppins font-medium text-black-300 lg:text-xl dark:text-black-300">
                Today is {dayOfWeek}
              </div>
              <div className=" text-2xl font-poppins font-bold text-black lg:text-3xl dark:text-light-200 ">
                {time.toLocaleTimeString()}
              </div>
            </div>
            <div className="inline-flex gap-6 lg:gap-8 pt-12">
              <a href="">
                <img
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  src="./Assets/instagram.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  src="./Assets/facebook.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="ms-4 mt-12">
            <div className="flex items-start space-x-4 mb-8">
              <img
                className="w-16 h-16 rounded-full"
                src="./Assets/miku.jpg"
                alt=""
              />
              <div className="text-xl font-medium dark:text-white">
                <div>Muhammad Rafi Shidiq</div>
                <div className="text-base text-gray-500 dark:text-gray-400">
                  Front-end / Fullstack Developer
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:max-w-[18em]">
                <div className="w-full h-[32rem] border"></div>
                <button
                  type="button"
                  className="inline-flex justify-center items-center text-black-100 dark:text-light-100 font-medium w-max  bg-white hover:bg-gray-100 border border-gray-200 rounded-lg text-md lg:px-3 lg:py-2 px-2.5 py-1.5 pe-4 text-center  dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700 mt-8 space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="32"
                    height="32"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span>Download CV</span>
                </button>
              </div>

              <div className="">
                <div className="">
                  <p
                    data-aos="fade"
                    className="text-black-100 dark:text-light-100"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Autem fugiat, magnam quia nihil distinctio officia
                    consequatur eum, ea doloremque esse eveniet ad maxime natus
                    voluptas architecto. Voluptates mollitia sunt doloremque cum
                    ducimus, optio officia at?
                  </p>
                </div>
                <div className="mt-6">
                  <iframe
                    className="w-full lg:max-w-xl h-64 rounded-lg sm:h-96 mb-8 transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale"
                    src="https://www.youtube.com/embed/kzdJkT4kp-A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
}
