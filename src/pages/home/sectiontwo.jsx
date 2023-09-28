import React, { useEffect, useState, useRef } from "react";

export default function SectionTwo() {
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
      <div className=" h-screen w-full bg-white dark:bg-black">
        <div className=" max-w-screen-2xl mx-auto h-full px-4">
          <div className=" pt-12 text-lg font-poppins font-medium text-black-300 lg:text-2xl dark:text-black-200">
            Today is {dayOfWeek}
          </div>
          <div className=" text-3xl font-poppins font-bold text-black lg:text-4xl dark:text-black-300 ">
            {time.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </>
  );
}
