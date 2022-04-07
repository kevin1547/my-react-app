import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import { propTypes } from "prop-types";

export default function BtnSlider({ direction, moveSlide }) {
  BtnSlider.propTypes = {
    direction: propTypes.numder,
    moveSlide: propTypes.numder,
  };
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
