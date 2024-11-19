import React from "react";
import Loaderstyle from "./style.module.scss";

export default function Loadercomponent() {
  return (
    <>
      <div className={`dark:text-green-600 text-green-300 ${Loaderstyle.loader}`}></div>
    </>
  );
}
