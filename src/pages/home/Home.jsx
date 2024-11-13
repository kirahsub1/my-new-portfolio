import About from "../../components/about/About";
import Service from "../../components/Service/Service";
import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skill";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Service />
    </div>
  );
};

export default Home;
