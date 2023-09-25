import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const isDark = () =>
  (localStorage && localStorage.theme === "dark") ||
  (typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

const getTheme = (isDark) => (isDark ? "dark" : "light");

const ThemeSwitch = () => {
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
      <div className="relative" >
        <div className={`${styles.toggleWrapper}`}>
          <input
            type="checkbox"
            className={`${styles.dn}`}
            id={`${styles.dn}`}
            onClick={toggleMode}
          />
          <label htmlFor={`${styles.dn}`} className={`${styles.toggle}`}>
            <span className={`${styles.toggle__handler}`}>
              <span
                className={`${styles.crater} ${styles["crater--1"]}`}
              ></span>
              <span
                className={`${styles.crater} ${styles["crater--2"]}`}
              ></span>
              <span
                className={`${styles.crater} ${styles["crater--3"]}`}
              ></span>
            </span>
            <span className={`${styles.star} ${styles["star--1"]}`}></span>
            <span className={`${styles.star} ${styles["star--2"]}`}></span>
            <span className={`${styles.star} ${styles["star--3"]}`}></span>
            <span className={`${styles.star} ${styles["star--4"]}`}></span>
            <span className={`${styles.star} ${styles["star--5"]}`}></span>
            <span className={`${styles.star} ${styles["star--6"]}`}></span>
          </label>
        </div>
      </div>
    </>
  );
};
export default ThemeSwitch;
