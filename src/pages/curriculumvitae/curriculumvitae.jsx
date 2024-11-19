import React, { useEffect, useState, useRef } from "react";
import CvPdf from '../../files/CV_MuhammadRafiShidiq.pdf'

export default function CurriculumVitae() {
  // Read More
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const toggleContent = () => {
    setIsContentExpanded(!isContentExpanded);
  };
  const [isContentExpanded2, setIsContentExpanded2] = useState(false);
  const toggleContent2 = () => {
    setIsContentExpanded2(!isContentExpanded2);
  };

  const modalRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    // Modal Close
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }
    function handleResize() {
      if (window.innerWidth > 1024) {
        setIsModalOpen(false);
      }
    }
    // Bind the event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      // Unbind the event listeners on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="">
        <div className="relative w-full bg-white dark:bg-black">
          <div className="max-w-screen-2xl mx-auto h-full px-4 py-4">
            {/* Profile */}
            <div className="flex items-start space-x-4 mb-8">
              <img
                className="w-16 h-16 rounded-full"
                src="./Assets/miku.jpg"
                alt=""
              />
              <div className="text-xl font-medium dark:text-white">
                <div>Muhammad Rafi Shidiq</div>
                <div className="text-base text-gray-500 dark:text-light-100">
                  Front-end / Fullstack Developer
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full md:max-w-[18em] border rounded-xl p-4 h-full">
                <div className="w-full h-28 md:h-[32rem]"></div>
                <div className="flex gap-2">
                  <a href={CvPdf} download="Example-PDF-document" rel="noreferrer" target="_blank">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center text-black-100 dark:text-light-100 font-medium w-max  hover:bg-gray-100 border border-gray-200 rounded-lg text-md lg:px-3 lg:py-2 px-2.5 py-1.5 pe-4 text-center  dark:border-gray-700  dark:hover:bg-gray-700 mt-8 space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        width="28"
                        height="28"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      <span>CV</span>
                    </button>
                  </a>
                  <a href="https://bit.ly/ShidiqProfessional" target="_blank">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center text-black-100 dark:text-light-100 font-medium w-max  hover:bg-gray-100 border border-gray-200 rounded-lg text-md lg:px-3 lg:py-2 px-2.5 py-1.5 pe-4 text-center  dark:border-gray-700  dark:hover:bg-gray-700 mt-8 space-x-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="28"
                        height="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      <span>Browse Drive</span>
                    </button>
                  </a>
                </div>
              </div>

              {/* Article Content */}
              <div className="">
                <div className="">
                  <p
                    data-aos="fade"
                    className="text-black-100 dark:text-light-100"
                  >
                    Bring a passion for technology with expertise in JavaScript,
                    React, Node.js, excelling in both front-end and back-end
                    development, UI/UX design, and cloud technologies.
                    Prioritizes user-centric, visually appealing, and functional
                    applications. Possess strong project management and
                    leadership skills, effectively coordinating teams, setting
                    milestones, without forgeting software quality assurance
                    which ensuring projects meet top-quality standards. Beyond,
                    I'm deeply engaged in video games, anime, and writing, which
                    complements my interests in art, graphic design, and
                    philosophy, enabling me to infuse creativity into every
                    project.
                  </p>
                </div>
                <div className="mt-6">
                  <iframe
                    className="w-full lg:max-w-xl h-64 rounded-lg sm:h-96 mb-8 transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale"
                    src="https://www.youtube.com/embed/ZRtdQ81jPUQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="">
                    <figure className="max-w-screen-md mb-12">
                      <svg
                        className="w-10 h-10 mb-3 text-light-100 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                      <blockquote>
                        <p className="text-2xl italic font-medium text-black-200 dark:text-light-100">
                          "Everything has its wonders, even darkness and
                          silence, and I learn, whatever state I may be in,
                          therein to be content."
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 space-x-3">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Helen_KellerA.jpg/220px-Helen_KellerA.jpg"
                          alt="profile picture"
                        />
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <cite className="pr-3 font-medium text-black-100 dark:text-light-100 ">
                            Hellen Keller
                          </cite>
                          <cite className="pl-3 text-sm text-black-100 dark:text-light-100">
                            Author & Activist
                          </cite>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row lg:gap-8 mt-12">
              <div className="xl:w-3/5">
                <div className="mb-8 lg:mb-14">
                  {/* Education Icon */}
                  <div className="flex items-center mb-6 gap-4">
                    <div className="h-min">
                      <svg
                        fill="#e5e5e5"
                        width="40px"
                        height="40px"
                        viewBox="0 0 14 14"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z"></path>
                        </g>
                      </svg>
                    </div>

                    <div className="text-2xl font-medium text-black-100 dark:text-light-100">
                      Education
                    </div>
                  </div>

                  {/* Education List */}
                  <div className=""></div>
                  <div className="w-full overflow-scroll container-snap">
                    <ol className=" sm:flex">
                      <li className="w-full relative mb-6 sm:mb-0 min-w-[20rem]">
                        <div className="flex items-center h-5">
                          <div className="absolute w-3 h-3 bg-gray-200 rounded-full left-1.5 border border-white dark:border-black dark:text-light-100 dark:bg-gray-700"></div>
                          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8 flex items-start space-x-4">
                          <img
                            className="w-10 h-10 rounded-full mt-4"
                            src="/Assets/smanda-logo.png"
                            alt=""
                          />
                          <div className="">
                            <h3 className="text-lg font-semibold text-black-100 dark:text-light-100 ">
                              SMAN 2 Purwakarta
                            </h3>
                            <time className="block mb-2 text-sm font-normal  dark:text-light-100 text-black-300">
                              2017-2020 · Graduated · Science Major
                            </time>
                            {/* <div className="text-sm text-black-100 dark:text-light-100 font-medium ">
                          
                        </div> */}
                            <p className="text-base font-normal text-black-100 dark:text-light-100">
                              English Club SMANDA; Information & Technology Club
                              Assistant;
                            </p>
                          </div>
                        </div>
                      </li>

                      <li className="w-full relative mb-6 sm:mb-0 min-w-[20rem]">
                        <div className="flex items-center h-5">
                          <div className="absolute w-3 h-3 bg-gray-200 rounded-full left-1.5 border border-white dark:border-black dark:text-light-100 dark:bg-gray-700"></div>
                          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8 flex items-start space-x-4">
                          <img
                            className="w-10 h-10 rounded-full mt-4"
                            src="/Assets/upi-logo.png"
                            alt=""
                          />
                          <div className="">
                            <h3 className="text-lg font-semibold text-black-100 dark:text-light-100 ">
                              Universitas Pendidikan Indonesia
                            </h3>
                            <time className="block mb-2 text-sm font-normal  dark:text-light-100 text-black-300">
                              2020 - now · Ungraduated · Bachelor Degree ·
                              Computer Science
                            </time>
                            <div className="text-sm text-black-100 dark:text-light-100 font-medium ">
                              IPK: 3.85 of 4
                            </div>
                            <p className="text-base font-normal text-black-100 dark:text-light-100">
                              Active Project Collaboration; Gemastik 2022
                              Competition; Assistant Lecturer & Voluntary;
                              Programming Organization OSTRIC; Dinamik UPI
                              Comitee;
                            </p>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="">
                  {/* Experience Icon */}
                  <div className="flex items-center mb-6 gap-4">
                    <div className="h-min">
                      <svg
                        width="46px"
                        height="46px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 6.5C12 6.26077 12 6.14115 12.0807 6.06687C12.1615 5.99259 12.2741 6.002 12.4994 6.02082C13.3784 6.09424 14.2326 6.36078 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 9 17.1962C8.23258 16.7531 7.57467 16.1466 7.07159 15.4221C6.94265 15.2364 6.87817 15.1435 6.90213 15.0365C6.92608 14.9294 7.02968 14.8696 7.23686 14.75L11.75 12.1443C11.872 12.0739 11.933 12.0387 11.9665 11.9807C12 11.9226 12 11.8522 12 11.7113V6.5Z"
                            fill="#e5e5e5"
                          ></path>{" "}
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="#e5e5e5"
                            strokeWidth="2"
                          ></circle>{" "}
                        </g>
                      </svg>
                    </div>

                    <div className="text-3xl font-medium text-black-100 dark:text-light-100">
                      Experience
                    </div>
                  </div>
                  <ol className="relative border-l border-gray-200 dark:border-gray-700 lg:ms-6 ms-2">
                    <li className="mb-10 ml-6 ">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black dark:text-light-100 dark:bg-gray-700"></div>
                      <div className="flex flex-row">
                        <img
                          className="w-12 h-12 rounded-lg me-4"
                          src="/Assets/telkom-logo.jpg"
                          alt=""
                        />
                        <div className="">
                          <h3 className="mb-1 text-lg font-semibold text-black-100 dark:text-light-100 ">
                            System Analyst - HCIS
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                              Latest
                            </span>
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                              Offline
                            </span>
                          </h3>
                          <time className="block mb-2 text-sm font-normal  dark:text-light-200 text-black-300">
                            Sep 2023 - Now · Bandung, Indonesia · Magang
                          </time>
                        </div>
                      </div>

                      <p
                        className={`text-base font-normal text-black-100 dark:text-light-100 ${
                          isContentExpanded2 ? "" : "truncate"
                        }`}
                      >
                        HCBP (Human Capital Business Partner) - Managed
                        end-to-end HC processes, from analysis, design,
                        development, to implementation - Prepared application
                        business requirements and documentation for HCIS
                        projects - Maintained and updated organization and
                        position data and attributes - Resolved HR application
                        issues and troubles - Ensuring IT General Control
                        compliance, fostering good corporate governance through
                        technology integration, and driving organizational
                        efficiency. - Project designing, management, prototyping
                        with MIRO
                      </p>

                      {!isContentExpanded2 && (
                        <button
                          onClick={toggleContent2}
                          className="dark:text-light-200 hover:underline cursor-pointer mb-4 italic"
                        >
                          (Read More)
                        </button>
                      )}
                    </li>

                    <li className="mb-10 ml-6 ">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black dark:text-light-100 dark:bg-gray-700"></div>
                      <div className="flex flex-row">
                        <img
                          className="w-12 h-12 rounded-lg me-4"
                          src="/Assets/bangkit-logo.png"
                          alt=""
                        />
                        <div className="">
                          <h3 className="mb-1 text-lg font-semibold text-black-100 dark:text-light-100 ">
                            Bangkit Academy led by Google, Gojek, Tokopedia, &
                            Traveloka.
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                              Online
                            </span>
                          </h3>
                          <time className="block mb-2 text-sm font-normal dark:text-light-200 text-black-300">
                            Feb 2023 - Jul 2023 · Jakarta, Indonesia · Jarak
                            jauh
                          </time>
                          <div className="text-sm text-black-100 dark:text-light-100 font-medium ">
                            Graduated with Distinction
                          </div>
                        </div>
                      </div>

                      <p className="mb-4 text-base font-normal text-black-100 dark:text-light-100">
                        <p
                          className={` text-base font-normal text-black-100 dark:text-light-100 ${
                            isContentExpanded ? "" : "truncate"
                          }`}
                        >
                          Over the past six months, I've diligently pursued
                          mastery in Google Cloud Technology and Backend
                          Development through comprehensive online courses on
                          platforms like Coursera and Dicoding, along with
                          expert-led sessions. I've also honed my soft skills
                          and English proficiency to bolster my professionalism.
                          Hands-on experience came from dedicated practice in
                          Google Cloud through the CloudSkillBoost lab. A
                          testament to my knowledge and teamwork, I successfully
                          completed a Capstone Project within a month, where our
                          collaborative effort resulted in the creation of a
                          machine learning integrated mobile application. This
                          innovative app enables users to monitor their daily
                          nutrition intake effectively using TensorFlow and
                          cloud technology.
                        </p>

                        {!isContentExpanded && (
                          <button
                            onClick={toggleContent}
                            className="dark:text-light-200 hover:underline cursor-pointer mb-4 italic"
                          >
                            (Read More)
                          </button>
                        )}
                      </p>
                      <div className="flex gap-4 mb-4 ">
                        <img
                          className="w-28 h-28 border rounded-md"
                          src=""
                          alt=""
                        />
                        <img
                          className="w-28 h-28 border rounded-md"
                          src=""
                          alt=""
                        />
                        <img
                          className="w-28 h-28 border rounded-md"
                          src=""
                          alt=""
                        />
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-black-100 dark:text-light-100 border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-black-200"
                      >
                        <svg
                          className="w-3.5 h-3.5 mr-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg>{" "}
                        Download ZIP
                      </a>
                    </li>
                    <li className="mb-10 ml-6">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black dark:text-light-100 dark:bg-gray-700"></div>
                      <h3 className="mb-1 text-lg font-semibold text-black-100 dark:text-light-100 ">
                        Assistant Lecturer
                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                          Offline
                        </span>
                      </h3>
                      <time className="block mb-2 text-sm font-normal  dark:text-light-200 text-black-300">
                        Feb 2022 - Mei 2022 · Bandung, Jawa Barat, Indonesia ·
                        Di lokasi
                      </time>
                      <p className="text-base font-normal text-black-100 dark:text-light-100">
                        I served as an Assistant Lecturer in Computer Networking
                        and Software Development. In the Computer Networking
                        role, I created engaging lesson plans, supervised
                        competitions, and designed exams, improving my
                        curriculum design and teaching skills. Concurrently, as
                        a Software Development Assistant Lecturer, I delivered
                        tutorials on SDLC, UML, and DFD, managed the computer
                        lab, and enhanced my instructional and problem-solving
                        abilities.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="xl:w-2/5">
                <div className="flex items-center mb-6 gap-4">
                  <div className="h-min">
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.4881 6.44591C13.8882 6.55311 14.1256 6.96437 14.0184 7.36447L11.4302 17.0237C11.323 17.4238 10.9117 17.6613 10.5116 17.5541C10.1115 17.4468 9.8741 17.0356 9.98131 16.6355L12.5695 6.97624C12.6767 6.57614 13.088 6.3387 13.4881 6.44591ZM14.9697 8.46967C15.2626 8.17678 15.7374 8.17678 16.0303 8.46967L16.2387 8.67801C16.874 9.3133 17.4038 9.84308 17.7678 10.3202C18.1521 10.8238 18.4216 11.3559 18.4216 12C18.4216 12.6441 18.1521 13.1762 17.7678 13.6798C17.4038 14.1569 16.874 14.6867 16.2387 15.322L16.0303 15.5303C15.7374 15.8232 15.2626 15.8232 14.9697 15.5303C14.6768 15.2374 14.6768 14.7626 14.9697 14.4697L15.1412 14.2981C15.8229 13.6164 16.2797 13.1574 16.5753 12.7699C16.8577 12.3998 16.9216 12.1843 16.9216 12C16.9216 11.8157 16.8577 11.6002 16.5753 11.2301C16.2797 10.8426 15.8229 10.3836 15.1412 9.70191L14.9697 9.53033C14.6768 9.23744 14.6768 8.76257 14.9697 8.46967ZM7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76257 9.32341 9.23744 9.03052 9.53033L8.85894 9.70191C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12617 14.6867 6.59638 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59638 9.84308 7.12617 9.31331 7.76151 8.67801L7.96986 8.46967Z"
                          fill="#e5e5e5"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>

                  <div className="text-2xl font-medium text-black-100 dark:text-light-100">
                    Skills
                  </div>
                </div>
                <div className="lang-and-fw flex flex-col flex-wrap text-black-100 dark:text-light-100">
                  <div className="languages mb-4">
                    <p className="text-xl mb-2">General</p>
                    <div className="proficient-row flex flex-wrap mb-1">
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">Software Development</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">Front-end Engineer</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">UI/UX Design</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Back-end Engineer</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">System Analyst</p>
                      </div>

                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Data Analyst</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Machine Learning</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Mobile Programming</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Project Management</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Cloud Computing</p>
                      </div>
                    </div>
                  </div>

                  {/* LANGUAGES */}
                  <div className="languages mb-4">
                    <p className="text-xl mb-2">Languages</p>
                    <div className="proficient-row flex flex-wrap mb-1">
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">JavaScript</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">Typescript</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">PHP</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">Python</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Flutter Dart</p>
                      </div>

                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Java</p>
                      </div>

                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">C</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">C++</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">HTML</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">CSS</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">SASS</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">R</p>
                      </div>
                      {/* <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Golang</p>
                      </div> */}
                    </div>
                  </div>

                  {/* FRAMEWORKS/LIBRARIES */}
                  <div className="frameworks mb-4">
                    <p className="text-xl mb-2">Frameworks/Libraries</p>
                    <div className="proficient-row flex flex-wrap mb-1">
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">React</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">Next.js</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">Express.js</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                              stroke="#fee87c"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <p className="text-base">Tailwind</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Flask</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Node.js</p>
                      </div>

                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Laravel</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Bootsrap</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">MUI</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Framer Motion</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Material Tailwind</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Flowbites</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">NPM</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Flutter</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Anaconda</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Scikit Learn</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Pandas</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">TensorFlow</p>
                      </div>
                      {/* <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Prisma</p>
                      </div> */}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="tools mb-4">
                    <p className="text-xl mb-2">Tools</p>
                    <div className="proficient-row flex flex-wrap mb-1">
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Visual Studio Code</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Git & Github</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Cloudinary</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Miro</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Clickup</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Trello</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Vercel</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Google Cloud Platform</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Amazon Web Service</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Canva</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">MongoDB</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Figma</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">MySQL</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">MongoDB</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Firebase</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Ms Excel</p>
                      </div>
                      {/* <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8">
                        <p className="text-base">Postgree</p>
                      </div> */}
                    </div>
                  </div>

                  {/* Softskill */}
                  <div className="tools mb-4">
                    <p className="text-xl mb-2">Softskills</p>
                    <div className="">
                      <ul>
                        <li>Growth Mindset</li>
                        <li>Time Management</li>
                        <li>Critical Thinking and Problem Solving</li>
                        <li>Adaptability</li>
                        <li>Fast Learning</li>
                        <li>Project Management</li>
                        {/* <li>Good Communication and Networking</li> */}
                      </ul>
                    </div>
                  </div>

                  {/* Language */}
                  <div className="tools mb-4">
                    <p className="text-xl mb-2">Languages</p>
                    <div className="">
                      <ul>
                        <li>Bahasa as Origin</li>
                        <li>Beginner conversational in English</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
