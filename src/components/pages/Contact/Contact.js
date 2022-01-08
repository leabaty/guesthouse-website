import React from "react";

import { AiOutlineUser, AiFillWarning } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsPen } from "react-icons/bs";

function Contact() {
  return (
    <>
      {/*FORMULAIRE DE BASE*/}
      <form className="contact-form">
        <div className="contact-form-base">
          <div className="contact-form-element">
            <div className="contact-form-item">
              <AiOutlineUser />
              <input className="contact-form-input" placeholder="Prénom" />
            </div>
          </div>

          <div className="contact-form-element">
            <div className="contact-form-item">
              <AiOutlineUser />
              <input className="contact-form-input" placeholder="Nom" />
            </div>
          </div>

          <div className="contact-form-element">
            <div className="contact-form-item">
              <FiPhone />
              <input
                className="contact-form-input"
                placeholder="Numéro de téléphone"
              />
            </div>
          </div>

          <div className="contact-form-element">
            <div className="contact-form-item">
              <FiMail />
              <input
                className="contact-form-input"
                placeholder="Adresse email"
              />
            </div>
          </div>

          <div className="element-profile-form-child">
            <p className="profile-form__warning">
              <AiFillWarning /> Un moyen de contact est nécessaire afin de
              pouvoir confirmer la réservation.
            </p>
          </div>
        </div>

        {/*DEMANDE DE RESERVATION*/}

        <div className="contact-form-reservation">
          <div className="contact-form-element">
            <p className="contact-form-item title">Hébergement</p>
            <select className="contact-form-item select-room" id="select-room">
              {/* <option value={true}>Ouvert aux participants</option>
              <option value={false}>Fermé aux participants</option> */}
            </select>
          </div>

          <div className="contact-form-element--date">
            <p className="contact-form-item title">Du...</p>
            <input
              className="contact-form-item--date"
              type="date"
              id="booking-start-date"
              name="booking-start-date"
            />
          </div>

          <div className="contact-form-element--date">
            <p className="contact-form-item title">Au...</p>
            <input
              className="contact-form-item date"
              type="date"
              id="booking-end-date"
              name="booking-end-date"
            />
          </div>

          <div className="contact-form-element">
            <p className="contact-form-item title">Adultes</p>
            <select className="contact-form-item adult-pax" id="adult-pax">
              {/* <option value={true}>Ouvert aux participants</option>
              <option value={false}>Fermé aux participants</option> */}
            </select>
          </div>

          <div className="contact-form-element">
            <p className="contact-form-item title">
              Enfants de moins de 12 ans
            </p>
            <select className="contact-form-item child-pax" id="child-pax">
              {/* <option value={true}>Ouvert aux participants</option>
              <option value={false}>Fermé aux participants</option> */}
            </select>
          </div>

          <div className="contact-form-element">
            <textarea
              className="contact-form-booking-request"
              placeholder="Une question ? Une demande particulière ? Une option à réserver ? "
            />
          </div>
        </div>

        {/*DEMANDE D'INFORMATION*/}

        <div className="contact-form-information">
          <div className="contact-form-element">
            <textarea
              className="contact-form-booking-request"
              placeholder="Saisissez l'objet de votre demande ici... "
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
