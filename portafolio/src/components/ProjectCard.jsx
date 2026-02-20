// src/components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <section id="proyectos">
      <div className="project-card">
        <img src={project.image} alt={project.name} className="project-img" />
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p><strong>Tecnologías:</strong> {project.technologies.join(", ")}</p>

        <div className="project-links">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              Repositorio
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
    
