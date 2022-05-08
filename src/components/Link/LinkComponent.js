import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pic from "../../Work/Switch/pagination/pic.PNG";
import CounterPic from "../../Work/Switch/pagination/counter-pic.PNG";
import Counterbymyself from "../../Work/Switch/pagination/counterbymyself.PNG";
import SignUpImage from "../../Work/Switch/pagination/signup.PNG";
import SwitchPic from "../../Work/Switch/pagination/switch-pic.PNG";
import Item from "./Item";

export default function LinkComponent({ clickAlready, test }) {
  return (
    <div>
      <Link to="/picture">
        <Item test={test} clickAlready={clickAlready} value={Pic} />
      </Link>
      <Link to="/counter">
        <Item test={test} clickAlready={clickAlready} value={CounterPic} />
      </Link>
      <Link to="/counterbymyself">
        <Item test={test} clickAlready={clickAlready} value={Counterbymyself} />
      </Link>
      <Link to="/signup">
        <Item test={test} clickAlready={clickAlready} value={SignUpImage} />
      </Link>
      <Link to="/">
        <Item test={test} clickAlready={clickAlready} value={SwitchPic} />
      </Link>
    </div>
  );
}
