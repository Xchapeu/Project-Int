import logoImg from "../../assets/logo.png";
import "./styles.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="main-container">
                <img src={logoImg} alt="Logo Pet Agenda" />
                <span>Pet Agenda</span>
            </div>
        </div>
    );
}