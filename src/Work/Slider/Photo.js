import { propTypes } from "prop-types";

function Photo({ index, slideIndex }) {
  Photo.propTypes = {
    index: propTypes.numder,
    slideIndex: propTypes.numder,
  };

  return (
    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
      <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
    </div>
  );
}
export default Photo;
