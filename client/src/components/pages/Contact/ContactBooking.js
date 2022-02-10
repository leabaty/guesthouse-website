import React from "react";

import DatePicker from "react-datepicker";

import "./Contact.css";
import "../../pages/_Styles.css";
import "./react-datepicker.css";

function ContactBooking({bookingClicked, handleRoomSelect, rooms, startDate, endDate, onDateChange, handleChange, formData, adultPaxOptions, childPaxOptions}) {
  return (
    <>

      <div
        className={
          bookingClicked
            ? "contact-form__booking"
            : "contact-form__booking hidden"
        }
      >
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
    </>
  );
}

export default ContactBooking;
