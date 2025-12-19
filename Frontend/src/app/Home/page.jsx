"use client";

import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import useScrollReveal from "../../components/Scroll/useScrollReveal";
import TypingText from "../../components/Type/TypingText";
import ParticleBackground from "../../components/Background/ParticleBackground";

const Home = () => {
  useScrollReveal();

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 overflow-hidden bg-gray-900 text-white"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="flex-1 mt-10 md:mt-0 md:ml-20 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hello, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 animate-gradient">
            Thisari Hettiarachchi
          </span>
        </h2>

        <p className="text-2xl md:text-2.5xl font-semibold mb-6">
          I am a <span className="text-cyan-400"><TypingText /></span>
        </p>

        <a
          href="#about"
          className="inline-flex items-center px-8 py-4 rounded-full bg-cyan-500 text-white font-medium shadow-lg hover:bg-cyan-600 transition-all"
        >
          <span>About Me</span>
          <i className="bx bxs-down-arrow-circle ml-2 text-xl"></i>
        </a>

        {/* Social Icons */}
        <div className="mt-16">
          <ul className="flex space-x-4">
            {[
              { href: "https://www.linkedin.com/in/thisari-hettiarachchi-40a431228", icon: "bxl-linkedin" },
              { href: "https://github.com/thisari-hettiarachchi", icon: "bxl-github" },
              { href: "mailto:msthisari@gmail.com", icon: "bxl-gmail" },
              { href: "https://www.figma.com/@thettiarachchi", icon: "bxl-figma" },
              { href: "https://www.behance.net/thisarihettiar", icon: "bxl-behance" },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-black hover:text-white transition"
                >
                  <i className={`bx ${social.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0 z-10">
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-500 animate-float">
          <Image
            src="/img.jpg"
            alt="Hero Thisari"
            fill
            className="object-cover rounded-full"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
