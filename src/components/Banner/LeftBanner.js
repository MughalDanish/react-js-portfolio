import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Machine Learning Engineer.",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 20,
    delaySpeed: 4000,
  });

  return (
    <div className="relative w-full lgl:w-1/2  flex flex-col gap-8">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#00ADB5"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-medium uppercase text-gray-600 dark:text-gray-300 tracking-wide"
        >
          ASSALAM-O-ALAIKUM, I'm
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold text-white/90 dark:text-white"
        >
          Muhammad Danish
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl font-bold text-gray-800 dark:text-gray-200"
        >
          a{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
            {text}
          </span>
          <Cursor cursorStyle="|" cursorColor="#00ADB5" />
        </motion.h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg leading-7 text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        Expert in software development and machine learning, crafting
        high-quality applications with scalable architectures.
      </motion.p>

      {/* Call to Action Button */}
      <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="mt-4 px-6 py-3 text-lg font-semibold rounded-md bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all"
  onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
>
  View My Work
</motion.button>


      {/* Media Icons */}
      <Media />
    </div>
  );
};

export default LeftBanner;
