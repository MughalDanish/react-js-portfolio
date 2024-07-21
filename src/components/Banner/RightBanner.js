import React from "react";
import { bannerImgDark, bannerImgLight } from "../../assets";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

const RightBanner = () => {
  const { theme } = useContext(ThemeContext); // Use context to get the current theme

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] rounded-sm animate-none"
        src={theme === 'dark' ? bannerImgDark : bannerImgLight}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
