import { useLayoutEffect, useState } from "react";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

import "./styles.css";
import { TopButton } from "../TopButton";
import { Vaccines } from "../Vaccines";
import { Footer } from "../Footer";
import { api } from "../../services/api";

const vaccines = [
    "v8",
    "v10",
    "antirabica",
    "gripe canina",
    "leishmaniose",
    "giardia",
    "puppy"
]

export const MainContent = () => {

    const [petNome, setPetNome] = useState("");
    const [petIdade, setPetIdade] = useState(0);
    const [racasArray, setRacasArray] = useState([])
    const [raca, setRaca] = useState(racasArray[0]);
    const [petGender, setPetGender] = useState("macho");
    const [vermifugo, setVermifugo] = useState("");
    const [isChipped, setIsChipped] = useState(false);
    const [isSterilized, setIsSterilized] = useState(false);
    const [v8, setV8] = useState("");
    const [v10, setV10] = useState("");
    const [antirabica, setAntirabica] = useState("");
    const [gripeCanina, setGripeCanina] = useState("");
    const [giardia, setGiardia] = useState("");
    const [leishmaniose, setLeishmaniose] = useState("");

    const [tutor, setTutor] = useState("");

    const handlePetFormSubmit = (e) => {
        e.preventDefault();

        console.log(petNome, petIdade, raca, petGender, vermifugo, v8, v10, antirabica, gripeCanina, giardia, leishmaniose);

        alert("Pet cadastrado com sucesso!");
    }

    async function getRacas() {
        const response = await api.get("/racas", (req, res) => res);
        const recoveredRacas = response.data;
        const racaNomes = recoveredRacas.map(raca => raca.nome);

        return racaNomes;
    }

    async function handleRacas() {
        const racaRecovered = await getRacas();
        setRacasArray(racaRecovered);
    }

    useLayoutEffect(() => {
        const recoveredTutorName = localStorage.getItem("user");
        
        if(recoveredTutorName) {
            const tutor = JSON.parse(recoveredTutorName);
            const tutorNome = tutor.nome;
            const tmp = tutorNome.split(" ");
            const primeiroNome = tmp[0];
            
            setTutor(primeiroNome);
        }
        
        handleRacas();
    }, []);

    return (
        <>
            <div className="container">
                <h2>Bem vindo(a) {tutor}!</h2>
                <section className="pet-registration">
                    <h3>Cadastre seu pet</h3>
                    <form onSubmit={handlePetFormSubmit}>
                        <fieldset className="field">
                            <label htmlFor="petNome">Nome do pet</label>
                            <input 
                                type="text" 
                                id="petNome" 
                                name="petNome"
                                value={petNome}
                                onChange={e => setPetNome(e.target.value)}
                                required
                            />
                        </fieldset>
                        
                        <fieldset className="field">
                            <label htmlFor="petIdade">Idade do pet</label>
                            <input 
                                type="number" 
                                id="petIdade" 
                                name="petIdade"
                                value={petIdade}
                                onChange={e => setPetIdade(e.target.value)}
                                required
                            />
                        </fieldset>
                        
                        <fieldset className="field">
                            <label htmlFor="petRaca">Raça: 
                                <select name="petRaca" id="petRaca" value={raca} onChange={e => setRaca(e.target.value)}>
                                    { racasArray.map((raca, i) => <option key={`${raca} - ${i}`} value={raca}>{raca}</option>) }
                                </select>
                            </label>
                        </fieldset>
                        
                        <fieldset className="petGender">
                            <label htmlFor="petGender">Sexo:
                                <select name="petGender" id="petGender" value={petGender} onChange={e => setPetGender(e.target.value)} required>
                                    <option value="macho">Macho</option>
                                    <option value="femea">Fêmea</option>
                                </select>
                            </label>
                            { petGender === "macho" ? <MaleIcon color="primary"/> : <FemaleIcon color="secondary"/> }
                        </fieldset>

                        <fieldset className="field">
                            <label htmlFor="vermifugo">Última vermifugação:</label>
                            <input 
                                type="date" 
                                id="vermifugo" 
                                name="vermifugo"
                                value={vermifugo}
                                onChange={e => setVermifugo(e.target.value)}
                            />
                        </fieldset>

                        <fieldset className="hasChip">
                            <label htmlFor="petChip">Possui chip: </label>
                            <input 
                                type="checkbox" 
                                id="petChip" 
                                name="petChip" 
                            />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="petCastrado">Castração: </label>
                            <input 
                                type="checkbox" 
                                id="petCastrado" 
                                name="petCastrado" 
                            />
                        </fieldset>

                        <div className="vaccines">
                            <label className="title">Vacinas:</label>
                            <fieldset className="field">
                                <label htmlFor="v8">V8 - ultima vacinação: </label>
                                <input 
                                    type="date" 
                                    id="v8" 
                                    name="v8"
                                    value={v8}
                                    onChange={e => setV8(e.target.value)} 
                                />
                            </fieldset>

                            <fieldset className="field">
                                <label htmlFor="v10">V10 - ultima vacinação: </label>
                                <input 
                                    type="date" 
                                    id="v10" 
                                    name="v10"
                                    value={v10}
                                    onChange={e => setV10(e.target.value)}
                                />
                            </fieldset>

                            <fieldset className="field">
                                <label htmlFor="antirabica">Antirábica - ultima vacinação: </label>
                                <input 
                                    type="date" 
                                    id="antirabica" 
                                    name="antirabica"
                                    value={antirabica}
                                    onChange={e => setAntirabica(e.target.value)} 
                                />
                            </fieldset>

                            <fieldset className="field">
                                <label htmlFor="gripeCanina">Gripe Canina - ultima vacinação: </label>
                                <input 
                                    type="date" 
                                    id="gripeCanina" 
                                    name="gripeCanina"
                                    value={gripeCanina}
                                    onChange={e => setGripeCanina(e.target.value)}
                                />
                            </fieldset>

                            <fieldset className="field">
                                <label htmlFor="giardia">Giardia - ultima vacinação: </label>
                                <input 
                                    type="date" 
                                    id="giardia" 
                                    name="giardia"
                                    value={giardia}
                                    onChange={e => setGiardia(e.target.value)} 
                                />
                            </fieldset>

                            <fieldset className="field">
                                <label htmlFor="leishmaniose">Leishmaniose - ultima vacinação: </label>
                                <input 
                                    type="date" 
                                    id="leishmaniose" 
                                    name="leishmaniose"
                                    value={leishmaniose}
                                    onChange={e => setLeishmaniose(e.target.value)} 
                                />
                            </fieldset>
                            {/* {
                                vaccines.map(vaccine => {

                                    return (
                                        <fieldset className="field" key={vaccine}>
                                            <label htmlFor={vaccine}>{vaccine} - ultima vacinação: </label>
                                            <input 
                                                type="date" 
                                                id={vaccine} 
                                                name={vaccine}
                                            />
                                        </fieldset>
                                    )
                                })
                            } */}

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