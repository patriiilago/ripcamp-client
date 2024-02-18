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


                {
                    alumnis.map((alumni) => {
                        return (

                            <Card key={alumni.id} border="secondary" style={{ width: '50rem' }} className="card">

                                <Card.Body>
                                    <div className="alumniBody">
                                        <div className="alumniContent">
                                            <img className="alumniImg" src={alumni.img} alt={alumni.id} />
                                            <div className="alumniInfo">
                                                <Link to={`/alumni/${alumni.id}`}>
                                                    <h5>{alumni.fullName.firstName} {alumni.fullName.lastName}</h5>
                                                </Link>
                                                <p><strong>Email:</strong> {alumni.contact.email}</p>
                                                <p><strong>Phone Number:</strong> {alumni.contact.phone}</p>
                                                <p><strong>Is working?:</strong> {alumni.isWorking ? "Yes" : "No"}</p>
                                            </div>
                                            <div className="buttonContainer">
                                                <Link to={`/alumni/${alumni.id}`}>
                                                    <Button variant="outline-success"><strong>Request me!</strong> </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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