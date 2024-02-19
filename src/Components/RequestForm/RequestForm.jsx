import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




const RequestForm = () => {

    return (
        <Container sm={4}>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingName" label="Name">
                <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
            <Form.Select aria-label="Default select example">
                <option>Type: </option>
                <option value="1">Doubt</option>
                <option value="2">Help</option>
                <option value="3">Technical Assistance</option>
            </Form.Select>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />


            </FloatingLabel>

        </Container>


    );
}

export default RequestForm