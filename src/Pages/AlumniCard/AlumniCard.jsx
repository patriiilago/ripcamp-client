
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlumniCard = ({ alumniInfo }) => {
  const { alumni } = alumniInfo

  return (
    <Card key={alumni.id} border="secondary" style={{ width: '50rem' }} className="card">
      <Card.Body>
        <div className="alumniBody">
          <div className="alumniContent">
            <img className="alumniImg" src={alumni.img} alt={alumni.id} />
            <div className="alumniInfo">
              <h5>{alumni.fullName.firstName} {alumni.fullName.lastName}</h5>
              <p><strong>Email:</strong> {alumni.contact.email}</p>
              <p><strong>Phone Number:</strong> {alumni.contact.phone}</p>
              <p><strong>Is working?:</strong> {alumni.isWorking ? "Yes" : "No"}</p>
            </div>
            <div className="buttonContainer">
              <Link to="/alumni-list"> {/* Ajusta la ruta según tu configuración */}
                <Button variant="outline-success">
                  <strong>Back to Alumni List</strong>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AlumniCard;

// import React from "react"
// import { Link } from "react-router-dom"
// import { Card, Button } from "react-bootstrap"

// const AlumniCard = ({ AlumniInfo }) => {
//     const { alumni } = alumniInfo

//     const navigate = useNavigate()

//     return (
//         <div>
//             <>
//                 <Card style={{ width: '18rem' }}>

//                     <Card.Img

//                         variant="top"
//                         src={alumni.img} alt={alumni.fullName.firstName}
//                     />

//                     <Card.Body>

//                         <Card.Title>

//                             {alumni.fullName.firstName}
//                             {alumni.fullName.lastName}

//                         </Card.Title>

//                         <Card.Text>

//                             <p>Contact: {alumni.contact.email}</p>
//                             <p>City: {alumni.address.city}</p>
//                             <p>Birth: {alumni.birth}</p>
//                             <p>Languages: {alumni.languages}</p>
//                             <p>{alumni.isWorking ? "Is working" : "No is working now"}</p>

//                         </Card.Text>

//                         <Button
//                             variant="btn btn-primary"
//                             onClick={() =>
//                                 navigate(-1)
//                             }
//                         >
//                             Back
//                         </Button>
//                         <Button
//                             variant="btn btn-primary"
//                             onClick={() =>
//                                 navigate()
//                             }
//                         >
//                             Request
//                         </Button>
//                     </Card.Body>
//                 </Card>
//             </>
//         </div>
//     )

// }
// export default AlumniCard