import React from "react";
import { Link, useLocation } from "react-router-dom";

import { PiCertificateFill } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { IoFolderOpen } from "react-icons/io5";
import { TiSocialFlickr } from "react-icons/ti";

export default function NavbarComponent({ isModalOpen, setIsModalOpen }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "dark:border-white border-black"
      : "border-transparent";
  };
  return (
    <>
      <div className="relative">
        <div className="flex lg:hidden justify-end">
          <button onClick={() => setIsModalOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 dark:text-light-100"
            >
              <path
                strokeLinecap="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="h-14 hidden lg:flex items-center justify-center">
          <ul className="flex items-center justify-center text-gray-900 dark:text-white gap-2 xl:gap-6">
            <Link to="/">
              <li className="">
                <button
                  type="button"
                  className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
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
                  className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
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
                  className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
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
                  className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive('/blog')} transition-colors duration-300`}
                >
                  Blog
                </button>
              </li>
            </Link> */}

            <Link to="gettoknow">
              <li>
                <button
                  type="button"
                  className={`flex justify-center items-center gap-2 text-gray-800 dark:text-white bg-none hover:bg-light-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-none dark:hover:bg-gray-700 border ${isActive(
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
      </div>
    </>
  );
}
