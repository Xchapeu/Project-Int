import { useContext } from "react";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../contexts/auth";
import "./styles.css";

export const Header = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <header className="header">
            <div className="main-container">
                <img src={logoImg} alt="Logo Pet Agenda" />
                <h1>Agenda Pet</h1>
            </div>
            
            <div className="logout-container">
                <button onClick={handleLogout}>Sair</button>
            </div>

        </header>
    );
}