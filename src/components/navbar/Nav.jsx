import "./Nav.css"
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav-content">
      <div className="nav-logo">
        <Link className="logo-link" to="/">
          <h1>Kirahshub Portfolio</h1>
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/about">
          <a href="#about">About</a>
        </Link>

        <Link to="/project">
          <a href="#projects">Projects</a>
        </Link>

        <Link to="/skill">
          <a href="#skills">Skills</a>
        </Link>

        <a href="https://docs.google.com/document/d/14IoUULcydKnr3AXRnpCTpW-3-yVVyssskMjtXA-geRg/edit?usp=sharing">
          Resume
        </a>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav