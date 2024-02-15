import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="Footer">

            <Link className='FooterLink' to={"/about"}>About Us</Link>

        </footer>
    )

}
export default Footer