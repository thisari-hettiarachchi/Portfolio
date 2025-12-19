// components/Projects.jsx
import { useState, useRef, useEffect } from "react";
import {
  YumCraveImg,
  ShopMeImg,
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
} from "../assets"; // Adjust path according to your project

const projectData = [
  {
    title: "Official Website for Yesho Intelligence (pvt) Ltd.",
    category: "Web Apps",
    image: YeshoImg,
    video: YeshoMP4,
    description:
      "The official website for Yesho Intelligence (Pvt) Ltd., showcasing company details, services, team, and updates. Designed with a clean, responsive interface for seamless user experience across devices.",
    toolsandlanguages: ["nextjs", "tailwind-css", "nodemailler"],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/Yesho.git",
      },
    ],
  },
  // ... Add other projects
];

const categories = ["Web Apps", "UI Design", "Desktop Application"];

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
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
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
      scrollRef.current.scrollTo({
        left: cardLeft - containerLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleLeft = () => activeIndex > 0 && scrollToIndex(activeIndex - 1);
  const handleRight = () =>
    activeIndex < filteredProjects.length - 1 && scrollToIndex(activeIndex + 1);

  const handleScroll = () => {
    checkScrollBoundaries();
    updateActiveIndex();
  };

  useEffect(() => {
    const handleResize = () => checkScrollBoundaries();
    window.addEventListener("resize", handleResize);
    if (scrollRef.current)
      scrollRef.current.addEventListener("scroll", checkScrollBoundaries);
    checkScrollBoundaries();
    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRef.current)
        scrollRef.current.removeEventListener(
          "scroll",
          checkScrollBoundaries
        );
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handleLeft();
      if (e.key === "ArrowRight") handleRight();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredProjects.length]);

  return (
    <section className="bg-gray-900 min-h-screen py-16 px-4" id="projects">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 relative">
        <i className="bx bx-code mr-2"></i> Projects
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded"></span>
      </h2>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-6 py-3 rounded-full border-2 font-semibold transition-all relative overflow-hidden ${
              selectedCategory === cat
                ? "bg-blue-500 text-white shadow-lg"
                : "border-cyan-400 text-cyan-400 hover:bg-blue-500 hover:text-white hover:shadow-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        {filteredProjects.length > 1 && (
          <button
            onClick={handleLeft}
            disabled={!canScrollLeft}
            className="absolute top-1/2 -translate-y-1/2 left-2 z-10 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center disabled:opacity-30 hover:scale-110 transition-transform"
          >
            &#8592;
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`flex gap-6 overflow-x-auto scroll-smooth ${
            isMobile ? "snap-x snap-mandatory" : "snap-x snap-mandatory"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`flex-none w-80 md:w-96 snap-start bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2`}
            >
              <div
                className="relative w-full h-40 md:h-48 overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => {
                  const vid = document.getElementById(`video-${index}`);
                  vid && vid.play();
                }}
                onMouseLeave={() => {
                  const vid = document.getElementById(`video-${index}`);
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                {project.video ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0"
                    />
                    <video
                      id={`video-${index}`}
                      src={project.video}
                      muted
                      loop
                      className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                  </>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                    onClick={() => openModal(project.image, project.title)}
                  />
                )}
              </div>

              <h3 className="mt-4 text-xl font-bold text-cyan-400">
                {project.title}
              </h3>

              {project.description && (
                <>
                  <p className="text-gray-300 mt-2 text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {project.toolsandlanguages?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-full border font-medium capitalize ${
                          tech.replace(/\s+/g, "-").toLowerCase() === "html"
                            ? "text-red-600 border-red-600"
                            : tech.replace(/\s+/g, "-").toLowerCase() ===
                              "css"
                            ? "text-blue-600 border-blue-600"
                            : tech.replace(/\s+/g, "-").toLowerCase() ===
                              "javascript"
                            ? "text-yellow-400 border-yellow-400"
                            : tech.replace(/\s+/g, "-").toLowerCase() ===
                              "react"
                            ? "text-sky-400 border-sky-400"
                            : tech.replace(/\s+/g, "-").toLowerCase() ===
                              "tailwind-css"
                            ? "text-cyan-400 border-cyan-400"
                            : "text-gray-300 border-gray-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {project.githubLinks?.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 rounded-full text-cyan-400 border-cyan-400 hover:bg-blue-500 hover:text-white transition-all"
                      >
                        <i
                          className={`${
                            link.label.toLowerCase().includes("figma")
                              ? "bx bxl-figma"
                              : "bx bxl-github"
                          }`}
                        ></i>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length > 1 && (
          <button
            onClick={handleRight}
            disabled={!canScrollRight}
            className="absolute top-1/2 -translate-y-1/2 right-2 z-10 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center disabled:opacity-30 hover:scale-110 transition-transform"
          >
            &#8594;
          </button>
        )}
      </div>

      {filteredProjects.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {filteredProjects.map((_, i) => (
            <span
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                activeIndex === i
                  ? "bg-blue-500 scale-125"
                  : "bg-blue-500 opacity-30"
              }`}
            ></span>
          ))}
        </div>
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-[90%] max-h-[90%] overflow-auto relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-[-2rem] right-0 text-4xl font-bold text-red-500 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <img
              src={modalImage}
              alt={modalTitle}
              className="max-w-full max-h-[70vh] mx-auto rounded-md mb-4"
            />
            <h3 className="text-cyan-400 text-xl font-bold">{modalTitle}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
