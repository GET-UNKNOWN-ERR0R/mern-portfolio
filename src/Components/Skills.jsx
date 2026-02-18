import "./Skills.css"
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaRoute,
  FaKey,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiVercel,
  SiPostman,
  SiTypescript,
  SiAxios,
  SiNginx,
  SiRender
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  { icon: <FaReact />, name: "React.js", level: "Advanced" },
  { icon: <FaRoute />, name: "React Router", level: "Expert" },
  { icon: <SiRedux />, name: "Redux Toolkit", level: "Advanced" },
  { icon: <FaJsSquare />, name: "JavaScript", level: "Advanced" },
  { icon: <SiTypescript />, name: "TypeScript", level: "Intermediate" },

  { icon: <FaHtml5 />, name: "HTML5", level: "Expert" },
  { icon: <FaCss3Alt />, name: "CSS3", level: "Expert" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Expert" },
  { icon: <TbBrandFramerMotion />, name: "Framer Motion", level: "Intermediate" },

  { icon: <FaNodeJs />, name: "Node.js", level: "Advanced" },
  { icon: <SiExpress />, name: "Express.js", level: "Advanced" },
  { icon: <FaDatabase />, name: "REST APIs", level: "Pro" },
  { icon: <FaKey />, name: "JWT Auth", level: "Advanced" },
  { icon: <SiAxios />, name: "Axios", level: "Advanced" },

  { icon: <SiMongodb />, name: "MongoDB", level: "Advanced" },
  { icon: <SiPostman />, name: "Postman", level: "Advanced" },

  { icon: <FaGitAlt />, name: "Git & GitHub", level: "Pro" },
  { icon: <SiVercel />, name: "Vercel", level: "Advanced" },
  { icon: <SiRender />, name: "Render", level: "Advanced" },
  { icon: <SiNginx />, name: "Nginx", level: "Basic" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="skills-title">Tech Stack</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build scalable MERN applications
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

