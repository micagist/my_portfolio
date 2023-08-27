import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    color: white;
}

body {
    background: #222221;
    font-family: 'Raleway', sans-serif;
    overflow-x:hidden;
}

h1{
    text-align: center;
    padding-bottom: 1rem;
}

button {
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: black;
        color: white;
    }
}

a {
    text-decoration: none;
}
`;

export default GlobalStyles;
