import { Card, ListGroup, Container, Col, Row, Button, Accordion, FloatingLabel, Form } from "react-bootstrap"
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

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        alert('aaaaqui!')
    }




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
                                            <ListGroup.Item><strong>Responsed:  </strong> {request.response ? "✅" : "❌"}</ListGroup.Item>
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
                                                {' '}

                                                {
                                                    !request.response &&

                                                    <Accordion defaultActiveKey="0">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header><strong>Response:</strong> </Accordion.Header>
                                                            <Accordion.Body>

                                                                <Form onSubmit={handleCommentSubmit}>
                                                                    <FloatingLabel controlId="floatingTextarea2" label="Description" className="mt-2 mb-2" >
                                                                        <Form.Control
                                                                            type="text"
                                                                            as="textarea"
                                                                        />
                                                                        <Button className="mb-2" variant="dark" type="submit" >Send respnse</Button>
                                                                    </FloatingLabel>
                                                                </Form>

                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                }
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