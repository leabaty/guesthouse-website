import React from "react";

import "./Location.css";

import { Button } from "../../Button";

function Location() {
  return (
    <>
      <div className="location-page">

        <h1>Accès</h1>

        <div className="location-container">

        <div className="location-item">
          <h2>En train</h2>
          <p className="location-description">
            {" "}
            Le domaine est situé idéalement à 2h45 de train en direct de Paris
            puis à quinze minutes en voiture.{" "}
          </p>
          <a href="https://www.oui.sncf/" target="_blank">
          <Button buttonSize="btn--small" buttonColor="primary"> Voir sur la SNCF</Button>
          </a>
          
        </div>

        <div className="location-item">
          <h2>En voiture</h2>
          <p className="location-description"> Coordonnées GPS : </p>
          <a href="https://goo.gl/maps/m3rTrefcJg3nztf6A" target="_blank">
          <Button buttonSize="btn--small" buttonColor="primary"> Voir sur Google Maps</Button>
          </a>
        </div>

        <div className="location-item">
          <h2>En avion</h2>
          <p className="location-description">
            {" "}
            L'aéroport le plus proche est celui de La Rochelle, à 45 minutes en
            voiture.{" "}
          </p>
          <a href="https://www.kayak.fr/explore/PAR-LRH" target="_blank">
          <Button buttonSize="btn--small" buttonColor="primary"> Voir sur Kayak</Button>
          </a>
        </div>

        </div>

        <div className="location-map">

        </div>



      </div>
    </>
  );
}

export default Location;
