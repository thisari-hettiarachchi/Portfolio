import React from "react";
import Logo from "../../../Frontend/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-blue-400 mt-12">
      <div className="flex flex-wrap justify-center gap-12 px-6 py-16">

        {/* Logo Box */}
        <div className="flex flex-col items-center gap-4 flex-1 min-w-[250px]">
          <img src={Logo} alt="Thisari logo" className="h-24 w-auto" />
          <h4 className="text-2xl text-gray-800 font-normal">Thisari Hettiarachchi</h4>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 flex-1 min-w-[250px]">
          <h3 className="text-2xl md:text-3xl text-gray-800 pb-3 font-normal">Quick Links</h3>
          {["home", "about", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-400 transition"
            >
              <i className="bx bxs-right-arrow-circle"></i> {link}
            </a>
          ))}
        </div>

        {/* Contact Info & Social */}
        <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
          <h3 className="text-2xl md:text-3xl text-gray-800 pb-3 font-normal">Contact Info</h3>
          <p className="flex items-center gap-2 text-gray-800">
            <i className="bx bxs-phone"></i>
            <a href="tel:+94704009616" className="hover:text-blue-400 transition">+94704009616</a>
          </p>
          <p className="flex items-center gap-2 text-gray-800">
            <i className="bx bxl-gmail"></i>
            <a href="mailto:msthisari@gmail.com" className="hover:text-blue-400 transition">msthisari@gmail.com</a>
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.facebook.com/share/1JPhcMvB7x/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center h-12 w-12 bg-blue-400 text-gray-900 rounded-full text-2xl hover:text-white transition"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://wa.me/+94704009616?text=Hi%20Thisari!%20I%20saw%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center h-12 w-12 bg-blue-400 text-gray-900 rounded-full text-2xl hover:text-white transition"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/_thisu_20_?igsh=MTdiazlwajY1N25wZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center h-12 w-12 bg-blue-400 text-gray-900 rounded-full text-2xl hover:text-white transition"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.pinterest.com/msthisari/_profile/_created/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex items-center justify-center h-12 w-12 bg-blue-400 text-gray-900 rounded-full text-2xl hover:text-white transition"
            >
              <i className="bx bxl-pinterest"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-2 border-t border-blue-200">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Thisari Hettiarachchi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
