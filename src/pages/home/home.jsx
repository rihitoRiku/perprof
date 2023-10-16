import React, { useEffect, useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";

// Styles Module
import styles from "./style.module.scss";

// Library

// Slide Section
import SectionOne from "./sectionone";
import SectionTwo from "./sectiontwo";

const Home = () => {
  return (
    <>
      <div>
        <SectionOne />
        <SectionTwo />
        {/* OUTLET */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
