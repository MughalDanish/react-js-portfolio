import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative w-full py-10 bg-gradient-to-b from-[#0a0f1f] to-[#1a1f33] text-white">
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 blur-lg"></div>

      {/* Footer Content */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Copyright Text */}
        <p className="text-lg text-gray-400 tracking-wide text-center">
          © 2024. All rights reserved by{" "}
          <span className="font-semibold text-teal-400">Muhammad Danish</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            {
                  icon: <SiLeetcode className="text-[#FFA116] text-2xl" />, // LeetCode Orange
                  link: "https://leetcode.com/u/dnmughal54321/",
                  bg: "bg-black", // LeetCode background
                  hover: "hover:bg-[#FFA116]", // Orange Hover
                },
                {
                  icon: <FaGithub className="text-white text-2xl" />, // GitHub White
                  link: "https://github.com/MughalDanish/",
                  bg: "bg-[#181717]", // GitHub Dark Gray
                  hover: "hover:bg-gray-800", // Slightly Lighter Gray Hover
                },
                {
                  icon: <FaLinkedinIn className="text-white text-2xl" />, // LinkedIn White
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
              className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Glowing Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 blur-lg"></div>
    </footer>
  );
};

export default Footer;
