import { motion } from "framer-motion";

const projects = [
  {
    name: "CloudHouse App",
    description:
      "A customizable WhatsApp chat widget for Shopify stores. Includes admin dashboard, page-based display, business hours, and advanced targeting.",
    tech: ["React", "Shopify App", "Tailwind", "Firebase", "MongoDB"],
    liveLink: "#",
    github: "#",
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
    name: "Shopify WhatsApp App",
    description:
      "A Shopify app for store owners to embed WhatsApp buttons with flexible automation and multi-agent support.",
    tech: ["React", "Shopify CLI", "Polaris UI", "App Bridge"],
    liveLink: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-white text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl border p-6 shadow-sm text-left bg-gray-50 hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
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
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm font-medium text-gray-600 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
