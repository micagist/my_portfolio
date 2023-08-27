import React from "react";
import styled from "styled-components";
import SH2screenshot2 from "../images/SH2screenshot2.jpg";
import { motion } from "framer-motion";
import fog from "../images/fog.png";
import { container } from "../animation";
import { titleAnim } from "../animation";

const LandingPage = () => {
  return (
    <Landing id="intro">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h2 variants={titleAnim}>Hello!</motion.h2>
        <motion.h2 variants={titleAnim}>My name's Mica,</motion.h2>
        <motion.h2 variants={titleAnim}>and I'm a web developer.</motion.h2>
      </motion.div>
      <Image>
        <motion.img
          animate={{ x: 50 }}
          transition={{ type: "spring", damping: 0, stiffness: 50, mass: 70 }}
          src={fog}
        />
      </Image>
    </Landing>
  );
};

const Landing = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.2)),
    url(${SH2screenshot2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  position: relative;
  h2 {
    font-size: 3rem;
    padding-top: 0;
    font-weight: normal;
    @media (max-width: 900px) {
      font-size: 2.5rem;
    }
    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }
  .text {
    padding-bottom: 10rem;
  }
`;

const Image = styled.div`
  img {
    position: absolute;
    left: -30%;
    bottom: 0%;
    z-index: 10;
    width: 130%;
    overflow: hidden;
    opacity: 0.7;
    height: 80%;
  }
`;

export default LandingPage;
