import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiKeyring } from "react-icons/gi";
import { Button } from "./Button";
import "./Navbar.css";

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
  // Avec cette condition, on vérifie la taille du navigateur avec un useEffect (qui n'intervient qu'une fois, au démarrage du site)
  useEffect(() => {
    showButton();
  }, []);
  // et cela va donc déterminer si le bouton doit être visible ou non en changeant sa valeur dans le state.

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <GiKeyring className="navbar-icon" />
            Domaine de Bernay
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

            <li className="nav-item">
              <Link
                to="/tarifs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tarifs et disponibilités
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/acces" className="nav-links" onClick={closeMobileMenu}>
                Accès
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
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Contact
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
