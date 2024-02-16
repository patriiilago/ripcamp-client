import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './AlumniList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap"

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

                            <article className="AlumniCard" key={alumni.id}>
                                <Link to={`/alumni/${alumni.id}`} >
                                    <img className="alumniImg" src={alumni.img} alt={alumni.id} />
                                    <p className="alumniP">
                                        <h2 >{alumni.fullName.firstName}</h2>
                                        <p>{alumni.fullName.lastName}</p>
                                        <p>{alumni.contact.email}</p>
                                    </p>
                                </Link>
                                <p></p>


                            </article>

                        )

                    })

                }
            </Container>
        </div>
    )

}
export default AlumniList