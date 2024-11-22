import React, { useEffect, useState, useRef } from "react";
import CvPdf from "../../files/CV_MuhammadRafiShidiq.pdf";

import { RiGraduationCapFill } from "react-icons/ri";
import { SiHyperskill } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

export default function CurriculumVitae() {
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
            {/* <div className="flex items-start space-x-4 mb-8">
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
            </div> */}

            <div className="flex flex-col md:flex-row gap-8 py-12">
              {/* Sidebar */}
              {/* <div className="w-full md:max-w-[18em] border rounded-xl p-4 h-full">
                <div className="w-full h-28 md:h-[32rem]"></div>
                <div className="flex gap-2">
                  <a
                    href={CvPdf}
                    download="Example-PDF-document"
                    rel="noreferrer"
                    target="_blank"
                  >
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
              </div> */}

              {/* Article Content */}
              <div className="">
                <div className="">
                  <p className="text-black-100 dark:text-light-100">
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
                  {/* <iframe
                    className="w-full lg:max-w-xl h-64 rounded-lg sm:h-96 mb-8 transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale"
                    src="https://www.youtube.com/embed/ZRtdQ81jPUQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */}
                  <div className="">
                    <figure className="max-w-screen-md">
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

            <div className="flex flex-col xl:flex-row lg:gap-16 mt-12">
              <div className="xl:w-3/5">
                <div className="mb-8 lg:mb-14">
                  {/* Education Icon */}
                  <div className="flex items-center mb-6 gap-4">
                    <div className="h-min">
                      <RiGraduationCapFill className="text-4xl dark:text-light text-gray-300" />
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

                      <li className="w-full relative mb-6 sm:mb-0 min-w-[25rem]">
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
                              2020 - 2024 · Computer Science · Fresh Graduated ·
                              Bachelor Degree
                            </time>
                            <div className="text-sm text-black-100 dark:text-light-100 font-medium ">
                              GPA: 3.85 of 4
                            </div>
                            <p className="text-base font-normal text-black-100 dark:text-light-100">
                              Active Project Collaboration; Gemastik 2022
                              Competition; Assistant Lecturer & Voluntary;
                              Programming Organization OSTRIC; COMPFEST 15 Cyber Security Competition; Dinamik 18 Competitive Programming (CP) Competition; Dinamik UPI Computer Networking Competition Commitee; Google Student Developer Club Member (GDSC)
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
                    <div className="h-min"><MdWork className="text-4xl dark:text-light text-gray-300" /></div>

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
                            System Analyst, Telkom Indonesia Tbk
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                              Latest
                            </span>
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                              Offline
                            </span>
                          </h3>
                          <time className="block mb-2 text-sm font-normal  dark:text-light-200 text-black-300">
                            Sep 2023 - Dec 2023 · Bandung, Indonesia · Intern
                          </time>
                        </div>
                      </div>

                      <p
                        className={`text-base font-normal text-black-100 dark:text-light-100`}
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
                              Remote
                            </span>
                          </h3>
                          <time className="block mb-2 text-sm font-normal dark:text-light-200 text-black-300">
                            Feb 2023 - Jul 2023 · Jakarta, Indonesia
                          </time>
                          <div className="text-sm text-black-100 dark:text-light-100 font-medium ">
                            Graduated with Distinction
                          </div>
                        </div>
                      </div>

                      <p className="mb-4 text-base font-normal text-black-100 dark:text-light-100">
                        <p
                          className={` text-base font-normal text-black-100 dark:text-light-100`}
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
                      </p>
                      {/* <div className="flex gap-4 mb-4 ">
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
                      </div> */}
                      {/* <a
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
                      </a> */}
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
                  <div className="h-min"><SiHyperskill className="text-4xl dark:text-light text-gray-300"/></div>

                  <div className="text-2xl font-medium text-black-100 dark:text-light-100">
                    Skills
                  </div>
                </div>
                <div className="lang-and-fw flex flex-col flex-wrap text-black-100 dark:text-light-100">
                  <div className="languages mb-4">
                    <p className="text-xl mb-2">General</p>
                    <div className="proficient-row flex flex-wrap mb-1">
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
                        <p className="text-base">Software Development</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
                        <p className="text-base">Front-end Engineer</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
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
                        <FaRegStar />
                        <p className="text-base">JavaScript</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
                        <p className="text-base">Typescript</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
                        <p className="text-base">PHP</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
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
                        <FaRegStar />
                        <p className="text-base">React</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
                        <p className="text-base">Next.js</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
                        <p className="text-base">Express.js</p>
                      </div>
                      <div className="p-1 border border-light-100 dark:border-light-300 rounded-lg m-1 flex items-center h-8 gap-1">
                        <FaRegStar />
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
