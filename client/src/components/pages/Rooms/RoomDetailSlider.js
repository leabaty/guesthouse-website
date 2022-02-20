import React, { useState }  from "react";
import Slider from "react-slick";

import "./RoomDetailSlider.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function RoomDetailSlider({ targetedRoom }) {
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
    /*https://react-slick.neostack.com/docs/example/custom-paging*/

    dots: true,
    infinite: true,
    fade: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  if (targetedRoom.length === 0) {
    return <div />;
  } else {
    return (
      <>
        <Slider {...settings}>
          {Object.values(targetedRoom.imgs).map((image, index) => {
            return (
              <div
                className={
                  index === imageIndex
                    ? "roomdetail__slide activeSlide"
                    : "roomdetail__slide"
                }
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

export default RoomDetailSlider;
