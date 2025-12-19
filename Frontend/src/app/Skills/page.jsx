import React, { useEffect, useRef, useState } from "react";
import useScrollReveal from "../../components/Scroll/useScrollReveal";

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
import postmanImg from "../..//assets/postman.png";
import tailwindImg from "../../assets/tailwind.png";
import gitImg from "../../assets/git.png";
import bootstrapImg from "../../assets/bootstrap.png";
import nodeImg from "../../assets/nodejs.png";
import zeplinImg from "../../assets/zeplin.png";

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
};

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", class: "html", endValue: 90 },
      { name: "CSS", class: "css", endValue: 90 },
      { name: "JavaScript", class: "javascript", endValue: 50 },
      { name: "React", class: "react", endValue: 30 },
      { name: "Tailwind CSS", class: "tailwind", endValue: 80 },
      { name: "Bootstrap", class: "bootstrap", endValue: 50 },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", class: "figma", endValue: 90 },
      { name: "Zeplin", class: "zeplin", endValue: 40 },
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
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "GitHub", class: "github", endValue: 50 },
      { name: "Git", class: "git", endValue: 50 },
      { name: "VS Code", class: "vscode", endValue: 80 },
      { name: "Postman", class: "postman", endValue: 30 },
    ],
  },
];

const Skills = () => {
  useScrollReveal();

  const [progress, setProgress] = useState({});
  const skillRef = useRef(null);

  useEffect(() => {
    const animateProgress = () => {
      skillCategories.forEach((category) => {
        category.skills.forEach((skill, index) => {
          const duration = 2000;
          const startTime = performance.now();

          const animate = (time) => {
            const elapsed = time - startTime;
            const value = Math.min((elapsed / duration) * skill.endValue, skill.endValue);
            setProgress((prev) => ({ ...prev, [skill.class]: Math.round(value) }));
            if (value < skill.endValue) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgress();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills py-16 px-4 md:px-12 bg-gray-50 dark:bg-gray-900" id="skills" ref={skillRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-gray-100">
        <i className="bx bx-laptop mr-2"></i>Technical Skills
      </h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg backdrop-blur-sm border border-blue-200 dark:border-blue-800 transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-blue-500">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill) => (
                <div key={skill.class} className="flex flex-col items-center">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center animate-bounce-slow">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(#2EB2D3 ${(progress[skill.class] || 0) * 3.6}deg, transparent 0deg)`,
                      }}
                    ></div>
                    <img
                      src={skillImages[skill.class]}
                      alt={skill.name}
                      className="w-10 h-10 md:w-12 md:h-12 z-10"
                      draggable={false}
                    />
                    <span className="absolute bottom-[-1.5rem] text-blue-500 font-bold">{progress[skill.class] || 0}%</span>
                  </div>
                  <span className="mt-4 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
