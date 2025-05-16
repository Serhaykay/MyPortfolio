import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Shopify App Dev",
  "Firebase",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "MongoDB",
  "REST APIs",
  "JavaScript (ES6+)",
  "Git & GitHub",
  "Customer Support",
  "WhatsApp Automation",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-gray-50 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tools
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 text-sm font-medium"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
