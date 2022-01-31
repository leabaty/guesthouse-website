import React from "react";

import Article from "../../Article";
import menu from "./MenuPDF/carte-restaurant.pdf";

import "./Restaurant.css";
import "../../pages/_Styles.css";

import {
  restaurantObj1,
  restaurantObj2,
  restaurantObj3,
} from "../../../data/restaurantData";

function Restaurant() {

  return (
    <>
      <div className="page">
        <h1 className="heading heading--medium">Table d'hôtes</h1>
        <hr className="heading-rule" />

        <a href={menu} target="_blank">
          <button className="btn btn--full btn--wide primary restaurant-btn">
            Voir le Menu du moment
          </button>
        </a>

        <p className="isolated-text">Réservation au 06 12 34 56 78</p>

        <Article {...restaurantObj1} />
        <Article {...restaurantObj2} />
        <Article {...restaurantObj3} />

        <a href={menu} target="_blank">
          <button className="btn btn--full btn--wide primary restaurant-btn">
            Voir le Menu du moment
          </button>
        </a>

        <p className="isolated-text">Réservation au 06 12 34 56 78</p>
      </div>
    </>
  );
}

export default Restaurant;
