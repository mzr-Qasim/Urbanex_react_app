// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './assets/css/main.css'

import {Navbar} from "./components/navbar"
import {MainHero} from './components/main_hero'
import {Home_About_Us_Section} from './components/Home_About_Us_Section'
function App() {


  return (
    <div>
      <Navbar />
      <MainHero />
      <Home_About_Us_Section/>
    </div>
  )
}

export default App
