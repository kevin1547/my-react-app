import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Pic from "./pagination/pic.PNG";
import CounterPic from "./pagination/counter-pic.PNG";
import Counterbymyself from "./pagination/counterbymyself.PNG";
import Picture from "../AddPicture/Picture";
import Counter from "../../Counter";
import MainFunc from "../CounterByMyself/MainFunc";
import "./Switch.css";
// import { propTypes } from "prop-types";

export default function Switch() {
  const [clickAlready, setClickAlready] = useState(0);
  const [btn, setBtn] = useState("show");
  useEffect(() => {
    console.log(clickAlready);
  }, []);

  function test() {
    setClickAlready(clickAlready + 1);
    setBtn("remove");
    if (clickAlready % 2 !== 0) {
      setBtn("show");
    }
  }

  return (
    <main>
      <div className="main-container-in-switch">
        <Routes>
          <Route path="/picture" element={<Picture />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counterbymyself" element={<MainFunc />} />
        </Routes>
        <div className="container-in-switch">
          <div className="btn-in-switch">
            <button className="button-in-counter" onClick={test}>
              {btn} the screen shot
            </button>
          </div>
          <a href="http://localhost:3000/picture">
            <img
              className={`picture-in-switch ${
                clickAlready % 2 === 0 ? "alreadyClick" : ""
              }`}
              src={Pic}
            />
          </a>
          <a href="http://localhost:3000/counter">
            <img
              className={`picture-in-switch ${
                clickAlready % 2 === 0 ? "alreadyClick" : ""
              }`}
              src={CounterPic}
            />
          </a>
          <a href="http://localhost:3000/counterbymyself">
            <img
              className={`picture-in-switch ${
                clickAlready % 2 === 0 ? "alreadyClick" : ""
              }`}
              src={Counterbymyself}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
