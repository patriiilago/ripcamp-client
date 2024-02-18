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
            <Container className="d-flex justify-content-center">
                <div className="AlumniListContainer">
                    <h1>Alumni List</h1>
                    {alumnis.map((alumni, index) => {
                        return (
                            <Card key={alumni.id} border="secondary" style={{ width: '55rem', marginBottom: '20px' }} className="card">
                                <Card.Body>
                                    <div className="alumniBody">
                                        <div className="alumniContent">
                                            <img className="alumniImg" src={alumni.img} alt={alumni.id} />
                                            <div className="alumniInfo">
                                                <Link to={`/alumni/${alumni.id}`}>
                                                    <h5>{alumni.fullName.firstName} {alumni.fullName.lastName}</h5>
                                                </Link>
                                                <span><strong> Email:</strong> {alumni.contact.email}</span>
                                                <span><strong> Phone Number:</strong> {alumni.contact.phone}</span>
                                                <span><strong> Is working?:</strong> {alumni.isWorking ? "Yes" : "No"}</span>
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
                    })}
                    {/* Agregar un margen inferior a la última tarjeta */}
                    <div style={{ marginBottom: '80px' }}></div>
                </div>
            </Container>
        </div>
    );
};
export default AlumniList