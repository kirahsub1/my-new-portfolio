import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav-content">
        <div className="nav-logo">
        <h1>Kirahshub Portfolio</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
    </div>
  )
}

export default Nav