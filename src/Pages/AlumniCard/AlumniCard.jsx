
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import NotFoundPage from './../NotFoundPage/NotFoundPage'

const AlumniCard = () => {
  const [alumni, setAlumnis] = useState({})


  const { alumniId } = useParams()


  useEffect(() => loadAlumni(), [alumniId])

  const API_URL = `http://localhost:5005/alumni/${alumniId}`

  const loadAlumni = () => {
    axios
      .get(`${API_URL}`)
      .then(({ data }) => {
        setAlumnis(data)
      })
      .catch(err => console.log(err))
  }

  if (!alumni || Object.keys(alumni).length === 0) {
    return <NotFoundPage />
  }

  return (
    <div className="AlumniCard">

      <h1>AQUIII ESTA LA CARD</h1>

      <Card key={alumni.id} border="secondary" style={{ width: '50rem' }} className="card">

        < Card.Img

          variant="top"
          src={alumni.img}
          alt={alumni.fullName.firstName}
        />

        <Card.Body>

          <Card.Title>
            <h3>
              {alumni.fullName.firstName} {' '}
              {alumni.fullName.lastName}
            </h3>

          </Card.Title>

          <Card.Text>
            <p>Phone: {alumni.contact.phone}</p>
            <p>Contact: {alumni.contact.email}</p>
            <p>City: {alumni.address.city}</p>
            <p>Birth: {alumni.birth}</p>
            <p>Languages:
              {alumni.languages[0]}
              {' '}
              {alumni.languages[1]}</p>
            <p>{alumni.isWorking ? "Is working" : "No is working now"}</p>

          </Card.Text>

          <Button
            className="btn btn-dark"
            variant="btn btn-primary"
            href={"/alumni"}
          >
            Back
          </Button>
          {' '}
          <Button
            className="btn btn-dark"
            variant="btn btn-primary"
          >
            Request
          </Button>
        </Card.Body>

      </Card>

    </div>
  )

}
export default AlumniCard