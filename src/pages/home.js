import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/introOverlay";

import gsap from "gsap";

const tl = gsap.timeline();
const homeAnimation = (completeAnimation) => {
=======
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Cases from "../components/cases";
import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
>>>>>>> master
  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
<<<<<<< HEAD
      amount: 0.3,
    },
=======
      amount: 0.3
    }
>>>>>>> master
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
<<<<<<< HEAD
      stagger: 0.4,
=======
      stagger: 0.4
>>>>>>> master
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
<<<<<<< HEAD
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, { css: { display: "none" } })
=======
        amount: 0.4
      }
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" }
    })
>>>>>>> master
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
<<<<<<< HEAD
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const Home = () => {
=======
        amount: 0.4
      },
      onComplete: completeAnimation
    });
};

const Home = ({ dimensions }) => {
>>>>>>> master
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
<<<<<<< HEAD
    console.log("animation ran");
  };

  useEffect(() => {
    //timeline
    homeAnimation(completeAnimation);
  }, []);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}

=======
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width]);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
>>>>>>> master
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
