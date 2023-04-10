import { useEffect, useState } from "react";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

import "./styles.css";
import { TopButton } from "../TopButton";
import { Vaccines } from "../Vaccines";
import { Footer } from "../Footer";

const racas = [
    "Afegão Hound",
    "Affenpinscher",
    "Airedale Terrier",
    "Akita",
    "American Staffordshire Terrier",
    "Basenji",
    "Basset Hound",
    "Beagle",
    "Beagle Harrier",
    "Bearded Collie",
    "Bedlington Terrier",
    "Bichon Frisé",
    "Bloodhound",
    "Bobtail",
    "Boiadeiro Australiano",
    "Boiadeiro Bernês",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    "Boston Terrier",
    "Boxer",
    "Bulldog Francês",
    "Bulldog Inglês",
    "Bull Terrier",
    "Bullmastiff",
    "Cairn Terrier",
    "Cane Corso",
    "Cão D'água Português",
    "Cão de Crista Chinês",
    "Cavalier King Charles Spaniel",
    "Chesapeake Bay Retriever",
    "Chihuahua",
    "Chow Chow",
    "Cocker Spaniel Americano",
    "Cocker Spaniel Inglês",
    "Collie",
    "Coton de Tuléar",
    "Dachshund",
    "Dálmata",
    "Dandie Dinmont Terrier",
    "Dobermann",
    "Dog Argentino",
    "Dog Alemão",
    "Fila Brasileiro",
    "Fox Terrier (Pelo duro e Pelo liso)",
    "Foxhound Inglês",
    "Galgo Escocês",
    "Galgo irlandês",
    "Golden Retriever",
    "Grande Boiadeiro Suiço",
    "Greyhound",
    "Grifo da Bélgica",
    "Husky Siberiano",
    "Jack Russell Terrier",
    "King Charles",
    "Komondor",
    "Labradoodle",
    "Labrador Retriever",
    "Lakeland Terrier",
    "Leonberger",
    "Lhasa Apso",
    "Lulu da Pomerânia",
    "Malamute do Alaska",
    "Maltês",
    "Mastiff",
    "Mastim Napolitano",
    "Mastim Tibetano",
    "Norfolk Terrier",
    "Norwich Terrier",
    "Papillon",
    "Pastor Alemão",
    "Pastor Australiano",
    "Pinscher Miniatura",
    "Poodle",
    "Pug",
    "Rottweiler",
    "Sem Raça Definida (SRD)",
    "Shih Tzu",
    "Silky Terrier",
    "Skye Terrier",
    "Staffordshire Bull Terrier",
    "Terra Nova",
    "Tosa",
    "Vira-lata",
    "Weimaraner",
    "Welsh Corgi (Cardigan)",
    "welsh Corgi (Pembroke)",
    "West Highland White Terrier",
    "Whippet",
    "Xoloitzcuintli",
    "Yorkshire Terrier"

];

export const MainContent = () => {

    const [petNome, setPetNome] = useState("");
    const [petIdade, setPetIdade] = useState(0);
    const [raca, setRaca] = useState(racas[0]);
    const [petGender, setPetGender] = useState("macho");

    const [tutor, setTutor] = useState({});  

    const handlePetFormSubmit = () => {
        console.log("Pet cadastrado com sucesso!");
    }

    useEffect(() => {
        const recoveredTutorName = localStorage.getItem("user");
        
        if(recoveredTutorName) {
            setTutor(JSON.parse(recoveredTutorName));
        }
    }, []);

    return (
        <>
            <div className="container">
                <h2>Bem vindo(a) {tutor.nome}!</h2>
                <section className="pet-registration">
                    <h3>Cadastre seu pet</h3>
                    <form onSubmit={handlePetFormSubmit}>
                        <fieldset className="field">
                            <label htmlFor="petNome">Nome do pet</label>
                            <input type="text" id="petNome" name="petNome" />
                        </fieldset>
                        
                        <fieldset className="field">
                            <label htmlFor="petIdade">Idade do pet</label>
                            <input type="number" id="petIdade" name="petIdade" />
                        </fieldset>
                        
                        <fieldset className="field">
                            <label htmlFor="petRaca">Raça: 
                                <select name="petRaca" id="petRaca" value={raca} onChange={e => setRaca(e.target.value)}>
                                    { racas.map(raca => <option key={raca} value={raca}>{raca}</option>) }
                                </select>
                            </label>
                        </fieldset>
                        
                        <fieldset className="petGender">
                            <label htmlFor="petGender">Sexo:
                                <select name="petGender" id="petGender" value={petGender} onChange={e => setPetGender(e.target.value)}>
                                    <option value="macho">Macho</option>
                                    <option value="femea">Fêmea</option>
                                </select>
                            </label>
                            { petGender === "macho" ? <MaleIcon color="primary"/> : <FemaleIcon color="secondary"/> }
                        </fieldset>

                        <fieldset className="field">
                            <label htmlFor="vermifugo">Última vermifugação:</label>
                            <input type="date" id="vermifugo" name="vermifugo" />
                        </fieldset>

                        <fieldset className="hasChip">
                            <label htmlFor="petChip">Possui chip: </label>
                            <input type="checkbox" id="petChip" name="petChip" />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="petCastrado">Castração: </label>
                            <input type="checkbox" id="petCastrado" name="petCastrado" />
                        </fieldset>

                        <div className="vaccines">
                            <label className="title">Vacinas:</label>
                            <fieldset className="field">
                                <label htmlFor="v8">V8 - ultima vacinação: </label>
                                <input type="date" id="v8" name="v8" />
                            </fieldset>

                            <fieldset className="field">
                                <label htmlFor="v10">V10 - ultima vacinação: </label>
                                <input type="date" id="v10" name="v10" />
                            </fieldset>

                            <fieldset className="field">
                                <label htmlFor="antirabica">Antirábica - ultima vacinação: </label>
                                <input type="date" id="antirabica" name="antirabica" />
                            </fieldset>

                            <input type="submit" value="Cadastrar pet" className="btn-pet-submit" />
                        </div>

                    </form>
                </section>

                <Vaccines />

                <TopButton />

            </div>

            <Footer />
        </>
    );
}