import React from "react";
import "./Footer.css";
import github from "../../assets/images/github.png";
import email from "../../assets/images/email.png";
import linkedIn from "../../assets/images/linkedIn.png";
import stackoverflow from "../../assets/images/stackoverflow.png";
function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:hjohnsick@yahoo.com" target="_blank" rel="noreferrer">
        <img src={email} alt="Email Icon" className="contact-img" />
      </a>
      <a href="https://github.com/hjohnsick" target="_blank" rel="noreferrer">
        <img src={github} alt="Github Icon" className="contact-img" />
      </a>
      <a
        href="https://www.linkedin.com/in/heather-johnsick/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn Icon" className="contact-img" />
      </a>
      <a
        href="https://stackoverflow.com/users/12411452/dev-in-training"
        target="_blank"
        rel="noreferrer"
      >
        <img src={stackoverflow} alt="stackoverflow" className="contact-img" />
      </a>
    </footer>
  );
}

export default Footer;
