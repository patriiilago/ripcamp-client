import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"

const Navigation = () => {



    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" >
            <Container>
                <Navbar.Brand >
                    <NavLink to={"/"}>
                        <img
                            src="https://thumbs.dreamstime.com/b/sitio-web-muerto-en-tumba-sobre-fondo-negro-dead-grave-black-background-de-cierre-197044658.jpg"
                            width="50"
                            height="50"
                            className="navbarImg"
                            alt="RipCamp logo"
                        />
                    </NavLink>
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Link className='nav-link' to={"/"}>🏠 Home</Link>
                        <Link className='nav-link' to={"/projects"}> 💻 Projects</Link>
                        <Link className='nav-link' to={"/alumni"}> 👩🏼‍🏫 Alumni</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )

}
export default Navigation
