import logoImg from "../../assets/logo1.png";
import "./styles.css";

export const Header = ({ children }) => {

    return (
        <header className="header" id="top">
            <div className="main-container">
                {/* <img src={logoImg} alt="Logo Pet Agenda" /> */}
                <h1>Agenda Pet</h1>
            </div>

            { children } 
        </header>
    );
}