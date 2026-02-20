// src/components/Intro.jsx
import React from "react";
import "../styles/Intro.css";
import lightImage from "../assets/gatitooscuro.png";
import darkImage from "../assets/gatitoclaro.png";
import { useTheme } from "./ThemeContext";

const Intro = () => {
  const { theme } = useTheme(); // "light" o "dark"
  const decorativeImage2 = theme === "dark" ? darkImage : lightImage;
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="intro-section" id="intro"> 
      
      <div className="decorative-image2-container">
        <img src={decorativeImage2} className="decorative-image2" alt="Decorativo" />
      </div>

      <div className="intro-content">
        
        <h1>Hola, soy Pablo Cabrera</h1>
        <h3></h3>
        <img
          src="https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/503858262_1853114538867324_2028702726041461684_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=64a_yAqVbJQQ7kNvwHGkWjU&_nc_oc=AdkVm9sYGFADqNK5bcnARwKdOQBJvnZElBRymFA9DeSlfLQTj2powar7iaxFo22sGIf7DPzZ22HG3A_JjuooL7Af&_nc_zt=23&_nc_ht=scontent.fgua3-3.fna&_nc_gid=nGMZWRx8uhvCmrZIAYkpWA&oh=00_AfujiXWp-1lf-Zn-Ffe3hOfK5b3zvCDNLwEZqp1LTvpl-A&oe=699D926A"
          alt="Pablo Cabrera"
          className="profile-image"
        />
        <h2>Sobre mí</h2>
        <p>
         Hola, soy Pablo. Soy estudiante de Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala y actualmente curso el cuarto año.
         Mi enfoque principal en este momento es el desarrollo web y el design thinking, pero en el futuro espero poder incursionar en el mundo del desarrollo de videojuegos.
        </p>
        <div className="cta-buttons">
          <button onClick={() => scrollToSection("proyectos")}>Ver Proyectos</button>
          <button onClick={() => scrollToSection("habilidades")}>Ver Habilidades</button>
          <button onClick={() => scrollToSection("curriculum")}>Ver Currículum</button>
          <button onClick={() => scrollToSection("contacto")}>Contactar</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;

