import "./App.css";
import { useState } from "react";
import Slider from "react-slick";

import vi from "./assets/vi-arcane.png";
import jinx from "./assets/jinx-arcane.png";
import caitlyn from "./assets/caitlyn-arcane.png";
import ziko from "./assets/ziko-arcane.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [jinx, caitlyn, ziko, vi];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    accessibility: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="App">
      {" "}
      <div className="other">Hello</div>
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <div className={index === imgIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default App;
