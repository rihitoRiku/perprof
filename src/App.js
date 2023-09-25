import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./pages/layout";
import NoPage from "./pages/nopage";
import "./App.css";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      //check if there is any key for theme in local storage and if the system color theme is dark
      document.documentElement.classList.remove("light"); //OPTIONAL - remove light from the html document if any
      document.documentElement.classList.add("dark"); // add dark to the <html></html> itself as <html class='dark'></html>
    } else {
      document.documentElement.classList.remove("dark"); // remove dark from the html document if any
      document.documentElement.classList.add("light"); //OPTIONAL - add light to the <html></html> itself as <html class='light'></html>
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout {...pageProps}/>}> 
          <Route index element={<Home />} />
          {/* <Route path="/" element={< />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
