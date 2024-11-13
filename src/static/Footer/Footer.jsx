import "./Footer.css"
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          Oyindamola Shakirat Erikitola, Portfolio 2024. All rights reserved.
        </p>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/oyindamola-erikitola" target="_blank">
          <FaLinkedin /> LinkedIn
        </a>
        |
        <a href="https://github.com/kirahsub1" target="_blank">
          <FaGithub /> GitHub
        </a>
        |
        <a href="mailto:your.oyinbabe1999@gmail.com">
          <MdOutlineEmail />
          Email
        </a>
      </div>
      <p>Built with ❤️ by Oyindamola</p>
    </footer>
  );
}

export default Footer