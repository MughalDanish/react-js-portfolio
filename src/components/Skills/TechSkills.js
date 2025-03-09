import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiCsharp, SiNextdotjs, SiFlutter, SiDotnet, SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiTensorflow, SiOpencv, SiJira, SiGit, SiGithub, SiVisualstudiocode, SiSlack, SiClickup, SiAndroidstudio, SiGitlab, SiNumpy, SiScikitlearn, SiCplusplus } from "react-icons/si";

const techSkill = [
  { category: "Programming Languages", icons: [FaPython, SiCplusplus, SiCsharp] },
  { category: "Frameworks & Libraries", icons: [FaReact, FaNodeJs, SiNextdotjs, SiFlutter, SiDotnet] },
  { category: "Databases", icons: [SiPostgresql, SiMongodb, SiMysql, SiFirebase] },
  { category: "AI & ML", icons: [SiTensorflow, SiNumpy, SiScikitlearn, SiOpencv] },
  { category: "Developer Tools", icons: [SiVisualstudiocode, SiAndroidstudio, SiGitlab, SiGit, SiGithub] },
  { category: "Project Management Tools", icons: [SiJira, SiSlack, SiClickup] }
];

const TechSkills = () => {
  return (
    <section id="techSkill" className="relative w-full text-white flex flex-col items-center overflow-hidden">
      
      {/* 👇 **Top SVG Wave** */}
      <svg className="absolute bg-gradient-to-b from-[#E3FDFD] to-[#A6E3E9]  dark:from-[#001919] dark:to-[#004D4D] top-0 left-0 w-full z-0" viewBox="0 0 1440 320">
        <path fill="#0a0f1f" d="M0,128L60,144C120,160,240,192,360,213.3C480,235,600,245,720,218.7C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>

      {/* **Skills Content** */}
      <motion.div 
      // bg-gradient-to-b from-[#0a0f1f] to-[#1a1f33]
        className="relative w-full dark:bg-[#0A0F1F] py-32 px-6 max-w-6xl mx-auto z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#80d0c7] text-center mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techSkill.map((skill, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-[#121829] shadow-xl rounded-2xl backdrop-blur-lg flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(128, 208, 199, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-[#80d0c7]">{skill.category}</h3>
              <div className="flex gap-6 text-4xl">
                {skill.icons.map((Icon, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#5bb6ad] hover:text-[#80d0c7]"
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 👇 **Bottom SVG Wave** */}
      <svg className="absolute bg-gradient-to-b from-[#E3FDFD] to-[#A6E3E9]  dark:from-[#001919] dark:to-[#004D4D] bottom-0 left-0 w-full z-0" viewBox="0 0 1440 320">
        <path fill="#0A0F1F" d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,165.3C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>

    </section>
  );
};

export default TechSkills;
