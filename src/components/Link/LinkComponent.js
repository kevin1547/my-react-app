import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pic from "../../Work/Switch/pagination/pic.PNG";
import CounterPic from "../../Work/Switch/pagination/counter-pic.PNG";
import Counterbymyself from "../../Work/Switch/pagination/counterbymyself.PNG";
import SignUpImage from "../../Work/Switch/pagination/signup.PNG";
import SwitchPic from "../../Work/Switch/pagination/switch-pic.PNG";
import { SelectBtn, Img, Container } from "./LinkComponent.style";

export default function LinkComponent() {
  const [clickAlready, setClickAlready] = useState(true);
  const [btn, setBtn] = useState("show");

  function MainFunc() {
    setClickAlready((prev) => !prev);
    setBtn(clickAlready ? "remove" : "show");
  }
  return (
    <div>
      <SelectBtn onClick={MainFunc}>{btn} the screen shot</SelectBtn>
      <div>
        <Link to="/picture">
          <Img MainFunc={MainFunc} clickAlready={clickAlready} value={Pic} />
        </Link>
        <Link to="/counter">
          <Img
            MainFunc={MainFunc}
            clickAlready={clickAlready}
            value={CounterPic}
          />
        </Link>
        <Link to="/counterbymyself">
          <Img
            MainFunc={MainFunc}
            clickAlready={clickAlready}
            value={Counterbymyself}
          />
        </Link>
        <Link to="/signup">
          <Img
            MainFunc={MainFunc}
            clickAlready={clickAlready}
            value={SignUpImage}
          />
        </Link>
        <Link to="/">
          <Img
            MainFunc={MainFunc}
            clickAlready={clickAlready}
            value={SwitchPic}
          />
        </Link>
      </div>
    </div>
  );
}
