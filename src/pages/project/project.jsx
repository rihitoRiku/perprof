import React, { useState, useEffect } from "react";
import Loadercomponent from "../../components/loader/loadercomponent";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: false, mirror: false });

const ProjectCard = ({ project, isSingle, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={delay}
      className={`${
        isSingle ? "flex-none w-full md:w-1/2 mx-auto" : "flex-1"
      } border rounded-md dark:border-black-200 flex flex-col xl:flex-row`}
    >
      {/* Image Section */}
      <div className="sm:w-1/3 w-full h-48 xl:h-full">
        <img
          src={project.imageSrc}
          alt="Project Thumbnail"
          className="object-cover w-full h-full rounded-t-md sm:rounded-l-md sm:rounded-t-none"
        />
      </div>
      {/* Content Section */}
      <div className="flex-1 p-4">
        <a target="_blank" href={project.link}>
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </a>
        <p
          className={`text-sm text-gray-500 mt-2 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>
        {!isExpanded && (
          <button
            onClick={toggleExpanded}
            className="text-blue-500 text-sm mt-2 hover:underline"
          >
            Read More
          </button>
        )}
        {isExpanded && (
          <button
            onClick={toggleExpanded}
            className="text-blue-500 text-sm mt-2 hover:underline"
          >
            Read Less
          </button>
        )}
        <div className="mt-4">
          <span className="font-semibold">Tech Stack: </span>
          <span className="text-sm text-gray-600">{project.techStack}</span>
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  const [contributionData, setContributionData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "rihitoRiku";
  const token = process.env.REACT_APP_GITHUB_TOKEN;;

  useEffect(() => {
    const fetchGitHubData = async () => {
      const contributionQuery = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
            repositories {
              totalCount
            }
            bio
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: contributionQuery,
            variables: { username },
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        const user = result.data?.user;
        const calendar = user?.contributionsCollection?.contributionCalendar;

        if (!calendar)
          throw new Error("Invalid data structure received from GitHub API");

        const contributions = calendar.weeks || [];

        setContributionData({
          totalContributions: calendar.totalContributions || 0,
          contributions,
        });

        setProfileData({
          totalRepositories: user?.repositories?.totalCount || 0,
          bio: user?.bio || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username, token]);

  const getColor = (count) => {
    if (count === 0) return "bg-gray-100 dark:bg-black-200";
    if (count < 5) return "bg-green-200 dark:bg-green-900";
    if (count < 10) return "bg-green-400 dark:bg-green-600";
    return "bg-green-500";
  };

  const days = ["Mon", "Wed", "Fri"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Create month labels logic (only when the month changes)
  const monthLabels = [];
  let lastMonth = null;

  contributionData?.contributions.forEach((week, index) => {
    const firstDayOfWeek = new Date(week.contributionDays[0].date);
    const currentMonth = firstDayOfWeek.getMonth();

    // Only add a label if the month is different from the previous week's month
    if (currentMonth !== lastMonth) {
      monthLabels.push({
        label: months[currentMonth],
        index, // Index of the week where the month changes
      });
      lastMonth = currentMonth;
    }
  });

  const projects = [
    {
      title: "Shiroplane Artworks Showcases",
      description:
        "A full-stack web app portfolio and client management platform featuring an animated UI/UX design with a paper-inspired theme for an interactive, artistic experience. The app is fully responsive across all devices, with an elegant layout and fonts for a visually engaging presentation. Optimized for fast performance, it offers smooth navigation and quick load times. Developed end-to-end, this solo project covered the complete SDLC,  from UI/UX design to deployment",
      techStack:
        "ReactJs, Tailwind, ExpressJs, MongoDB, Cloudinary, Google Captcha, Emailjs, SCSS, HTML, CSS, JS",
      imageSrc: "project-image.jpg",
      link: "https://github.com/rihitoRiku/shiroplaneApp",
    },
    {
      title: "OcToefl: Gamified Learning App with Bayesian Knowledge Tracing",
      description:
        "A dynamic full-stack learning app designed to make TOEFL preparation engaging and adaptive. Users build unique profiles by collecting stars, rank badges, and customizable avatars, while tracking their progress through milestones and quests. The app features interactive quizzes/exam, one adapt to the learner’s needs via Bayesian Knowledge Tracing, and a history of challenges to review past attempts. instant feedback, completion monitoring, leaderboards, customizable statuses, and a points-based store, OcToefl creates an immersive and personalized learning journey",
      techStack:
        "Next.js, React.js, Express.js, MongoDB, TailwindCSS, Zustand, Formik, ReactQuill, SCSS, HTML, CSS, JS",
      imageSrc: "project-image-2.jpg",
      link: "https://github.com/rihitoRiku/motionClient",
    },
    {
      title: "AI Chatbot with Vue",
      description:
        "This project responsive web application powered by Cohere's Command-R-08-2024 language model, designed to provide intelligent, predefined responses to user queries. With a simple, clean interface and fast performance, the chatbot delivers a seamless experience across both desktop and mobile devices, making it easy for users to access information quickly and efficiently.",
      techStack:
        "Vue.js, Vite.js, Tailwind, HTML, CSS, JS",
      imageSrc: "project-image.jpg",
      link: "https://github.com/rihitoRiku/vue-chatbotv2",
    },
    {
      title: "Nutriast: Health Monitoring Mobile App",
      description:
        "A collaborative full-stack web app designed for health monitoring and cardiovascular disease prediction using machine learning. Developed by a team of six (3 full-stack/DevOps, 2 ML engineers, 1 mobile developer), Nutriast leverages Google Cloud and TensorFlow to integrate a predictive model trained on Kaggle data. The app includes extensive nutrition data, food intake tracking, and personalized health insights, offering users a robust tool for proactive health management.",
      techStack:
        "Express.js, Kotlin, Tensorflow.js Machine Learning, Google Collab, Python, Flask, Android Studio, Google Cloud Run, Google Cloud Bucket",
      imageSrc: "project-image-3.jpg",
      link: "https://github.com/C23-PC718",
    },
    {
      title: "Nutriast: Health Monitoring Web-App",
      description:
        "Transformed a mobile app into a full-stack web app, integrating an existing deployed machine learning model. Handled all roles from UI/UX design to backend development, delivering a responsive interface and robust architecture, showcasing full-stack and ML integration expertise.",
      techStack:
        "Typescript, Next.js, React.js, TailwindCSS, Express.js, MongoDB, SCSS, HTML, CSS, JS",
      imageSrc: "project-image-4.jpg",
      link: "https://github.com/rihitoRiku/NutriastApp",
    },
    {
      title: "Bank Sampah Management & Information System",
      description:
        "Built a comprehensive Bank Sampah Management & Information System for city-wide waste tracking, including an admin system for managing users, waste databases, and price-per-weight configurations. Enabled CRUD operations, an interactive dashboard for trend visualization, and a wallet feature for redeeming rewards based on collected waste. This system enhances environmental sustainability by streamlining waste management and incentivizing recycling efforts.",
      techStack:
        "Typescript, Next.js, React.js, TailwindCSS, Google AppScript, ApexChart, SCSS, HTML, CSS, JS",
      imageSrc: "project-image-5.jpg",
      link: "https://github.com/rihitoRiku/BankSampah",
    },
    {
      title: "E-Commerce: Utami Bakery Store",
      description:
        " Led front-end development in a team project, designing UI/UX for a bakery web app with full e-commerce features, including product catalog, details page, cart, and checkout. Built an admin system for product management and integrated WhatsApp for customer communication. Collaborated closely with backend, data teams, and clients to ensure feature alignment and optimal user experience.",
      techStack: "React.js, MUI, HTML, CSS, JS",
      imageSrc: "project-image-6.jpg",
      link: "https://github.com/rihitoRiku/UtamiBakery",
    },
    {
      title: "Personal Profile",
      description:
        "Developed a personal portfolio website to showcase my bio, education, projects, and contact information. Designed a visually appealing, dark-mode interface and integrated GitHub contribution data using GraphQL. Focused on creating an engaging, modern user experience to highlight my background, skills, and professional journey.",
      techStack: "React.js, Next.js, TailwindCSS, SCSS, HTML, CSS, JS",
      imageSrc: "project-image-7.jpg",
      link: "https://github.com/rihitoRiku/perprof",
    },
    {
      title: "Sales Admin Dashboard",
      description:
        "Developed a full-stack Sales Admin Dashboard for managing customers, products, and transactions. Implemented interactive charts and graphs for data visualization, pagination for data lists, and a dark mode option. This project streamlined sales administration by providing an intuitive, data-driven interface for efficient management and insights.",
      techStack:
        "React.js, Express.js, MongoDB, MUI, Redux, Nivo, SCSS, HTML, CSS, JS",
      imageSrc: "project-image-8.jpg",
      link: "https://github.com/rihitoRiku/AdminDashboard",
    },
    {
      title: "E-commerce: Metime Clothing",
      description:
        "Developed the front-end of a mobile app for an e-commerce clothing store in a team of five. Implemented product catalog displays, cart, and checkout features to create a seamless shopping experience for users. Focused on delivering a clean, responsive interface optimized for mobile use.",
      techStack: "Flutter, Dart, Android Studio, GetX",
      imageSrc: "project-image-9.jpg",
      link: "https://github.com/rihitoRiku/MeTimeStore",
    },
    {
      title: "Random Meal Generator",
      description:
        "Developed a native PHP project to suggest random meals, utilizing a SQL database to store and retrieve food data. Designed and built both the front and backend with an MVP architecture, ensuring a structured, efficient, and user-friendly experience.",
      techStack: "PHP, Bootsrap, MySQL",
      imageSrc: "project-image-10.jpg",
      link: "https://github.com/rihitoRiku/RandomMealGenerator",
    },
    {
      title: "Survival Hop 2D Java Game",
      description:
        "Created a 2D game using Java and Apache NetBeans, focusing on object-oriented principles. Connected to a MySQL database to track game progress and implemented user controls for movement, jumping, and point accumulation. Enhanced gameplay with interactive functions and database integration for a dynamic user experience.",
      techStack: "Java, Apache Netbeans, MySQl",
      imageSrc: "project-image-11.jpg",
      link: "https://github.com/rihitoRiku/myHopGame_Java",
    },
  ];

  return (
    <div className="relative w-full bg-white dark:bg-black dark:text-white">
      <div className="max-w-screen-2xl mx-auto h-full px-4 pb-16">
        <div className="w-full">
          {loading ? (
            <div className="w-full h-64 flex justify-center items-center">
              <Loadercomponent />
            </div>
          ) : error ? (
            <div className="w-full h-64 flex justify-center items-center text-red-500">
              Error: {error}
            </div>
          ) : (
            <div className="pt-8 flex flex-col justify-center items-center">
              <div className="flex flex-col border dark:border-black-200 rounded-md py-4 px-6 justify-center w-full lg:w-[60rem]">
                <div className="flex justify-between items-center">
                  <div className="dark:text-white text-sm font-semibold mb-2">
                    {contributionData.totalContributions} contributions in the
                    last year
                  </div>
                  <div className="dark:text-white text-sm font-semibold mb-2">
                    {profileData.totalRepositories} total repositories
                  </div>
                  <img
                    src={`https://komarev.com/ghpvc/?username=rihitoRiku&color=blue`}
                    alt="Profile views"
                    className="h-6"
                  />
                </div>

                <div className="overflow-x-scroll max-w-max">
                  <div className="flex flex-col bg-white dark:bg-black rounded mt-2 w-max">
                    <div className="flex w-[60rem]">
                      {/* Day labels */}
                      <div className="flex flex-col justify-evenly mr-2 text-xs text-gray-500">
                        {days.map((day) => (
                          <div key={day}>{day}</div>
                        ))}
                      </div>
                      <div className="w-full">
                        <div
                          className="grid gap-y-1 gap-x-0.5"
                          style={{
                            gridTemplateColumns: `repeat(${contributionData.contributions.length}, minmax(0, 1fr))`,
                            gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                          }}
                        >
                          {contributionData.contributions.map(
                            (week, weekIndex) =>
                              week.contributionDays.map((day, dayIndex) => (
                                <div
                                  key={`${weekIndex}-${dayIndex}`}
                                  className={`w-3 h-3 ${getColor(
                                    day.contributionCount
                                  )} rounded-sm`}
                                  style={{
                                    gridRow: dayIndex + 1,
                                    gridColumn: weekIndex + 1,
                                  }}
                                  title={`${day.contributionCount} contributions on ${day.date}`}
                                />
                              ))
                          )}
                        </div>
                        {/* Month labels */}
                        <div className="flex justify-between text-xs mt-2 text-gray-500">
                          {monthLabels.map(({ label, index }) => (
                            <div key={index} className="text-center">
                              {label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center mt-2 text-xs text-gray-500">
                  <span className="me-1">Less</span>
                  <div className="flex gap-1 ml-1">
                    {[0, 4, 9, 15].map((count) => (
                      <div
                        key={count}
                        className={`w-3 h-3 ${getColor(count)} rounded-sm`}
                      />
                    ))}
                  </div>
                  <span className="ms-1">More</span>
                </div>
              </div>
            </div>
          )}
          <div className="w-full pt-6">
            {projects
              .reduce((rows, project, index) => {
                // Every two items, create a new row.
                if (index % 2 === 0) {
                  rows.push([]);
                }
                rows[rows.length - 1].push(project);
                return rows;
              }, [])
              .map((row, rowIndex, rowsArray) => (
                <div
                  key={rowIndex}
                  className="flex md:flex-row flex-col gap-6 w-full pt-6"
                >
                  {row.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      isSingle={rowsArray[rowIndex].length === 1}
                      delay={index % 2 === 1 ? "300" : "0"}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
