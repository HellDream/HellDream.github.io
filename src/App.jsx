import './App.css';
import React from "react";

import Navigation from "./components/Navigation"
import AboutMe from './components/AboutMe';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Education from "./components/Education";
import Footer from './components/Footer';
import Skill from './components/Skill';
function App() {
  return (
    <>    
      <Navigation />
      <AboutMe />
      <Intro />
      <Skill />
      <Education />
      <Resume />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
