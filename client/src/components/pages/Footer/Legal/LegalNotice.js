import React from "react";

import "./legal.css";

function LegalNotice() {
  return (
    <>
      <div className="page">
        <h1 className="heading heading--medium">Mentions Légales</h1>
        <hr className="heading-rule" />

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            La Couette Benèze
          </h1>{" "}
          <p className="isolated-text legal__text legal__item --border-left">
            Bernay-Saint-Martin <br /> France
          </p>{" "}
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Contact
          </h1>

          <p className="isolated-text legal__text legal__item --border-left">
            lacouettebeneze@gmail.com
          </p>
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Société
          </h1>
          <p className="isolated-text legal__text legal__item --border-left">
            103 avenue des Chartreux <br />
            13004 Marseille <br />
            <br />
            SAS Culot Creative <br />
            <br />
            SIREN 884479049
          </p>
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Directrice de publication
          </h1>
          <p className="isolated-text legal__text legal__item --border-left">
            Léa Baty | leabaty.dev@gmail.com
          </p>
        </section>

        <section className="legal__section">
          <h1 className="heading heading--nano legal__heading legal__item">
            Hébergement du site
          </h1>
          <p className="isolated-text legal__text legal__item --border-left">
            XXX | Design by <a target="_blank">Léa Baty</a>
          </p>
        </section>
      </div>
    </>
  );
}

export default LegalNotice;
