import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"

const AlumniCard = ({ id, img, fullName, contact, isWorking }) => {

    const { firstName, lastName } = fullName
    const { email, phone } = contact

    return (
        <Card border="secondary" style={{ width: '55rem', marginBottom: '20px' }}>
            <Card.Body>
                <div className="alumniBody">
                    <div className="alumniContent">
                        <img className="alumniImg" src={img} alt={id} />
                        <div className="alumniInfo">
                            <Link to={`/alumni/${id}`}>
                                <h5>{firstName} {lastName}</h5>
                            </Link>
                            <span><strong> Email:</strong> {email}</span>
                            <span><strong> Phone Number:</strong> {phone}</span>
                            <span><strong> Is working?:</strong> {isWorking ? "Yes" : "No"}</span>
                        </div>
                        <div className="buttonContainer">
                            <Link to={`/alumni/${id}`}>
                                <Button variant="outline-success"><strong>Request me!</strong> </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AlumniCard