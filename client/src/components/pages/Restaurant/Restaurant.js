import React from "react";
import Article from "../../Article";
import {
  restaurantObj1,
  restaurantObj2,
  restaurantObj3,
} from "../../../data/restaurantData";

import "./Restaurant.css";
import "../../pages/Pages.css";

function Restaurant() {
  return (
    <>
      <div className="page">
        <h1 className="heading heading--medium">Table d'hôtes</h1>
        <hr className="heading-rule" />

        <Article {...restaurantObj1} />
        <Article {...restaurantObj2} />
        <Article {...restaurantObj3} />
      </div>
    </>
  );
}

export default Restaurant;
