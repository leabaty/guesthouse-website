import React from "react";
import { Link } from "react-router-dom";

import "./Article.css";

import { Button } from "./Button";

function Article({
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__landing-section" : "home__landing-section dark Bg"
        }
      >
        <div className="container">
          <div
            className="row home__landing-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
              // afin d'inverser le sens de présentation (texte image ou image texte)
            }}
          >
            <div className="col">
              <div className="home__landing-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__landing-subtitle"
                      : "home__landing-subtitle dark"
                  }
                >
                  {description}
                </p>

                {/*TODO La section bouton doit pouvoir changer ou être optionnelle*/}

                {/* <Link to="/contact">
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    {buttonLabel}
                  </Button>
                </Link> */}
                
              </div>
            </div>

            <div className="col">
              <div className="home__landing-img-wrapper">
                <img
                  src={img}
                  alt={alt}
                  className="home__landing-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
