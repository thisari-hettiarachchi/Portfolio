import React, { useEffect, useRef, useState } from "react";
import profilePic from "../../assets/Profile pic.png";
import TypingText from "../../components/Type/TypingText";

const About = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);
  const journeyRefs = useRef([]);

  const journey = [
    {
      id: 1,
      degree: "Digital Graphic Designing Course",
      institution: "Informatics Institute of Technology (IIT)",
      location: "Colombo 04",
      period: "Present",
      description:
        "Pursuing Digital Graphic Designing course focusing on visual communication, branding, and design tools such as Photoshop and Illustrator.",
      category: "Certificate Course",
    },
    {
      id: 2,
      degree: "Software Engineering Undergraduate",
      institution: "CINEC Campus",
      location: "Malabe",
      period: "2023 - Present",
      description:
        "Pursuing BSc (Hons) in Software Engineering with a focus on web and mobile development.",
      category: "Undergraduate",
    },
    {
      id: 3,
      degree: "Diploma in Information & Communication Technology",
      institution: "ICBT Campus",
      location: "Colombo 04",
      period: "2023",
      description:
        "Completed a diploma program covering foundational concepts in IT.",
      category: "Diploma",
    },
    {
      id: 4,
      degree: "G.C.E. Ordinary Level & Advanced Level",
      institution: "Ananda Balika Vidyalaya",
      location: "Colombo 10",
      period: "2013 - 2021",
      description:
        "Successfully completed both G.C.E. O/L and A/L examinations in the Commerce Stream with strong academic performance and active participation in school activities.",
      category: "Secondary Education",
    },
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) setAboutVisible(true);
          else {
            const index = journeyRefs.current.indexOf(entry.target);
            if (index !== -1)
              setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        }
      });
    }, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    journeyRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 flex flex-col items-center py-16" id="about">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-8">
        <i className="bx bxs-user"></i> About <span className="text-blue-500">Me</span>
      </h2>

      {/* About Container */}
      <div
        ref={aboutRef}
        className={`max-w-6xl w-full flex flex-wrap justify-center gap-10 p-8 transition-all duration-700 ${
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Image */}
        <div className="flex-1 min-w-[300px] text-center">
          <img
            src={profilePic}
            alt="Profile"
            draggable={false}
            className="rounded-xl shadow-lg w-80 mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-[300px] space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">I'm Thisari Hettiarachchi</h2>
          <p className="text-lg font-semibold text-gray-700">
            <TypingText />
          </p>
          <p className="text-lg text-gray-700">
            I'm a second-year Software Engineering undergraduate at CINEC Campus. With a strong foundation in information and communication technology, I have experience in web and mobile app development, complemented by my passion for creating innovative and user-friendly solutions. I'm dedicated to continuous learning and always eager to take on new challenges in the tech field.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6">
            <p>
              <a href="mailto:msthisari@gmail.com" className="text-gray-700 hover:text-blue-500">
                <span className="font-semibold text-blue-400">Email:</span> msthisari@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+94704009616" className="text-gray-700 hover:text-blue-500">
                <span className="font-semibold text-blue-400">Mobile:</span> +94704009616
              </a>
            </p>
          </div>

          {/* Resume Button */}
          <a
            href="/Thisari_Hettiarachchi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block mt-4 px-8 py-4 bg-blue-400 text-white rounded-full font-semibold shadow-lg hover:bg-blue-500 transition-all"
            >
            <i className="bx bxs-download mr-2"></i> Download CV
            </a>

        </div>
      </div>

      {/* Timeline */}
      <h4 className="text-2xl md:text-3xl font-bold text-center mt-16 mb-8 text-gray-800">Learning & Growth</h4>
      <div className="relative max-w-6xl w-full mx-auto px-6 py-10">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400 rounded"></div>

        {journey.map((edu, index) => (
          <div
            key={edu.id}
            ref={(el) => (journeyRefs.current[index] = el)}
            className={`relative mb-16 flex w-full justify-${index % 2 === 0 ? "end" : "start"} transition-all duration-700 ${
              visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-blue-400 to-blue-500 border-4 border-gray-50 shadow-lg animate-pulse"></div>

            {/* Card */}
            <div
              className={`bg-white backdrop-blur-md border border-blue-200 rounded-2xl p-6 w-full md:w-1/2 shadow-lg hover:scale-105 transition-transform ${
                index % 2 === 0 ? "mr-8 text-right" : "ml-8 text-left"
              }`}
            >
              <div className={`flex justify-between items-start flex-wrap gap-4 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-400 font-semibold">{edu.institution}</p>
                </div>
                <span className="bg-gradient-to-tr from-blue-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {edu.category}
                </span>
              </div>
              <div className={`flex flex-wrap gap-4 mt-2 ${index % 2 === 0 ? "justify-end" : ""}`}>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <i className="bx bx-calendar"></i> {edu.period}
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <i className="bx bx-map"></i> {edu.location}
                </div>
              </div>
              <p className="mt-4 text-gray-700">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
