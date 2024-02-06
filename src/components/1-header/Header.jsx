// @ts-nocheck
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./header.css";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if(theme === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

function scroll(top){
    window.scrollTo({
        top: top,
        behavior: "smooth",
    });
}
  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>

      <div />
      <nav>
        <ul className="flex">
          <li onClick={()=>{scroll(0)}}>
            About
          </li>
          <li onClick={()=>{scroll(500)}}>
            Projects
          </li>
          <li onClick={()=>{scroll(999999)}}>
            Contact
          </li>
        </ul>
      </nav>

      <button className="mode flex" onClick={()=> {
        // set value to LS
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
        // get value from LS
        setTheme(localStorage.getItem("currentMode"))
      }}>
        <span className={ theme === "dark" ?  "icon-moon-o" : "icon-sun"}></span>
      </button>

      {showModal && (
        <div className="fixed ">
          <ul className="modal ">
            <li>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="icon-clear"
              ></button>
            </li>
            <li onClick={()=>{scroll(0); setShowModal(false)}}>
            About
          </li>
          <li onClick={()=>{scroll(500); setShowModal(false)}}>
            Projects
          </li>
          <li onClick={()=>{scroll(999999); setShowModal(false)}}>
            Contact
          </li>
          </ul>
        </div>
      )}
    </header>
  );
}
