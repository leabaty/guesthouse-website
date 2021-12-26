import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiKeyring } from "react-icons/gi";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
        </div>
      </div>
    </>
  );
}

export default Navbar;
