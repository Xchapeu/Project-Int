import "./styles.css";

export const Card = ({ nome, idade, raça, hasChip }) => {
    return (
        <div className="card-container">
            <div className="card-header">
                <h3>{nome}</h3>
            </div>
            <div className="card-content">
                <p><span>Idade:</span> {idade} Anos</p>
                <p><span>Raça:</span> {raça}</p>
                <p><span>Possui chip:</span> {hasChip}</p>
            </div>
        </div>
    );
}