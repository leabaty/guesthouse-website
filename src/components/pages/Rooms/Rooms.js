import React from "react";
import { useState } from "react";

import Slider from "react-slick";
import "./Rooms.css";

import {
  FaArrowRight,
  FaArrowLeft,
//   FaChild,
//   FaAccessibleIcon,
//   FaRegCompass,
} from "react-icons/fa";
// import { BiBed } from "react-icons/bi";
// import { IoResize, IoIosMan } from "react-icons/Io";
// import { BiLandscape } from "react-icons/Bi";

function Rooms({ rooms }) {
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
    <>
      <div className="rooms-container">
        <Slider {...settings}>
          {rooms.map((room, index) => {
            return (
              <div
                className={index === imageIndex ? "slide activeSlide" : "slide"}
                //ce qu'on veut ici c'est mettre en valeur l'image courante.
                // Si l'index de l'image dans le tableau d'objets matche avec l'index du
                // tableau, ça veut dire qu'elle est l'image courante et qu'on peut donc
                // lui appliquer un style pour la mettre en valeur.
                key={room.id}
              >
                <h1 className="room-name">{room.name}</h1>
                <img className="room-img" src={room.img_url} alt={room.name} />
                {/* <div className="room-characteristics">
                  <div className="room-characteristics-item">
                    <IoIosMan />
                  </div>
                  <div className="room-characteristics-item">
                    <FaChild />
                  </div>
                  <div className="room-characteristics-item">
                    <IoResize />
                  </div>
                  <div className="room-characteristics-item">
                    <BiBed />
                  </div>
                  <div className="room-characteristics-item">
                    <FaRegCompass />
                  </div>
                  <div className="room-characteristics-item">
                    <BiLandscape />
                  </div>
                </div> */}
                <p className="room-description">{room.description}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Rooms;
