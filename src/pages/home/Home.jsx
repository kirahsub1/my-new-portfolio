import About from "../../components/about/About";
import Service from "../../components/Service/Service";
import Hero from "../../components/hero/Hero";
import Nav from "../../components/navbar/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Service />
    </div>
  );
};

export default Home;
