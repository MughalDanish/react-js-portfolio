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
      bg: "bg-[#FFA116]/20", // Light Orange Background
      hover: "hover:bg-[#FFA116] hover:text-black", // Orange Hover & Black Text
    },
    {
      icon: <FaGithub className="text-white hover:text-black" />, // GitHub White
      link: "https://github.com/MughalDanish/",
      bg: "bg-gray-300/20", // Light Gray Background
      hover: "hover:bg-gray-300 hover:text-black", // Light Gray Hover & Black Text
    },
    {
      icon: <FaLinkedinIn className="text-[#0A66C2] hover:text-white/90" />, // LinkedIn Blue
      link: "https://www.linkedin.com/in/muhammad-danish-54718a238/",
      bg: "bg-[#0A66C2]/20", // Light Blue Background
      hover: "hover:bg-[#0A66C2] hover:text-white/90", // Blue Hover & White Text
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
