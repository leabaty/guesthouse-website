import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";

import "./Contact.css";

function ContactBase({handleChange, formData, formErrors}) {

  return (
    <>
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
    </>
  );
}

export default ContactBase;
