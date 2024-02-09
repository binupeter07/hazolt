import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Button } from "@mui/material";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavbar = () => setShowMenu(!showMenu);
  return (
    <div className="navbar">
      <div className="leftSide" id={showMenu ? "open" : "close"}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={showMenu ? "hiddenLinks" : "rightSide"}>
        <Link to="/" style={{ cursor: 'pointer' }}>Home</Link>
        <Link to="products" style={{ cursor: 'pointer' }} smooth={true} duration={500}>
          Products
        </Link>
        <Link to="about" style={{ cursor: 'pointer' }} smooth={true} duration={500}>
          About
        </Link>
        <Link to="contact" style={{ cursor: 'pointer' }} smooth={true} duration={500}>
          Contact
        </Link>
        <Button onClick={toggleNavbar}>
          <ReorderIcon />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
