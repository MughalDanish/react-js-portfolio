import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full px-2 max-w-screen-xl mx-auto py-32 bg-[#FFFFFF] dark:bg-black flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont"
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner