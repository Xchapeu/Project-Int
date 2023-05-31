import "./styles.css";

export const Card = ({ nome, idade, raca, gender, hasChip, isSterilized, petId, tutorId }) => {
    // console.log(`Nome: ${nome} - Idade: ${idade} - chip: ${hasChip} - castracao: ${isSterilized} - Sexo: ${gender}`)
    return (
        <div className="card-container">
            <div className="card-header">
                <h3>{nome}</h3>
            </div>
            <div className="card-content">
                <p><span>Idade: </span>{idade} { idade <= 1 ? "Ano" : "Anos" }</p>
                <p><span>Raça: </span>{raca}</p>
                <p><span>Sexo: </span>{gender}</p>
                <p><span>Possui chip: </span> { hasChip ? "Sim" : "Não" }</p>
                <p><span>{gender === "macho" ? "Castrado: " : "Castrada: "}</span> { isSterilized ? "Sim" : "Não" }</p>
                <p><span>Id do pet: </span>{petId}</p>
                <p><span>Id do tutor: </span>{tutorId}</p>
            </div>
        </div>
    );
}