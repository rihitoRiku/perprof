import React from "react";
import { Outlet, Link } from "react-router-dom";
import ThemeSwitch from "./../components/themeswitch/themeswitch";
import styles from "./style.module.scss";

const Layout = () => {
  return (
    <>
      <ThemeSwitch />
      <div className="relative w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
