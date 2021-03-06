import React from "react";
import { Link } from "react-router-dom";

import NotFoundImg from "../../../assets/images/4-NotFound.svg"
import "./NotFound.css";

import { Button } from "../../Button";

function NotFound() {
  return (
    <body className="not-found__container">
      <img
        className="not-found__img"
        src={"https://i.ibb.co/4J4c7FZ/NotFound.png"}
        src={NotFoundImg}
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
          <Link to="/contact">
            <Button buttonSize="btn--large" buttonColor="primary">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default NotFound;
