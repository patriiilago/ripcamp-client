import React from "react"
import { Card, Button, Col } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import './AlumniDetailsPage.css'

const API_URL = "https://ripcamp-server.fly.dev"

const AlumniDetailsPage = () => {

  const [alumni, setAlumni] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { alumniId } = useParams()

  useEffect(() => loadAlumni(), [alumniId])

  const loadAlumni = () => {
    axios
      .get(`${API_URL}/alumni/${alumniId}`)
      .then(response => {
        setAlumni(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  const { img, fullName, contact, address, birth, languages, isWorking, bootcamp, campus } = alumni

  return (
    <div
      className="d-flex justify-content-center align-items-center"
    >

      {
        isLoading
          ?
          <h1>Loading....</h1>
          :
          <div>

            <h1>Alumni details</h1>

            <Col className=" mb-5" sm={{ span: 8, offset: 2 }}>

              <Card className="AlumniCard" border="secondary" >

                <Card.Img
                  variant="top"
                  src={img}
                  alt={fullName.firstName}
                />

                <Card.Body >

                  <Card.Title>
                    <h3>
                      {fullName.firstName} {' '} {fullName.lastName}
                    </h3>

                  </Card.Title>

                  <Card.Text>
                    <strong>Phone: </strong> {contact.phone}
                  </Card.Text>

                  <Card.Text>
                    <strong> Contact: </strong> {contact.email}
                  </Card.Text>

                  <Card.Text>
                    <strong> City: </strong> {address.city}
                  </Card.Text>

                  <Card.Text>
                    <strong> Birth:</strong> {birth}
                  </Card.Text>



                  <Card.Text>
                    <strong>Languages: </strong>
                    {
                      languages.map((language, index) => <span key={index}>{language}{" "}</span>)
                    }
                  </Card.Text>

                  <Card.Text>
                    <strong> Bootcamp: </strong> {bootcamp}
                  </Card.Text>


                  <Card.Text>
                    <strong> Campus: </strong> {campus}
                  </Card.Text>

                  <Card.Text>
                    <strong> Is working?: </strong> {isWorking ? "Is working now" : "Is not working now"}
                  </Card.Text>


                  <Link to={"/request-form"}>
                    <Button variant="dark" > ❔ Request to {fullName.firstName}</Button>
                  </Link>


                  {' '}


                  <Link to={"/alumni"}>
                    <Button variant="dark" > 🔙 Back</Button>
                  </Link>


                </Card.Body>

              </Card>
            </Col>
          </div>
      }
    </div >
  )

}
export default AlumniDetailsPage