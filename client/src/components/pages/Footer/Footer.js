import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer__container">
      <section className="social__media">
        <div className="social__media__wrap">
          <div className="footer__link__wrapper">
            <h2 className="footer__title">A propos</h2>

            <div className="footer__links">
              <div className="footer__link__items">
                <Link to="/">Mentions Légales</Link>
                <Link to="/">C.G.U</Link>
              </div>

              <div className="footer__link__items">
                <Link to="/">Politique de confidentialité</Link>
                <Link to="/">Informations sur les cookies</Link>
              </div>
            </div>
          </div>

          <div className="social__icons">
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
          </div>
        </div>
      </section>
      <div className="website-rights">La Couette Benèze © 2022</div>
    </div>
  );
}

export default Footer;
