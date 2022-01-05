import React from "react";
import { Link } from "react-router-dom";

import "./RoomDetails.css";

import { FaChild, FaAccessibleIcon, FaRegCompass } from "react-icons/fa";
import { BiBed, BiLandscape } from "react-icons/bi";
import { GiResize } from "react-icons/gi";

function RoomDetails( rooms, roomId ) {

  // const getRoomById = (roomId, rooms) => {
  //   const filteredRoom = rooms.filter((room) => room.id === roomId);
  //   return filteredRoom;
  // };

  // getRoomById();

  return (
    <>
      <div className="roomdetails-container" /*key={filteredRoom.id}*/>
        <h1 className="heading">Chambre xyz</h1>
        <img className="room-img" /*src={room.img_url} alt={room.name}*/ />

        <div className="room-characteristics">
          <div className="room-characteristics-item">
            <FaChild />
            <p className="room-characteristics-item-info">
              {/* {room.max_pax_adults} */}
            </p>
          </div>

          <div className="room-characteristics-item child">
            <FaChild />
            <p className="room-characteristics-item-info">
              {/* {room.max_pax_children} */}
            </p>
          </div>

          <div className="room-characteristics-item">
            <GiResize />
            <p className="room-characteristics-item-info">
              {/* {room.square_meters}m² */}
            </p>
          </div>

          <div className="room-characteristics-item">
            <BiBed />
            <p className="room-characteristics-item-info">
              {/* {room.bed_type} */}
            </p>
          </div>

          <div className="room-characteristics-item">
            <FaRegCompass />
            <p className="room-characteristics-item-info">
              {/*room.cardinalities*/}
            </p>
          </div>

          <div className="room-characteristics-item">
            <BiLandscape />
            <p className="room-characteristics-item-info">{/*room.view*/}</p>
          </div>
        </div>
        <p className="room-description">{/*room.description*/}</p>
        <p className="room-pricing">
          {" "}
          {/*room.min_price*/}€ à {/*room.max_price*/}€ par nuit, selon période,
          pour deux personnes avec petit-déjeuner inclus.{" "}
        </p>
      </div>
    </>
  );
}

export default RoomDetails;