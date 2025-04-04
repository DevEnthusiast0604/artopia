import React from "react";
import { motion } from "framer-motion";
import "./Animated-home-card-1.css";
import {Link} from "react-router-dom"
const AnimatedCard1 = () => {
  return (
    <Link to="/arttherapy" className="therapycontainer">
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.05}}
      whileTap={{ scale: 0.95 }}
    >
      <img src="src\assets\arttherapy.png" className="card-image" />
      <div className="card-text">
        <h2>Brushes and Blessings</h2>
        <p>
          Discover a world of healing through art, where creativity
          meets therapy in a playful, colorful escape!
        </p>
        
      </div>
      
    </motion.div>
    </Link>
  );
};

export default AnimatedCard1;
