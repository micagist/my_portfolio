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
        <Icons>
          <i class="devicon-css3-plain"></i>
          <i class="devicon-git-plain"></i>
          <i class="devicon-html5-plain"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-mongodb-plain-wordmark"></i>
          <i class="devicon-nodejs-plain"></i>
          <i class="devicon-npm-original-wordmark"></i>
          <i class="devicon-react-original"></i>
          <i class="devicon-sass-original"></i>
          <i class="devicon-vscode-plain"></i>
        </Icons>
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
  flex-wrap: wrap;
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
  @media (max-width: 1406px) {
    display: none;
  }
`;

const Icons = styled.div`
  color: white;
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 2rem;
  font-size: 2rem;
  text-shadow: 10px 10px 10px black;
`;

export default AboutSec;
