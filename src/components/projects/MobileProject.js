import React from 'react'
import ProjectsCard from "./ProjectsCard";
import { FoodMobileApp, FoodMobileBanner } from "../../assets";
import { motion } from 'framer-motion';

const MobileProject = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
  >
      <div className="grid md-grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-4">
      <ProjectsCard
      title="Food Square Mobile App" 
      des="Food Square mobile app is develped in flutter using Nodejs and mongodb to provide the facility
      of online fast food ordering and also provide functionality of manage profile and pyament to user and 
      provide admin panel to owner of application to manage business."
      imageSrc={FoodMobileBanner}
      videoSrc={FoodMobileApp}
      mediaType={'video'}
      />
      </div>
  </motion.div>
  )
}

export default MobileProject