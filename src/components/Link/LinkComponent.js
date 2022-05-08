import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pic from "../../Work/Switch/pagination/pic.PNG";
import CounterPic from "../../Work/Switch/pagination/counter-pic.PNG";
import Counterbymyself from "../../Work/Switch/pagination/counterbymyself.PNG";
import SignUpImage from "../../Work/Switch/pagination/signup.PNG";
import SwitchPic from "../../Work/Switch/pagination/switch-pic.PNG";
import { SelectBtn, Img } from "./LinkComponent.style";

export default function LinkComponent() {
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
    <div>
      <SelectBtn onClick={test}>{btn} the screen shot</SelectBtn>
      <div>
        <Link to="/picture">
          <Img test={test} clickAlready={clickAlready} value={Pic} />
        </Link>
        <Link to="/counter">
          <Img test={test} clickAlready={clickAlready} value={CounterPic} />
        </Link>
        <Link to="/counterbymyself">
          <Img
            test={test}
            clickAlready={clickAlready}
            value={Counterbymyself}
          />
        </Link>
        <Link to="/signup">
          <Img test={test} clickAlready={clickAlready} value={SignUpImage} />
        </Link>
        <Link to="/">
          <Img test={test} clickAlready={clickAlready} value={SwitchPic} />
        </Link>
      </div>
    </div>
  );
}
