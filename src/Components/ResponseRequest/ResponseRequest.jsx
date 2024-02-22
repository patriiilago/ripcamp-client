import { Container, Accordion, Button, Form, FloatingLabel } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"


const API_URL = "http://localhost:5005"

const ResponseRequest = () => {


    const [requestData, setRequestsData] = useState({
        email: "",
        name: "",
        type: "",
        tags: "",
        title: "",
        description: "",
        textresponse: ""

    })

    //prueba

    const navigate = useNavigate()
    const { requestId } = useParams()




    useEffect(() => {
        const loadRequests = () => {
            if (requestId) {
                axios
                    .put(`${API_URL}/request-list/${requestId}`, requestData)
                    .then(() => navigate(`/request-list/${requestId}`))
                    .catch(err => console.log(err))
            }
        }
        loadRequests()
    }, [requestId])




    const handleInputChange = e => {
        const { value, name } = e.target;
        setRequestsData({ ...requestData, [name]: value })
    }




    const handleCommentSubmit = (e) => {
        e.preventDefault()
        if (requestId) {
            axios
                .put(`${API_URL}/request-list/${requestId}`, requestData)
                .then(() => {
                    setRequestsData({ ...requestData, textresponse: '' })
                    navigate(`/request-list/`)
                })
                .catch(err => console.log(err))
        }
    };

    return (


        <Container>
            {
                !requestData.response &&

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
                                        value={requestData.textresponse}
                                        onChange={handleInputChange}
                                    />
                                    <Button className="mt-2 mb-2" variant="dark" type="submit">Send response</Button>
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