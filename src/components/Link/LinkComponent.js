import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pic from "../../Work/Switch/pagination/pic.PNG";
import CounterPic from "../../Work/Switch/pagination/counter-pic.PNG";
import Counterbymyself from "../../Work/Switch/pagination/counterbymyself.PNG";
import SignUpImage from "../../Work/Switch/pagination/signup.PNG";
import SwitchPic from "../../Work/Switch/pagination/switch-pic.PNG";
import TodoListPic from "../../Work/Switch/pagination/todolist-pic.png";
import { SelectBtn, Dropdown } from "./LinkComponent.style";

export default function LinkComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <SelectBtn
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "remove" : "show"} the screen shot
      </SelectBtn>
      <Dropdown visible={visible}>
        <Link to="/picture">
          <img src={Pic} height={100} />
        </Link>
        <Link to="/counter">
          <img src={CounterPic} height={100} />
        </Link>
        <Link to="/counterbymyself">
          <img src={Counterbymyself} height={100} />
        </Link>
        <Link to="/signup">
          <img src={SignUpImage} height={100} />
        </Link>
        <Link to="/todolist">
          <img src={TodoListPic} height={100} />
        </Link>
        <Link to="/">
          <img src={SwitchPic} height={100} />
        </Link>
      </Dropdown>
    </div>
  );
}
