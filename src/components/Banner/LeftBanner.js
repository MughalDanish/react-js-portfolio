import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Mobile App Developer.", "Machine Learning Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal dark:text-gray-200">ASSALAM-O-ALAIKUM I'm</h4>
        <h1 className="text-5xl  lgl:text-6xl  font-bold text-[#282938] dark:text-[#FFFFFF] capitalize">
         Muhammad Danish
        </h1>
        <h2 className="text-4xl font-bold text-[#292938] dark:text-gray-200">
          a <span className='text-4xl font-bold text-[#006b6a]'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#006b6a"
          />
        </h2>
        <p className="text-2xl font-bodyFont leading-6 tracking-wide dark:text-gray-200">
        Expert in everything that illustrate in Software Development and Machine Learning.
        </p>
      </div>
     {/* Media */}
     <Media/>
    </div>
  );
}

export default LeftBanner