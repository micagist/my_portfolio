import React from "react";
import AboutMe from "./pages/AboutMe";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
