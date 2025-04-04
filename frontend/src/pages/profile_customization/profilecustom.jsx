import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./biofield.css";
import Footer from "../../components/Footer/Footer.jsx";

const ProfileCustom = () => {
  const { scrollYProgress } = useScroll();
  const [selectedFileName, setSelectedFileName] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file.name); // Set the file name to state
  };

  return (
    <div>
      {/* Upper Scroll Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* BioField Form */}
      <div id="bioform">
        <h1>Customize Your Profile</h1>
        <img src=".\src\assets\artopialogo.png" id="logo" />
        <form method="post">
          <label htmlFor="bio">Write a short bio:</label>
          <textarea
            rows="2"
            placeholder="Tell us a bit about yourself !"
            className="textarea"
          ></textarea>
          <button type="button">
            <img className="butimg" src="src/assets/plus.png" alt="Upload" />
            <input type="file" onChange={handleFileChange} />
          </button>
          {/* Conditionally display the uploaded file name */}
          {selectedFileName && <p>Uploaded Image: {selectedFileName}</p>}
          {!selectedFileName && (
            <p>Upload Your Image (Wait until the image's name pops up)</p>
          )}

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileCustom;
