import React from "react";
import { useState } from "react";
import Slider from "react-slick";

import "./RoomPicSlider.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function RoomPicSlider({ targetedRoom }) {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next arrows-room" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev arrows-room" onClick={onClick}>
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


  if (targetedRoom.length === 0) {
    return(
      <div/>
        )
  } else {
  
    return (
      <>
        <Slider className="rooms-slider" {...settings}>
          {Object.values(targetedRoom.imgs).map((image, index) => {
            return (
              <div
                className={index === imageIndex ? "slide activeSlide" : "slide"}
                key={image.id}
              >
                <img className="room-img" src={image} alt="" />
              </div>
            );
          })}
        </Slider>
      </>
    );
  }


}

export default RoomPicSlider;
