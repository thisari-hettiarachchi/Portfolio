import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";

import {
  ShopZo,
  CareConnect,
  CafeCloudImg,
  ChatbotImg,
  AureaImg,
  RedovenImg,
  DchatbotImg,
  AureaNewImg,
  SpaceFinderImg,
  SeatifyImg, 
  TurboTechWeb,
  TurboTechUI,
  YeshoImg,
  SeatifyMP4,
  RedovenMP4,
  YeshoMP4,
  EventWalletImg,
  Roy,
  RoyMP4,
} from "../../assets/index.js";

const projectData = [
  {
    title: "Official Website for Yesho Intelligence (pvt) Ltd.",
    category: "Web Apps",
    image: YeshoImg,
    video: YeshoMP4,
    teamType: "Group - completed",
    description:
      "The official website for Yesho Intelligence (Pvt) Ltd., showcasing company details, services, team, and updates. Designed with a clean, responsive interface for seamless user experience across devices.",
    toolsandlanguages: [
      "nextjs",
      "tailwind css",
      "nodemailer",
    ],
    liveDemo: "https://www.yeshoin.com/",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/Yesho.git",
      },
    ],
  },
  {
    title: "AI-Assisted Interactive 3D Gem Exploration and Jewelry Purchasing Web and Mobile-Based Platform for Roy Brothers",
    category: "Web Apps",
    image:Roy,
    video: RoyMP4,
    teamType: "Group - ongoing",
    description:
      "Ongoing 3rd-year group project for Roy Brothers featuring an AI-powered interactive 3D gemstone and jewelry exploration platform. ",
    toolsandlanguages: [
      "nextjs",
      "tailwind css",
      "expressjs",
      "fastapi",
      "mongodb",
      "threejs",
      "pytorch",
    ],
    liveDemo: "https://roy-brothers-platform.vercel.app",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/roy-brothers-platform.git",
      },
    ],
  },
  {
    title: "ShopZo - Multi-Vendor E-commerce Website",
    category: "Web Apps",
    image: ShopZo,
    teamType: "Individual - ongoing",
    description:
      "Enhancing a React-based multi-vendor e-commerce platform with separate customer  and vendor roles, enabling customers to browse products, add to cart  and place orders, while vendors manage their own listings.",
    toolsandlanguages: [
      "react js",
      "tailwind css",
      "express js",
      "mongodb",
    ],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/ShopZo.git",
      },
    ],
  },
  {
    title: "CareConnect – Doctor Appointment Booking Website",
    category: "Web Apps",
    image: CareConnect,
    teamType: "Individual - completed",
    description:
      "A doctor appointment system that allows patients to book doctors, doctors to manage schedules, and admins to manage the platform.",
    toolsandlanguages: [
      "html",
      "css",
      "javascript",
      "php",
      "mysql",
    ],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/CareConnect.git",
      },
    ],
  },
  {
    title: "RedOven - Pizza Ordering Website",
    category: "Web Apps",
    image: RedovenImg,
    video: RedovenMP4,
    teamType: "Group - completed",
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
    liveDemo: "https://redoven-client.vercel.app/",
    githubLinks: [
      {
        label: "code",
        url: "https://github.com/thisari-hettiarachchi/pizza-order-delivery-system.git",
      },
    ],
  },
  {
    title: "Seatify - Movie Ticket Booking System",
    category: "Web Apps",
    image: SeatifyImg,
    video: SeatifyMP4,
    teamType: "Group - completed",
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
    liveDemo: "https://seatify-client.vercel.app/",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/Seatify-Movie-Ticket-Booking-System.git",
      },
    ],
  },
  {
    title: "EventWallet - Event and Budet Planning Mobile Application ",
    category: "Mobile Apps",
    image: EventWalletImg,
    teamType: "Individual - ongoing",
    description:
      "Developing a Flutter-based mobile application where users can book service providers (hotels, photographers, etc.), and service providers can view, manage bookings, and handle event-related services.",
    toolsandlanguages: [
      "flutter",
      "firebase",
    ],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/EventWallet.git",
      },
    ],
  },
  {
    title: "Dialogue Based Chatbot",
    category: "Desktop Application",
    image: DchatbotImg,
    teamType: "Individual - completed",
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
    teamType: "Individual - completed",
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
    teamType: "Individual - completed",
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
    teamType: "Individual - completed",
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
    teamType: "Individual - completed",
    description:
      "A fully responsive jewelry shop landing page. Mirrors the Figma design with smooth scrolling and minimal layout to highlight premium items.",
    toolsandlanguages: ["HTML", "Tailwind CSS"],
    liveDemo: "https://aureajewel.netlify.app/",
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
    teamType: "Individual - completed",
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
    title: "TurboTech - Gaming Gear Website Landing Page",
    category: "UI Design",
    image: TurboTechUI,
    teamType: "Individual - completed",
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
    teamType: "Individual - completed",
    description:
      "TurboTech is a concept brand focused on high-performance gaming gear and accessories.",
    toolsandlanguages: ["HTML", "Tailwind CSS"],
    liveDemo: "https://turbo-tech.vercel.app/",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/TurboTech.git",
      },
    ],
  },
];

const categories = ["Web Apps", "UI Design","Mobile Apps","Desktop Application"];

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
          {filteredProjects.map((project, index) => {
            const teamType = project.teamType || "Individual";
            const teamClass = teamType.toLowerCase().includes("team") || teamType.toLowerCase().includes("group") ? "team" : "solo";

            return (
              <div
                className={`project-card ${
                  project.category === "Graphic Design" ? "graphic-design" : ""
                }`}
                key={index}
              >
                <div className="project-badges">
                  <span className={`team-badge ${teamClass}`}>{teamType}</span>
                </div>

                <div
                  className="project-media"
                  onMouseEnter={() => {
                    const vid = document.getElementById(`video-${index}`);
                    if (vid) vid.play();
                  }}
                  onMouseLeave={() => {
                    const vid = document.getElementById(`video-${index}`);
                    if (vid) vid.pause();
                    if (vid) vid.currentTime = 0;
                  }}
                >
                  {project.video ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <video
                        id={`video-${index}`}
                        src={project.video}
                        muted
                        loop
                        preload="metadata"
                        className="project-video"
                      />
                    </>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      onClick={() => openModal(project.image, project.title)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>

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

                    <div className="project-links">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          className="project-link demo-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bx-link-external"></i> Live Demo
                        </a>
                      )}

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
                            className="project-link code-link"
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
            );
          })}
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
