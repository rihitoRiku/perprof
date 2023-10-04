import React from "react";
import Heading from "./heading";

import styles from "./style.module.scss";

import ButtonComponent from "../../components/button/buttoncomponent";

import AOS from "aos";
import Typewriter from "typewriter-effect";

export default function SectionOne() {
  AOS.init();

  return (
    <>
      {/* <div className={`w-24`}></div> */}
      <div
        className={`max-w-screen-2xl w-full absolute top-0 left-0 right-0 bottom-0 mx-auto h-screen flex items-center justify-center bg-cover ${styles.bgHeader} bg-center bg-no-repeat z-10`}
      ></div>
      <div className="h-screen w-full bg-white dark:bg-black">
        <div className={`max-w-screen-2xl mx-auto h-full`}>
          <div className="flex flex-col justify-center items-center text-center h-full px-4 z-30 relative">
            <div className="mb-4 text-4xl font-bold  text-black md:text-5xl lg:text-6xl dark:text-light-100 z-30 relative">
              Muhammad Rafi Shidiq
            </div>
            <div className="mb-2 text-2xl font-normal font-montserrat tracking-tight text-black-300 md:text-3xl lg:text-4xl dark:text-light-300">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Front-end Web Developer",
                    "Fullstack Web Developer",
                    "UI/UX Designer",
                    "Tech Enthausiast",
                    "Game & Anime Lovers",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <Heading />
            <div className="relative mt-4 flex flex-row gap-4 lg:gap-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="lg:w-16 lg:h-16 w-12 h-12"
                viewBox="0 0 48 48"
              >
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                <path
                  fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="lg:w-16 lg:h-16 w-12 h-12"
                viewBox="0 0 48 48"
              >
                <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
                <polygon
                  fill="#fff"
                  points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                ></polygon>
                <path
                  fill="#fff"
                  d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                ></path>
              </svg>
              <img
                src="./logo192.png"
                className="animate-spin lg:w-16 lg:h-16 w-12 h-12"
                alt=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="lg:w-16 lg:h-16 w-12 h-12"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="lg:w-16 lg:h-16 w-12 h-12"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#00acc1"
                  d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                ></path>
              </svg>
            </div>
            <div className="relative top-16 xl:top-24 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <ButtonComponent
                btnType="button"
                svgPath="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
                viewBox="0 0 64 64"
                text="View Github"
                fillOne="#083344"
                additionalClasses="w-max text-gray-900 bg-white dark:bg-black-100 hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-md lg:px-3 lg:py-2 px-2.5 py-1.5 pe-4 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 lg:mt-8 space-x-2"
              />
              <ButtonComponent
                btnType="button"
                svgPath="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                svgpath2="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                fillOne="#0288D1"
                fillTwo="#FFFF"
                viewBox="0 0 48 48"
                text="Connect with LinkedIn"
                additionalClasses="text-gray-900 font-normal rounded-lg text-md px-3 py-2 pe-4 text-center inline-flex items-center lg:mt-8 space-x-2 dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
