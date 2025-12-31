import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";
import MobileNav from "./components/MobileNav";
import WhatsAppButton from "./components/WhatsAppButton";
import Experience from "./components/Experience";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    // Optionally load theme from localStorage or system preference
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="font-poppins scroll-smooth relative">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <MobileNav /> 
      <WhatsAppButton />
      <Hero />
      <About />
      <Experience />  
      <Skills />
      <Projects /> 
      <Contact />
    </div>
  );
}

export default App;

