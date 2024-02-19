import AlumniList from '../../Components/AlumniList/AlumniList';
import './AlumniPage.css'
import { Container } from "react-bootstrap"


const AlumniPage = () => {

    return (
        <div className="AlumniList">

            <Container className="d-flex justify-content-center">

                <div className="AlumniListContainer">

                    <h1>Alumni List</h1>

                    <AlumniList />



                    <div style={{ marginBottom: '80px' }}></div>

                </div>

            </Container>

        </div>

    );
};
export default AlumniPage