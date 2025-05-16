// ThemeToggle.jsx
export const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
      <div className="fixed z-50 right-4 bottom-4 md:top-4 md:bottom-auto">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full shadow-md transition
                     bg-gray-200 dark:bg-gray-800
                     text-gray-800 dark:text-white
                     hover:scale-105"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    );
  };
  
  