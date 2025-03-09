import React from 'react'
import ProjectsCard from "./ProjectsCard";
import { fyp, fypPoster } from "../../assets";
import { motion } from 'framer-motion';

const WebProjects = () => {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
        <div className="grid md-grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4">
        <ProjectsCard
        title="NoCode Website Builder" 
        des="NoCode Website Builder platform that enables users to create, edit, and deploy websites through AI-driven prompting without coding. It includes version control, multi-page support, and free deployment on Vercel, targeting entrepreneurs, small businesses, and non-technical users for effortless website creation."
        imageSrc={fypPoster}
        videoSrc={fyp}
        mediaType={'video'}
        gitHubLink={"https://asrar-iota.vercel.app/"}
        />
        </div>
    </motion.div>
    )
}

export default WebProjects