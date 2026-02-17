import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">My Work</h2>

      <div className="projects-wrapper">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-card ${p.featured ? "featured" : ""}`}
          >

            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="tech-stack">
                {p.tech?.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="project-icons">
                <a href={p.github} target="_blank">
                  <FaGithub />
                </a>
                <a href={p.live} target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
