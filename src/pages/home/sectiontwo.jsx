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
            <div className="inline-flex gap-6 lg:gap-8 pt-12">
              <a href="">
                <img
                  className="w-8 h-8 lg:w-12 lg:h-12"
                  src="./Assets/instagram.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="w-8 h-8 lg:w-12 lg:h-12"
                  src="./Assets/facebook.png"
                  alt=""
                />
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
                className="w-full lg:max-w-xl h-64 rounded-lg sm:h-96 mb-8 transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale"
                src="https://www.youtube.com/embed/kzdJkT4kp-A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonComponent
            btnType="button"
            svgPath="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
            viewBox="0 0 64 64"
            text="Download CV"
            additionalClasses="w-max text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md lg:px-3 lg:py-2 px-2.5 py-1.5 pe-4 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 lg:mt-8 space-x-2"
          />
          </div>
          
        </div>
      </div>
    </>
  );
}
