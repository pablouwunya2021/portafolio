import React from "react";
import "../styles/curriculum.css";

import { useTheme } from "./ThemeContext";

const Curriculum = () => {

  return (
    <section className="skills-section" id="curriculum">

     
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

