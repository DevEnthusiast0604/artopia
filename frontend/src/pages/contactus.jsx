import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./pages_styling/contactus.css";
import Footer from "../components/Footer/Footer.jsx";

const Contactus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <section id="contsec">
        <div className="cs-container">
          <form className="cs-form" name="Contact Form" method="post">
            <div className="cs-content">
              <span className="cs-topper">Contact Us</span>
              <h2 className="cs-title">Send Us An Inquiry</h2>
            </div>
            <label className="cs-label">
              Name
              <input
                className="cs-input"
                required
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <label className="cs-label cs-email">
              Email
              <input
                className="cs-input"
                required
                type="email"
                name="email"
                placeholder="Email"
              />
            </label>
            <label className="cs-label">
              Message
              <textarea
                className="cs-input cs-textarea"
                required
                name="Message"
                placeholder="Write message..."
              ></textarea>
            </label>
            <button className="cs-button-solid cs-submit" type="submit">
              Send Question
            </button>
          </form>
          <div className="cs-content">
            <span className="cs-topper">Asked Questions</span>
            <h2 className="cs-title">Frequently Asked Questions</h2>
            <ul className="cs-faq-group">
              <li
                className={`cs-faq-item ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => toggleActive(0)}
              >
                <button className="cs-button">
                  <span className="cs-button-text">
                    Where can I promote my artwork?
                  </span>
                </button>
                <p className="cs-item-p">
                  Our platform includes a marketplace where artists can sell
                  their original pieces, connecting with buyers who appreciate
                  and support their work
                </p>
              </li>
              <li
                className={`cs-faq-item ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => toggleActive(1)}
              >
                <button className="cs-button">
                  <span className="cs-button-text">
                    How do I expand my network?
                  </span>
                </button>
                <p className="cs-item-p">
                  Interaction and collaboration are at the heart of Artopia.
                  Members can comment on posts, join discussions, and build
                  meaningful connections with fellow artists
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
};

export default Contactus;
