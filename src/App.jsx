import React from "react"
import Navigation from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AppRoutes from "./Routes/AppRoutes"



function App() {

  // TODO: HACER USO DE LAS CLASES DE ESPACIADO 

  return (

    <div className='App'>
      <Navigation />
      <AppRoutes />
      <Footer />

    </div>

  )
}

export default App
