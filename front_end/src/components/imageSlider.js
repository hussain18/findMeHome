import { useState } from "react";

// Images
const forwardImg = require("../assets/test_img/forward_png.png").default;
const backwardImg = require("../assets/test_img/backward_png.png").default;

const Slider = (props) => {
  const slideImages = props.images;
  const length = slideImages.length;

  // State variables
  const [current, setCurrent] = useState(0);
  const [imgCurrent, setImgCurrent] = useState(0);

  const nextSlide = () => {
    // The function moves forward through categories (e.g. hall, kitchen, and ...)
    // and each of it related images
    // -----------------------------------------------------

    // Getting number of images in the current category
    const imgsLength = slideImages[current].images.length;

    // Going through images
    if (imgsLength - 1 === imgCurrent) {
      setCurrent(current === length - 1 ? 0 : current + 1); // categories forwarded
      setImgCurrent(0);
      return;
    }

    setImgCurrent(imgCurrent + 1); // images forwarded
  };

  const prevSlide = () => {
    // The function moves backwards through categories (e.g. hall, kitchen, and ...)
    // and each of it related images
    // -----------------------------------------------------

    // Getting number of images in the current category and next current value
    let imgsLength = slideImages[current].images.length;

    // Going through images
    if (0 === imgCurrent) {
      setCurrent(current === 0 ? length - 1 : current - 1); // categories backward

      const prevCurrent = current === 0 ? length - 1 : current - 1;
      setImgCurrent(slideImages[prevCurrent].images.length - 1);
      return;
    }

    setImgCurrent(imgCurrent - 1); // images backward
  };

  return (
    <>
      <p className="fs-3 text-center fw-bold">{slideImages[current].label}</p>
      <div className="slider-style row g-2 justify-content-md-between align-items-center">
        <div
          onClick={prevSlide}
          className="col-sm-1 order-sm-first text-center"
        >
          <img
            src={backwardImg}
            style={{ maxWidth: 40 }}
            className="icon icon-hovered"
          />
        </div>
        <div onClick={nextSlide} className="col-sm-1 order-sm-last text-center">
          <img
            src={forwardImg}
            style={{ maxWidth: 40 }}
            className="icon icon-hovered"
          />
        </div>
        {slideImages &&
          slideImages.map((slides, index) => {
            return (
              index === current && (
                <img
                  style={imgStyle}
                  src={slides.images[imgCurrent]}
                  className="slide col-sm-10 mb-2 align-self-center icon"
                />
              )
            );
          })}
      </div>
    </>
  );
};

export default Slider;

// styles
const imgStyle = {
  maxWidth: "800px",
  maxHeight: "500px",
};
