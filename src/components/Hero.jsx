import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-primary via-white to-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Usman Abdulhakem
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Full-Stack Developer & Shopify Expert — I build sleek, animated web experiences and custom Shopify tools that elevate digital brands.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
        >
          View Projects
        </a>
        <a
          href="/cv.pdf"
          download
          className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition"
        >
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="mt-16 animate-bounce text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaArrowDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
