import { Col, Container, Row } from 'react-bootstrap'
import './HomePage.css'
import Button from 'react-bootstrap/Button'




const HomePage = () => {


    return (
        <div className='Homepage'>

            <Container>

                <h1 >RIPCAMP</h1>

                <Row>

                    <Col md-3={{ span: 2, offset: 2 }}>

                        <img src="#" alt="imagen " />

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, iure, illum fugit cumque atque, tempora fuga non aut nisi odit enim mollitia doloribus quasi numquam inventore omnis nemo. Obcaecati, aspernatur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nam quos rem saepe impedit consequuntur quidem hic id pariatur perferendis, voluptas qui ipsam nobis aperiam nisi voluptatem ab odio alias!Lorem
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla adipisci laudantium quo quod eos hic cupiditate ad porro rerum. Consequatur, ullam. Eos tempora sapiente necessitatibus ex quo vel consequatur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem deleniti dolor porro eius quos, recusandae laboriosam? Quo expedita maiores explicabo reiciendis recusandae porro voluptas vero! Voluptatum ab temporibus excepturi?
                        </p>

                        <Button href="/projects">All projects</Button> {' '}

                    </Col>


                    <Col md-3={{ span: 2, offset: 2 }}>

                        <img src="#" alt="imagen " />

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, iure, illum fugit cumque atque, tempora fuga non aut nisi odit enim mollitia doloribus quasi numquam inventore omnis nemo. Obcaecati, aspernatur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nam quos rem saepe impedit consequuntur quidem hic id pariatur perferendis, voluptas qui ipsam nobis aperiam nisi voluptatem ab odio alias!Lorem
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla adipisci laudantium quo quod eos hic cupiditate ad porro rerum. Consequatur, ullam. Eos tempora sapiente necessitatibus ex quo vel consequatur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem deleniti dolor porro eius quos, recusandae laboriosam? Quo expedita maiores explicabo reiciendis recusandae porro voluptas vero! Voluptatum ab temporibus excepturi?
                        </p>

                        <Button href="/alumni">Alumni list</Button>{' '}

                    </Col>

                </Row>

            </Container>

        </div >
    )

}

export default HomePage