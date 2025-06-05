import React from "react";
import "../styles/curriculum.css";
import lightImage from "../assets/21C.png";
import darkImage from "../assets/21C.png";
import { useTheme } from "./ThemeContext";

const Curriculum = () => {
  const { theme } = useTheme(); // "light" o "dark"
  const decorativeImage = theme === "dark" ? darkImage : lightImage;
  return (
    <section className="skills-section" id="curriculum">

      <div className="decorative-image4-container">
        <img src={decorativeImage} className="decorative-image4" alt="Decorativo" />
      </div>
        
      <h2>Mi Currículum</h2>

      <div className="curriculum-card">
        <img
          src="https://media.tenor.com/hxEvA0LvotEAAAAM/asuka-langley.gif"
          alt="Animación Currículum"
          className="curriculum-gif"
          draggable={false}
        />
        <a
          href="/cv.pdf"
          download="PabloCabrera_CV.pdf"
          className="download-btn"
        >
          Descargar Currículum
        </a>
      </div>
    </section>
  );
};

export default Curriculum;

