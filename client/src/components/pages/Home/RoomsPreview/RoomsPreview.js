import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Button } from "../../../Button";

import "./RoomsPreview.css";

import {
  FaArrowRight,
  FaArrowLeft,
  FaChild,
  FaRegCompass,
} from "react-icons/fa";
import { BiBed, BiLandscape } from "react-icons/bi";
import { GiResize } from "react-icons/gi";

function RoomsPreview({ rooms }) {
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
      <h1 className="heading"> Nos Chambres </h1>
        <Slider className="rooms-slider" {...settings}>
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
                <h1 className="heading heading--medium">{room.name}</h1>
                <img className="room-img" src={room.imgs.img_url} alt={room.name} />

                <div className="room-characteristics">
                  <div className="room-characteristics-item">
                    <FaChild />
                    <p className="room-characteristics-item-info">
                      {room.max_pax_adults}
                    </p>
                  </div>
                  <div className="room-characteristics-item child">
                    <FaChild />
                    <p className="room-characteristics-item-info">
                      {room.max_pax_children}
                    </p>
                  </div>
                  <div className="room-characteristics-item">
                    <GiResize />
                    <p className="room-characteristics-item-info">
                      {room.square_meters}m²
                    </p>
                  </div>
                  <div className="room-characteristics-item">
                    <BiBed />
                    <p className="room-characteristics-item-info">
                      {room.bed_type}
                    </p>
                  </div>

                  <div className="room-characteristics-item">
                    <FaRegCompass />
                    <p className="room-characteristics-item-info">
                      {room.cardinalities}
                    </p>
                  </div>
                  <div className="room-characteristics-item">
                    <BiLandscape />
                    <p className="room-characteristics-item-info">
                      {room.view}
                    </p>
                  </div>
                </div>
                <p className="room-description">{room.description}</p>
              </div>
            );
          })}
        </Slider>

        <Link to="/chambres">
          <Button buttonSize="btn--wide" buttonColor="primary">
            Voir toutes les chambres
          </Button>
        </Link>
      </div>
    </>
  );
}

export default RoomsPreview;
