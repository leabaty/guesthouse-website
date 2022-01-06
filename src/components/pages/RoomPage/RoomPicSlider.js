import React from "react";
import { useState } from "react";
import Slider from "react-slick";

import "./RoomPicSlider.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function RoomPicSlider({ targetedRoom }) {

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

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
//TODO : Put a useffect with useref preventing the map to render before something is clicked !
    <>
      <Slider className="rooms-slider" {...settings}>
        
        {targetedRoom.imgs.map((image, index) => {
          return (
            <div
              className={index === imageIndex ? "slide activeSlide" : "slide"}
              key={image.id}
            >
              <img className="room-img" src={image.img_url} alt="" />
            </div>
          );
        })}

      </Slider>
    </>
  );
}

export default RoomPicSlider;
