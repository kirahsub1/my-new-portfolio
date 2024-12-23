import "./Hero.css"
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { TbArrowRoundaboutRight } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="tagline">
        <section>
          <h2>Hello, I am Oyindamola Shakirah Erikitola </h2>

          <h1>I am a Software Engineer</h1>
          <p>
            I am passionate about building impactful products and helping people
            achieve their goals.
          </p>
        </section>

        <div className="hero-btns">
          <a href="https://docs.google.com/document/d/14IoUULcydKnr3AXRnpCTpW-3-yVVyssskMjtXA-geRg/edit?usp=sharing">
            <button className="hero-btn1">
              Resume <FaArrowRightFromBracket />
            </button>
          </a>

          <button className="hero-btn2">
            Contact <MdPermContactCalendar />
          </button>

          <button className="hero-btn3">
            Learn More <TbArrowRoundaboutRight />
          </button>
        </div>
      </div>
      <div className="hero-img">
        <img
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1708439136/OPDR1153_x0r2ge.jpg"
          alt="her-logo"
        />
      </div>
    </div>
  );
}

export default Hero