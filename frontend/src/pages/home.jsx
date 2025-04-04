import React from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import "./pages_styling/home.css";
import AnimatedCard1 from "../components/animated_box/Animated-home-card-1";
import AnimatedCard2 from "../components/animated_box/Animated-home-card-2";
import AnimatedCard3 from "../components/animated_box/Animated-home-card-3";
import AnimatedCard4 from "../components/animated_box/Animated-home-card-4";
import "@fontsource-variable/grandstander";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="home">
      
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <Navbar />
        <TypeAnimation
          className="artopiaheader"
          sequence={[
            500, // Delay before starting
            "Welcome to Artopia, where creativity knows no bounds! Unleash your imagination and explore 🎨 the vibrant world of art with us! 🎨",
            1000, // Delay after finishing
          ]}
          speed={50} // Speed at which characters are typed (in milliseconds)
          style={{ fontSize: "2em" }} // Custom styling for the text
          repeat={Infinity} // Repeat the animation indefinitely
        />

        <img src="src\assets\divider.png" className="divider" />

        <AnimatedCard1 />
        <AnimatedCard2 />
        <AnimatedCard3 />
        <AnimatedCard4 />

        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
