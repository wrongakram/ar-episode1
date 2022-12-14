<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import gsap from "gsap";
=======
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
>>>>>>> master
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "caseStudies", Component: CaseStudies },
  { path: "/approach", name: "approach", Component: Approach },
  { path: "/services", name: "services", Component: Services },
  { path: "/about-us", name: "about", Component: About }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

//components
import Header from "./components/Header";
import Navigation from "./components/Navigation";

//pages
import Home from "./pages/home";
import CaseStudies from "./pages/caseStudies";
import About from "./pages/about";
import Approach from "./pages/approach";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/about", name: "About", Component: About },
  { path: "/approach", name: "Approach", Component: Approach },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
<<<<<<< HEAD
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    let vh = dimensions.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.to("body", 0, { css: { visibility: "visible" } });

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
=======
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
>>>>>>> master
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
<<<<<<< HEAD

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} element={<Component />}></Route>
          ))}
        </Routes>
=======
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
>>>>>>> master
      </div>
      <Navigation />
    </>
  );
}

export default App;
