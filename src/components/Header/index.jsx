import logoImg from "../../assets/logo.png";
import "./styles.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="main-container">
                <img src={logoImg} alt="Logo Pet Agenda" />
                <h1>Agenda Pet</h1>
            </div>
        </header>
    );
}