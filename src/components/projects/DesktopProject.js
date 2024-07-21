import React from "react";
import ProjectsCard from "./ProjectsCard";
import {
  FarmerDesktopApp,
  FarmerProjectBaneer,
  FypDesktopBanner,
  FypDesktopProject,
  SortingDesktopApp,
  WalmartDesktopAPP,
  WalmartDesktopBanner,
} from "../../assets";
import { motion } from "framer-motion";

const DesktopProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="grid md:grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4">
        <ProjectsCard
          title={"Fyp management desktop App"}
          des="Fyp Management Application is developed in .Net Framework, C# and Sql database to provide the facility
          to universities departments to manage all tasks for final year projects of students."
          imageSrc={FypDesktopBanner}
          videoSrc={FypDesktopProject}
          mediaType={"video"}
        />
        <ProjectsCard
          title={"E-Commerce Desktop App"}
          des="Walmart e-commerce application is developed in .NetFramework, C# and sql database to provide the facility
          to users for online utiliy ordering and give access to admins of applications to manage utility products."
          imageSrc={WalmartDesktopBanner}
          videoSrc={WalmartDesktopAPP}
          mediaType={"video"}
        />
        <ProjectsCard
          title={"Sorting Algorithm Desktop App"}
          des="Sorting algorithm application is developed in .Net Framework, C# and sql data to provide the functionality
           of sort larg amount of data using mulitple sorting algorithms with time-complexity."
          imageSrc={SortingDesktopApp}
          videoSrc={SortingDesktopApp}
          mediaType={"image"}
        />
        <ProjectsCard
          title={"Farmer Representative App"}
          des="Farmer Representative Application is developed in .Net Framework, C# and sql database to provide the facilities
          to mulitple organization to manage crops fields and connect with farmers from different regions in same state."
          imageSrc={FarmerProjectBaneer}
          videoSrc={FarmerDesktopApp}
          mediaType={"video"}
        />
      </div>
    </motion.div>
  );
};

export default DesktopProject;
