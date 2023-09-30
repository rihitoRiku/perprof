import React, { useEffect, useState, useRef } from "react";

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
      </div>
    </>
  );
};

export default Home;
