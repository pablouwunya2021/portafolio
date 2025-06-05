import React from "react";
import BackgroundWave from "./components/BackgroundWave";
import Landing from "./sections/Landing";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Curriculum from "./components/curriculum";

export default function App() {
  // No manejo tema aquí, todo en ThemeToggleButton

  return (
    <>
      <ThemeToggleButton />
      {/* BackgroundWave recibe tema del atributo data-theme en html */}
      <BackgroundWave />
      <Intro />
      <Projects />
      <Skills />
      <Curriculum />
      <Landing />
      
    </>
  );
}




