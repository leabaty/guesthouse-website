import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";

import { AiOutlineUser } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";

import "./Contact.css";
import "../../pages/_Styles.css";
import "./react-datepicker.css";

function Contact(rooms) {
  // STATE
  const [infoClicked, setInfoClick] = useState(false);
  const [bookingClicked, setBookingClick] = useState(false);

  const [selectedRoomId, setRoomIdBySelect] = useState();
  const [selectedRoomData, setSelectedRoomData] = useState([]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [adultPaxOptions, setAdultPaxOptions] = useState();
  const [childPaxOptions, setChildPaxOptions] = useState();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [sent, setSent] = useState(false);

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
    setAdultPaxOptions(
      Array.from(
        { length: roomData.max_pax_adults - roomData.min_pax_adults + 1 },
        (v, k) => k + roomData.min_pax_adults
      )
    );
    setChildPaxOptions(
      Array.from({ length: roomData.max_pax_children + 1 }, (v, k) => k)
    );
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    getRoomDataBySelect(selectedRoomId, rooms.rooms);
  }, [selectedRoomId]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setMinMaxOptions(selectedRoomData);
  }, [selectedRoomData]);

  // REACT-DATE-PICKER
  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  registerLocale("fr", fr);

  // SETTING THE FORM OBJECT
  const handleChange = (event) => {
    const value = event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  // SUBMITTING
  const validate = (value) => {
    const errors = {};

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const regexPhone = /^\d{10,}$/;

    if (!value.firstname) {
      errors.firstname = "⚠ Ce champ est obligatoire";
    }
    if (!value.lastname) {
      errors.lastname = "⚠ Ce champ est obligatoire";
    }
    if (!value.email) {
      errors.email = "⚠ Ce champ est obligatoire";
    } else if (!regexEmail.test(value.email)) {
      errors.email =
        "⚠ Merci de vérifier votre saisie, le format de l'email ne correspond pas";
    }
    if (!value.phone) {
      errors.phone = "⚠ Ce champ est obligatoire";
    } else if (!regexPhone.test(value.phone)) {
      errors.phone =
        "⚠ Merci de vérifier votre saisie, le numéro doit comporter au minimum 10 chiffres";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);

    setFormData((prevState) => {
      return {
        ...prevState,
        startDate,
        endDate,
        room: selectedRoomData.name,
      };
    });

    if (bookingClicked === true) {
      sendEmail("send_booking_request");
      sendEmail("send_booking_recap");
    } else {
      sendEmail("send_info_request");
      sendEmail("send_info_recap");
    }
  };

  // SENDING THE CONFIRMATION EMAIL
  const sendEmail = async (emailURL) => {
    setSent(true);
    try {
      await axios.post(`http://localhost:5000/${emailURL}`, {
        formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  return (
    <>
      {/*FORMULAIRE DE BASE*/}

      <div className="page">

      <h1 className="heading heading--medium">Contact</h1>
      <hr className="heading-rule" />

      <p className="isolated-text">Nous sommes également joignables au 06 12 34 56 78</p>

      <form className="contact-form" onSubmit={handleSubmit}>


        <div className="contact-form__base">
          <div className="contact-form__element">
            <div className="contact-form__item">
              <AiOutlineUser />
              <input
                className="contact-form__input --base"
                placeholder="Prénom"
                type="text"
                name="firstname"
                onChange={handleChange}
                value={formData.firstname}
              />
              <p className="contact-form__warning">{formErrors.firstname}</p>
            </div>
          </div>

          <div className="contact-form__element">
            <div className="contact-form__item">
              <AiOutlineUser />
              <input
                className="contact-form__input --base"
                placeholder="Nom"
                type="text"
                name="lastname"
                onChange={handleChange}
                value={formData.lastname}
              />
              <p className="contact-form__warning">{formErrors.lastname}</p>
            </div>
          </div>

          <div className="contact-form__element">
            <div className="contact-form__item ">
              <FiPhone />
              <input
                className="contact-form__input --base"
                placeholder="Numéro de téléphone"
                type="tel"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
              />
              <p className="contact-form__warning">{formErrors.phone}</p>
            </div>
          </div>

          <div className="contact-form__element">
            <div className="contact-form__item">
              <FiMail />
              <input
                className="contact-form__input --base"
                placeholder="Adresse email"
                type="text"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <p className="contact-form__warning">{formErrors.email}</p>
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
              <option value="Pas de chambre sélectionnée">
                Sélectionnez votre hébergement...
              </option>
              {rooms.rooms.map((room) => {
                return (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                );
              })}
            </select>
          </div>

          <DatePicker
            selected={startDate}
            onChange={onDateChange}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            locale="fr"
            selectsRange
            inline
          />

          <div className="contact-form__row-block">
            <div className="contact-form__element">
              <p className="contact-form__item title">Adultes</p>
              <select
                className="contact-form__input --pax adult-pax"
                id="adult-pax"
                type="select"
                name="adults"
                onChange={handleChange}
                value={formData.adults}
              >
                <option>Sélectionnez</option>
                {adultPaxOptions?.map((numberOfPax) => {
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
                type="select"
                name="children"
                onChange={handleChange}
                value={formData.children}
              >
                <option>Sélectionnez</option>
                {childPaxOptions?.map((numberOfPax) => {
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
              type="text"
              name="booking_request"
              onChange={handleChange}
              value={formData.booking_request}
            />
          </div>

          {/* <label className="contact-form__element checkbox">
            <input name="email-booking-confirmation" type="checkbox" />
            Envoyer une copie à mon adresse email
          </label> */}


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
                type="text"
                name="information_request"
                onChange={handleChange}
                value={formData.information_request}
              />
            </div>

            <button className="btn btn--full btn--medium primary">
              Envoyer ma demande
            </button>
          </div>
        </div>

        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>Formulaire validé</div>
        ) : (
          <div>
            Le formulaire contient des erreurs, merci de vérifier votre saisie.
          </div>
        )}

        {!sent ? (
          <h1>The email hasn't been sent</h1>
        ) : (
          <h1>The email has been sent</h1>
        )}
      </form>
      </div>
    </>
  );
}

export default Contact;
