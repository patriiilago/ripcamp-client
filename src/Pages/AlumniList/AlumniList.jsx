import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

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
            <h1>Alumni List</h1>
            <hr />
            {
                alumnis.map((alumni) => {
                    return (
                        <div className="AlumniCard" key={alumni.id}>
                            <Link to={`/alumni/${alumni.id}`} >
                                <img src={alumni.img} alt={alumni.id} />


                            </Link>


                        </div>
                    )

                })

            }




        </div>





    )





}
export default AlumniList