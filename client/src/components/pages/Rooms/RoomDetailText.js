import React from "react";
import { Link } from "react-router-dom";

import "./RoomDetailText.css";

import { AiOutlineEuro } from "react-icons/ai";
import { FaChild, FaAccessibleIcon, FaRegCompass } from "react-icons/fa";
import { BiBed, BiLandscape } from "react-icons/bi";
import { GiResize } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";

function RoomDetailText({ targetedRoomInfo }) {
  return (
    <>

    <section className="roomdetail__container">

      <div className="roomdetail__characteristics-container">

        <div className="roomdetail__characteristics">
          
          <div className="roomdetail__characteristics-item">
            <FaChild />
            <p className="roomdetail__characteristics-item-info">
              {targetedRoomInfo?.max_pax_adults}
            </p>
          </div>

          <div className="roomdetail__characteristics-item-child">
            <FaChild />
            <p className="roomdetail__characteristics-item-info">
              {targetedRoomInfo?.max_pax_children}
            </p>
          </div>

          <div className="roomdetail__characteristics-item">
            <GiResize />
            <p className="roomdetail__characteristics-item-info">
              {targetedRoomInfo?.square_meters}m²
            </p>
          </div>
          </div>

          <div className="roomdetail__characteristics">
          <div className="roomdetail__characteristics-item">
            <BiBed />
            <p className="roomdetail__characteristics-item-info">
              {targetedRoomInfo?.bed_type}
            </p>
          </div>

          <div className="roomdetail__characteristics-item">
            <FaRegCompass />
            <p className="roomdetail__characteristics-item-info">
              {targetedRoomInfo?.cardinalities}
            </p>
          </div>

          <div className="roomdetail__characteristics-item">
            <BiLandscape />
            <p className="roomdetail__characteristics-item-info">
              {targetedRoomInfo?.view}
            </p>
          </div>
          </div>

      </div>

      <p className="roomdetail__description">{targetedRoomInfo?.description}</p>

      <div className="roomdetail__characteristics-item">
        <BsCheck2Circle />
        <p className="roomdetail__characteristics-item-info">
          Inclus : {targetedRoomInfo?.amenities}
        </p>
      </div>

      <div className="roomdetail__characteristics-item">
        <AiOutlineEuro />
        <p className="roomdetail__characteristics-item-info">
          {targetedRoomInfo?.min_price}€ à {targetedRoomInfo?.max_price}€ par
          nuit, selon période, pour deux personnes avec petit-déjeuner inclus.
        </p>
      </div>

      <Link to="/contact">
        <button className="btn btn--large primary roomdetail__btn">
          Demande de réservation
        </button>
      </Link>

      </section>

      {/*TODO : Faire l'accessibilité : Petit picto avec phrase, hidden si pas accessible, visible sinon (utiliser state)*/}
    </>
  );
}

export default RoomDetailText;
