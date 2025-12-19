import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import "../Navbar/Navbar.css";
import Logo from "../../../Frontend/assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="topnav" id="mySidenav">
        <a href="/" className="logo" rel="noopener noreferrer">
          <img src={Logo} alt="Thisari logo" className="logo-img" />
          <span>Thisari</span>
        </a>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a className={activeSection === "home" ? "active" : ""} href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a className={activeSection === "about" ? "active" : ""} href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a className={activeSection === "skills" ? "active" : ""} href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a className={activeSection === "projects" ? "active" : ""} href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a className={activeSection === "services" ? "active" : ""} href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a className={activeSection === "contact" ? "active" : ""} href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            {/*<li className="theme-toggle">
              <button 
                className="theme-btn" 
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              >
                <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'}`}></i>
              </button>
            </li>*/}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;