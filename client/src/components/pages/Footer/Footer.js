import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import { Button } from "../../Button";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "../../../assets/images/0-couette-beneze-logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Restez à l'écoute de nos actualités
          </p>
          <p className="footer-subscription-text">
            Notre newsletter vous permettra de recevoir automatiquement et
            gratuitement nos actualités. Vous pourrez vous désinscrire à tout
            moment.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Votre adresse email"
              />
              <Button buttonStyle="btn--full">Je m'abonne !</Button>
            </form>
          </div>
        </section>

        <section className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>A propos</h2>
              <Link to="/">Livre d'Or</Link>
              <Link to="/">Mentions Légales</Link>
              <Link to="/">C.G.U</Link>
              <Link to="/">C.G.V</Link>
              <Link to="/">Politique de confidentialité</Link>
              <Link to="/">Informations sur les cookies</Link>
            </div>

            <div className="footer-link-items">
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

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src={logo}
                alt="logo-couette-beneze"
                className="navbar-icon"
              />
              La Couette Benèze
            </Link>
          </div>
          <small className="website-rights">La Couette Benèze © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>

            <Link
              className="social-icon-link"
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
