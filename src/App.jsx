import React from "react"

import axios from 'axios'
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import Projects from './Pages/Projectss/Projects'
import AlumniList from './Pages/AlumniList/AlumniList'
import AlumniCard from './Pages/AlumniCard/AlumniCard'
import About from './Pages/About/About'
import Footer from './Components/Footer/Footer'



function App() {


  return (

    <div className='App'>
      <Navigation />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/alumni" element={<AlumniList />} />
        <Route path="/alumni-card" element={<AlumniCard />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </div>

  )
}

export default App
