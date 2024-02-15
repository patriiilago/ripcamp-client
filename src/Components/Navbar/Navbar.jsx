//importar imagen logo
import './Navbar.css'

import { Link } from "react-router-dom"

const Navbar = () => {


    return (

        <nav className='nav'>
            <Link to={"/"}>
                <img className="logo-image" alt="logo" />
            </Link>
            <Link className='navLink' to={"/projects"}>Projects</Link>
            <Link className='navLink' to={"/alumni"}>Alumni</Link>
        </nav>
    )

}
export default Navbar