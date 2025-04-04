import React from "react";
import { motion } from "framer-motion";
import "./Animated-home-card-4.css";
import { Link } from "react-router-dom";
const AnimatedCard4 = () => {
  return (
    <Link to="/market" className="market">
      <motion.div
        className="card4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="src\assets\artmarket.png" className="card-image4" />
        <div className="card-text4">
          <h2>Artistic Avenue</h2>
          <p>
          Discover a whimsical marketplace where creativity blooms and unique art finds a home!
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedCard4;
