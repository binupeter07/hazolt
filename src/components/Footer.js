import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <p> &copy; 2024 Hazolt</p>
    </div>
  );
};

export default Footer;
