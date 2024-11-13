import Home from "./pages/home/Home"
import Footer from "./static/Footer/Footer"
import Header from "./static/Header/Header"
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/about/About"
import Project from "./pages/Project/Project";
import Skill from "./components/skills/Skill";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="skill" element={< Skill/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
