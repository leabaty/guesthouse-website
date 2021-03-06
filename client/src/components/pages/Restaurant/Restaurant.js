import React from "react";

import Article from "../../Article";
import menu from "./MenuPDF/carte-restaurant.pdf";

import "./Restaurant.css";


import {
  restaurantObj1,
  restaurantObj2,
  restaurantObj3,
} from "../../../data/restaurantData";

import FadeInSection from "../../../utils/fadeIn.js";

function Restaurant() {
  return (
    <>
      <body className="page">
        <h1 className="heading heading--medium">Table d'hôtes</h1>
        <hr className="heading-rule" />

        <FadeInSection>
        <a href={menu} target="_blank">
          <button className="btn btn--full btn--wide primary restaurant__btn">
            Voir le Menu du moment
          </button>
        </a>
        <p className="text">Réservation au 06 12 34 56 78</p>
        </FadeInSection>

        <FadeInSection>
          <Article {...restaurantObj1} />
        </FadeInSection>

        <FadeInSection>
          <Article {...restaurantObj2} />
        </FadeInSection>

        <FadeInSection>
          <Article {...restaurantObj3} />
        </FadeInSection>

        <FadeInSection>
        <a href={menu} target="_blank">
          <button className="btn btn--full btn--wide primary restaurant__btn">
            Voir le Menu du moment
          </button>
        </a>
        <p className="text">Réservation au 06 12 34 56 78</p>
        </FadeInSection>
      </body>
    </>
  );
}

export default Restaurant;
