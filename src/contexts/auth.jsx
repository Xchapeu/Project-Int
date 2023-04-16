import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate(AuthContext);
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        } else {
            navigate("/login");
        }

        setLoading(false);

    }, [])

    const login = async (inputEmail, password) => {

        // api criar uma session 
        // const response = await createSession(email, password);
        // console.log("Login auth 2", response.data)

        try {
            const response = await api.post("/login", { email: inputEmail, senha: password });

            // let usuario = response.data.filter(res => {
            //     if(res.email === email) {
            //         return res;
            //     } 
            //     // else {
            //     //     alert("Email não cadastrado.");
            //     //     throw new Error("Email not exists in Database");
            //     // }
            // });

            const { id, email, nome } = response.data;
    
            
            const loggedUser = {
                id: id,
                email: email,
                nome: nome
            }
    
            // const token = response.data.token;
    
            localStorage.setItem("user", JSON.stringify(loggedUser));
            // localStorage.setItem("token", token);
    
            // api.defaults.headers.Authorization = `Bearer ${token}`;
    
            setUser(loggedUser);
            navigate("/");
            
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        if(window.confirm("Tem certeza que deseja sair??")) {
            localStorage.removeItem("user");
            setUser(null);
            navigate("/login");
        }
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}