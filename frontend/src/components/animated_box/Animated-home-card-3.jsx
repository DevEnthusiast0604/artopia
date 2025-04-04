import React from "react";
import { motion } from "framer-motion";
import "./Animated-home-card-3.css";
import { Link } from "react-router-dom";
const AnimatedCard3 = () => {
  return (
    <Link to="/educationalart" className="eduart">
      <motion.div
        className="card3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="src\assets\eduart.png" className="card-image3" />
        <div className="card-text3">
          <h2>Creative Academia</h2>
          <p>
            Explore a delightful blog where creativity meets learning, and
            artistic minds share their colorful wisdom!
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedCard3;
