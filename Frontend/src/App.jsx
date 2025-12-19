import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Navbar from "./app/Navbar/page";
import Home from "./pages/Home/Home";
import About from "./app/About/page";
import Skills from "./app/Skills/page";
import Project from "./app/Project/page";
import Contact from "./app/Contact/page";
import Footer from "./app/Footer/page";
import Service from "./app/Service/page";
import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Helmet } from "react-helmet";
import Feedbacks from "./app/Feedback/page";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTopBtn = document.getElementById("scroll-top");
      const whatsappBtn = document.getElementById("whatsapp-btn");

      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle("active", window.scrollY > 200);
      }

      if (whatsappBtn) {
        whatsappBtn.classList.toggle("active", window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingSpinner onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Helmet>
            <title>Thisari Hettiarachchi | UI/UX Designer & Full-Stack Developer</title>
            <meta
              name="description"
              content="Portfolio of Thisari Hettiarachchi, a UI/UX Designer and Full-Stack Developer creating modern web and mobile apps."
            />
            <meta
              name="keywords"
              content="Thisari Hettiarachchi, UI UX Designer, Full Stack Developer, React Portfolio, Sri Lanka"
            />
            <link
              rel="canonical"
              href="https://thisari-hettiarachchi.vercel.app"
            />
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Thisari Hettiarachchi",
                  "url": "https://thisari-hettiarachchi.vercel.app",
                  "jobTitle": "UI/UX Designer & Full-Stack Developer",
                  "sameAs": [
                    "https://www.linkedin.com/in/thisari-hettiarachchi-40a431228",
                    "https://github.com/thisari-hettiarachchi"
                  ]
                }
              `}
            </script>
          </Helmet>

          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Service />
          <Contact />
          <Footer />

          <a
            href="https://wa.me/+94704009616?text=Hi%20Thisari!%20I%20saw%20your%20portfolio."
            className="whatsapp-float"
            id="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>

          <a href="#home" aria-label="ScrollTop" id="scroll-top">
            <i className="bx bxs-chevron-up"></i>
          </a>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
