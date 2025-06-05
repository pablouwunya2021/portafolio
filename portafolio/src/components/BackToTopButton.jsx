import React, { useState, useEffect } from "react";
import "../styles/backToTop.css";


const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Detecta si el mouse está en la parte inferior de la pantalla
  useEffect(() => {
    const handleMouseMove = (e) => {
      const threshold = window.innerHeight - 100; // últimos 100px
      setShowButton(e.clientY >= threshold);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToIntro = () => {
    const introSection = document.getElementById("intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return showButton ? (
    <button className="back-to-top-btn" onClick={scrollToIntro}>
        ↑
    </button>

  ) : null;
};

export default BackToTopButton;
