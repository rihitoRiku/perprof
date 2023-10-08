import React, { useEffect, useState, useRef } from "react";
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
                className="absolute right-20 top-28 w-64 h-52 dark:bg-black-200 bg-light-100 rounded-xl p-2"
              >
                MODAL
              </div>
            )}
            <div className="w-full mt-12 mx-8">
              <NavbarComponent
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
            <div className="inline-flex gap-6 lg:gap-8 pt-12 ">
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
            </div>
          </div>

          <div className="mt-12">
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
              <div className="w-full md:max-w-[18em] border">
                <div className="w-full h-[32rem]"></div>
                <button
                  type="button"
                  className="inline-flex justify-center items-center text-black-100 dark:text-light-100 font-medium w-max  hover:bg-gray-100 border border-gray-200 rounded-lg text-md lg:px-3 lg:py-2 px-2.5 py-1.5 pe-4 text-center  dark:border-gray-700  dark:hover:bg-gray-700 mt-8 space-x-2"
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

              <div className="border">
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
                  <div className="">
                    <figure className="max-w-screen-md mb-12">
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                      <blockquote>
                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                          "Everything has its wonders, even darkness and
                          silence, and I learn, whatever state I may be in,
                          therein to be content."
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 space-x-3">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Helen_KellerA.jpg/220px-Helen_KellerA.jpg"
                          alt="profile picture"
                        />
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                            Hellen Keller
                          </cite>
                          <cite className="pl-3 text-sm text-secondary dark:text-gray-400">
                            Author & Activist
                          </cite>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  {/* here */}
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
