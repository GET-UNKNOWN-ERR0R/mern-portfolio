import "./Footer.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Left */}
        <div className="footer-left">
          <h3>apfolio</h3>
          <p>
            MERN Stack Developer focused on building scalable, modern and
            user-centric web applications.
            <br />
            Open to internships & collaborations.
          </p>
        </div>
        <div className="footer-right">

          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href="https://github.com/GET-UNKNOWN-ERR0R" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arpit-prajapati-72484b332/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/get.unknown.error/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="mailto:arpitprajapati466@gmail.com"><FaEnvelope /></a>
          </div>

        </div>


      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Arpit Prajapati • Built with MERN
      </div>
    </footer>
  );
};

export default Footer;
