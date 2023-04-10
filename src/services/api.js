import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api-agenda-pet.vercel.app"
    // baseURL: "http://localhost:5000"
});

export const createSession = async (email, password) => {
    return api.post("/sessions", { email, password });
}