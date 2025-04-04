import React from "react";
import { motion } from "framer-motion";
import "./Animated-home-card-2.css";
import { Link } from "react-router-dom";
const AnimatedCard2 = () => {
  return (
    <Link to="/artcafe" className="wisdom">
      <motion.div
        className="card2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="src\assets\creativecafe.png" className="card-image2" />
        <div className="card-text2">
          <h2>Creative Café</h2>
          <p>
            Join our vibrant community of artists, where creativity thrives and
            advice flows like paint on canvas!
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedCard2;
