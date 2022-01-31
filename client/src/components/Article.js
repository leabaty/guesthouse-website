import React from "react";

import "./Article.css";
import "../components/pages/_Styles.css";

function Article({ headLine, description, img, alt, imgStart }) {
  return (
    <>
      <div className="article__container">
        <div
          className="row article__row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="col">
            <div className="article__text-wrapper">
              <h1 className="heading">{headLine}</h1>
              <p className="article__text">{description}</p>
            </div>
          </div>

          <div className="col">
            <div className="article__img-wrapper">
              <img src={img} alt={alt} className="article__img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
