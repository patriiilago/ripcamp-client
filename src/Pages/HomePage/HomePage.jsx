import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import './HomePage.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';



const HomePage = () => {


    return (
        <Container className='HomePage'>
            <h1>RIPCAMP</h1>
            <Row className="justify-content-md-center">
                <Col>

                    <Image
                        className="imageHomePage"
                        src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/12/banner-lecciones-aprendidas-proyectos-desarrollo-2019.jpg"
                        rounded
                    />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, iure, illum fugit cumque atque, tempora fuga non aut nisi odit enim mollitia doloribus quasi numquam inventore omnis nemo. Obcaecati, aspernatur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nam quos rem saepe impedit consequuntur quidem hic id pariatur perferendis, voluptas qui ipsam nobis aperiam nisi voluptatem ab odio alias!Lorem
                    </p>

                    <Link to={"/projects"}>
                        <Button variant="dark" >Projects</Button>
                    </Link>
                    {' '}
                </Col>
                <Col>

                    <Image
                        className="imageHomePage"
                        src="https://st2.depositphotos.com/3591429/5994/i/450/depositphotos_59944423-stock-illustration-group-of-multiethnic-colorful-people.jpg"
                        rounded
                    />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, iure, illum fugit cumque atque, tempora fuga non aut nisi odit enim mollitia doloribus quasi numquam inventore omnis nemo. Obcaecati, aspernatur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nam quos rem saepe impedit consequuntur quidem hic id pariatur perferendis, voluptas qui ipsam nobis aperiam nisi voluptatem ab odio alias!Lorem
                    </p>

                    <Link to={"/alumni"}>
                        <Button variant="dark" >Alumni List</Button>
                    </Link>
                    {' '}
                </Col>
            </Row>
            <div style={{ marginBottom: '80px' }}></div>
        </Container>
    )

}

export default HomePage