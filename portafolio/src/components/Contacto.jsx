import React from "react";
import "../styles/contacto.css";

const Contacto = () => {
  return (
    <section className="contact-section" id="contacto">
      <h2>Contacto</h2>
      <div className="contact-cards">
        <div className="contact-card">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg/960px-Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg.png" ></img>
          <h3>Correo</h3>
          <p>PabloCab2005@outlook.com</p>
        </div>
        <div className="contact-card">
        <img
          src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" ></img>
          <h3>GitHub</h3>
          <a href="https://github.com/pablouwunya2021" target="_blank" rel="noopener noreferrer">
            github.com/pablouwunya2021
          </a>
        </div>
        <div className="contact-card">
            <img
                src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" ></img>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/pablo-andr%C3%A9s-cabrera-arg%C3%BCello-17947131a/" target="_blank" rel="noopener noreferrer">
            Pablo Andrés Cabrera Argüello
          </a>
        </div>
        <div className="contact-card">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" ></img>
          <h3>Instagram</h3>
          <a href="https://www.instagram.com/pablo.cabrera_28/" target="_blank" rel="noopener noreferrer">
            @pablo.cabrera_28
          </a>
        </div>
        <div className="contact-card">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" ></img>
          <h3>Whatsapp</h3>
          <a href="https://wa.me/qr/EHNI7EHZFCDSN1" target="_blank" rel="noopener noreferrer">
            +502
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
