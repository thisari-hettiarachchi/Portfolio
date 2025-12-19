import React from "react";
import "./Home.css";
import HeroImage from "../../../Frontend/assets/img.jpg";
import "boxicons/css/boxicons.min.css";
import useScrollReveal from "../../components/Scroll/useScrollReveal";
import TypingText from "../../components/Type/TypingText";
import ParticleBackground from "../../components/Background/ParticlesBackground";

const Home = () => {
  useScrollReveal();

  return (
    <section className="home" id="home">
      

      <div className="content">
        <ParticleBackground />
        <h2>
          Hello, I'm <br />
          <span className="Myname">Thisari Hettiarachchi</span>
        </h2>
        <p>
          I am a <span className="typing-text"><TypingText /></span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="bx bxs-down-arrow-circle"></i>
        </a>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/thisari-hettiarachchi-40a431228"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/thisari-hettiarachchi"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-github'></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:msthisari@gmail.com"
                aria-label="Mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-gmail'></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com/@thettiarachchi"
                aria-label="Figma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-figma'></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/thisarihettiar"
                aria-label="Behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-behance'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src={HeroImage}
          alt="Hero Thisari"
        />
      </div>
    </section>
  );
};

export default Home;
