import { Routes, Route } from "react-router-dom"
import HomePage from './../Pages/HomePage/HomePage'
import Projects from './../Pages/Projectss/Projects'
import AlumniList from './../Pages/AlumniList/AlumniList'
import AlumniCard from './../Pages/AlumniCard/AlumniCard'
import About from './../Pages/About/About'
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"


const AppRoutes = () => {



    return (
        <div className="AppRoutes">
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/alumni" element={<AlumniList />} />
                <Route path="/alumni/:alumniId" element={<AlumniCard />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </div >
    )
}

export default AppRoutes