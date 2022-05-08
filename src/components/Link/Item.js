import React from "react";
import "./Item.css";

export default function Img({ test, clickAlready, value }) {
  return (
    <img
      onClick={test}
      className={`${
        clickAlready % 2 === 0
          ? "picture-in-switch-alreadyClick"
          : "picture-in-switch"
      }`}
      src={value}
    />
  );
}
