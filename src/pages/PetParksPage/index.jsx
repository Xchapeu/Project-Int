import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.css";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TopButton } from "../../components/TopButton";
import { LocalCard } from "../../components/LocalCard";
import { parks } from '../../../parks';

export const PetParksPage = () => {

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
            <section className="pet-parks-container">
                <h3 className="pet-parks-title">Parques para visitar com seu pet</h3>
                <ul className="pet-parks">
                    {
                        parks.map(park => <LocalCard name={park.name} location={park.location} imgSrc={park.imgSrc} description={park.description} mapSrc={park.mapSource} key={park.imgSrc}/>)
                    }
                </ul>
            </section>

            <TopButton />

            <Footer />
        </>
    );
}