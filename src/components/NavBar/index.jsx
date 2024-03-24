import { Link } from "react-router-dom"
import './styles.css'

export const NavBar = () => {
    return (
        <ul className="navBarContainer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trophies">Conquistas</Link></li>
            <li><Link to="/pets">Seus Pets</Link></li>
            <li className="dropdown">
                <Link to="#" className="dropbtn">Locais</Link>
                <div className="dropdown-content">
                    <Link to="/pets/locais-pet-friendly">Pet Friendly</Link>
                    <Link to="/pets/clinicas-veterinarias">Clínicas</Link>
                    <Link to="/pets/parques">Parques</Link>
                </div>
            </li>
        </ul>
    )
}