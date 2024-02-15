import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom"
import { Navbar } from 'react-bootstrap'

const Navigation = () => {

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>

                <Nav className="me-auto">
                    <NavLink to={"/"}>Home</NavLink >
                    <NavLink to={"/projects"}>Projects</NavLink >
                    <NavLink to={"/alumni"}>Alumni</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation