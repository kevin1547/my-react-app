import React, { useState } from "react";
// import Screen from "./Screen";
import "./MainFunc.css";
import * as math from "mathjs";

export default function MainFunc() {
  const [space, setSpace] = useState("");
  const btn0 = () => {
    if (space === "") {
      setSpace("0");
    } else {
      setSpace(space + "0");
    }
  };
  const btn1 = () => {
    if (space === "") {
      setSpace("1");
    } else {
      setSpace(space + "1");
    }
  };
  const btn2 = () => {
    if (space === "") {
      setSpace("2");
    } else {
      setSpace(space + "2");
    }
  };
  const btn3 = () => {
    if (space === "") {
      setSpace("3");
    } else {
      setSpace(space + "3");
    }
  };
  const btn4 = () => {
    if (space === "") {
      setSpace("4");
    } else {
      setSpace(space + "4");
    }
  };
  const btn5 = () => {
    if (space === "") {
      setSpace("5");
    } else {
      setSpace(space + "5");
    }
  };
  const btn6 = () => {
    if (space === "") {
      setSpace("6");
    } else {
      setSpace(space + "6");
    }
  };
  const btn7 = () => {
    if (space === "") {
      setSpace("7");
    } else {
      setSpace(space + "7");
    }
  };
  const btn8 = () => {
    if (space === "") {
      setSpace("8");
    } else {
      setSpace(space + "8");
    }
  };
  const btn9 = () => {
    if (space === "") {
      setSpace("9");
    } else {
      setSpace(space + "9");
    }
  };
  const add = () => {
    setSpace(space + "+");
  };
  const minus = () => {
    setSpace(space + "-");
  };
  const times = () => {
    setSpace(space + "*");
  };
  const divide = () => {
    setSpace(space + "/");
  };
  const Dot = () => {
    setSpace(space + ".");
  };
  const clear = () => {
    setSpace("");
  };

  const equal = () => {
    setSpace(math.evaluate(space));
  };
  return (
    <main>
      <div className="main-in-counterbymyself">
        <div className="sec-in-counterbymyself">
          <div className="input-space">{space}</div>
        </div>
        <div className="btn-in-counterbymyself">
          <button className="button-in-mainfunc" onClick={btn7}>
            7
          </button>
          <button className="button-in-mainfunc" onClick={btn8}>
            8
          </button>
          <button className="button-in-mainfunc" onClick={btn9}>
            9
          </button>
          <button className="button-in-mainfunc notNumber" onClick={divide}>
            /
          </button>
          <button className="button-in-mainfunc" onClick={clear}>
            clear
          </button>
        </div>
        <div className="btn-in-counterbymyself">
          <button className="button-in-mainfunc" onClick={btn4}>
            4
          </button>
          <button className="button-in-mainfunc" onClick={btn5}>
            5
          </button>
          <button className="button-in-mainfunc" onClick={btn6}>
            6
          </button>
          <button className="button-in-mainfunc notNumber" onClick={times}>
            *
          </button>
        </div>
        <div className="btn-in-counterbymyself">
          <button className="button-in-mainfunc" onClick={btn1}>
            1
          </button>
          <button className="button-in-mainfunc" onClick={btn2}>
            2
          </button>
          <button className="button-in-mainfunc" onClick={btn3}>
            3
          </button>
          <button className="button-in-mainfunc notNumber" onClick={add}>
            +
          </button>
        </div>
        <div className="btn-in-counterbymyself">
          <button className="button-in-mainfunc" onClick={Dot}>
            .
          </button>
          <button className="button-in-mainfunc" onClick={btn0}>
            0
          </button>
          <button className="button-in-mainfunc" onClick={equal}>
            =
          </button>
          <button className="button-in-mainfunc notNumber" onClick={minus}>
            -
          </button>
        </div>
      </div>
    </main>
  );
}
