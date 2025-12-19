import React from "react";

const services = [
  {
    icon: "bx bx-paint",
    title: "UI / UX Design",
    description: "Crafting intuitive and visually appealing user experiences with tools like Figma and Adobe XD.",
  },
  {
    icon: "bx bx-code-alt",
    title: "Web Development",
    description: "Building responsive and user-friendly websites that look great and work smoothly.",
  },
  {
    icon: "bx bx-devices",
    title: "Graphic Design",
    description: "Making visually appealing designs that communicate messages clearly and creatively.",
  },
];

const Service = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 min-h-[80vh] flex flex-col items-center" id="services">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 flex items-center gap-2">
        <i className="bx bx-briefcase text-3xl md:text-4xl"></i> Services
      </h2>

      <div className="grid gap-8 md:gap-12 w-full max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br from-cyan-100/10 to-blue-100/5 border border-cyan-300/20 rounded-2xl p-10 text-center shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400 opacity-0 animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-md">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
