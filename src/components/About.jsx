import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I’m a Lagos-based developer passionate about building scalable web apps
        and smooth customer experiences. With over 3 years of experience in
        customer support and technical solutions, I specialize in Shopify apps,
        React, and WhatsApp automations for modern commerce.
      </motion.p>
    </section>
  );
};

export default About;
