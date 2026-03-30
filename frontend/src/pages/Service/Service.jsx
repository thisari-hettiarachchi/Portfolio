import React from "react";
import "./Service.css";

const services = [
  {
    icon: <i className="bx bx-paint"></i>,
    title: "UI / UX Design",
    description: "Crafting intuitive and visually appealing user experiences with tools like Figma and Adobe XD.",
  },
  {
    icon: <i className="bx bx-code-alt"></i>,
    title: "Web Development",
    description: "Building responsive and user-friendly websites that look great and work smoothly.",
  },
  {
    icon: <i className="bx bx-mobile-alt"></i>,
    title: "App Development",
    description: "Developing cross-platform mobile applications with smooth functionality and seamless user experience using the latest technologies.",
  },
];

const Service = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        <i className="bx bx-briefcase"></i> Services
      </h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
