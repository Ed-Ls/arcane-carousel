import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import Details from "./Details";
import persoContent from "./data";
import Footer from "./Footer";

import vi from "./assets/vi-arcane.png";
import jinx from "./assets/jinx-arcane.png";
import caitlyn from "./assets/caitlyn-arcane.png";
import jayce from "./assets/jayce-arcane.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [jinx, caitlyn, jayce, vi];

function App() {
  const [imgIndex, setImgIndex] = useState(0);

  let content = persoContent.filter((perso) => perso.id === imgIndex).pop();

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
      <Details
        key={imgIndex}
        name={content.name}
        surname={content.surname}
        resume={content.resume}
        health={content.skills.health}
        mana={content.skills.mana}
        armor={content.skills.armor}
        attack={content.skills.attack}
      />

      <motion.div
        key={content.name}
        animate={{ x: 35, opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.2 }}
        className={`other-decoration ${content.color}`}
      ></motion.div>

      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <div className={index === imgIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          );
        })}
      </Slider>
      <Footer />
    </div>
  );
}

export default App;
