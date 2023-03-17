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
        }

        setLoading(false);

    }, [])

    const login = async (email, password) => {
        console.log("Login auth",{ email, password });

        // api criar uma session 
        // const response = await createSession(email, password);
        // console.log("Login auth 2", response.data)

        
        const loggedUser = {
            id: "1234",
            email
        }

        // const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        // localStorage.setItem("token", token);

        // api.defaults.headers.Authorization = `Bearer ${token}`;

        if(password === "secret") {
            setUser(loggedUser);
            navigate("/");
        } else {
            alert("Invalid password");
            return;
        }
    }

    const logout = () => {
        console.log("Logout");
        confirm("Tem certeza que deseja sair??");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}