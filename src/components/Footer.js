import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link>
          <InstagramIcon />
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=61556260496193">
          <FacebookIcon />
        </Link>
      </div>
      <p> &copy; 2024 Hazolt</p>
    </div>
  );
};

export default Footer;
