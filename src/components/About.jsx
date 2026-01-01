import { motion } from "framer-motion";
import profilePic from "../assets/profile6.jpg"; // Ensure this is correct

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 text-center md:text-left"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left image */}
        <motion.img
          src={profilePic}
          alt="Usman Abdulhakem"
          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-primary shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Right text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I’m <strong>Usman Abdulhakem</strong>, a Frontend Developer and Shopify Expert with a passion for creating seamless web experiences. I specialize in building animated UIs, custom Shopify tools, and robust web apps that are clean, accessible, and scalable.
          </p>

          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>🎯 3+ years experience in customer-focused tech roles</li>
            <li>🛒 Deep understanding of Shopify ecosystem and frontend frameworks</li>
            <li>💬 Great communication, teamwork, and client support skills</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

