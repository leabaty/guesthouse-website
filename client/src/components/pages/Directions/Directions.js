import React from "react";

import "./Directions.css";


import { Button } from "../../Button";

function Directions() {
  return (
    <>
      <body className="page">

        <h1 className="heading heading--medium">Accès</h1>

        <hr className="heading-rule"/>

        <article className="directions__container">
          <section className="directions__item">
            <h2 className="undertitle">En train</h2>
            <p className="directions__description">
              {" "}
              Le domaine est situé idéalement à 2h45 de train en direct de Paris
              puis à quinze minutes en voiture.{" "}
            </p>
            <a href="https://www.sncf-connect.com/" target="_blank">
              <Button buttonSize="btn--small" buttonColor="primary">
                {" "}
                Voir sur la SNCF
              </Button>
            </a>
          </section>

          <section className="directions__item">
            <h2 className="undertitle">En voiture</h2>
            <p className="directions__description"> Coordonnées GPS : <br/> 48.8651262 <br/> 2.4014538,15</p>
            <a href="https://goo.gl/maps/m3rTrefcJg3nztf6A" target="_blank">
              <Button buttonSize="btn--small" buttonColor="primary">
                {" "}
                Voir sur Google Maps
              </Button>
            </a>
          </section>

          <section className="directions__item">
            <h2 className="undertitle">En avion</h2>
            <p className="directions__description">
              {" "}
              L'aéroport le plus proche est celui de La Rochelle, à 45 minutes
              en voiture.{" "}
            </p>
            <a href="https://www.kayak.fr/explore/PAR-LRH" target="_blank">
              <Button buttonSize="btn--small" buttonColor="primary">
                {" "}
                Voir sur Kayak
              </Button>
            </a>
          </section>
        </article>

        <section className="directions__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44289.125884555244!2d-0.6565705969738744!3d46.06963805139443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4800d7e176bee0ad%3A0x405d39260eea5f0!2s17330%20Bernay-Saint-Martin!5e0!3m2!1sfr!2sfr!4v1643208464167!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </body>
    </>
  );
}

export default Directions;
