// import React from 'react'
import About from './About'
import Projects from './Projects'
import Technologies from './Technologies'

import '../styles/components/maincontent.sass'


const MainContent = () => {
  return (
    <main id='main-content'>
      <About/>
      <Projects/>
      <Technologies/>
    </main>
  )
}

export default MainContent