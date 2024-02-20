
import { Container, Form, FloatingLabel } from 'react-bootstrap';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5005/"

const NewRequestForm = () => {

    const [requestData, setRequestData] = useState({
        email: "",
        name: "",
        bootcamp: "",
        type: "",
        title: "",
        description: ""
    })

    const navigate = useNavigate()

    const handleFromSubmit = (event) => {
        event.preventDefault()

        axios
            .post(`${API_URL}/requests`, requestData)
            .then(() => navigate('/request-list'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setRequestData({ ...requestData, [name]: value })
    }


    return (
        <div className='NewRequestPage'>

            <Container>

                <h1>NEW REQUEST</h1>

                <Form onSubmit={handleFromSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className='mt-3 mb-3'
                    >

                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={requestData.email}
                            onChange={handleInputChange}
                            name={'email'}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingName" label="Name" className='mt-3 mb-3'>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={requestData.name}
                            onChange={handleInputChange}
                            name={'name'}
                        />
                    </FloatingLabel>


                    <FloatingLabel className='mt-3 mb-3'>
                        <Form.Select aria-label="Default select example"
                            type="text"
                            placeholder="Default select example"
                            value={requestData.bootcamp}
                            onChange={handleInputChange}
                            name={'bootcamp'}>
                            <option>Bootcamp: </option>
                            <option value="Web">Web</option>
                            <option value="Data">Data</option>

                        </Form.Select>
                    </FloatingLabel>





                    <FloatingLabel className='mt-3 mb-3'>
                        <Form.Select aria-label="Default select example"
                            type="text"
                            placeholder="Default select example"
                            value={requestData.type}
                            onChange={handleInputChange}
                            name={'type'}>
                            <option>Request type: </option>
                            <option value="Doubt">Doubt</option>
                            <option value="Help">Help</option>
                            <option value="Technical Assistance">Technical Assistance</option>
                        </Form.Select>
                    </FloatingLabel>




                    <FloatingLabel controlId="floatingTitleTarea" label="title" className='mt-3 mb-3'>

                        <Form.Control
                            type="text"
                            placeholder="Title"
                            value={requestData.title}
                            onChange={handleInputChange}
                            name={'title'}

                        />
                    </FloatingLabel>



                    <FloatingLabel controlId="floatingTextarea2" label="Description" className='mt-3 mb-3'>

                        <Form.Control
                            type="text"
                            as="textarea"
                            placeholder="Leave a comment here"
                            value={requestData.description}
                            onChange={handleInputChange}
                            name={'description'}
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>



                    <input type="submit" value='New Request' />
                </Form>
            </Container>
        </div>

    );
}


export default NewRequestForm