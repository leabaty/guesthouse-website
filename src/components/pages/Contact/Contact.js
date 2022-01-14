import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { AiOutlineUser, AiFillWarning } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";

import "./Contact.css";

function Contact(rooms) {
  const [infoClicked, setInfoClick] = useState(false);
  const [bookingClicked, setBookingClick] = useState(false);

  const [selectedRoomId, setRoomIdBySelect] = useState();
  const [selectedRoomData, setSelectedRoomData] = useState([]);

  const [adultPax, setAdultPax] = useState();
  const [childPax, setChildPax] = useState();

  // PREVENT FIRST RENDER
  const firstRender = useRef(true);

  // BOOKING OR INFO ? BUTTONS
  const handleInfoClick = (event) => {
    event.preventDefault();
    setInfoClick(true);
    setBookingClick(false);
  };

  const handleBookingClick = (event) => {
    event.preventDefault();
    setBookingClick(true);
    setInfoClick(false);
  };

  // PAX SELECT OPTIONS
  const handleRoomSelect = (event) => {
    setRoomIdBySelect(event.target.value);
  };

  const getRoomDataBySelect = (roomIdBySelect, roomDataBase) => {
    const correspondingRoom = roomDataBase.find(
      (room) => +room.id === +roomIdBySelect
    );
    setSelectedRoomData(correspondingRoom);
  };

  const setMinMaxOptions = (roomData) => {
    setAdultPax(
      Array.from(
        { length: roomData.max_pax_adults - roomData.min_pax_adults + 1 },
        (v, k) => k + roomData.min_pax_adults
      )
    );
    setChildPax(
      Array.from({ length: roomData.max_pax_children + 1 }, (v, k) => k)
    );
  };

  useEffect(() => {
    // ❌ 1 select late, this is not correct !
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    getRoomDataBySelect(selectedRoomId, rooms.rooms);
    setMinMaxOptions(selectedRoomData);
  }, [selectedRoomId]);

  // REACT-HOOKS-FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors); // 🦄

  return (
    <>
      {/*FORMULAIRE DE BASE*/}
      <form
        className="contact-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h2 className="heading heading--medium">Contact</h2>

        <div className="contact-form__base">
          <div className="contact-form__element">
            <div className="contact-form__item">
              <AiOutlineUser />
              <input
                {...register("firstname", {
                  required: "⚠ Ce champ est obligatoire",
                })}
                className="contact-form__input --base"
                placeholder="Prénom"
              />
              <p className="contact-form__warning">
                {errors.firstname?.message}
              </p>
            </div>
          </div>

          <div className="contact-form__element">
            <div className="contact-form__item">
              <AiOutlineUser />
              <input
                {...register("lastname", {
                  required: "⚠ Ce champ est obligatoire",
                })}
                className="contact-form__input --base"
                placeholder="Nom"
              />
              <p className="contact-form__warning">
                {errors.lastname?.message}
              </p>
            </div>
          </div>

          <div className="contact-form__element">
            <div className="contact-form__item ">
              <FiPhone />
              <input
                {...register("phone", {
                  required: "⚠ Ce champ est obligatoire",
                  minLength: {
                    value: 10,
                    message: "⚠ Vérifiez votre numéro de téléphone",
                  },
                })}
                className="contact-form__input --base"
                placeholder="Numéro de téléphone"
              />
              <p className="contact-form__warning">{errors.phone?.message}</p>
            </div>
          </div>

          <div className="contact-form__element">
            <div className="contact-form__item">
              <FiMail />
              <input
                {...register("email", {
                  required: "⚠ Ce champ est obligatoire",
                })}
                className="contact-form__input --base"
                placeholder="Adresse email"
              />
              <p className="contact-form__warning">{errors.email?.message}</p>
            </div>
          </div>
        </div>

        <h2 className="heading heading--small"> Je souhaite faire une...</h2>

        <div className="contact-form__option">
          {/* <div className="contact-form__element"> */}
          <div className="contact-form__row-block">
            {" "}
            <button
              className={
                bookingClicked
                  ? "btn btn--selected btn--medium btn--option"
                  : "btn btn--full btn--medium primary btn--option"
              }
              onClick={handleBookingClick}
            >
              Demande de réservation
            </button>
            <button
              className={
                infoClicked
                  ? "btn btn--selected btn--medium btn--option --second-block-element"
                  : "btn btn--full btn--medium primary btn--option --second-block-element"
              }
              onClick={handleInfoClick}
            >
              Demande d'information
            </button>
          </div>
        </div>
        {/* </div> */}

        {/*DEMANDE DE RESERVATION*/}

        <div
          className={
            bookingClicked
              ? "contact-form__booking"
              : "contact-form__booking hidden"
          }
        >
          {/* <h2 className="heading heading--small">Demande de réservation </h2> */}
          <div className="contact-form__element">
            <p className="contact-form__item title">Hébergement</p>
            <select
              className="contact-form__input --room select-room"
              onChange={handleRoomSelect}
            >
              <option>Sélectionnez votre hébergement...</option>
              {rooms.rooms.map((room) => {
                return (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="contact-form__row-block">
            <div className="contact-form__element">
              <p className="contact-form__item title">Du...</p>
              <input
                className="contact-form__input --date"
                type="date"
                id="booking-start-date"
                name="booking-start-date"
              />
            </div>

            <div className="contact-form__element --second-block-element">
              <p className="contact-form__item title">Au...</p>
              <input
                className="contact-form__input --date"
                type="date"
                id="booking-end-date"
                name="booking-end-date"
              />
            </div>
          </div>

          <div className="contact-form__row-block">
            <div className="contact-form__element">
              <p className="contact-form__item title">Adultes</p>
              <select
                className="contact-form__input --pax adult-pax"
                id="adult-pax"
              >
                <option>Sélectionnez</option>
                {adultPax?.map((numberOfPax) => {
                  return (
                    <option key={numberOfPax} value={numberOfPax}>
                      {numberOfPax}
                    </option>
                  );
                })}
                ;
              </select>
            </div>

            <div className="contact-form__element --second-block-element">
              <p className="contact-form__item title">
                Enfants{" "}
                <span className="contact-form__small-span">(-12 ans)</span>
              </p>
              <select
                className="contact-form__input --pax child-pax"
                id="child-pax"
              >
                <option>Sélectionnez</option>
                {childPax?.map((numberOfPax) => {
                  return (
                    <option key={numberOfPax} value={numberOfPax}>
                      {numberOfPax}
                    </option>
                  );
                })}
                ;
              </select>
            </div>
          </div>

          <div className="contact-form__element">
            <textarea
              className="contact-form__input --text"
              placeholder="Une question ? Une demande particulière ? Une option à réserver ? "
            />
          </div>

          <button className="btn btn--full btn--medium primary">
            Envoyer ma demande
          </button>
        </div>

        {/*DEMANDE D'INFORMATION*/}

        <div
          className={
            infoClicked ? "contact-form__asking" : "contact-form__asking hidden"
          }
        >
          {/* <h2 className="heading heading--small">Demande d'information</h2> */}

          <div className="contact-form__information">
            <div className="contact-form__element">
              <textarea
                className="contact-form__input --text"
                placeholder="Saisissez l'objet de votre demande ici... "
              />
            </div>

            <button className="btn btn--full btn--medium primary">
              Envoyer ma demande
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
