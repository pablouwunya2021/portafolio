import { useTheme } from "./ThemeContext";


export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection("landing")}>Inicio</button>
      <button onClick={() => scrollToSection("proyectos")}>Proyectos</button>
      <button onClick={() => scrollToSection("skills")}>Habilidades</button>
      <button onClick={() => scrollToSection("resume")}>Currículum</button>
    </nav>
  );
}
