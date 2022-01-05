import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./RoomPage.css";

import { FaChild, FaAccessibleIcon, FaRegCompass } from "react-icons/fa";
import { BiBed, BiLandscape } from "react-icons/bi";
import { GiResize } from "react-icons/gi";

function RoomPage({ rooms }) {
  const [roomClicked, setRoomClick] = useState(false);
  const [roomId, setRoomId] = useState();
  const [roomInfo, setRoomInfo] = useState([]);

  // on donne l'id du bouton cliqué à notre roomId
  const handleRoomClick = (event) => {
    setRoomId(event.target.id)

    setRoomClick(true);
    console.log(roomId);
  };

  // // ensuite, on va chercher la chambre qui correspond à cet id
  // const getOneRoomById = (roomId2, roomsData) => {
  //   const filteredRoom = roomsData.find((room) => room.id === roomId2);
  //   setRoomInfo(filteredRoom);
  // };

  // //  on exécute ensuite les fonctions dans l'ordre : d'abord, trouver la chambre, puis afficher le composant si il y a bien eu un clic
  // useEffect(() => {
  //   getOneRoomById(roomId, rooms);
  //   setRoomClick(true);
  // }, [roomId]);

  return (
    <>
      <div
        className={
          roomClicked ? "roomdetails-container" : "roomdetails-container hidden"
        }
      >
        <h1 className="heading">{roomInfo?.name}</h1>
        <img
          className="room-img"
          src={roomInfo?.img_url}
          alt={roomInfo?.name}
        />

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

              <p className="room-pricing">
                {room.min_price}€ à {room.max_price}€ par nuit, selon période,
                pour deux personnes avec petit-déjeuner inclus.{" "}
              </p>

              <Link to="/chambres">
                <button
                  id={room.id}
                  onClick={handleRoomClick}
                  className="room-card-btn"
                >
                  Voir la chambre
                </button>

                {/* <Button
                  id={room.id}
                  onClick={handleRoomClick}
                  className="room-card-btn"
                  buttonSize="btn--medium"
                  buttonColor="primary"
                >
                  Voir la chambre {room.id}
                </Button> */}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RoomPage;
