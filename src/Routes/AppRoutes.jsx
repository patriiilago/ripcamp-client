import { Routes, Route } from "react-router-dom"
import HomePage from './../Pages/HomePage/HomePage'
import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'
import AlumniPage from '../Pages/AlumniPage/AlumniPage'
import AlumniDetailsPage from '../Pages/AlumniDetailsPage/AlumniDetailsPage'
import AboutPage from './../Pages/AboutPage/AboutPage'
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import NewRequestPage from "../Pages/NewRequestPage/NewRequestPage"
import RequestsPage from './../Pages/RequestsPage/RequestsPage'


const AppRoutes = () => {



    return (
        <div className="AppRoutes">
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/alumni" element={<AlumniPage />} />
                <Route path="/alumni/:alumniId" element={<AlumniDetailsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/request-form" element={<NewRequestPage />} />
                <Route path="/request-list" element={<RequestsPage />} />

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </div >
    )
}

export default AppRoutes