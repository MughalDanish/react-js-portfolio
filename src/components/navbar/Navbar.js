import React from 'react';
import { logo } from "../../assets/index";
import { ThemeContext } from '../../ThemeContext';
import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-24 px-4 sticky top-0 z-50 dark:bg-transparent bg-transparent dark:bg-[#1a1a1a] mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 dark:border-b-gray-400">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-6 lg:gap-10">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 text-3xl text-[#282938] dark:text-gray-300 tracking-wide cursor-pointer hover:text-[#5e3bee] dark:hover:text-[#a5a5ff] duration-300"
        >
          {theme === 'light' ? <MdDarkMode/> : <MdLightMode/>}
        
        </button>
      </div>
    </div>
  );
}

export default Navbar;
