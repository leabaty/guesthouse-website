import React from "react";
import { useState } from "react";
import Slider from "react-slick";

import roomData from "../../../data/roomData";

function Rooms() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="rooms-container">

        <Slider {...settings}>

          <div className="room-item">
            <h1 className="room-name">
            Chambre Jeanne 
            </h1>
            <img src="https://images.unsplash.com/photo-1616627686733-122fec9d87b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Chambre Jeanne" className="room-img" />
            <p>Phasellus vehicula odio urna, consectetur pharetra neque consequat quis. Phasellus feugiat, massa non consequat accumsan, nisl magna euismod nulla, id laoreet ipsum mauris id tortor. Integer interdum mollis venenatis.</p>
          </div>

          <div className="room-item">
          <h1 className="room-name">
            Chambre Clara 
            </h1>
            <img src="https://images.unsplash.com/photo-1529518189823-e18dc00cfd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="Chambre Joséphine" className="room-img" />
            <p>Phasellus vehicula odio urna, consectetur pharetra neque consequat quis. Phasellus feugiat, massa non consequat accumsan, nisl magna euismod nulla, id laoreet ipsum mauris id tortor. Integer interdum mollis venenatis.</p>
          </div>

          <div className="room-item">
          <h1 className="room-name">
            Chambre Joséphine 
            </h1>
            <img src="https://images.unsplash.com/photo-1532344214108-1b6d425db572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="Chambre Clara" className="room-img" />
            <p>Phasellus vehicula odio urna, consectetur pharetra neque consequat quis. Phasellus feugiat, massa non consequat accumsan, nisl magna euismod nulla, id laoreet ipsum mauris id tortor. Integer interdum mollis venenatis.</p>
          </div>

          {/* {roomData.map((room, index) => {
            return (
              <div className="room-item">
                <img src={room.img_url} alt={room.name} className="room-img" />
                <p key={room.id}>{room.description}</p>
              </div>
            );
          })} */}


        </Slider>
      </div>
    </>
  );
}

export default Rooms;
