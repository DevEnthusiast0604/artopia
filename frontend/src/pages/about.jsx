import React from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import "./pages_styling/about.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./pages_styling/CarouselStyles.css";
import "@fontsource-variable/grandstander";
import { TypeAnimation } from "react-type-animation";
import { Box, Heading, Text } from "@chakra-ui/react";
import "@fontsource-variable/source-code-pro";
import Button from '@mui/material/Button';
import Footer from "../components/Footer/Footer.jsx";



const About = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="about">
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
        {/* header */}

        <TypeAnimation
          className="artopiaaboutus"
          sequence={[
            500, // Delay before starting
            "🎨 Get to Know Us 🎨",
            1000, // Delay after finishing
          ]}
          speed={50} // Speed at which characters are typed (in milliseconds)
          style={{ fontSize: "2em" }} // Custom styling for the text
          repeat={Infinity} // Repeat the animation indefinitely
        />

        <div>
          {/* Carousel Images Introducting The Website Features and a Box with more Details */}

          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={true}
            interval={3000}
          >
            <div>
              <img
                src="src/assets/slider/educationalartposts.JPG"
                alt="Image 1"
              />
            </div>
            <div>
              <img src="src/assets/slider/arttherapy.JPG" alt="Image 2" />
            </div>
            <div>
              <img
                src="src/assets/slider/communityinteraction.JPG"
                alt="Image 3"
              />
            </div>
            <div>
              <img src="src/assets/slider/showcaseartwork.JPG" alt="Image 4" />
            </div>
            <div>
              <img src="src/assets/slider/sellingart.JPG" alt="Image 5" />
            </div>
          </Carousel>

          {/* The Box containing information about the website */}

          <Box className="Box">
            <Heading className="boxheading" as="h1">
              Welcome to Artopia: A Creative Haven for Artists
            </Heading>

            <Box className="boxtexttitle"> Mission Statement: </Box>
            <Text className="boxtext">
              At Artopia, our mission is to create a vibrant and inclusive
              community where artists of all levels can share their work, learn
              from one another, and find support and inspiration.
            </Text>

            <Box className="boxtexttitle"> Community Values: </Box>
            <Text className="boxtext">
              We believe in the power of art to connect people, foster
              creativity, and promote well-being. Our community values
              inclusivity, respect, and mutual support.
            </Text>

            <Box className="boxtexttitle"> Features Overview: </Box>
            <Text className="boxtext">
              Artopia offers a range of features to support our members,
              including the ability to post and share artwork, participate in
              art therapy discussions, access educational content, and sell
              their art pieces.
            </Text>
            <Button variant="contained" style={{ backgroundColor: '#E933FF', color: '#fff', marginLeft: '250px', marginTop:'20px'}} href="/contactus"> Contact Us </Button>
          </Box>
        </div>
      </motion.div>
      <Footer/>
    </div>
  );
};

export default About;
