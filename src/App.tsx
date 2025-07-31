import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-arial relative overflow-x-hidden">
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;