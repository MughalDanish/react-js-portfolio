import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-6 md:px-16 py-20 relative bg-gradient-to-b from-[#E3FDFD] to-[#A6E3E9] dark:from-[#001919] dark:to-[#004D4D] overflow-hidden"
    >
      {/* Floating Animation (Up & Down) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-full max-w-screen-xl mx-auto relative z-10"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-lg uppercase font-bold text-[#006b6a] tracking-wide">
       {"About"}
      </h3>
      <h1 className="text-4xl md:text-5xl text-[#0A0F1F] dark:text-gray-300 font-bold capitalize">{"Who I am"}</h1>
    </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 p-8 md:p-12 rounded-xl backdrop-blur-lg bg-white/30 dark:bg-black/30 shadow-lg border border-white/10"
        >
          {/* Intro Section */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-gray-900 dark:text-gray-100"
          >
            Assalam o Alaikum! I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
              Muhammad Danish
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-xl text-gray-800 dark:text-gray-300 leading-relaxed"
          >
            A final-year BSCS student at UET Lahore, passionate about
            technology, innovation, and problem-solving. I thrive on learning
            new skills and pushing my creative boundaries.
          </motion.p>

          {/* Skills Section */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-xl text-gray-800 dark:text-gray-300 leading-relaxed"
          >
            My expertise includes:
            <span className="font-semibold text-blue-500 dark:text-teal-400">
              {" "}
              C#, C++, Python, React.js, ASP.NET, Flutter, Machine
              Learning, MySql, PostgreSql and Firebase.
            </span>
          </motion.p>

          {/* Expandable Content */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6"
            >
              <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
                I’ve developed projects that integrate AI, web, and mobile
                technologies, focusing on high-quality user experiences.
                Whether it's crafting seamless UIs, building robust backends, or
                training intelligent ML models, I always aim for perfection.
              </p>
              <p className="mt-4 text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
                My journey in tech is fueled by a desire to create meaningful
                solutions and contribute to the global developer community.
              </p>
            </motion.div>
          )}

          {/* See More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleExpansion}
            className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 
            text-white text-lg font-semibold shadow-lg hover:from-teal-500 hover:to-blue-500 
            transition-all duration-300"
          >
            {isExpanded ? "See Less" : "See More"}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
