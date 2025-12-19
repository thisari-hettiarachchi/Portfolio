// app/layout.js
"use client"; // since you have client-side logic (theme, loading, scroll buttons)

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
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
    <html lang="en">
      <head>
        <title>Thisari Hettiarachchi | UI/UX Designer & Full-Stack Developer</title>
      </head>
      <body>
        <ThemeProvider>
          {loading ? (
            <LoadingSpinner onFinish={() => setLoading(false)} />
          ) : (
            <>
              <Navbar />
              {children}
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
      </body>
    </html>
  );
}
