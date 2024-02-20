import { Routes, Route } from "react-router-dom"
import HomePage from './../Pages/HomePage/HomePage'
import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'
import AlumniPage from '../Pages/AlumniPage/AlumniPage'
import AlumniCard from '../Pages/AlumniDetailsPage/AlumniDetailsPage'
import AboutPage from './../Pages/AboutPage/AboutPage'
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import RequestForm from "../Components/RequestForm/RequestForm"
import RequestList from './../Pages/RequestList/RequestList'


const AppRoutes = () => {



    return (
        <div className="AppRoutes">
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/alumni" element={<AlumniPage />} />
                <Route path="/alumni/:alumniId" element={<AlumniCard />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/request-form" element={<RequestForm />} />
                <Route path="/request-list" element={<RequestList />} />

            </Routes>
        </div >
    )
}

export default AppRoutes