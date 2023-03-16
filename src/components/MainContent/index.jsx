import { Card } from "../Card";
import "./styles.css";

export const MainContent = () => {
    return (
        <div className="container">
            <h2>Tutor: Rodrigo</h2>
            <ul className="card-list">
                <Card nome="Rebeca" idade={6} raça="Vira-lata" hasChip="Sim"/>
                <Card nome="Lulu" idade={2} raça="Spitz alemão" hasChip="Não"/>
                <Card nome="Pity" idade={11} raça="Pinscher" hasChip="Sim"/>
            </ul>
        </div>
    );
}