import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
