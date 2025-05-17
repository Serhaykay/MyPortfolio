import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const projectCategories = [
  {
    category: "React & Other",
    projects: [
      {
        name: "Drumkit Project",
        description:
          "An interactive drum kit built with vanilla JavaScript and React for sound and animations.",
        tech: ["JavaScript", "React", "CSS"],
        liveLink: "https://drum-kit-xi-fawn.vercel.app",
        github: "https://github.com/Serhaykay/Drum-Kit",
      },
      {
        name: "CloudHouse Website",
        description:
          "The Cloudhouse agency website with styled pages and animations using React and Tailwind.",
        tech: ["React", "Tailwind", "Framer Motion"],
        liveLink: "https://cloudhouse-weld.vercel.app",
        github: "https://github.com/Serhaykay/cloudhouse-styled-pages",
      },
      {
        name: "StockFlow",
        description:
          "Lightweight inventory & order manager tailored for WhatsApp and Instagram vendors. Works offline and automates restocks.",
        tech: ["React Native", "Firebase", "Local Storage"],
        liveLink: "#",
        github: "#",
      },
      {
        name: "Smart Logistics",
        description:
          "A smart logistics management system for SMEs in Nigeria — dispatch tracking, route planning, and real-time updates.",
        tech: ["React Native", "Firebase Auth", "Framer Motion"],
        liveLink: "#",
        github: "#",
      },
      {
        name: "PlantIt Landing Page",
        description:
          "A clean, responsive landing page for a plant care app with modern design and animations.",
        tech: ["React", "Netlify", "CSS"],
        liveLink:
          "https://65d5d1bf685d900008a6b905--thriving-strudel-6e1ccc.netlify.app/",
        github: "https://github.com/Serhaykay/plantit_landingpage",
      },
    ],
  },
  {
    category: "Shopify Projects",
    projects: [
      {
        name: "Shopify WhatsApp Widget",
        description:
          "A Shopify app for store owners to embed WhatsApp buttons with flexible automation and multi-agent support.",
        tech: ["React", "Shopify CLI", "Polaris UI", "App Bridge"],
        liveLink: "#",
        github: "https://github.com/Serhaykay/cloudhouse-widget",
      },
      {
        name: "CloudHouse App",
        description:
          "A customizable WhatsApp chat widget for Shopify stores. Includes admin dashboard, page-based display, business hours, and advanced targeting.",
        tech: ["React", "Shopify App", "Tailwind", "Firebase", "MongoDB"],
        liveLink: "#",
        github: "#",
      },
    ],
  },
  {
    category: "Mobile Apps",
    projects: [
      {
        name: "StockFlow",
        description:
          "Lightweight inventory & order manager tailored for WhatsApp and Instagram vendors. Works offline and automates restocks.",
        tech: ["React Native", "Firebase", "Local Storage"],
        liveLink: "#",
        github: "#",
      },
      {
        name: "Smart Logistics",
        description:
          "A smart logistics management system for SMEs in Nigeria — dispatch tracking, route planning, and real-time updates.",
        tech: ["React Native", "Firebase Auth", "Framer Motion"],
        liveLink: "#",
        github: "#",
      },
    ],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projectCategories[0].category);
  const tabsRef = useRef([]);

  const activeIndex = projectCategories.findIndex(
    (cat) => cat.category === activeTab
  );

  const handleKeyDown = (e) => {
    let newIndex = activeIndex;

    if (e.key === "ArrowRight") {
      newIndex = (activeIndex + 1) % projectCategories.length;
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      newIndex = (activeIndex - 1 + projectCategories.length) % projectCategories.length;
      e.preventDefault();
    }

    if (newIndex !== activeIndex) {
      setActiveTab(projectCategories[newIndex].category);
      tabsRef.current[newIndex]?.focus();
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-950 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Project categories"
        className="tab-container flex justify-start gap-6 mb-12 overflow-x-auto whitespace-nowrap px-4 relative focus:outline-none"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{ scrollbarWidth: "thin", scrollbarColor: "bg-primary transparent" }} // Firefox support
      >
        {projectCategories.map(({ category }, index) => (
          <button
            key={category}
            ref={(el) => (tabsRef.current[index] = el)}
            id={`tab-${index}`}
            role="tab"
            aria-selected={activeTab === category}
            aria-controls={`tabpanel-${index}`}
            tabIndex={activeTab === category ? 0 : -1}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-medium transition whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              activeTab === category
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project cards grid */}
      {projectCategories.map(({ category, projects }, index) => (
        <section
          key={category}
          id={`tabpanel-${index}`}
          role="tabpanel"
          aria-labelledby={`tab-${index}`}
          hidden={activeTab !== category}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm text-left bg-gray-50 dark:bg-gray-900 hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      View Live
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default Projects;
