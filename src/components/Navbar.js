import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiKeyring } from "react-icons/gi";
import { Button } from "./Button";

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
  // Avec cette condition, on vérifie la taille du navigateur avec un eventlistener
  // et on détermine si le bouton doit être visible ou non en changeant sa valeur dans le state.

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <GiKeyring className="navbar-icon" />
            Maison d'hôtes
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <HiOutlineMenuAlt3 />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/chambres" className="nav-links">
                Chambres
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/table" className="nav-links">
                Table
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/tarifs" className="nav-links">
                Tarifs et disponibilités
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/acces" className="nav-links">
                Accès
              </Link>
            </li>

            <li className="nav-btn">
              {button ? (
                <Link to="/contact" className="btn-link">
                  <Button buttonStyle="btn--outline">Contact</Button>
                </Link>
              ) : (
                <Link to="/contact" className="btn-link">
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
