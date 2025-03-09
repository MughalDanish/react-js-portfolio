import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaFileDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col gap-6 lgl:gap-10 justify-between items-start">
      {/* Social Media Icons */}
      <div className="flex gap-4">
  {[
    {
      icon: <SiLeetcode className="text-[#FFA116] hover:text-black" />, // LeetCode Orange
      link: "https://leetcode.com/u/dnmughal54321/",
      bg: "bg-black", // LeetCode background
      hover: "hover:bg-[#FFA116] ", // Orange Hover
    },
    {
      icon: <FaGithub className="text-white" />, // GitHub White
      link: "https://github.com/MughalDanish/",
      bg: "bg-[#181717]", // GitHub Dark Gray
      hover: "hover:bg-gray-800", // Slightly Lighter Gray Hover
    },
    {
      icon: <FaLinkedinIn className="text-white" />, // LinkedIn White
      link: "https://www.linkedin.com/in/muhammad-danish-54718a238/",
      bg: "bg-[#0A66C2]", // LinkedIn Blue
      hover: "hover:bg-[#004182]", // Darker LinkedIn Blue Hover
    },
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-12 h-12 rounded-full 
      ${item.bg} transition-all duration-300 shadow-lg ${item.hover}`}
    >
      {item.icon}
    </a>
  ))}
</div>


      {/* Resume Download Button */}
      <a
        href="/Resume.pdf" // Replace this with the actual resume path
        download="Resume.pdf"
        className="flex items-center gap-3 px-6 py-3 rounded-md shadow-lg 
        bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold 
        hover:from-teal-500 hover:to-blue-500 transition-all duration-300"
      >
        <FaFileDownload className="text-lg" />
        Download Resume
      </a>
    </div>
  );
};

export default Media;
