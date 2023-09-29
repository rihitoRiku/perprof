import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";

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
      <div className="h-screen w-full bg-white dark:bg-black">
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
            <div className="inline-flex gap-6 pt-12">
              <a href="">
                <img className="w-8 h-8" src="./Assets/instagram.png" alt="" />
              </a>
              <a href="">
                <img className="w-8 h-8" src="./Assets/facebook.png" alt="" />
              </a>
            </div>
          </div>

          <div className="ms-4 mt-8">
            <div className="flex items-start space-x-4">
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
            <div className="mt-6">
              <p data-aos="fade" className="text-black-100 dark:text-light-100">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                fugiat, magnam quia nihil distinctio officia consequatur eum, ea
                doloremque esse eveniet ad maxime natus voluptas architecto.
                Voluptates mollitia sunt doloremque cum ducimus, optio officia
                at?
              </p>
            </div>
            <div className="mt-6">
              <iframe
                className="w-full lg:max-w-xl h-64 rounded-lg sm:h-96 mb-16 transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale"
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
    </>
  );
}
