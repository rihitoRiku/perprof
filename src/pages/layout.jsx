import React from "react";
import { Outlet, Link } from "react-router-dom";
import ThemeSwitch from "./../components/themeswitch/themeswitch";
import styles from "./style.module.scss";

const Layout = () => {
  return (
    <>
      <ThemeSwitch />
      <div className={`relative`}></div>
      <div className="relative h-screen w-full bg-white dark:bg-black ">
        <div className="max-w-screen-2xl mx-auto h-full">
          <div className="flex flex-col justify-center items-center text-center h-3/4 px-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Muhammad Rafi Shidiq
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              I'm a motivated full-stack web developer with expertise in
              JavaScript, React, Node.js, databases, and cloud environments.
              Currently pursuing a Computer Science degree at the University of
              Pendidikan Indonesia, I'm dedicated to staying updated in the
              dynamic tech world.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
