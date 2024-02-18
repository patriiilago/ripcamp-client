
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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}>

      <div className="AlumniCard">

        <h1>Alumni details</h1>

        <Card key={alumni.id} border="secondary" style={{ width: '30rem' }} className="card">

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
              <span> <strong>Phone: </strong> {alumni.contact.phone}</span>
              {' '}
              <span> <strong> Contact: </strong> {alumni.contact.email}</span>
              <span> <strong> City: </strong> {alumni.address.city}</span>
              <span> <strong> Birth:</strong> {alumni.birth}</span>
              <span>  <strong> Languages: </strong>
                {alumni.languages[0]}
                {' and '}
                {alumni.languages[1]}</span>
              {' '} <br />
              <span> <strong> Is working?: </strong> {alumni.isWorking ? "Is working now" : "Is not working now"}</span>

            </Card.Text>

            <Button
              className="btn btn-dark"
              variant="btn btn-primary"
            >
              Request to {alumni.fullName.firstName}
            </Button>

            {' '}

            <Button
              className="btn btn-dark"
              variant="btn btn-primary"
              href={"/alumni"}
            >
              Back
            </Button>

          </Card.Body>

        </Card>
      </div>
    </div>
  )

}
export default AlumniCard