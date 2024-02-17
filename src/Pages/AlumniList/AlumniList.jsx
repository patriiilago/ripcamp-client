import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './AlumniList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card, NavLink } from "react-bootstrap"

const API_URL = "http://localhost:5005/alumni"

const AlumniList = () => {

    const [alumnis, setAlumnis] = useState([])

    useEffect(() => loadAlumni(), [])

    const loadAlumni = () => {
        axios
            .get(`${API_URL}`)
            .then(({ data }) => setAlumnis(data))
            .catch(err => console.log(err))
    }
    return (

        <div className="AlumniList">

            <Container className="AlumniListContainer">

                <h1>Alumni List</h1>
                <hr />

                {
                    alumnis.map((alumni) => {
                        return (

                            <Card border="succes" style={{ width: '30rem' }}>

                                <Card.Header key={alumni.id}>
                                    <Link to={`/alumni/${alumni.id}`} >
                                        <img className="alumniImg" src={alumni.img} alt={alumni.id} />
                                        <h5>{alumni.fullName.firstName} {alumni.fullName.lastName}</h5>
                                    </Link>
                                </Card.Header>

                                <Card.Body>
                                    <Link>
                                        <div className="alumniP">
                                            <Card.Text>
                                                <p> Email: {alumni.contact.email}</p>
                                                <p>Phone Number: {alumni.contact.phone}</p>
                                                <p>Is working?: {alumni.isWorking ? "Yes" : "No"}</p>
                                                <Link to="/alumni-card">
                                                    <Button variant="outline-success" >Request me!</Button>
                                                </Link>
                                            </Card.Text>
                                        </div>
                                    </Link>

                                    <p></p>
                                </Card.Body>

                            </Card>

                        )

                    })

                }
            </Container>
        </div>
    )

}
export default AlumniList