// @ts-nocheck
import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animation/developer.json";
import { useRef, useState } from "react";

import { useEffect } from "react";
// @ts-ignore
import { ReactTyped } from "react-typed";

// import { animate } from 'framer-motion';
// import { motion } from 'framer-motion';

export default function Hero() {
  const lottieRef = useRef();

  const [up, setUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  }, []);

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div>
          <img
            src="./me.jpg"
            className={up === true ? "avatar animate" : "avatar"}
            alt=""
          />
        </div>

        <h1 className="title">
          Hey I'm <br />
          <ReactTyped
            className="text-color"
            strings={["Kamal Hosny"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></ReactTyped>
        </h1>

        <p className="sub-title">
          I'm a Frontend Software Engineer with a strong passion for building
          web applications with a great user friendly experience.
        </p>
        <div className="all-icons flex">
          <a className="icon icon-x" href="https://twitter.com/ixon2003"></a>
          <a className="icon icon-instagram" href=""></a>
          <a
            className="icon icon-github"
            href="https://github.com/kamal-hosny"
          ></a>
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/kamal-hosny-681068295/"
          ></a>
        </div>
      </div>
      <div className="right-animation">
        <Lottie
          className="animation"
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}

// 2:27:09
