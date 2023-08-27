import React from "react";
import styled from "styled-components";
import knightpic from "../images/knightpic.jpg";
import { motion } from "framer-motion";
import { useScroll, fade } from "../animation";

const AboutSec = () => {
  const [element, controls] = useScroll();

  return (
    <About
      id="aboutme"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <AboutImage>
        <img src={knightpic} />
      </AboutImage>
      <Blurb>
        <h1>About Me</h1>
        <p>
          I've always considered myself an artist. It began with scribbling with
          crayons as a child, to Photoshop and Procreate in adulthood. I
          graduated college with a Bachelor's degree in criminology before
          discovering my true love lied in web development. Finally, I felt I
          was able to embrace my creativity and make beautiful and useful things
          for others to enjoy around the web.
        </p>
        <p>
          When I'm not studying something new in the world of coding, I'm
          drawing, writing, costume-making, and gaming. During my free time I
          love streaming horror games to Twitch and building an online community
          through the love and art of the horror genre. This portfolio is
          inspired by Silent Hill, one of the most artistic horror games to ever
          exist!
        </p>
      </Blurb>
    </About>
  );
};

const About = styled(motion.div)`
  background-image: linear-gradient(#222221, #798988);
  min-height: 60vh;
  display: flex;
  justify-content: space-between;
  padding: 5rem 20rem;
  position: relative;
  @media (max-width: 1100px) {
    display: block;
    justify-content: center;
  }
`;

const Blurb = styled.div`
  flex: 1;
  p {
    text-align: center;
    padding: 1rem;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 50%;
    height: 50vh;
    padding-left: 10rem;
    object-fit: cover;
  }
  @media (max-width: 1099px) {
    display: none;
  }
`;

export default AboutSec;
