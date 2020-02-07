import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Cases from "./components/cases";

function App() {
  const title = useRef(null);

  useEffect(() => {
    // console.log(title.current.children[0].children[0]);
    gsap.to("body", 0, { css: { visibility: "visible" } });

    const tl = gsap.timeline();
    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4
        }
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4
        }
      })
      .from(".case-image img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
          amount: 0.4
        }
      })
      .to("body", 0, { css: { overflowY: "scroll" } });
  }, [title]);

  return (
    <div className='App'>
      <div className='intro-overlay'>
        <div className='top'>
          <div className='overlay-top'></div>
          <div className='overlay-top'></div>
          <div className='overlay-top'></div>
        </div>
        <div className='bottom'>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
        </div>
      </div>
      <Header />
      <Banner title={title} />
      <Cases />
    </div>
  );
}

export default App;
