import vaccinesInfo from "../../assets/vacinas-dog.png";
import "./style.css";

export const Vaccines = () => {
    return(
        <section className="vaccines-info">
            <h3>Vacinas caninas</h3>
            <img src={vaccinesInfo} alt="Vacinas para cachorro" />
        </section>
    );
}