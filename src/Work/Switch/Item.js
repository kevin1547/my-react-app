import React from "react";

export default function Img({ test, clickAlready, value }) {
  return (
    <img
      onClick={test}
      className={`picture-in-switch ${
        clickAlready % 2 === 0 ? "alreadyClick" : ""
      }`}
      src={value}
    />
  );
}
