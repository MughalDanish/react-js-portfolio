import React from "react";
import ProjectsCard from "./ProjectsCard";
import { GameProjectApp, GameProjectBanner } from "../../assets";
import { motion } from "framer-motion";


const GameProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
        <div className="grid md-grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4">
        <ProjectsCard
        title="Glaxy Shooter App" 
        des="Glaxy Shooter is 2D Game developed using general framework made in C#. This framework provide multiple games functions like Car Game, Shooter Game and Zommie Shooter Game. These games can be develop using this single general framework."
        imageSrc={GameProjectBanner}
        videoSrc={GameProjectApp}
        mediaType={'video'}
        />
        </div>
    </motion.div>
  );
};

export default GameProjects;
