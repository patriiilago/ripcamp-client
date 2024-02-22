import './HomePage.css'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



const HomePage = () => {

    return (

        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1201405775/es/foto/programaci%C3%B3n-de-la-tecnolog%C3%ADa-abstracta-de-c%C3%B3digo-de-fondo-del-desarrollador-de-software-y.jpg?s=612x612&w=0&k=20&c=widGob_XZz0iUvdt3JqM7Ld7NCvGobkLiSBbtgsAOYA="
                    alt="First slide"
                    style={{ maxHeight: '650px', objectFit: 'cover' }}
                />
                <Carousel.Caption className="carouselImages">
                    <div className='carouselCaption'>
                        <Link className="textLink" to="/projects"><h1> 👉🏽Projects</h1></Link>
                        <h2>Explore detailed technical requirements for projects in both web development and data tracks of the bootcamp. Gain insights into the skills and tools needed to successfully complete each project, empowering you to excel in your learning journey and master essential concepts in modern technology stacks.</h2>
                    </div>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://elcandidatoidoneo.com/wp-content/uploads/2015/06/Red-de-contactos.jpg"
                    alt="Second slide"
                    style={{ maxHeight: '630px', objectFit: 'cover' }}
                />

                <Carousel.Caption className="carouselImages">

                    <div className='carouselCaption'>

                        <Link className="textLink" to="/alumni"><h1> 👉🏽Alumni List</h1></Link>
                        <h3>Discover a curated list of alumni who have successfully completed the bootcamp and worked on these projects. Connect with former students to seek support, ask questions, and gain valuable insights into their experiences. Alumni are here to guide and mentor current students, fostering a supportive community for learning and growth.</h3>
                    </div>

                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    )
}


export default HomePage