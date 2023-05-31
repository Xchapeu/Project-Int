import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import "./styles.css";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TopButton } from "../../components/TopButton";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const PetListPage = () => {

    const [pets, setPets] = useState([]);
    const recoveredTutor = localStorage.getItem("user");
    const tutor = JSON.parse(recoveredTutor);
    const tutorId = tutor.id;

    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate("/");
    }

    async function getPets() {
        const response = await api.get(`/${tutorId}/pets`, (req, res) => res);
        const recoveredPets = response.data;
        return recoveredPets;
    }

    async function handleRetrievePets() {
        const petsRecovered = await getPets();
        setPets(petsRecovered);
    }
    
    useEffect(() => {
        handleRetrievePets();
    }, [])

    return(
        <>
            <Header>
                <Button title="VOLTAR" onClick={handleGoBack}>
                    <ArrowBackIcon />
                </Button>
            </Header>
            <section className="pet-list-container">
                <h3 className="title">Seus pets</h3>
                <ul className="pet-list">
                    {
                        pets.length === 0 ?
                        ( <h4 className="pet-list-empty">Nenhum pet cadastrado ainda!</h4> ) : 
                        pets.map((pet, i) => {
                            return(
                                <li key={`${pet.nome}-${i}`}>
                                    {console.log(pet)}
                                    <Card 
                                        nome={pet.nome}
                                        idade={pet.idade}
                                        raca={pet.raca}
                                        gender={pet.sexo}
                                        hasChip={pet.chip}
                                        isSterilized={pet.castracao}
                                        petId={pet.id}
                                        tutorId={pet.tutorId}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

            <TopButton />

            <Footer />
        </>
    );
}