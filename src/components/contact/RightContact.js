import React from "react";
import { motion } from "framer-motion";

const RightContact = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-1/2">
      {/* WhatsApp Card */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=923147535843"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(128, 208, 199, 0.6)" }}
        transition={{ duration: 0.3 }}
        className="p-6 bg-[#1e253a] dark:bg-[#001919] border border-[#2c3c58] rounded-2xl text-white flex flex-col items-center shadow-lg cursor-pointer hover:bg-[#24314d]"
      >
        <p className="text-xl font-semibold text-[#80d0c7]">WhatsApp</p>
        <p className="text-2xl font-bold">+923147535843</p>
        <p className="text-sm text-gray-400 mt-2">Send me a message</p>
      </motion.a>

      {/* Email Card */}
      <motion.a
        href="mailto:dnmughal54321@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(50, 150, 255, 0.6)" }}
        transition={{ duration: 0.3 }}
        className="p-6 bg-[#1e253a] dark:bg-[#001919] border border-[#2c3c58] rounded-2xl text-white flex flex-col items-center shadow-lg cursor-pointer hover:bg-[#24314d]"
      >
        <p className="text-xl font-semibold text-[#5aa9e6]">Email</p>
        <p className="text-2xl font-bold">dnmughal54321@gmail.com</p>
        <p className="text-sm text-gray-400 mt-2">Send me a message</p>
      </motion.a>
    </div>
  );
};

export default RightContact;
