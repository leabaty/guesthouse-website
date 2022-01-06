import React from "react";
import { useState } from "react";
import Slider from "react-slick";

import "./RoomPicSlider.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function RoomPicSlider({ roomsObj }) {

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
    slidesToShow: 3,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    // the key is the room.id
    // we want to display every item in the img object that is nested in the room object

    // we have a bigger object that is the roomsObj.
    // we want to map roomsObj.img, but it needs to correspond to the current room.id

    <>
      <Slider className="rooms-slider" {...settings}>
        {/* {roomsObj.map((room, index) => {
          return (
            <div
              className={index === imageIndex ? "slide activeSlide" : "slide"}
              key={roomImgs.id}
            >
              <img className="room-img" src={roomImg.img} alt="" />
            </div>
          );
        })} */}
      </Slider>
    </>
  );
}

export default RoomPicSlider;
