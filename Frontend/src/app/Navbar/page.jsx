import React, { useEffect, useState } from "react";
import Logo from "../../../Frontend/src/assets/logo.png";

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark ? "bg-black/60 border-b border-white/20 shadow-lg" : "bg-white/10 border-b border-white/20 shadow-lg"} backdrop-blur-lg`}>
      <div className="flex items-center justify-between px-6 py-4 md:py-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-4 text-2xl font-extrabold">
          <img src={Logo} alt="Thisari logo" className="h-16 w-auto" />
          <span className="text-gray-800 dark:text-gray-200 hover:text-blue-400 transition-colors">Thisari</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <nav className={`flex-1 md:flex md:justify-end ${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 mt-4 md:mt-0">
            {["home", "about", "skills", "projects", "services", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg md:text-base font-semibold transition-colors border-b-2 md:border-b-0 pb-1 ${activeSection === section ? "text-blue-400 border-blue-400" : "text-gray-800 dark:text-gray-200 border-transparent hover:text-blue-400 hover:border-blue-400"}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Optional Theme Toggle */}
        {/* <button 
          className="ml-4 w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-200 transition-transform"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
          <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
