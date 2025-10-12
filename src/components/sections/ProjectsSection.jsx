import { projects } from '../../data/portfolioData.js';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="content-section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a href={project.github} className="project-link">
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;