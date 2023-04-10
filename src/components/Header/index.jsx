import { useContext } from "react";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../contexts/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import "./styles.css";

export const Header = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <header className="header" id="top">
            <div className="main-container">
                <img src={logoImg} alt="Logo Pet Agenda" />
                <h1>Agenda Pet</h1>
            </div>
            
            <div className="logout-container">
                <button onClick={handleLogout}><p>SAIR</p><LogoutIcon /></button>
            </div>

        </header>
    );
}