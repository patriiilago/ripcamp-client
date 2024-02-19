import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
const img = 'https://blog.sinapsis.agency/wp-content/uploads/2021/04/DEFINICIONES.-ERROR-404.png'
const NotFoundPage = () => {


    return (
        <>

            <div className="NotFoundPage">
                <img src={img} alt="404 Not Found" />
                <Link to={"/"}>
                    <Button
                        className="btn btn-dark"
                        size="sg"
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </>
    )
}
export default NotFoundPage