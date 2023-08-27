import React from "react";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";
import AboutSec from "../components/About";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const AboutMe = () => {
  return (
    <motion.div>
      <LandingPage />
      <Projects />
      <AboutSec />
    </motion.div>
  );
};

export default AboutMe;
