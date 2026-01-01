import { useState, useRef } from "react";
import { motion } from "framer-motion";

// Landing page images
import jewelryLanding from "../assets/Jewelry Landing Page.jpg";
import landingPage1 from "../assets/Landingpage1.jpg";
import landingPage2 from "../assets/Landingpage2.jpg";

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
        liveLink: "https://www.cloudhouse247.com",
        github: "https://github.com/Serhaykay/cloudhouse-styled-pages",
      },
      {
        name: "Shopify Store URL Extractor Extension",
        description:
          "A Chrome extension that helps you extract the original Shopify store URL from any website URL.",
        tech: ["HTML", "CSS", "JSON", "Chrome Extensions API", "JavaScript"],
        liveLink: "https://serhaykay.github.io/shopify-store-url-extractor/",
        github: "https://github.com/Serhaykay/shopify-store-url-extractor",
      },
      {
        name: "BuildKit",
        description:
          "A customizable project scaffolding tool to quickly set up new Shopify section projects.",
        tech: [
          "Tawk to",
          "Firebase",
          "Supabase",
          "Lovable",
          "shadcn-ui",
          "Typescript",
          "Vite",
          "Tailwind CSS",
        ],
        liveLink: "https://buildkit.lovable.app",
        github: "https://github.com/Serhaykay/section-suite-pro",
      },
      {
        name: "Mysalarytracker",
        description:
          "A smart salary tracking app that helps users monitor income, expenses, and savings.",
        tech: ["Lovable", "shadcn-ui", "Typescript", "Vite", "Tailwind CSS"],
        liveLink: "https://mysalarytracker.lovable.app/",
        github: "https://github.com/Serhaykay/mysalarytracker/tree/main",
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
          "A Shopify app for store owners to embed WhatsApp buttons with flexible automation.",
        tech: ["React", "Shopify CLI", "Polaris UI", "App Bridge"],
        liveLink: "#",
        github: "https://github.com/Serhaykay/cloudhouse-widget",
      },
      {
        name: "Landing Pages",
        description:
          "Custom-designed Shopify landing pages optimized for conversions, featuring modern layouts and responsive design.",
        tech: ["Shopify", "PageFly"],
        images: [jewelryLanding, landingPage1, landingPage2],
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
          "Lightweight inventory & order manager tailored for WhatsApp and Instagram vendors.",
        tech: ["React Native", "Firebase", "Local Storage"],
        liveLink: "#",
        github: "#",
      },
      {
        name: "Smart Logistics",
        description:
          "A smart logistics management system for SMEs — dispatch tracking and real-time updates.",
        tech: ["React Native", "Firebase Auth", "Framer Motion"],
        liveLink: "#",
        github: "#",
      },
    ],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projectCategories[0].category);
  const [activeImage, setActiveImage] = useState(null);
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
      newIndex =
        (activeIndex - 1 + projectCategories.length) % projectCategories.length;
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
        className="flex gap-6 mb-12 overflow-x-auto px-4"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {projectCategories.map(({ category }, index) => (
          <button
            key={category}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === category
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      {projectCategories.map(({ category, projects }) => (
        <section
          key={category}
          hidden={activeTab !== category}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl border p-6 bg-gray-50 dark:bg-gray-900 text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Images */}
                {project.images && (
                  <div className="flex gap-3 mb-4">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.name} screenshot ${i + 1}`}
                        onClick={() => setActiveImage(img)}
                        className="w-24 h-16 object-cover rounded-md cursor-pointer border hover:opacity-80"
                      />
                    ))}
                  </div>
                )}

                {/* Name & Description */}
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="text-primary text-sm"
                    >
                      View Live
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-primary text-sm"
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

      {/* Fullscreen Image Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-2xl font-bold bg-black/40 p-2 rounded-full hover:bg-black/60 z-50"
          >
            ✕
          </button>

          {/* Scrollable, wide image container */}
          <div className="relative w-full h-full overflow-auto flex items-center justify-center">
            <img
              src={activeImage}
              alt="Preview"
              className="max-w-[350px] w-full h-full select-none rounded-xl"
              draggable={false}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
