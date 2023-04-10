import logoImg from "../../assets/logo1.png";
import "./style.css";

export const Footer = () => {
    return(
        <footer className="footer-container">
            <img src={logoImg} alt="logo Agenda pet" />
            <small>Desenvolvido e implementado em 2023</small>
            <p>Redes sociais</p>
        </footer>
    );
}