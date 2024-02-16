import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AppRoutes from "./Routes/AppRoutes"



function App() {


  return (

    <div className='App'>
      <Navigation />
      <AppRoutes />
      <Footer />

    </div>

  )
}

export default App
