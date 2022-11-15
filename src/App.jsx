import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar className="site-nav"></Navbar>
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </>
  );
}

export default App;
