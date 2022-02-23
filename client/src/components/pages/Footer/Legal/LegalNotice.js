import React from "react";

import "./legal.css";

function LegalNotice() {
  return (
    <>
      <body className="page">
        <h1 className="heading heading--medium">Mentions Légales</h1>
        <hr className="heading-rule" />

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            La Couette Benèze
          </h1>{" "}
          <p className="text legal__text legal__item --border-left">
            Bernay-Saint-Martin <br /> France
          </p>{" "}
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Contact
          </h1>

          <p className="text legal__text legal__item --border-left">
            lacouettebeneze@gmail.com
          </p>
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Société
          </h1>
          <p className="text legal__text legal__item --border-left">
            13 rue du beau chemin <br />
            16000 Bernay-Saint-Martin <br />
            <br />
            SAS La Couette Benèze <br />
            <br />
            SIREN XXXXXXX
          </p>
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Directrice de publication
          </h1>
          <p className="text legal__text legal__item --border-left">
            Léa Baty | leabaty.dev@gmail.com
          </p>
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Hébergement du site
          </h1>
          <p className="text legal__text legal__item --border-left">
            XXX | Design by <a target="_blank">Léa Baty</a>
          </p>
        </section>
      </body>
    </>
  );
}

export default LegalNotice;
