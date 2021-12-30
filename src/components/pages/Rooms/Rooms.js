import React from "react";

import Slider from "react-slick";
import "./Rooms.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Rooms({rooms}) {

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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="rooms-container">
        <Slider {...settings}>
          {/* <div className="room-item">
            <h1 className="room-name">Chambre Jeanne</h1>
            <img
              src="https://images.unsplash.com/photo-1616627686733-122fec9d87b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Chambre Jeanne"
              className="room-img"
            />
            <p>
              Phasellus vehicula odio urna, consectetur pharetra neque consequat
              quis. Phasellus feugiat, massa non consequat accumsan, nisl magna
              euismod nulla, id laoreet ipsum mauris id tortor. Integer interdum
              mollis venenatis.
            </p>
          </div>

          <div className="room-item">
            <h1 className="room-name">Chambre Clara</h1>
            <img
              src="https://images.unsplash.com/photo-1529518189823-e18dc00cfd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="Chambre Joséphine"
              className="room-img"
            />
            <p>
              Phasellus vehicula odio urna, consectetur pharetra neque consequat
              quis. Phasellus feugiat, massa non consequat accumsan, nisl magna
              euismod nulla, id laoreet ipsum mauris id tortor. Integer interdum
              mollis venenatis.
            </p>
          </div>

          <div className="room-item">
            <h1 className="room-name">Chambre Joséphine</h1>
            <img
              src="https://images.unsplash.com/photo-1532344214108-1b6d425db572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="Chambre Clara"
              className="room-img"
            />
            <p>
              Phasellus vehicula odio urna, consectetur pharetra neque consequat
              quis. Phasellus feugiat, massa non consequat accumsan, nisl magna
              euismod nulla, id laoreet ipsum mauris id tortor. Integer interdum
              mollis venenatis.
            </p>
          </div> */}

          {rooms.map((room) => {
            return (
              <div className="room-item" key={room.id}>
                <h1 className="room-name">{room.name}</h1>
                <img className="room-img" src={room.img_url} alt={room.name} />
                <p className="room-description" >{room.description}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Rooms;
