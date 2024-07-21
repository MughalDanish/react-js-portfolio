import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";

const ProjectsCard = ({ title, des, imageSrc, videoSrc, mediaType }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-md flex flex-col dark:bg-black bg-[#FFFFFF] group hover:scale-105 hover:border-4 hover:border-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {mediaType === "image" ? (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={imageSrc}
            alt={"Project Banner"}
          />
        ) : isHovered ? (
          <video
            className="w-full h-full object-cover rounded-lg"
            src={videoSrc}
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={imageSrc}
            alt="Project Thumbnail"
          />
        )}
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl uppercase font-bold dark:text-gray-300 text-[#282938]">
            {title}
          </h3>

          <span className="text-lg w-10 h-10 rounded-full bg-[#F5FCFF] inline-flex justify-center items-center text-[#5e3bee] border-2 border-[#5e3bee] hover:text-[#282938] hover:bg-[#5e3bee] hover:shadow-md duration-300 cursor-pointer">
            <BsGithub />
          </span>
        </div>
        <div className="text-base dark:text-gray-100 text-[#282938] font-normal">{des}</div>
      </div>
    </div>
  );
};

export default ProjectsCard;
