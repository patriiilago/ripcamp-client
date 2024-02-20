import { Card, ListGroup, Container, Col, Row, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import './../../Pages/RequestsPage/RequestsPage.css'
import { Link, useNavigate, useParams } from "react-router-dom"


const API_URL = "http://localhost:5005"

const RequestsPage = () => {

    const [request, setRequest] = useState([])
    const { requestId } = useParams()
    const navigate = useNavigate()


    useEffect(() => loadRequest(), [])

    const loadRequest = () => {
        axios
            .get(`${API_URL}/requests`)
            .then(({ data }) => setRequest(data))
            .catch(err => console.log(err))
    }



    const deleteRequest = () => {
        axios
            .delete(`${API_URL}/requests/${requestId}`)
            .then(() => navigate(`/requests`))
            .catch(err => console.log(err))
    }

    //TODO: METER MAS DATOS EN LA CARD DE ALUMNI (BOOTCAMP, CAMPUS...)
    //TODO: HAY QUE HACER EDIT PAGE PARA CREAR EL BOTON DE EDITAR Y QUE NOS LLEVE AHI

    return (

        <Container>
            {
                request.map((requests) => {
                    return (

                        <Row key={requests.id}>
                            <Col>

                                <div className="requestCard mb-2 mt-5" >

                                    <Card style={{ width: '40rem' }}>

                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item><strong>Nombre: </strong> {requests.name}</ListGroup.Item>
                                            <ListGroup.Item><strong>Email: </strong> {requests.email}</ListGroup.Item>
                                            <ListGroup.Item><strong>Project: </strong> {requests.project}</ListGroup.Item>
                                            <ListGroup.Item><strong>Type: </strong>{requests.type}</ListGroup.Item>
                                            <ListGroup.Item><strong>Tag: </strong>{requests.tags}</ListGroup.Item>
                                        </ListGroup>

                                        <Card.Body>
                                            <Card.Title className="textCard">{requests.title}</Card.Title>
                                            <Card.Text>
                                                {requests.description}
                                            </Card.Text>

                                            <ListGroup.Item>

                                                <Link to={"#"}>
                                                    <Button className="mb-2" variant="dark" >Edit</Button>
                                                </Link>
                                                {' '}
                                                <Button onClick={deleteRequest} className="mb-2" variant="dark" >Delete</Button>


                                            </ListGroup.Item>
                                        </Card.Body>
                                    </Card>




                                </div>
                            </Col>
                        </Row>




                    )
                })
            }

            <Link to={"/"}>
                <Button className="mb-5" variant="dark" >Back to Home</Button>
            </Link>
        </Container >
    )



}
export default RequestsPage