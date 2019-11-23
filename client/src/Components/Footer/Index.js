import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer id="sticky-footer" className="py-4  text-50">
      <div className="contact row" id="contact">
        <div className="container text-left col-6" id="ConLeft">
          <h2 className="page-header">CONTACT US</h2>
          <div className="contact-content">
            <div className="name-address">
              <span className="contact-name">StarCatcher</span>
              <address>1224 Milky Way, Rd, Charlotte, North Carolina</address>
              <p className="contact-p">
                Have any questions? Want to work together? Let's talk!
              </p>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-3x"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square fa-3x"></i>
              </a>
              <a
                href="https://www.instagram.com/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-6" id="ConRight">
          {<Contact />}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
