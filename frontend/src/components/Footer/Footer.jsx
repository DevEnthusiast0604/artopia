import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="cs-footer-308">
      <div className="cs-container">
        <div className="cs-logo-group">
          <a aria-label="go back to home" className="cs-logo" href="">
            <img
              className="cs-logo-img"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="src/assets/logonobg.png"
              alt="logo"
            />
          </a>
          <h2 className="cs-text-header">Artopia: Connect, Create, and Inspire</h2>
          <p className="cs-text">
            Join a vibrant community where artists can showcase their work,
            connect with fellow creatives, sell their art, explore art therapy,
            and access educational content. Discover your artistic journey with
            Artopia.
          </p>
        </div>
        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Sitemap</span>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link" href="/about">
              About
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link" href="/market">
              Market
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link" href="/artcafe">
              Social Network
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link" href="/contactus">
              Contact
            </a>
          </li>
        </ul>
        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Sections</span>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link">
              Social Networking
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link">
              E-commerce
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link">
              Art Therapy
            </a>
          </li>
          <li className="cs-nav-li">
            <a className="cs-nav-link">
              Educational Content
            </a>
          </li>
        </ul>
        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Contact</span>
          </li>
          <li className="cs-nav-li">
            <img
              className="cs-icon"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone-stroke.svg"
              alt="phone"
              width="24"
              height="24"
            />
            <a className="cs-nav-link cs-phone" href="tel: 123-456-7890">
              (000) 000-0000
            </a>
          </li>
          <li className="cs-nav-li">
            <img
              className="cs-icon"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/email-stroke.svg"
              alt="email"
              width="24"
              height="24"
            />
            <a
              className="cs-nav-link cs-email"
              href="mailto: hwessamina@gmail.com"
            >
              artopia@artopia.com
            </a>
          </li>
          <li className="cs-nav-li">
            <img
              className="cs-icon"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin-stroke.svg"
              alt="pin"
              width="24"
              height="24"
            />
            <a
              className="cs-nav-link cs-address"
              href=""
              target="_blank"
              rel="noopener"
            >
              123 Avenue Street
              <br /> Oak Harbor, WA 98101
            </a>
          </li>
        </ul>
      </div>
      <div className="cs-bottom">
        <span className="cs-copyright">
          {" "}
          &copy; {new Date().getFullYear()} Artopia. All rights reserved.
          Unauthorized copying, reproduction, or distribution of this material
          is prohibited.{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
