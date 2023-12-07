import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Certification from './components/Certification/Certification'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Education />
      <Certification />
      <Contact />
    </div>
  )
}

export default App
