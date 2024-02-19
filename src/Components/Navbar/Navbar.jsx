import Container from 'react-bootstrap/Container'
import { Nav, Navbar, Row, Col } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"



const Navigation = () => {


    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >
                    <NavLink to={"/"}>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/010/595/118/non_2x/headstone-icon-gothic-gravestone-with-skull-flowers-rip-text-creepy-cemetery-grave-black-outline-simple-sketch-isolated-on-white-clipart-for-halloween-decor-logo-apps-print-vector.jpg"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="RipCamp logo"
                        />
                    </NavLink>
                </Navbar.Brand >
                <Nav className="justify-content-end">
                    <Link className='nav-link' to={"/"}>Home</Link>
                    <Link className='nav-link' to={"/projects"}>Projects</Link>
                    <Link className='nav-link' to={"/alumni"}>Alumni</Link>
                </Nav>
            </Container >
        </Navbar >
    )

}
export default Navigation
