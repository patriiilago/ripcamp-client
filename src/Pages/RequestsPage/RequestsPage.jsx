import { Card, ListGroup, Container, Col, Row, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import './../../Pages/RequestsPage/RequestsPage.css'
import { Link, useNavigate, useParams } from "react-router-dom"


const API_URL = "http://localhost:5005"

const RequestsPage = () => {

    const [requests, setRequests] = useState([])
    const { requestId } = useParams()
    const navigate = useNavigate()


    useEffect(() => loadRequests(), [])

    const loadRequests = () => {
        axios
            .get(`${API_URL}/requests/`)
            .then(({ data }) => setRequests(data))
            .catch(err => console.log(err))
    }



    const deleteRequest = requestId => {
        axios
            .delete(`${API_URL}/requests/${requestId}`)
            .then(() => loadRequests())
            .catch(err => console.log(err))
    }

    //TODO: HAY QUE HACER EDIT PAGE PARA CREAR EL BOTON DE EDITAR Y QUE NOS LLEVE AHI

    return (

        <Container className="col-md-8">
            {
                requests.map((request) => {
                    return (

                        <Row key={request.id}>
                            <Col>

                                <div className="requestCard mb-2 mt-5" >

                                    <Card style={{ width: '40rem' }}>

                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item><strong>Nombre: </strong> {request.name}</ListGroup.Item>
                                            <ListGroup.Item><strong>Email: </strong> {request.email}</ListGroup.Item>
                                            <ListGroup.Item><strong>Project: </strong> {request.project}</ListGroup.Item>
                                            <ListGroup.Item><strong>Type: </strong>{request.type}</ListGroup.Item>
                                            <ListGroup.Item><strong>Tag: </strong>{request.tags}</ListGroup.Item>
                                        </ListGroup>

                                        <Card.Body>
                                            <Card.Title className="textCard">{request.title}</Card.Title>
                                            <Card.Text>
                                                {request.description}
                                            </Card.Text>

                                            <ListGroup.Item>

                                                <Link to={`/request/edit/${request.id}`}>
                                                    <Button className="mb-2" variant="dark" >Edit</Button>
                                                </Link>
                                                {' '}
                                                <Button onClick={() => deleteRequest(request.id)} className="mb-2" variant="dark" >Delete</Button>



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