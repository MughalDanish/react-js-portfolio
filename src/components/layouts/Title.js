import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-lg uppercase font-bold text-[#006b6a] tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-white/90 dark:text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title