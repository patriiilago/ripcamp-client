import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import './About.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div>
            <Container className='About'>
                <h1 className='title'>Welcome to RipCamp®!</h1>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>Hi! We are Teresa Arranz and Patri Lago, both passionate students of web development, eager to make a positive impact in the tech community. Our journey began as classmates in a rigorous web development bootcamp, where we shared not only a common interest in coding but also a vision for fostering a strong and supportive network among fellow students and alumni.

                            Driven by our shared experiences and a desire to create meaningful connections, we embarked on the journey of building this platform. Our mission is simple yet profound: to bridge the gap between current students and alumni of web and data bootcamps, providing a space where they can connect, collaborate, and support each other in their professional endeavors.

                            Through our platform, students and alumni alike can engage in meaningful conversations, share valuable insights, and even collaborate on projects. Whether you're seeking mentorship, advice, or simply looking to expand your network, our platform serves as a hub for fostering growth, learning, and community within the tech industry.

                            Join us on this exciting journey as we strive to empower individuals, foster connections, and build a vibrant community of web and data enthusiasts. Together, let's unlock the full potential of our collective knowledge and experience.

                            Thank you for being a part of our story!🖤</p>
                        <p>Teresa & Patri.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <div className="d-flex align-items-center">
                            <Image
                                className="aboutImage"
                                src="https://ca.slack-edge.com/T06BMN0R8BG-U06CH4KHM7F-502fcb046a1f-512"
                                rounded />
                            <a href="https://www.linkedin.com/in/teresa-arranz-carrasco-4336ba166/" target="_blank" rel="noopener noreferrer">
                                <Button className="ms-3">Teresa's LinkedIn</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <div className="d-flex align-items-center">
                            <Image
                                className="aboutImage"
                                src="https://ca.slack-edge.com/T06BMN0R8BG-U06D8RF618Q-da5a6e471122-512"
                                rounded />
                            <a href="https://www.linkedin.com/in/patri-lago-b793242b1/" target="_blank" rel="noopener noreferrer">
                                <Button className="ms-3">Patris's LinkedIn</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )


}
export default About