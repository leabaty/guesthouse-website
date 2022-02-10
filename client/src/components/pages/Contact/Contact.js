import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";

import ContactBase from "./ContactBase";
import ContactBooking from "./ContactBooking";
import ContactInfo from "./ContactInfo";

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

  // FILLING IN THE FORM OBJECT "LIVE" (containing the data from our guest)
  const handleChange = (event) => {
    const value = event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  // CHECKING IF THE FORM IS CORRECTLY FILLED OUT
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

  // HANDLING THE FORM SUBMIT
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
  };

  // SENDING PARAMETERS
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

  // FINALLY SENDING THIS EMAIL
  useEffect(() => {
    console.log(formErrors);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (bookingClicked === true) {
        sendEmail("send_booking_request");
        sendEmail("send_booking_recap");
      } else {
        sendEmail("send_info_request");
        sendEmail("send_info_recap");
      }
    }
    return () => {
      console.log("Toto");
    };
  }, [formErrors]);

 

  return (
    <>
      {/*FORMULAIRE DE BASE*/}

      <div className="page">
        <h1 className="heading heading--medium">Contact</h1>
        <hr className="heading-rule" />

        <p className="isolated-text">
          Nous sommes également joignables au 06 12 34 56 78
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>

          <ContactBase
            handleChange={handleChange}
            formData={formData}
            formErrors={formErrors}
            />

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

          <ContactBooking
            bookingClicked={bookingClicked}
            handleRoomSelect={handleRoomSelect}
            rooms={rooms}
            startDate={startDate}
            endDate={endDate}
            onDateChange={onDateChange}
            handleChange={handleChange}
            formData={formData}
            adultPaxOptions={adultPaxOptions}
            childPaxOptions={childPaxOptions}
          />
          <ContactInfo
            infoClicked={infoClicked}
            handleChange={handleChange}
            formData={formData}
          />

          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>Formulaire validé</div>
        ) : (
          <div>
            Le formulaire contient des erreurs, merci de vérifier votre saisie.
          </div>
        )} */}

          {!sent ? (
            <p></p>
          ) : (
            <p>
              Merci, votre demande a bien été transmise au Domaine de Bernay.{" "}
              <br />
              Une copie de votre demande vous a été adressée. <br />
              Vous recevrez une réponse sous trois jours ouvrés à l'adresse mail
              indiquée.
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Contact;
