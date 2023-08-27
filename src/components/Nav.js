import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Welcome !
        </a>
      </h1>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="https://github.com/micagist">Github</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 2vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #222221;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    font-weight: bold;
  }
  ul {
    list-style: none;
    display: flex;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    color: #798988;
  }
  li {
    position: relative;
    padding-left: 10rem;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    ul {
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

export default Nav;
