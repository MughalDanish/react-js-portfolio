import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { useRef } from "react";

const educationData = [
  {
    degree: "Bachelor in Computer Science (BSCS)",
    institution: "University of Engineering and Technology, Lahore",
    cgpa: "CGPA: 3.63",
    duration: "Nov 2021 - May 2025",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Superior College, Jhang Campus",
    cgpa: "Marks: 1089/1100",
    duration: "Aug 2019 - Oct 2021",
  },
];

const Education = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="education"
      className="relative w-full py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              x: ['0%', '100%', '0%'],
              y: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Academic Journey
        </motion.h2>

        <div className="relative grid gap-12 pl-8 before:absolute before:left-[32px] before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-emerald-400 before:to-cyan-400 before:shadow-[0_0_30px_rgba(79,192,141,0.5)]">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-56px] top-6 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(79,192,141,0.5)]">
                <FaGraduationCap className="text-slate-900 text-lg" />
              </div>

              {/* Education Card */}
              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl hover:border-emerald-400/30 transition-all duration-300">
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at var(--x) var(--y), rgba(79,192,141,0.1) 0%, transparent 100%`
                  }}
                />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-slate-300 mb-3">{edu.institution}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-sm font-medium bg-slate-700/50 px-3 py-1 rounded-full">
                        {edu.cgpa}
                      </span>
                    </div>
                    <span className="text-slate-500 text-sm">|</span>
                    <span className="text-slate-400 text-sm font-medium">
                      {edu.duration}
                    </span>
                  </div>

                  {/* Progress Bar Animation */}
                  <motion.div
                    className="h-1 bg-slate-700/50 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: index * 0.2 + 0.4 }}
                  >
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 w-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;