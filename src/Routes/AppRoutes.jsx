import { Routes, Route } from "react-router-dom"
import HomePage from './../Pages/HomePage/HomePage'
import Projects from './../Pages/Projectss/Projects'
import AlumniList from './../Pages/AlumniList/AlumniList'
import AlumniCard from './../Pages/AlumniCard/AlumniCard'
import About from './../Pages/About/About'



const AppRoutes = () => {



    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/alumni" element={<AlumniList />} />
            <Route path="/alumni-card" element={<AlumniCard />} />
            <Route path="/about" element={<About />} />

        </Routes>

    )
}

export default AppRoutes