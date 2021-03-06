import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from "./Button";
import "./Navbar.css";

import logo from "../assets/images/0-couette-beneze-logo.webp";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Par défaut, le bouton dans le state est sur "true".
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  window.addEventListener("resize", showButton);
  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container container">
          <Link to="/" className="navbar__title" onClick={closeMobileMenu}>
            <img src={logo}  alt="logo-couette-beneze" className="navbar__icon" />
            La Couette Benèze
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <HiOutlineMenuAlt3 />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/chambres"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Chambres
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/table" className="nav-links" onClick={closeMobileMenu}>
                Table
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                to="/tarifs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tarifs et disponibilités
              </Link>
            </li> */}

            <li className="nav-item">
              <Link to="/acces" className="nav-links" onClick={closeMobileMenu}>
                Accès
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/a-propos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                A propos
              </Link>
            </li>

            <li className="nav-btn">
              {button ? (
                <Link to="/contact" className="btn-link">
                  <Button buttonStyle="btn--outline">Contact</Button>
                </Link>
              ) : (
                <Link
                  to="/contact"
                  className="btn-link"
                  onClick={closeMobileMenu}
                >
                  <Button buttonStyle="btn--full" buttonSize="btn--mobile">
                    Contact
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
