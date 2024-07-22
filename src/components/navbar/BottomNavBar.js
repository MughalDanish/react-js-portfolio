import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { navLinksdata } from '../../constants'; // Adjust the import path if necessary

const BottomNavbar = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-1/2 right-[10%] sm:right-[2%] lg:w-[80px] md:w-[80px] h-80 flex flex-col gap-4 justify-around items-center bg-black backdrop-blur-md backdrop-filter backdrop-opacity-62 bg-opacity-40 p-4 rounded-lg shadow-lg z-20 transform -translate-y-1/2">
        {navLinksdata.map(({ _id, link }) => {
          let Icon;
          switch (link) {
            case "home":
              Icon = FaHome;
              break;
            case "about":
              Icon = FaUser;
              break;
            case "features":
              Icon = GrTechnology;
              break;
            case "projects":
              Icon = AiFillProject;
              break;
            case "contact":
              Icon = BiSolidMessageRounded;
              break;
            default:
              return null;
          }
          return (
            <Link
              key={_id}
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-3xl hover:scale-110 hover:bg-[#006a6b]- cursor-pointer dark:text-gray-200 duration-300"
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
