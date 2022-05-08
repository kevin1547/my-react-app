import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pic from "./pagination/pic.PNG";
import CounterPic from "./pagination/counter-pic.PNG";
import Counterbymyself from "./pagination/counterbymyself.PNG";
import SignUpImage from "./pagination/signup.PNG";
// import Picture from "../AddPicture/Picture";
// import Counter from "../../Counter";
// import MainFunc from "../CounterByMyself/MainFunc";
import Item from "./Item";
import "./Switch.css";
// import LoginWork from "../../components/LoginWork";
// import SignUpWork from "../SignUp/SignUpWork";
// import { propTypes } from "prop-types";

export default function Switch() {
  const [clickAlready, setClickAlready] = useState(0);
  const [btn, setBtn] = useState("show");

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
        <div className="container-in-switch">
          <div className="btn-in-switch">
            <button className="button-in-counter" onClick={test}>
              {btn} the screen shot
            </button>
            <Link to="/">
              <button className="button-in-counter home">home</button>
            </Link>
          </div>
          <Link to="/picture">
            <Item test={test} clickAlready={clickAlready} value={Pic} />
          </Link>

          <Link to="/counter">
            <Item test={test} clickAlready={clickAlready} value={CounterPic} />
          </Link>

          <Link to="/counterbymyself">
            <Item
              test={test}
              clickAlready={clickAlready}
              value={Counterbymyself}
            />
          </Link>
          <Link to="/signup">
            <Item test={test} clickAlready={clickAlready} value={SignUpImage} />
          </Link>
        </div>
      </div>
    </main>
  );
}
