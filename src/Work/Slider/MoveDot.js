import "./Slider.css";
import { propTypes } from "prop-types";

export default function MoveDot({ index, slideIndex, moveDot }) {
  MoveDot.propTypes = {
    index: propTypes.numder,
    slideIndex: propTypes.numder,
    moveDot: propTypes.number,
  };
  return (
    <div
      onClick={() => moveDot(index + 1)}
      className={slideIndex === index + 1 ? "dot active" : "dot"}
    />
  );
}
