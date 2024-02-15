import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';
// No need to import Link from 'react-scroll' for the Facebook link

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Keep Instagram link as is or modify as needed for in-page navigation or external link */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556260496193" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2024 Hazolt</p>
    </div>
  );
};

export default Footer;
