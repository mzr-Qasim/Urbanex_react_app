// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './assets/css/main.css'

import { Navbar } from "./components/navbar"
import { MainHero } from './components/main_hero'
import { Home_About_Us_Section } from './components/Home_About_Us_Section'
import { LastProjectCard } from './components/last_project_card'

function App() {


  return (
    <div>
      <Navbar />
      <MainHero />
      <Home_About_Us_Section />
      <section className="last_projects">
        <div className="last_projects_inner">
          <div className="container">
            <h2 className="section-title pb-5">
              <span className='pb-4'>LAST PROJECTS</span>
              Make it with passion.
            </h2>
            <div className="row">
              <LastProjectCard />
              <LastProjectCard />
              <LastProjectCard />
              <LastProjectCard />
              <LastProjectCard />
              <LastProjectCard />
              <LastProjectCard />
              <LastProjectCard />
              <LastProjectCard />
            </div>
            <div className="load-more-btn">
              <a href="" className='theme-btn secondary-btn'>LOAD MORE</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
