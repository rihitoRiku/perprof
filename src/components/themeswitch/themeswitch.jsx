import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const isDark = () =>
  (localStorage && localStorage.theme === "dark") ||
  (typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

const getTheme = (isDark) => (isDark ? "dark" : "light");

const TheSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    localStorage.theme = getTheme(!darkMode);
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setDarkMode(isDark());
  }, []);

  const darkModeActive =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");
  return (
    <>
      <div className="relative">
        <div
          onClick={toggleMode}
          className="absolute top-0 right-0 z-40 mt-3 me-3 lg:mt-8 lg:me-8 cursor-pointer"
        >
          {localStorage.theme === "dark" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#e5e5e5"
                className="w-12 h-12 lg:w-14 lg:h-14 transition ease-in-out delay-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#18181b"
                className="w-11 h-11 transition ease-in-out delay-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TheSwitch;
