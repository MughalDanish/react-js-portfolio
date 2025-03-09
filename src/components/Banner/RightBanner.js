import React from "react";
import { bannerImgDark, bannerImgLight } from "../../assets";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const RightBanner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full lgl:w-1/2 flex  justify-center items-center relative">
      {/* Animated Image Frame with Gradient Glow */}
      <motion.div
        className="relative p-2 rounded-xl shadow-xl bg-gradient-to-r 
        from-[#5e3bee] to-[#80d0c7] dark:from-[#2c2c6c] dark:to-[#1a9aa7]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(128, 208, 199, 0.6)" }}
      >
        <motion.img
          className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lgl:w-[450px] lgl:h-[450px] 
          rounded-xl shadow-lg object-cover"
          src={theme === "dark" ? bannerImgDark : bannerImgLight}
          alt="banner"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default RightBanner;
