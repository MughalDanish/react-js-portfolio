import React from "react";
import Banner from "./components/Banner/banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import BottomNavbar from "./components/navbar/BottomNavBar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import TechSkills from "./components/Skills/TechSkills";
import Education from "./components/education/Education";
import Achievements from "./components/myAchievements/Achievements";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full h-auto bg-[#0A0F1F] dark:bg-black">
        <Navbar />
        {/* <BottomNavbar /> */}
        <Banner />
        <About />
        <TechSkills />
        <Features />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
