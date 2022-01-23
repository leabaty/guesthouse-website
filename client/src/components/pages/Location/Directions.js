import React from "react";

import "./Directions.css";

import { Button } from "../../Button";

function Directions() {
  return (
    <>
      <div className="directions-page">

        <h1>Accès</h1>

        <div className="directions-container">

        <div className="directions-item">
          <h2>En train</h2>
          <p className="directions-description">
            {" "}
            Le domaine est situé idéalement à 2h45 de train en direct de Paris
            puis à quinze minutes en voiture.{" "}
          </p>
          <a href="https://www.oui.sncf/" target="_blank">
          <Button buttonSize="btn--small" buttonColor="primary"> Voir sur la SNCF</Button>
          </a>
          
        </div>

        <div className="directions-item">
          <h2>En voiture</h2>
          <p className="directions-description"> Coordonnées GPS : </p>
          <a href="https://goo.gl/maps/m3rTrefcJg3nztf6A" target="_blank">
          <Button buttonSize="btn--small" buttonColor="primary"> Voir sur Google Maps</Button>
          </a>
        </div>

        <div className="directions-item">
          <h2>En avion</h2>
          <p className="directions-description">
            {" "}
            L'aéroport le plus proche est celui de La Rochelle, à 45 minutes en
            voiture.{" "}
          </p>
          <a href="https://www.kayak.fr/explore/PAR-LRH" target="_blank">
          <Button buttonSize="btn--small" buttonColor="primary"> Voir sur Kayak</Button>
          </a>
        </div>

        </div>

        <div className="directions-map">

        </div>



      </div>
    </>
  );
}

export default Directions;
