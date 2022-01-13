import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

import { Button } from "../../Button";

function NotFound() {
  return (
    <div className="not-found__container">
      <img
        className="not-found__img"
        src="https://i.ibb.co/4J4c7FZ/NotFound.png"
        alt="NotFound"
      />

      <div className="not-found__nav-links">
        <div className="not-found__btn">
          <Link to="/">
            <Button buttonSize="btn--large" buttonColor="primary">
              Retour à l'accueil
            </Button>
          </Link>
        </div>

        <div className="not-found__btn">
          <Link to="/">
            <Button buttonSize="btn--large" buttonColor="primary">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
