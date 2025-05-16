import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hamburger icon - visible on mobile only */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-primary text-white rounded-md shadow-lg"
        aria-label="Toggle navigation menu"
      >
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "70%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-900 shadow-lg z-40 p-6 flex flex-col space-y-6"
          >
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleLinkClick(id)}
                className="text-lg font-semibold text-gray-900 dark:text-white text-left"
              >
                {label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
