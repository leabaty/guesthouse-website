import React from "react";

import "./Contact.css";

function ContactInfo({infoClicked, handleChange, formData}) {
  return (
    <>
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
    </>
  );
}

export default ContactInfo;
