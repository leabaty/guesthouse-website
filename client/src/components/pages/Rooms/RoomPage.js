import React, { useState, useRef, useEffect } from "react";

import RoomDetailSlider from "./RoomDetailSlider";
import RoomDetailText from "./RoomDetailText";
import "./RoomPage.css";


import { FaChild } from "react-icons/fa";
import { GiResize } from "react-icons/gi";

function RoomPage({ rooms }) {
  const [roomClicked, setRoomClick] = useState(false);
  const [roomId, setRoomId] = useState();
  const [roomInfo, setRoomInfo] = useState([]);

  // PREVENT FIRST RENDER
  const firstRender = useRef(true);

  // GETTING THE REQUIRED ROOM
  const handleRoomClick = (event) => {
    setRoomId(event.target.id);
  };

  const getOneRoomById = (roomIdByButton, roomDatabase) => {
    const filteredRoom = roomDatabase.find(
      (room) => +room.id === +roomIdByButton
    );
    setRoomInfo(filteredRoom);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    getOneRoomById(roomId, rooms);
    setRoomClick(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return (
    <>
      <body className="page">

        <h1 className="heading heading--medium">Chambres</h1>
        <hr className="heading-rule" />

        <article
          className={
            roomClicked
              ? "roomdetails__container"
              : "roomdetails__container hidden"
          }
        >
          <h1 className="heading heading--medium roompage__heading">{roomInfo?.name}</h1>
          <RoomDetailSlider targetedRoom={roomInfo} />
          <RoomDetailText targetedRoomInfo={roomInfo} />
          
        </article>

        <section className="roompage__cards-container">
          {rooms.map((room) => {
            return (
              <div className="roomcard" key={room.id}>
                <h1 className="roomcard__name">{room.name}</h1>
                <img
                  className="room-img"
                  src={room.imgs.img_url}
                  alt={room.name}
                />

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

                <p className="roomcard__pricing">
                  {room.min_price}€ à {room.max_price}€ par nuit, selon période,
                  pour deux personnes avec petit-déjeuner inclus.{" "}
                </p>

                <a href="#">
                  <button
                    id={room.id}
                    onClick={handleRoomClick}
                    className="btn btn--full btn--medium primary"
                  >
                    Voir la chambre
                  </button>
                </a>
              </div>
            );
          })}
        </section>
      </body>
    </>
  );
}

export default RoomPage;
