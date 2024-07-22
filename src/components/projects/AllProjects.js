import React from "react";
import {
  FarmerDesktopApp,
  FarmerProjectBaneer,
  FypDesktopBanner,
  FypDesktopProject,
  SortingDesktopApp,
  WalmartDesktopAPP,
  WalmartDesktopBanner,
  GameProjectApp, GameProjectBanner,
  FoodMobileApp, FoodMobileBanner,

} from "../../assets";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";

const AllProjects = () => {
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
          gitHubLink={"https://gitlab.com/solo6662208/Final_Year_Project"}
        />
        <ProjectsCard
          title={"E-Commerce Desktop App"}
          des="Walmart e-commerce application is developed in .NetFramework, C# and sql database to provide the facility
          to users for online utiliy ordering and give access to admins of applications to manage utility products."
          imageSrc={WalmartDesktopBanner}
          videoSrc={WalmartDesktopAPP}
          mediaType={"video"}
          gitHubLink={"https://github.com/MughalDanish/Walmart-Desktop-APP"}
        />
        <ProjectsCard
          title={"Sorting Algorithm Desktop App"}
          des="Sorting algorithm application is developed in .Net Framework, C# and sql data to provide the functionality
           of sort larg amount of data using mulitple sorting algorithms with time-complexity."
          imageSrc={SortingDesktopApp}
          videoSrc={SortingDesktopApp}
          mediaType={"image"}
          gitHubLink={"https://github.com/MughalDanish/SortingAlgorithm-with-GUI"}
        />
        <ProjectsCard
          title={"Farmer Representative App"}
          des="Farmer Representative Application is developed in .Net Framework, C# and sql database to provide the facilities
          to mulitple organization to manage crops fields and connect with farmers from different regions in same state."
          imageSrc={FarmerProjectBaneer}
          videoSrc={FarmerDesktopApp}
          mediaType={"video"}
          gitHubLink={"https://gitlab.com/AbdulMateenzwl/DB2021FinalProjectG-39"}
        />
       <ProjectsCard
        title="Glaxy Shooter App" 
        des="Glaxy Shooter is 2D Game developed using general framework made in C#. This framework provide multiple games functions like Car Game, Shooter Game and Zommie Shooter Game. These games can be develop using this single general framework."
        imageSrc={GameProjectBanner}
        videoSrc={GameProjectApp}
        mediaType={'video'}
        gitHubLink={"https://github.com/MughalDanish/Final-Game-Framework"}
        />
        <ProjectsCard
      title="Food Square Mobile App" 
      des="Food Square mobile app is develped in flutter using Nodejs and mongodb to provide the facility
      of online fast food ordering and also provide functionality of manage profile and pyament to user and 
      provide admin panel to owner of application to manage business."
      imageSrc={FoodMobileBanner}
      videoSrc={FoodMobileApp}
      mediaType={'video'}
      gitHubLink={"https://github.com/MughalDanish/Food-Square-Restaurant-App"}
      />
      </div>
    </motion.div>
  );
};

export default AllProjects;
