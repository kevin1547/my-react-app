import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Switch.css";
import LinkComponent from "../../components/Link/LinkComponent";

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
          <LinkComponent clickAlready={clickAlready} test={test} />
        </div>
      </div>
    </main>
  );
}
