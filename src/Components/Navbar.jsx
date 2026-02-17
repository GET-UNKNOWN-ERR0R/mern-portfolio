import { useState } from "react";
import { FaBars, FaTimes, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <h1 className="logo">
            ap<span>folio</span>
          </h1>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="social-btns">
            <a href="https://www.linkedin.com/in/arpit-prajapati-72484b332/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/GET-UNKNOWN-ERR0R" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

        <div className="mobile-socials">
          <a href="https://www.linkedin.com/in/arpit-prajapati-72484b332/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/GET-UNKNOWN-ERR0R" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
    </>
  );
}
