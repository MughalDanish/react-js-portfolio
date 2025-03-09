import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import DesktopProject from "./DesktopProject";
import MobileProject from "./MobileProject";
import AllProjects from "./AllProjects";
import GameProjects from "./GameProjects";
import WebProjects from "./WebProjects";

const categories = [
  { name: "All Apps", key: "All" },
  { name: "Desktop Apps", key: "Desktop" },
  { name: "Mobile Apps", key: "Mobile" },
  { name: "Game Apps", key: "Game" },
  { name: "Web Apps", key: "Web" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="projects" className="relative w-full py-32 overflow-visible bg-gradient-to-b from-[#E3FDFD] to-[#A6E3E9] dark:to-[#002525]">
      {/* Top Wave Background
      <div className="absolute top-0 w-full z-0 ">
        <svg className="w-full text-purple-200 dark:text-[#003030]" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,197.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}

      <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title title="My Projects" des="Portfolio" />
        </motion.div>

        {/* Category Selector */}
        <div className="flex justify-center my-12">
          <motion.ul 
            className="flex flex-wrap justify-center gap-3 p-4 bg-white/80 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-lg rotate-[-1deg]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {categories.map((category) => (
              <motion.li
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg cursor-pointer transition-all
                  ${activeCategory === category.key
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md rotate-0"
                    : "bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rotate-[-3deg] hover:rotate-0"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Project Container */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, rotate: -2, scale: 0.98 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-[#0A0F1F] dark:bg-gray-900/80 backdrop-blur-lg rounded-xl shadow-xl p-6 rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300 relative z-30"
        >
          {activeCategory === "Desktop" && <DesktopProject />}
          {activeCategory === "Mobile" && <MobileProject />}
          {activeCategory === "All" && <AllProjects />}
          {activeCategory === "Game" && <GameProjects />}
          {activeCategory === "Web" && <WebProjects />}
        </motion.div>
      </div>

      {/* Bottom Wave (Behind Content)
      <div className="absolute bottom-0 w-full z-10">
        <svg className="w-full text-purple-200 dark:text-[#003030]" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,224L60,213.3C120,203,240,181,360,160C480,139,600,117,720,128C840,139,960,181,1080,176C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Projects;