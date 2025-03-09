import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import topper from "../../assets/images/Topper.jpg";
import ITECHWinner from "../../assets/images/ITECHWinner.jpg";
import teachingOOP from "../../assets/images/teachingOOP.png";
import AcademicExcellenceCertificate from "../../assets/images/AcademicExcellenceCertificate.jpg";

const achievements = [
  {
    title: "🥇 1st Position - ITECH 2025",
    description: "Secured top position among 100+ projects for developing an AI-Powered No-Code Website Builder with Version Control.",
    image: ITECHWinner,
  },
  {
    title: "👨‍🏫 CS Teaching Assistant",
    description: "Mentored 100+ students, improving lab completion rates by 40% through hands-on C++ workshops.",
    image: teachingOOP,
  },
  {
    title: "🏅 Top 0.1% Academic Rank",
    description: "Ranked #1 among 15,500+ students in Faisalabad Board (ICS 2021).",
    image: topper,
  },
  {
    title: "🏆 2× Institutional Excellence Awardee",
    description: "Recognized as Best Student (2020, 2021) with 98% marks, showcasing academic excellence.",
    image: AcademicExcellenceCertificate,
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="achievements" className="relative w-full min-h-screen py-20 bg-slate-900 dark:bg-[#001919] flex flex-col items-center">
      {/* Section Header */}
      <motion.h2
        className="text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Key Achievements
      </motion.h2>

      {/* Achievement Card (Only One Visible at a Time) */}
      <div className="relative w-full max-w-3xl px-4">
        <motion.div
          key={currentIndex}
          className="p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 dark:from-[#001919] dark:to-[#004D4D] backdrop-blur-xl rounded-3xl border border-slate-700/40 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        >
          {/* Icon & Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center">
              <FaTrophy className="text-3xl text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              {achievements[currentIndex].title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            {achievements[currentIndex].description}
          </p>

          {/* Image */}
          {achievements[currentIndex].image && (
            <motion.div className="rounded-xl overflow-hidden relative aspect-video">
              <img
                src={achievements[currentIndex].image}
                alt={achievements[currentIndex].title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Buttons */}
      <div className="flex gap-8 mt-8">
        <button
          onClick={handlePrev}
          className="bg-emerald-400 p-4 rounded-full shadow-md hover:scale-110 transition"
        >
          <FiArrowLeft className="text-black text-2xl" />
        </button>
        <button
          onClick={handleNext}
          className="bg-emerald-400 p-4 rounded-full shadow-md hover:scale-110 transition"
        >
          <FiArrowRight className="text-black text-2xl" />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex gap-2 mt-6">
        {achievements.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 rounded-full ${i === currentIndex ? "bg-emerald-400 w-8" : "bg-slate-600 w-4"}`}
            animate={{ width: i === currentIndex ? 40 : 20 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
