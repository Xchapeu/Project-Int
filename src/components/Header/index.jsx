import logoImg from "../../assets/logo1.png";
import { NavBar } from "../NavBar";
import "./styles.css";

export const Header = ({ children }) => {

    return (
        <header className="header" id="top">
            <div className="main-container">
                {/* <img src={logoImg} alt="Logo Pet Agenda" /> */}
                <h1>Agenda Pet</h1>
            </div>
            <NavBar />
            { children } 
        </header>
    );
}