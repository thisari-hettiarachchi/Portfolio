import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";

import {
  YumCraveImg,
  ShopMeImg,
  PortfolioImg,
  CafeCloudImg,
  ChatbotImg,
  AureaImg,
  RedovenImg,
  DchatbotImg,
  AureaNewImg,
  SpaceFinderImg,
  SeatifyImg, 
  TurboTechWeb,
  TurboTechUI
} from "../../assets/index.js";

const projectData = [
  {
    title: "RedOven - Pizza Ordering Website",
    category: "Web Apps",
    image: RedovenImg,
    description:
      "A pizza delivery web app enabling users to place orders, customize pizzas, and track deliveries in real time. Includes admin features for menu and order management.",
    toolsandlanguages: [
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Spring",
      "MongoDB",
      "Stripe",
    ],
    githubLinks: [
      {
        label: "code",
        url: "https://github.com/DH-0216/pizza-order-delivery-system.git",
      },
    ],
  },
  {
    title: "Portfolio - My Personal Website",
    category: "Web Apps",
    image: PortfolioImg,
    description:
      "A personal portfolio website showcasing my details, projects, skills, and services. It features multiple responsive sections, a downloadable resume, and integrated links for connecting via various social platforms.",
    toolsandlanguages: ["React", "CSS", "JavaScript"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/React-Portfolio.git",
      },
    ],
  },
  {
    title: "Dialogue Based Chatbot",
    category: "Desktop Application",
    image: DchatbotImg,
    description:
      "An educational chatbot desktop app designed to help students grasp core programming concepts through natural dialogue.",
    toolsandlanguages: ["Python", "Tkinter"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/Dialogue-Based-Desktop-Program.git",
      },
    ],
  },
  {
    title: "AI Chatbot",
    category: "Desktop Application",
    image: ChatbotImg,
    description:
      "An AI-driven chatbot desktop app for handling basic user queries and enhancing support interaction. Utilizes rule-based logic to simulate a conversational experience.",
    toolsandlanguages: ["Python"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/AI-Chatbot.git",
      },
    ],
  },
  {
    title: "CafeCloud - Coffee Ordering System",
    category: "UI Design",
    image: CafeCloudImg,
    description:
      "A UI/UX design for a coffee ordering app that enables users to browse beverages, customize orders, and streamline checkout.",
    toolsandlanguages: ["Figma"],
    githubLinks: [
      {
        label: "Figma Preview",
        url: "https://www.figma.com/proto/TCaO5eC2333x4ljVWPU6PT/CafeCloud?t=vb1vCC9nDlzmrkXL-1",
      },
    ],
  },
  {
    title: "Aurea - Jewelry Shop Landing Page",
    category: "UI Design",
    image: AureaImg,
    description:
      "A visually elegant landing page UI for a jewelry store. Highlight products, testimonials, categories, and newsletter signup with a refined aesthetic.",
    toolsandlanguages: ["Figma"],
    githubLinks: [
      {
        label: "Figma Preview",
        url: "https://www.figma.com/proto/WYpdqlIwket35TtLc49WaW/Untitled?node-id=0-1&t=vb1vCC9nDlzmrkXL-1",
      },
    ],
  },
  {
    title: "Aurea - Jewelry Shop Landing Page",
    category: "Web Apps",
    image: AureaNewImg,
    description:
      "A fully responsive jewelry shop landing page. Mirrors the Figma design with smooth scrolling and minimal layout to highlight premium items.",
    toolsandlanguages: ["HTML", "Tailwind CSS"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/Aurea.git",
      },
    ],
  },
  {
    title: "SpaceFinder - Parking Spaces Finder App",
    category: "UI Design",
    image: SpaceFinderImg,
    description:
      "A UI/UX design concept for a smart parking app. Allows users to locate nearby parking, check availability, reserve slots, and navigate to locations in real-time.",
    toolsandlanguages: ["Figma"],
    githubLinks: [
      {
        label: "Figma Preview",
        url: "https://www.figma.com/proto/o5vb6bevW9Pwpg9CcEcmkQ/Parking?node-id=0-1&t=jnXMGTeqDPSsVh3D-1",
      },
    ],
  },
  {
    title: "Seatify - Movie Ticket Booking System",
    category: "Web Apps",
    image: SeatifyImg,
    description:
      "An online movie booking app where users can browse shows, view seat layouts, and purchase tickets with ease. Responsive UI with streamlined booking flow.",
    toolsandlanguages: [
      "nextjs",
      "tailwind css",
      "express",
      "mongodb",
      "stripe",
      "clerk",
      "ingest",
    ],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/DH-0216/Seatify-Movie-Ticket-Booking-System.git",
      },
    ],
  },
  {
    title: "TurboTech - Gaming Gear Website Landing Page",
    category: "UI Design",
    image: TurboTechUI,
    description:
      "TurboTech, a high-fidelity UI design and functional prototype for a gaming gear eCommerce website.",
    toolsandlanguages: ["Figma"],
    githubLinks: [
      {
        label: "Figma Preview",
        url: "https://www.figma.com/proto/xrZDTzDfQShGcPfgk5KfvX/TurboTech?node-id=0-1&t=mU46w89i9E0gbsqG-1",
      },
    ],
  },
  {
    title: "TurboTech - Gaming Gear Website Landing Page",
    category: "Web Apps",
    image: TurboTechWeb,
    description:
      "TurboTech is a concept brand focused on high-performance gaming gear and accessories.",
    toolsandlanguages: ["HTML", "Tailwind CSS"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/TurboTech.git",
      },
    ],
  },
  {
    title: "YumCrave - Food Ordering Website",
    category: "Web Apps",
    image: YumCraveImg,
    description:
      "A responsive food ordering platform allowing users to explore menus, add to cart, and place orders with a smooth user interface.",
    toolsandlanguages: ["HTML", "CSS", "JavaScript"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/YumCrave.git",
      },
    ],
  },
  {
    title: "ShopMe - E-commerce Shoe Store",
    category: "Web Apps",
    image: ShopMeImg,
    description:
      "A sleek e-commerce website for browsing, filtering, and purchasing footwear online. Features dynamic product listings and an engaging UI.",
    toolsandlanguages: ["HTML", "CSS", "JavaScript"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/ShopMe.git",
      },
    ],
  },
];


