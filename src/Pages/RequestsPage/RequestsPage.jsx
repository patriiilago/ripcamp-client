import { Card, ListGroup } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"


const API_URL = "http://localhost:5005"

const RequestsPage = () => {

    const [request, setRequest] = useState([])
    useEffect(() => loadRequest(), [])

    const loadRequest = () => {
        axios
            .get(`${API_URL}/requests`)
            .then(({ data }) => setRequest(data))
            .catch(err => console.log(err))
    }



    //TODO: METER MAS DATOS EN LA CARD DE ALUMNI (BOOTCAMP, CAMPUS...)

    return (
        <div>

            {
                request.map((requests) => {
                    return (

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>



                    )
                })
            }



        </div>
    )



}
export default RequestsPage