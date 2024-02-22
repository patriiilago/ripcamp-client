import { Container, Accordion, Button, Form, FloatingLabel } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"


const API_URL = "http://localhost:5005"

const ResponseRequest = ({ request }) => {


    const [requestData, setRequestsData] = useState({ ...request })

    const navigate = useNavigate()
    const { requestId } = useParams()


    const handleInputChange = e => {
        setRequestsData({ ...requestData, textresponse: e.target.value })

    }


    const handleCommentSubmit = (event) => {
        event.preventDefault()

        if (!requestData?.textresponse) {
            axios
                .put(`${API_URL}/requests/${requestId}`, requestData)
                .then(() => navigate(`/request-list/`))
                .catch(err => console.log(err))
        }
    }

    return (


        <Container>

            {
                requestData?.textresponse !== '' &&

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>Response:</strong> </Accordion.Header>
                        <Accordion.Body>

                            <Form onSubmit={handleCommentSubmit}>
                                <FloatingLabel controlId="floatingTextarea2" label="coment..." className="mt-2 mb-2" >
                                    <Form.Control
                                        type="text"
                                        as="textarea"
                                        name={'textresponse'}
                                        value={requestData?.textresponse}
                                        onChange={handleInputChange}
                                    />
                                    <Button type="submit" className="mt-2 mb-2" variant="dark" value="Send response">Send response</Button>
                                </FloatingLabel>
                            </Form>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }

        </Container>

    )

}

export default ResponseRequest