import { useEffect, useState } from "react"
import axios from "axios"
import AlumniCard from './../AlumniCard/AlumniCard'
import { Container } from "react-bootstrap"

const API_URL = "https://ripcamp-server.fly.dev"


const AlumniList = () => {

    const [alumnis, setAlumnis] = useState([])

    useEffect(() => loadAlumni(), [])

    const loadAlumni = () => {
        axios
            .get(`${API_URL}/alumni`)
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