const categories = ["Web Apps", "UI Design","Desktop Application"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkScrollBoundaries = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const updateActiveIndex = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const card = scrollRef.current.children[0];

      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 24; 
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));

      setActiveIndex(Math.min(newIndex, filteredProjects.length - 1));
    }
  };


  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  };

  const openModal = (image, title) => {
    setModalImage(image);
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    setModalTitle("");
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current && scrollRef.current.children[index]) {
      const card = scrollRef.current.children[index];
      const containerLeft = scrollRef.current.offsetLeft;
      const cardLeft = card.offsetLeft;
      const scrollPosition = cardLeft - containerLeft;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleRight = () => {
    if (activeIndex < filteredProjects.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleScroll = () => {
    checkScrollBoundaries();
    updateActiveIndex();
  };

  useEffect(() => {
    const handleResize = () => {
      checkScrollBoundaries();
    };

    window.addEventListener("resize", handleResize);
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollBoundaries);
    }

    checkScrollBoundaries();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollBoundaries);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleLeft();
      } else if (e.key === "ArrowRight") {
        handleRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredProjects.length]);

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <i className="bx bx-code"></i> Projects
      </h2>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-container">
        {filteredProjects.length > 1 && (
          <button
            className="arrow left-arrow"
            onClick={handleLeft}
            disabled={!canScrollLeft}
            aria-label="Previous project"
          >
            &#8592;
          </button>
        )}
        <div
          className={`project-scroll-wrapper ${
            isMobile ? "mobile-scroll" : "desktop-scroll"
          }`}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {filteredProjects.map((project, index) => (
            <div
              className={`project-card ${
                project.category === "Graphic Design" ? "graphic-design" : ""
              }`}
              key={index}
            >
              <img
                src={project.image}
                alt={project.title}
                onClick={() => openModal(project.image, project.title)}
                style={{ cursor: "pointer" }}
              />
              <h3>{project.title}</h3>

              {project.category !== "Graphic Design" && (
                <>
                  <p className="description">{project.description}</p>
                  <div className="toolsandlanguages">
                    {project.toolsandlanguages?.map((tech, techIndex) => {
                      const className =
                        "tech-tag " + tech.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <span key={techIndex} className={className}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="github-links">
                    {project.githubLinks?.map((link, i) => {
                      let icon;

                      if (link.label.toLowerCase().includes("figma")) {
                        icon = <i className="bx bxl-figma"></i>;
                      } else {
                        icon = <i className="bx bxl-github"></i>;
                      } 
                      return (
                        <a
                          key={i}
                          href={link.url}
                          className="github-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {icon} {link.label}
                        </a>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          ))}

        </div>
        {filteredProjects.length > 1 && (
          <button
            className="arrow right-arrow"
            onClick={handleRight}
            disabled={!canScrollRight}
            aria-label="Next project"
          >
            &#8594;
          </button>
        )}
      </div>

      {filteredProjects.length > 1 && (
        <div className="dot-indicators">
          {filteredProjects.map((_, i) => (
            <span
              key={i}
              className={`dot${activeIndex === i ? " active" : ""}`}
              onClick={() => scrollToIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-content ${
              filteredProjects.find(p => p.title === modalTitle)?.category === "Graphic Design"
                ? "graphic-design"
                : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img src={modalImage} alt={modalTitle} className="modal-image" />
            <h3>{modalTitle}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
