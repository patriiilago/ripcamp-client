import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

const Navigation = () => {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container fluid>
                <NavLink to={"/"}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/010/595/118/non_2x/headstone-icon-gothic-gravestone-with-skull-flowers-rip-text-creepy-cemetery-grave-black-outline-simple-sketch-isolated-on-white-clipart-for-halloween-decor-logo-apps-print-vector.jpg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="RipCamp logo"
                    />
                </NavLink>
                <Navbar.Brand >
                    <p>
                        RipCamp
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to={"/"}>Home</NavLink>
                        <hr />
                        <NavLink to={"/projects"}>Projects</NavLink>
                        <hr />
                        <NavLink to={"/alumni"}>Alumni</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation