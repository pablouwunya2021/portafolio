// src/components/Skills.jsx
import React from "react";
import "../styles/Skills.css";
import reactLogo from "../assets/react.png";
import jsLogo from "../assets/js.png";
import { useTheme } from "./ThemeContext";


const skills = [
  {
    name: "React",
    logo: reactLogo,
    level: "React - Principiante",
    color: "#61DBFB",
  },
  {
    name: "JavaScript",
    logo: jsLogo,
    level: "JavaScript - Intermedio",
    color: "#F7DF1E",
  },
  { name: "Phyton",
    logo: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png",
    level: "Phyton - Intermedio",
    color: "#306998",
  },
  { name: "Java",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/java-logo-svg-vector.svg",
    level: "Java - Intermedio",
    color: "#ff481f",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
    level: "PostgreSQ - Principiante",
    color: "#336791",
  },
  {
    name: "Docker",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    level: "Docker - Principiante",
    color: "#2496ED",
  },
    {
    name: "MongoDB",
    logo: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
    level: "MongoDB - Principiante",
    color: "#47A248",
  }

];

const Skills = () => {
;
  return (

    <section className="skills-section" id="habilidades">

      <h2>Mis Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <div className="skill-overlay">
              <div
                className="progress-circle"
                style={{ borderColor: skill.color }}
              ></div>
              <span className="skill-level">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
