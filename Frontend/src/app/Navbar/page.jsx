"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav className="flex items-center justify-between px-10 py-5 bg-white/20 backdrop-blur-lg border-b border-white/30 shadow-lg transition-all duration-300">
        {/* Logo */}
        <a href="/" className="flex items-center text-2xl font-bold no-underline">
          <Image src={Logo} alt="Logo" width={50} height={50} className="mr-3" />
          <span className="text-[#2EB2D3]">Thisari</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors duration-300 ${
                  activeSection === link.id ? "text-[#2EB2D3] font-semibold" : "text-white/90 hover:text-[#2EB2D3]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white/90"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-lg shadow-lg transform transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col mt-20 space-y-6 px-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-xl transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-[#2EB2D3] font-semibold"
                      : "text-white/90 hover:text-[#2EB2D3]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
