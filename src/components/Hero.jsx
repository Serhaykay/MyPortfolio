import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; // update path as needed
import MobileNav from "./MobileNav"


const Hero = () => {
  // Smooth scroll handler
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about"); // or whichever next section id
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-primary via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <MobileNav />
      {/* Top bar with profile image and theme toggle */}
      <header className="w-full flex justify-between items-center max-w-5xl mb-12 px-6"> 
        <div className="flex items-center space-x-4">
          <img
            src={profilePic}
            alt="Usman Abdulhakem"
            className="w-16 h-16 rounded-full border-4 border-primary object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Usman Abdulhakem
          </h1>
        </div>
      </header>

      {/* Main intro text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Full-Stack Developer & Shopify Expert
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I build sleek, animated web experiences and custom Shopify tools that elevate digital brands.
      </motion.p>

      {/* Buttons */}
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

      {/* Scroll down arrow */}
      <motion.div
        className="mt-16 cursor-pointer animate-bounce text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <FaArrowDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
