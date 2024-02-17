
const AlumniCard = ({ AlumniInfo }) => {

    const navigate = useNavigate()

    return (
        <div>
            <>
                <Card style={{ width: '18rem' }}>

                    <Card.Img

                        variant="top"
                        src={AlumniInfo.img} alt={AlumniInfo.fullName.firstName}
                    />

                    <Card.Body>

                        <Card.Title>

                            {AlumniInfo.fullName.firstName}
                            {AlumniInfo.fullName.lastName}

                        </Card.Title>

                        <Card.Text>

                            <p>Contact: {AlumniInfo.contact.email}</p>
                            <p>City: {AlumniInfo.address.city}</p>
                            <p>Birth: {AlumniInfo.birth}</p>
                            <p>Languages: {AlumniInfo.languages}</p>
                            <p>{AlumniInfo.isWorking ? "Is working" : "No is working now"}</p>

                        </Card.Text>

                        <Button
                            variant="btn btn-primary"
                            onClick={() =>
                                navigate(-1)
                            }
                        >
                            Back
                        </Button>
                        <Button
                            variant="btn btn-primary"
                            onClick={() =>
                                navigate()
                            }
                        >
                            Request
                        </Button>
                    </Card.Body>
                </Card>
            </>
        </div>
    )

}
export default AlumniCard