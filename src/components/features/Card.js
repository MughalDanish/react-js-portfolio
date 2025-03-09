// import React from "react";
// import { HiArrowRight } from "react-icons/hi";

// const Card = ({ item: { title, des, icon } }) => {
//   return (
//     <div className="w-full px-5 h-auto py-10 rounded-lg shadow-md flex flex-col items-center dark:bg-[#001919] bg-[#F5FCFF] group relative overflow-hidden transform transition-transform duration-300 hover:border-4 hover:border-[#006b6a] hover:scale-110">
//       <div className="h-72 py-4 overflow-y-hidden">
//         <div className="flex flex-col gap-6">
//           <span
//             className="w-16 h-16 text-5xl bg-[#FFFFFF] dark:bg-black dark:hover:text-gray-100 text-[#006b6a] inline-flex items-center 
//       justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#282938] cursor-pointer duration-300"
//           >
//             {icon}
//           </span>

//           <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[#282939] dark:text-gray-300">
//             {title}
//           </h2>
//           <p className="text-xl dark:text-gray-100">{des}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";
import { motion } from "framer-motion";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Fade-in effect when appearing
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05, // Slightly increase size on hover
        boxShadow: "0px 10px 30px rgba(14, 165, 233, 0.3)", // Add glow effect
      }}
      className="w-full px-8 py-12 rounded-xl shadow-xl flex flex-col items-center bg-gradient-to-b from-[#E3FDFD] to-[#A6E3E9] dark:bg-black backdrop-blur-xl border border-gray-300/20 dark:border-gray-700/40 group relative overflow-hidden transition-all duration-500"
    >
      <div className="h-72 py-4 overflow-hidden flex flex-col items-center text-center">
        <div className="flex flex-col gap-6">
          {/* Icon Section */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }} // Icon pop effect
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-16 h-16 text-5xl bg-gradient-to-r from-blue-500 to-teal-400 text-white flex items-center justify-center rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
          >
            {icon}
          </motion.span>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {des}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
