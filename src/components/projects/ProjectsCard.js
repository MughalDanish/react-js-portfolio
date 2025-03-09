import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectsCard = ({ title, des, imageSrc, videoSrc, mediaType, gitHubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }} // ✅ Card smoothly lifts on hover
      initial={{ scale: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="relative group w-full h-full rounded-xl bg-gradient-to-b from-[#E3FDFD] to-[#A6E3E9] dark:bg-[#0d0d0d] backdrop-blur-lg 
        border border-gray-200/50 dark:border-gray-800/50 shadow-xl overflow-hidden cursor-pointer
        transition-all duration-500 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(gitHubLink, "_blank")}
    >
      {/* Glowing Hover Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity 
        duration-300 pointer-events-none">
        <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-teal-400/30 to-blue-500/30 
          blur-md" />
      </div>

      {/* Project Media Container */}
      <motion.div
        className="relative w-full h-64 overflow-hidden bg-gray-100 dark:bg-gray-900"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.03 }
        }}
        transition={{ duration: 0.4, type: "tween" }}
      >
        <motion.div
          className="w-full h-full"
          variants={{
            initial: { y: 0 },
            hover: { y: -10 } // ✅ Slight parallax effect for media
          }}
        >
          {mediaType === "image" ? (
            <img
              className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-0 grayscale-[10%]"
              src={imageSrc}
              alt="Project Preview"
            />
          ) : (
            <>
              <video
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                src={videoSrc}
                autoPlay
                loop
                muted
              />
              <img
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
                src={imageSrc}
                alt="Project Thumbnail"
              />
            </>
          )}
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* GitHub Badge */}
        <div className="absolute top-4 right-4 z-10">
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r 
              from-blue-500 to-teal-500 text-white shadow-md hover:shadow-lg transition-all
              duration-300 hover:from-teal-500 hover:to-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            <BsGithub className="text-lg" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="p-6 lg:p-8 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          {des}
        </p>

        {/* Additional GitHub Button for Mobile */}
        <div className="mt-4 lg:hidden">
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r 
              from-blue-500 to-teal-500 text-white shadow-md hover:shadow-lg transition-all
              duration-300 hover:from-teal-500 hover:to-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            <BsGithub className="text-lg" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
