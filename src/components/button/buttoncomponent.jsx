import React from 'react';

const ButtonComponent = ({ btnType, svgPath, svgpath2, fillOne, fillTwo, text, additionalClasses, viewBox }) => {
  return (
    <button
      type={btnType}
      className={`inline-flex justify-center items-center ${additionalClasses}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="36"
        height="36"
        viewBox={viewBox}
      >
        <path fill={fillOne} d={svgPath}></path>
        <path fill={fillTwo} d={svgpath2}></path>
      </svg>
      <span>{text}</span>
    </button>
  );
};

export default ButtonComponent;