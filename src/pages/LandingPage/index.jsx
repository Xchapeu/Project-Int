import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import logoImg from "../../assets/logo1.png";
import "./styles.css";

export const LandingPage = () => {

    const { authenticated, login } = useContext(AuthContext);

    const [nomeComp, setNomeComp] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleRegistration = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert("As senhas digitadas não correspondem!");
            return;
        }

        console.log({ nomeComp, email, password, confirmPassword });
        alert(`Obrigado ${nomeComp}, por se cadastrar no Agenda Pet.`);
        setNomeComp("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        
        
        // return  <Stack sx={{ width: '100%' }} spacing={2}>
        //             <Alert onClose={() => {}} severity="success">
        //                 <AlertTitle>Sucesso!</AlertTitle>
        //                 Obrigado {nomeComp}, por se cadastrar no <strong>Agenda Pet</strong>
        //             </Alert>
        //         </Stack>
    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log({ loginEmail, loginPassword });
        login(loginEmail, loginPassword);
    }

    return (
        <div className="content">
            <img src={logoImg} alt="Agenda Pet" />
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden />

                <div className="signup">
                    <form onSubmit={handleRegistration}>
                        <label className="label-signup" htmlFor="chk" aria-hidden>Cadastrar</label>
                        <input 
                            className="input-fullName" 
                            type="text" 
                            name="txt" 
                            placeholder="Nome completo"
                            value={nomeComp}
                            onChange={e => setNomeComp(e.target.value)}
                            required
                        />
                        <input 
                            className="input-email" 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            className="input-password" 
                            type="password" 
                            name="password" 
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <input 
                            className="input-password" 
                            type="password" 
                            name="confirm-password" 
                            placeholder="Confirme a senha"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button className="signup-button">Cadastrar</button>
                    </form>
                </div>

                <div className="login">
                    <form onSubmit={handleLogin}>
                        <label className="label-login" htmlFor="chk" aria-hidden>Entrar</label>
                        <input 
                            className="input-email" 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            value={loginEmail}
                            onChange={e => setLoginEmail(e.target.value)}
                            required 
                        />
                        <input 
                            className="input-password" 
                            type="password" 
                            name="password" 
                            placeholder="Senha"
                            value={loginPassword}
                            onChange={e => setLoginPassword(e.target.value)}
                            required
                        />
                        <button className="login-button">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}