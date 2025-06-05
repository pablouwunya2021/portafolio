// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import disco from "../assets/discos.png";
import farmacia from "../assets/farmacia.png";
import apimagen from "../assets/api.png";


const featuredProjects = [
  {
    id: 1,
    name: "PharmaCenter",
    description: "App web para gestionar productos y ventas de una farmacia.",
    technologies: ["React", "CSS", "Node.js, PostgreSQL"],
    image: farmacia,
    repo: "https://github.com/Josero31/pharmacenter_proyecto",
  },
  {
    id: 2,
    name: "Catálogo de Vinilos",
    description: "SPA que muestra vinilos musicales con filtros, favoritos y detalles.",
    technologies: ["React", "Vite", "Tailwind"],
    image: disco,
    repo: "https://github.com/pablouwunya2021/e-comerce-",
    demo: "https://pablouwunya2021.github.io/e-comerce-/"
  },
  {
    id: 3,
    name: "Api de incidentes",
    description: "App de registro de incidentes.",
    technologies: ["node.js", "postgreSQL"],
    image: apimagen,
    repo: "https://github.com/pablouwunya2021/ejDocker",
  }
];

export default function Projects() {
  return (
    <section className="projects-container" id="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
