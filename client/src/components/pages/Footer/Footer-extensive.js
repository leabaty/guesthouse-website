import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import { Button } from "../../Button";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "../../../assets/images/0-couette-beneze-logo.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <section className="footer__subscription">
          <p className="footer__subscription__heading">
            Restez à l'écoute de nos actualités
          </p>
          <p className="footer__subscription__text">
            Notre newsletter vous permettra de recevoir automatiquement et
            gratuitement nos actualités. Vous pourrez vous désinscrire à tout
            moment.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer__input"
                name="email"
                type="email"
                placeholder="Votre adresse email"
              />
              <Button buttonStyle="btn--full">Je m'abonne !</Button>
            </form>
          </div>
        </section>

        <section className="footer__links">
          <div className="footer__link__wrapper">
            <div className="footer__link__items">
              <h2>A propos</h2>
              <Link to="/">Livre d'Or</Link>
              <Link to="/">Mentions Légales</Link>
              <Link to="/">C.G.U</Link>
              <Link to="/">C.G.V</Link>
              <Link to="/">Politique de confidentialité</Link>
              <Link to="/">Informations sur les cookies</Link>
            </div>

            <div className="footer__link__items">
              <h2>Nous joindre</h2>
              <Link to="/">Formulaire de contact</Link>
              <Link to="/">Plan d'accès</Link>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </section>
      </div>

      <section className="social__media">
        <div className="social__media__wrap">
          <div className="footer__logo">
            <Link to="/" className="social__logo">
              <img
                src={logo}
                alt="logo-couette-beneze"
                className="navbar__icon"
              />
              La Couette Benèze
            </Link>
          </div>
          <small className="website-rights">La Couette Benèze © 2022</small>
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
    </div>
  );
}

export default Footer;
