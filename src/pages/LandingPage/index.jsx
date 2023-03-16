import "./styles.css";

export const LandingPage = () => {
    return (
        <div className="content">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label className="label-signup" htmlFor="chk" aria-hidden>Cadastrar</label>
                        <input className="input-fullName" type="text" name="txt" placeholder="Nome completo" required/>
                        <input className="input-email" type="email" name="email" placeholder="Email" required />
                        <input className="input-password" type="password" name="password" placeholder="Senha" />
                        <input className="input-password" type="password" name="confirm-password" placeholder="Confirme a senha" />
                        <button className="signup-button">Cadastrar</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label className="label-login" htmlFor="chk" aria hidden>Entrar</label>
                        <input className="input-email" type="email" name="email" placeholder="Email" required />
                        <input className="input-password" type="password" name="password" placeholder="Senha" />
                        <button className="login-button">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}