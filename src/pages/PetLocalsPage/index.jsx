import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.css";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TopButton } from "../../components/TopButton";
import { useEffect, useState } from "react";
import { LocalCard } from "../../components/LocalCard";
import { petFriendlyLocals } from '../../../petFriendlyLocals';

export const PetLocalsPage = () => {

    const [pets, setPets] = useState([]);

    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate("/");
    }


    return(
        <>
            <Header>
                <Button title="VOLTAR" onClick={handleGoBack}>
                    <ArrowBackIcon />
                </Button>
            </Header>
            <section className="pet-locals-container">
                <h3 className="title">Locais Pet Friendly</h3>
                <ul className="pet-locals">
                    {
                        petFriendlyLocals.map(local => <LocalCard name={local.name} location={local.location} imgSrc={local.imgSrc} description={local.description} mapSrc={local.mapSource} key={local.imgSrc}/>)
                    }
                </ul>
            </section>

            <TopButton />

            <Footer />
        </>
    );
}