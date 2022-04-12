import React, { useState } from "react";
import "./MainFunc.css";
import * as math from "mathjs";
import { btn } from "./utils";
import { calculatingSigns } from "./calculatingSigns";
export default function MainFunc() {
  const [space, setSpace] = useState("");
  const clear = () => {
    setSpace("");
  };

  const equal = () => {
    setSpace(math.evaluate(space));
  };
  return (
    <div className="main-in-counterbymyself">
      <div className="sec-in-counterbymyself">
        <div className="input-space">{space}</div>
      </div>
      <div className="btn-in-counterbymyself">
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("7", setSpace, space);
          }}
        >
          7
        </button>
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("8", setSpace, space);
          }}
        >
          8
        </button>
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("9", setSpace, space);
          }}
        >
          9
        </button>
        <button
          className="button-in-mainfunc notNumber"
          onClick={() => {
            calculatingSigns("/", space, setSpace);
          }}
        >
          /
        </button>
        <button className="button-in-mainfunc" onClick={clear}>
          clear
        </button>
      </div>
      <div className="btn-in-counterbymyself">
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("4", setSpace, space);
          }}
        >
          4
        </button>
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("5", setSpace, space);
          }}
        >
          5
        </button>
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("6", setSpace, space);
          }}
        >
          6
        </button>
        <button
          className="button-in-mainfunc notNumber"
          onClick={() => {
            calculatingSigns("*", space, setSpace);
          }}
        >
          *
        </button>
      </div>
      <div className="btn-in-counterbymyself">
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("1", setSpace, space);
          }}
        >
          1
        </button>
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("2", setSpace, space);
          }}
        >
          2
        </button>
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("3", setSpace, space);
          }}
        >
          3
        </button>
        <button
          className="button-in-mainfunc notNumber"
          onClick={() => {
            calculatingSigns("+", space, setSpace);
          }}
        >
          +
        </button>
      </div>
      <div className="btn-in-counterbymyself">
        <button
          className="button-in-mainfunc"
          onClick={() => {
            calculatingSigns(".", space, setSpace);
          }}
        >
          .
        </button>
        <button
          className="button-in-mainfunc"
          onClick={() => {
            btn("0", setSpace, space);
          }}
        >
          0
        </button>
        <button className="button-in-mainfunc" onClick={equal}>
          =
        </button>
        <button
          className="button-in-mainfunc notNumber"
          onClick={() => {
            calculatingSigns("-", space, setSpace);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
