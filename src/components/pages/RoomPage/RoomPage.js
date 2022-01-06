import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import RoomPicSlider from "./RoomPicSlider";
import "./RoomPage.css";

import { FaChild, FaAccessibleIcon, FaRegCompass } from "react-icons/fa";
import { BiBed, BiLandscape } from "react-icons/bi";
import { GiResize } from "react-icons/gi";

function RoomPage({ rooms }) {
  const [roomClicked, setRoomClick] = useState(false);
  const [roomId, setRoomId] = useState();
  const [roomInfo, setRoomInfo] = useState([]);

  // on crée une variable pour vérifier quand notre rendu est effectué.
  const firstRender = useRef(true);

  // on donne l'id du bouton cliqué à notre roomId
  const handleRoomClick = (event) => {
    setRoomId(event.target.id);
  };

  // ensuite, on va chercher la chambre qui correspond à cet id
  const getOneRoomById = (roomIdbyButton, roomDatabase) => {
    const filteredRoom = roomDatabase.find(
      (room) => +room.id === +roomIdbyButton
    );
    // console.log("4 - func getOneRoombyId, the filteredRoom is " + filteredRoom);
    setRoomInfo(filteredRoom);
  };

  //  on exécute ensuite les fonctions dans l'ordre : d'abord, trouver la chambre, puis afficher le composant si il y a bien eu un clic
  useEffect(() => {
    // on va utiliser notre variable de vérification de rendu pour la mettre sur "faux" puis stopper le useEffect au premier rendu. Aux rendus suivants, elle sera déjà sur faux et le reste s'exécutera.
    if (firstRender.current) {
      // console.log("1 - useEffect prevented");
      firstRender.current = false;
      return;
    }
    getOneRoomById(roomId, rooms);
    // console.log("2 - func handleRoomClick, the roomId is " + roomId);
    // console.log("3 - useEffect is working, getOneRoombyId is triggered");
    setRoomClick(true);
    // console.log("5 - useEffect is working, setRoomClick:true is triggered");
  }, [roomId]);

  return (
    <>
      <div
        className={
          roomClicked ? "roomdetails-container" : "roomdetails-container hidden"
        }
      >
        <h1 className="heading">{roomInfo?.name}</h1>

        <RoomPicSlider targetedRoom={roomInfo} />

        {/* <img
          className="room-img"
          src={roomInfo?.cover_img}
          alt={roomInfo?.name}
        /> */}

        <div className="room-characteristics">
          <div className="room-characteristics-item">
            <FaChild />
            <p className="room-characteristics-item-info">
              {roomInfo?.max_pax_adults}
            </p>
          </div>

          <div className="room-characteristics-item child">
            <FaChild />
            <p className="room-characteristics-item-info">
              {roomInfo?.max_pax_children}
            </p>
          </div>

          <div className="room-characteristics-item">
            <GiResize />
            <p className="room-characteristics-item-info">
              {roomInfo?.square_meters}m²
            </p>
          </div>

          <div className="room-characteristics-item">
            <BiBed />
            <p className="room-characteristics-item-info">
              {roomInfo?.bed_type}
            </p>
          </div>

          <div className="room-characteristics-item">
            <FaRegCompass />
            <p className="room-characteristics-item-info">
              {roomInfo?.cardinalities}
            </p>
          </div>

          <div className="room-characteristics-item">
            <BiLandscape />
            <p className="room-characteristics-item-info">{roomInfo?.view}</p>
          </div>
        </div>
        <p className="room-description">{roomInfo?.description}</p>
        <p className="room-pricing">
          {roomInfo?.min_price}€ à {roomInfo?.max_price}€ par nuit, selon
          période, pour deux personnes avec petit-déjeuner inclus.
        </p>
      </div>

      <div className="roompage-cards-container">
        {rooms.map((room) => {
          return (
            <div className="room-card" key={room.id}>
              <h1 className="room-card-name">{room.name}</h1>
              <img
                className="room-img"
                src={room.cover_img}
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
