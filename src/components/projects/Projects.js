import React from "react";
import Title from "../layouts/Title";
import { useState } from "react";
import DesktopProject from "./DesktopProject";
import MobileProject from "./MobileProject";
import AllProjects from "./AllProjects";
import GameProjects from "./GameProjects";
import WebProjects from "./WebProjects";

const Projects = () => {
  const [Desktop, setDesktopProject] = useState(false);
  const [Mobile, setMobileProject] = useState(false);
  const [All, setAllProject] = useState(true);
  const [Game, setGameProject] = useState(false);
  const [Web, setWebProject] = useState(false);
  return (
    <section
      id="projects"
      className="w-full py-20 bg-[#F5FCFF] dark:bg-[#001919]"
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <Title title={"My Projects"} des={"Portfolio"} />
        <div className="flex flex-wrap justify-center mb-5">
          <ul className="grid md:grid-cols-3 mdl:grid-cols-4 xl:grid-cols-5 gap-4">
            <li
              onClick={() =>
                setDesktopProject(true) &
                setMobileProject(false) &
                setAllProject(false) &
                setGameProject(false) &
                setWebProject(false)
              }
              className={`${
                Desktop
                  ? "border-b-[#5e3bee] dark:border dark:border-[#006a6b] bg-[#282939] dark:bg-white rounded-lg dark:text-black text-[#FFFFFF]"
                  : "border-transparent"
              } resumeLi`}
            >
              Desktop Apps
            </li>
            <li
              onClick={() =>
                setDesktopProject(false) &
                setMobileProject(true) &
                setAllProject(false) &
                setGameProject(false) &
                setWebProject(false)
              }
              className={`${
                Mobile
                  ? "border-b-[#5e3bee] dark:border dark:border-[#006a6b] bg-[#282939] dark:bg-white rounded-lg dark:text-black text-[#FFFFFF]"
                  : "border-transparent"
              } resumeLi`}
            >
              Mobile Apps
            </li>
            <li
              onClick={() =>
                setDesktopProject(false) &
                setMobileProject(false) &
                setAllProject(true) &
                setGameProject(false) &
                setWebProject(false)
              }
              className={`${
                All
                  ? "border-b-[#5e3bee] dark:border dark:border-[#006a6b] bg-[#282939] dark:bg-white rounded-lg dark:text-black text-[#FFFFFF]"
                  : "border-transparent"
              } resumeLi`}
            >
              All Apps
            </li>
            <li
              onClick={() =>
                setDesktopProject(false) &
                setMobileProject(false) &
                setAllProject(false) &
                setGameProject(true) &
                setWebProject(false)
              }
              className={`${
                Game
                  ? "border-b-[#5e3bee] dark:border dark:border-[#006a6b] bg-[#282939] dark:bg-white rounded-lg dark:text-black text-[#FFFFFF]"
                  : "border-transparent"
              } resumeLi`}
            >
              Game Apps
            </li>
            <li
              onClick={() =>
                setDesktopProject(false) &
                setMobileProject(false) &
                setAllProject(false) &
                setGameProject(false) &
                setWebProject(true)
              }
              className={`${
                Web
                  ? "border-b-[#5e3bee] dark:border dark:border-[#006a6b] bg-[#282939] dark:bg-white rounded-lg dark:text-black text-[#FFFFFF]"
                  : "border-transparent"
              } resumeLi`}
            >
              Web Apps
            </li>
          </ul>
        </div>
        {Desktop && <DesktopProject />}
        {Mobile && <MobileProject />}
        {All && <AllProjects />}
        {Game && <GameProjects />}
        {Web && <WebProjects />}
      </div>
    </section>
  );
};

export default Projects;
