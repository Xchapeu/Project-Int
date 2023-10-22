import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.css";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TopButton } from "../../components/TopButton";
import { LocalCard } from "../../components/LocalCard";
import { clinics } from '../../../clinics';

export const PetClinicsPage = () => {

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
            <section className="pet-clinics-container">
                <h3 className="pet-clinics-title">Clínicas Veterinárias</h3>
                <ul className="pet-clinics">
                    {
                        clinics.map(clinic => <LocalCard name={clinic.name} location={clinic.location} imgSrc={clinic.imgSrc} description={clinic.description} mapSrc={clinic.mapSource} key={clinic.imgSrc}/>)
                    }
                </ul>
            </section>

            <TopButton />

            <Footer />
        </>
    );
}