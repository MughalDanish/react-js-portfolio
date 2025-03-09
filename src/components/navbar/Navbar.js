import React from "react";
import { logo } from "../../assets/index";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-20 px-6 lg:px-12 flex items-center justify-between 
      bg-[#0A0F1F] dark:bg-[#1a1a1a]/50 backdrop-blur-xl shadow-md border-b border-gray-300/50 dark:border-gray-700/50 z-50"
    >
      {/* Logo */}
      <motion.div
        className="flex items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
          | Portfolio
        </h1>
      </motion.div>

      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-300 
        bg-gradient-to-br from-blue-500 to-teal-400 dark:from-gray-700 dark:to-gray-900 hover:scale-110"
      >
        {theme === "light" ? (
          <MdDarkMode className="text-white text-2xl" />
        ) : (
          <MdLightMode className="text-yellow-300 text-2xl" />
        )}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
