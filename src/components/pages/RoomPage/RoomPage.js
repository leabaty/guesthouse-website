import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";

import "./RoomPage.css";

import { FaChild, FaAccessibleIcon } from "react-icons/fa";
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

              <p className="room-pricing"> {room.min_price}€ à {room.max_price}€ par nuit, selon période, pour deux personnes avec petit-déjeuner inclus.  </p>

              <Link to="/chambres">
                <Button className="room-card-btn" buttonSize="btn--medium" buttonColor="primary">
                  Voir la chambre
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
