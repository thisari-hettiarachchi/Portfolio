import React, { useEffect, useRef, useState } from "react";
import "../About/About.css";
import profilePic from "../../../Frontend/assets/Profile pic.png";
import resume from "../../../Frontend/assets/Thisari Hettiarachchi CV.pdf";
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
      degree: "Diploma in Information & Communicatio Technology",
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
    }

    
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setAboutVisible(true);
          } else {
            const index = journeyRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }
          }
        }
      });
    }, observerOptions);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    journeyRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="bx bxs-user"></i> About <span>Me</span>
      </h2>

      <div 
        ref={aboutRef}
        className={`about-container ${aboutVisible ? 'fade-in-up' : ''}`}
      >
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src={profilePic}
            alt="Profile"
          />
        </div>

        <div className="content">
          <h2>I'm Thisari Hettiarachchi</h2>
          <p>
            <span className="typing-text">
              <TypingText />
            </span>
          </p>
          <p>
            I'm a second-year Software Engineering undergraduate at CINEC
            Campus. With a strong foundation in information and communication
            technology, I have experience in web and mobile app development,
            complemented by my passion for creating innovative and user-friendly
            solutions. I'm dedicated to continuous learning and always eager to
            take on new challenges in the tech field.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <a href="mailto:msthisari@gmail.com" >
                  <span>Email :</span> msthisari@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+94704009616" >
                  <span>Mobile :</span>  +94704009616
                </a>
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">
              <span>
                <i className="bx bxs-download"></i> Download CV
              </span>
            </a>
          </div>


        </div>
      </div>

      <h4 className="subheading">Learning & Growth</h4>
      <div className="timeline-container">
        <div className="timeline-line"></div>

        {journey.map((edu, index) => (
          <div
            key={edu.id}
            className={`timeline-block journey-item ${visibleItems.includes(index) ? "slide-in-visible" : ""} ${index % 2 === 0 ? "left" : "right"}`}
            ref={(el) => (journeyRefs.current[index] = el)}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <div className="education-card">
                <div className={`education-header-inner ${index % 2 === 0 ? "reverse" : ""}`}>
                  <div className="education-text">
                    <h3 className={`education-degree ${index % 2 === 0 ? "reverse-text" : ""}`}>
                      {edu.degree}
                    </h3>
                    <p className="education-institution">{edu.institution}</p>
                  </div>
                  <span className="category-badge">{edu.category}</span>
                </div>

                <div className={`education-meta ${index % 2 === 0 ? "align-end" : ""}`}>
                  <div className="meta-item">
                    <i className="bx bx-calendar icon-sm"></i>
                    {edu.period}
                  </div>
                  <div className="meta-item">
                    <i className="bx bx-map icon-sm"></i>
                    {edu.location}
                  </div>
                  
                </div>

                <p className="education-description">{edu.description}</p>

                
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;