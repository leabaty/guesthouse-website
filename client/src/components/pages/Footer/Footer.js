import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer__container">

      <div className="social__media">
        <div className="social__media__wrap">

          <section className="footer__link__wrapper">
            <h2 className="footer__title">A propos</h2>

            <div className="footer__links">
              <div className="footer__link__items">
                <Link to="/mentions-legales">Mentions Légales</Link>
                <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
              </div>

              <div className="footer__link__items">
                <div className="website-rights">La Couette Benèze © 2022</div>
              </div>
            </div>
          </section>

          <section className="social__icons">
            <Link
              className="social__icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social__icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>

            <Link
              className="social__icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </section>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
