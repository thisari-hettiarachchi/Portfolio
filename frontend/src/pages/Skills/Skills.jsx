import React, { useEffect, useRef, useState } from "react";
import useScrollReveal from "../../components/Scroll/useScrollReveal";
import "./Skills.css";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import jsImg from "../../assets/javascript.png";
import phpImg from "../../assets/php.png";
import pythonImg from "../../assets/python.png";
import javaImg from "../../assets/java.png";
import cppImg from "../../assets/c++.png";
import mysqlImg from "../../assets/mysql.png";
import figmaImg from "../../assets/figma.png";
import reactImg from "../../assets/react.png";
import githubImg from "../../assets/github.png";
import vscodeImg from "../../assets/vs.png";
import postmanImg from "../../assets/postman.png";
import tailwindImg from "../../assets/tailwind.png";
import gitImg from "../../assets/git.png";
import bootstrapImg from "../../assets/bootstrap.png";
import nodeImg from "../../assets/nodejs.png";
import zeplinImg from "../../assets/zeplin.png";
import { firebase, flutter, vercel, express, next } from "../../assets";

const skillImages = {
  html: htmlImg,
  css: cssImg,
  javascript: jsImg,
  php: phpImg,
  python: pythonImg,
  java: javaImg,
  cpp: cppImg,
  mysql: mysqlImg,
  figma: figmaImg,
  react: reactImg,
  github: githubImg,
  vscode: vscodeImg,
  postman: postmanImg,
  tailwind: tailwindImg,
  git: gitImg,
  bootstrap: bootstrapImg,
  nodejs: nodeImg,
  zeplin: zeplinImg,
  firebase: firebase,
  vercel: vercel,
  express: express,
  next: next,
  flutter: flutter,
};

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", class: "html", endValue: 90 },
      { name: "CSS", class: "css", endValue: 90 },
      { name: "JavaScript", class: "javascript", endValue: 50 },
      { name: "React", class: "react", endValue: 50 },
      { name: "Tailwind CSS", class: "tailwind", endValue: 80 },
      { name: "Bootstrap", class: "bootstrap", endValue: 50 },
      { name: "Next.js", class: "next", endValue: 30 },
      { name: "Flutter", class: "flutter", endValue: 30 },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", class: "figma", endValue: 90 },
      { name: "Zeplin", class: "zeplin", endValue: 40 }
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", class: "php", endValue: 50 },
      { name: "Python", class: "python", endValue: 30 },
      { name: "Java", class: "java", endValue: 30 },
      { name: "C++", class: "cpp", endValue: 50 },
      { name: "MySQL", class: "mysql", endValue: 80 },
      { name: "Node.js", class: "nodejs", endValue: 30 },
      { name: "Express.", class: "express", endValue: 30 },
      { name: "Firebase", class: "firebase", endValue: 30 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "GitHub", class: "github", endValue: 50 },
      { name: "Git", class: "git", endValue: 50 },
      { name: "VS Code", class: "vscode", endValue: 80 },
      { name: "Postman", class: "postman", endValue: 30 },
      { name: "Vercel", class: "vercel", endValue: 50 },
    ],
  },
];

const Skills = () => {
  useScrollReveal();

  const [progress, setProgress] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const skillRef = useRef(null);
  const headingRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          skillRef.current.classList.add("animate");

          setTimeout(() => {
            if (headingRef.current) {
              headingRef.current.classList.add("fade-in-up");
            }
          }, 200);

          skillCategories.forEach((category, index) => {
            setTimeout(() => {
              animateProgress(category.skills);
              if (categoryRefs.current[index]) {
                categoryRefs.current[index].classList.add("slide-in-up");
              }
            }, 500 + index * 300);
          });

          sectionObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.dataset.skillId;
            if (!animatedCards.has(cardId)) {
              entry.target.classList.add("card-animate");
              setAnimatedCards((prev) => new Set(prev).add(cardId));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) sectionObserver.observe(skillRef.current);

    const skillCards = document.querySelectorAll(".progress-card");
    skillCards.forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, [isVisible, animatedCards]);

  const animateProgress = (skills) => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        const end = skill.endValue;
        const duration = 5000;
        const startTime = performance.now();

        const animate = (time) => {
          const progressTime = time - startTime;
          const progressValue = Math.min((progressTime / duration) * end, end);
          const rounded = Math.round(progressValue);

          setProgress((prev) => {
            if (prev[skill.class] === rounded) return prev;
            return {
              ...prev,
              [skill.class]: rounded,
            };
          });

          if (progressValue < end) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }, index * 200);
    });
  };
    

  return (
    <section className="skills" id="skills">
      <h2 className="heading" ref={headingRef}>
        <i className="bx bx-laptop"></i> Technical Skills
      </h2>

      <div className="skill-container" ref={skillRef}>
        <div className="skill-row">
          {[skillCategories[0], skillCategories[2]].map((category, idx) => (
            <div
              key={idx}
              className="skill-category"
              ref={(el) => (categoryRefs.current[idx * 2] = el)}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="row">
                {category.skills.map((skill, skillIndex) => (
                  <div className="col-6 col-sm-4 col-md-2" key={skill.class}>
                    <div
                      className="progress-card"
                      data-skill-id={`${skill.class}-${skillIndex}`}
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      <div
                        className={`circular-progress ${skill.class}`}
                        style={{
                          background: `conic-gradient(#2EB2D3 ${
                            (progress[skill.class] || 0) * 3.6
                          }deg, transparent 0deg)`,
                        }}
                      >

                        <img
                          src={skillImages[skill.class]}
                          alt={skill.name}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "40px",
                            height: "40px",
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none",
                            userSelect: "none",
                          }}
                          draggable={false}
                        />
                        <span className="progress-value">
                          {progress[skill.class] || 0}%
                        </span>
                      </div>
                      <br />
                      <span className="text">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-row">
          {[skillCategories[1], skillCategories[3]].map((category, idx) => (
            <div
              key={idx}
              className="skill-category"
              ref={(el) => (categoryRefs.current[idx * 2 + 1] = el)}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="row">
                {category.skills.map((skill, skillIndex) => (
                  <div className="col-6 col-sm-4 col-md-2" key={skill.class}>
                    <div
                      className="progress-card"
                      data-skill-id={`${skill.class}-${skillIndex}`}
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      <div
                        className={`circular-progress ${skill.class}`}
                        style={{
                          background: `conic-gradient(#2EB2D3 ${
                            (progress[skill.class] || 0) * 3.6
                          }deg, transparent 0deg)`,
                        }}
                      >
                        <img
                          src={skillImages[skill.class]}
                          alt={skill.name}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "40px",
                            height: "40px",
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none",
                            userSelect: "none",
                          }}
                          draggable={false}
                        />
                        <span className="progress-value">
                          {progress[skill.class] || 0}%
                        </span>
                      </div>
                      <br />
                      <span className="text">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
