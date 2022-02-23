import React from "react";

import "./Article.css";


function Article({ headLine, description, img, alt, imgStart }) {
  return (
    <>
      <article className="article__container">
        <div
          className="row article__row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <section className="col">
            <div className="article__text-wrapper">
              <h1 className="heading">{headLine}</h1>
              <p className="article__text">{description}</p>
            </div>
          </section>

          <section className="col">
            <div className="article__img-wrapper">
              <img src={img} alt={alt} className="article__img" />
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default Article;
