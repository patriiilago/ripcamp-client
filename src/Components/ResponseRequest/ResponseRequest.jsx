import { Container, Accordion, Button, Form, FloatingLabel } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import './ResponseRequest.css'

const API_URL = "https://ripcamp-server.fly.dev"

const ResponseRequest = ({ request, loadRequests }) => {

    const [requestData, setRequestsData] = useState({ ...request })

    const handleInputChange = e => {
        setRequestsData({ ...requestData, textresponse: e.target.value })
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        axios
            .put(`${API_URL}/requests/${request.id}`, { ...requestData, response: true })
            .then(() => loadRequests())
            .catch(err => console.log(err))

    }


    return (


        <Container>

            {
                request?.response === false &&

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>Response:</strong> </Accordion.Header>
                        <Accordion.Body>

                            <Form onSubmit={handleCommentSubmit}>
                                <FloatingLabel controlId="floatingTextarea2" label="coment..." className="mt-2 mb-2" >
                                    <Form.Control
                                        type="text"
                                        name={'textresponse'}
                                        value={requestData?.textresponse}
                                        onChange={handleInputChange}
                                    />
                                </FloatingLabel>

                                <Button type="submit" className="mt-2 mb-2" variant="dark">Send response</Button>
                            </Form>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


            }

        </Container>

    )

}

export default ResponseRequest