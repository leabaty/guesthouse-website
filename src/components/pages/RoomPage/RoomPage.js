import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";

import "./RoomPage.css";

import { FaChild, FaAccessibleIcon, FaRegCompass } from "react-icons/fa";
import { BiBed, BiLandscape } from "react-icons/bi";
import { GiResize } from "react-icons/gi";

function RoomPage({ rooms }) {
  return (
    <>
      <div className="roompage-cards-container">
        {rooms.map((room) => {
          return (
            <div className="room-card" key={room.id}>
              <h1 className="room-card-name">{room.name}</h1>
              <img className="room-img" src={room.img_url} alt={room.name} />

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
                </div>

                {/* <div className="room-characteristics">
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
                  <p className="room-characteristics-item-info">{room.view}</p>
                </div>
              </div> */}

              <Link to="/chambres">
                <Button className="room-card-btn" buttonSize="btn--medium" buttonColor="primary">
                  Détails
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RoomPage;
