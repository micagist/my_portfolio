import React from "react";
import styled from "styled-components";
import vibesSS from "../images/vibesSS.png";
import travellySS from "../images/travellySS.png";
import ejSS from "../images/ejSS.png";
import todoSS from "../images/todoSS.png";
import head from "../images/head.GIF";
import { motion } from "framer-motion";
import { useScroll, fade } from "../animation";

const Projects = () => {
  const [element, controls] = useScroll();

  return (
    <Project
      id="projects"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h1>Projects</h1>
        <h2>
          Here are some of my favorite things that I've created.
          <br />
          Check out their live demos below, or visit the
          <br />
          source code over on my{" "}
          <a href="https://github.com/micagist">github</a>.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <a href="https://vibes.micagist.dev/">
                <motion.img
                  src={vibesSS}
                  align="left"
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                />
              </a>
              <a href="https://vibes.micagist.dev/">
                <h3>Vibes</h3>
              </a>
            </div>
            <p>
              A soothing lofi music player; the first project I built with React
              and my most visited.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <a href="https://ejphotos.micagist.dev/">
                <motion.img
                  src={ejSS}
                  align="left"
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                />
              </a>
              <a href="https://ejphotos.micagist.dev/">
                <h3>EJ Photos</h3>
              </a>
            </div>
            <p>
              A website for a photographer where I honed my media query and web
              design skills.
            </p>
          </Card>
        </Cards>
        <Cards>
          <Card>
            <div className="icon">
              <a href="https://travelly.micagist.dev/">
                <motion.img
                  src={travellySS}
                  align="left"
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                />
              </a>
              <a href="https://travelly.micagist.dev/">
                <h3>Travelly</h3>
              </a>
            </div>
            <p>
              A website for a travel company made with html/css and animations.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <a href="https://todo.micagist.dev/">
                <motion.img
                  src={todoSS}
                  align="left"
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                />
              </a>
              <a href="https://todo.micagist.dev/">
                <h3>To-Do List</h3>
              </a>
            </div>
            <p>
              Every great portfolio needs a to-do list! Mine utilizes animations
              and local storage.
            </p>
          </Card>
        </Cards>
      </Description>
      <Art>
        <img src={head} />
        <p>
          Hello, I'm Pyramid Head!
          <br />I was hand-drawn and animated in Procreate!
        </p>
      </Art>
    </Project>
  );
};

const Project = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 20rem;
  @media (max-width: 1500px) {
    display: block;
    justify-content: center;
  }
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
    font-weight: normal;
    padding-bottom: 5rem;
    a {
      color: #798988;
    }
  }
  p {
    color: white;
    width: 70%;
    text-align: center;
    padding: 1rem 4rem 4rem 0rem;
    margin-left: 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1500px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: white;
    padding: 1rem;
  }
`;

const Art = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-right: 1rem;
`;

export default Projects;
