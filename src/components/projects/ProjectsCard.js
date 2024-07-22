import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";


const ProjectsCard = ({ title, des, imageSrc, videoSrc, mediaType, gitHubLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-md flex flex-col dark:bg-black bg-[#FFFFFF] group hover:scale-105 duration-300"
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
        </div>
        <div className="text-xl dark:text-gray-100 text-[#282938] font-normal">{des}</div>
        <a href = {gitHubLink}>
          <div className="w-1/3 items-center justify-between hover:text-[#006a6b] dark:hover:text-[#006a6b] gap-2 bg-transparent dark:bg-transparent border-b-2 border-b-[#001919] dark:border-b-[#FFFFFF] py-4 pt-5 text-[#1a1a1a] dark:text-gray-200">
            <p>View in GitHub</p>
          </div>
        </a>     
      </div>
    </div>
  );
};

export default ProjectsCard;
