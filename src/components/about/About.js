import React, { useState } from "react";
import Title from "../layouts/Title";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="w-full px-16 py-20 bg-[#F5FCFF] dark:bg-[#001919]">
      <div className="w-full max-w-screen-xl mx-auto">
        <Title title="About" des="About Me" />
        <p className="text-2xl dark:text-gray-100 font-bodyFont tracking-wide">
          Assalam o Alikaikum
        </p>
        <p className="text-2xl dark:text-gray-100 font-bodyFont tracking-wide mt-2">
          I am Muhammad Danish, an enthusiastic third year student of BSCS at
          UET Lahore. With a passion for continuous learning and personal
          growth, I am always eager to acquire new skills and knowledge.
        </p>
        <p className="text-2xl dark:text-gray-100 font-bodyFont tracking-wide">
          Throughout my academic journey in Computer Science, I have honed my
          expertise in languages and technologies such as C#, C++, Python,
          React.js, Tailwind CSS, Flutter, .NET development, Machine Learning,
          and various databases.
        </p>
        <p className="text-2xl dark:text-gray-100 font-bodyFont tracking-wide">
          I find immense joy in creative thinking and coding, transforming my
          ideas into reality.
          {isExpanded && (
            <>
              {" "}
              My academic and personal projects have provided me with hands-on
              experience and a solid foundation in software development and
              machine learning. Whether it's developing intuitive user
              interfaces, building robust backend systems, or creating
              intelligent machine learning models, I am committed to delivering
              high-quality work.
              <p className="text-2xl font-bodyFont tracking-wide">
                I am excited to apply my skills and enthusiasm to make
                meaningful contributions to the tech community.
              </p>
            </>
          )}
        </p>
        <button
          onClick={toggleExpansion}
          className="w-1/7 mt-4 px-4 py-2 bg-[#006b6a] text-white text-xl rounded-lg hover:scale-105 transition-colors duration-300"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default About;
