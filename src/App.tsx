import React from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Competencies />
        <Project />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default App;
