import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./main.css";
import { myProjects } from "./myprojects/myprojects";

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const newNewArr = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return newNewArr === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className=" flex left-section ">
        <button
          className={currentActive === "all" ? "active" : null}
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={currentActive === "js" ? "active" : null}
          onClick={() => {
            handleClick("js");
          }}
        >
          Javascript
        </button>
        <button
          className={currentActive === "react" ? "active" : null}
          onClick={() => {
            handleClick("react");
          }}
        >
          ReactJs
        </button>
        <button
          className={currentActive === "react&node" ? "active" : null}
          onClick={() => {
            handleClick("react&node");
          }}
        >
          ReactJs & NodeJs
        </button>
        {/* <button> JavaScript </button>
        <button> React & MUI </button>
        <button> Node & Express </button> */}
      </section>
      <section className=" right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                key={item.id}
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                className="card"
              >
                <img src={item.imgPath} alt="" />
                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Harum voluptatum nam quidem sunt, nobis pariatur in at animi
                    eos accusamus
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        className="icon-link"
                        href={item.link}
                      ></a>
                      {/* <a
                        className="icon-github"
                        href={item.github}
                      ></a> */}
                    </div>
                    <a className="link flex" href={item.link} >
                      more <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
