import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-950 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let's Work Together
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-8 text-base md:text-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Have a project in mind or just want to connect? I’m available for freelance work, collaborations, or full-time roles.
      </motion.p>

      <motion.div
        className="flex justify-center gap-4 mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <a
          href="mailto:serhaykay@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition"
        >
          <Mail size={16} />
          Send Email
        </a>
        <a
          href="https://linkedin.com/in/serhaykay"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </motion.div>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Usman Abdulhakem
      </p>
    </section>
  );
};

export default Contact;
