import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaFileDownload,
} from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col gap-6 lgl:gap-10 justify-between">
      <div className="flex gap-4">
        <span className="bannerIcon">
          <FaFacebookF />
        </span>
        <span className="bannerIcon">
          <FaTwitter />
        </span>
        <span className="bannerIcon">
          <FaLinkedinIn />
        </span>
      </div>
      <a
        href="/Resume.pdf" // Replace this with the actual path to your resume PDF
        download="Resume.pdf"
        className=" w-1/3 flex items-center justify-center px-2 py-3 dark:hover:bg-gray-200 dark:hover:text-[#1a1a1a] bg-[#006b6a] text-white rounded-lg shadow-lg hover:bg-[#1a1a1a] hover:text-gray-200 transition-colors duration-300"
      >
        <FaFileDownload className="mr-2" />
        Download Resume 
      </a>
    </div>
  );
};

export default Media;
