//importar imagen logo
import './Navbar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"
import React from 'react'

const Navbar = () => {


    // return (

    //     <nav className='nav'>
    //         <Link to={"/"}>
    //             <img className="logo-image" alt="logo" />
    //         </Link>
    //         <Link className='navLink' to={"/projects"}>Projects</Link>
    //         <Link className='navLink' to={"/alumni"}>Alumni</Link>
    //     </nav>
    // )

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>

                    <Nav className="me-auto">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/projects"}>Projects</NavLink>
                        <NavLink to={"/alumni"}>Alumni</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>

                    <Nav className="me-auto">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/projects"}>Projects</NavLink>
                        <NavLink to={"/alumni"}>Alumni</NavLink>
                    </Nav>
                </Container>
            </Navbar>

            <br />
            <Navbar bg="light" data-bs-theme="light">
                <Container>

                    <Nav className="me-auto">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/projects"}>Projects</NavLink>
                        <NavLink to={"/alumni"}>Alumni</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar