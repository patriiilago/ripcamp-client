import { useEffect, useState } from "react"
import axios from "axios"
import AlumniCard from './../AlumniCard/AlumniCard'
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
        alumnis.map((alumni, index) => {
            return (
                <AlumniCard  {...alumni} key={index} />
            )
        })
    )
}

export default AlumniList