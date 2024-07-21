import React, { useState, useContext } from 'react';
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';
import { ThemeContext } from '../../ThemeContext';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-24 px-4 sticky top-0 z-50 dark:bg-transparent bg-[#FFFFFF] dark:bg-[#1a1a1a] mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 dark:border-b-gray-400">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-6 lg:gap-10">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-[#282938] dark:text-gray-300 tracking-wide cursor-pointer hover:text-[#5e3bee] dark:hover:text-[#a5a5ff] duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 border rounded-lg text-base text-[#282938] dark:text-gray-300 tracking-wide cursor-pointer hover:text-[#5e3bee] dark:hover:text-[#a5a5ff] duration-300"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
