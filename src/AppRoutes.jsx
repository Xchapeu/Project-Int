import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Loading } from "./components/Loading";
import { AuthProvider, AuthContext } from "./contexts/auth";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { PetListPage } from "./pages/PetListPage";
import { PetLocalsPage } from "./pages/PetLocalsPage";
import { PetParksPage } from "./pages/PetParksPage";
import { PetClinicsPage } from "./pages/PetClinicsPage";
import { TrophiesPage } from "./pages/TrophiesPage";

export const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <Loading />
        }

        if(!authenticated) {
            return <Navigate to="/login" />; 
        }

        return children;
    };
    
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LandingPage />} />
                    <Route exact path="/" element={<Private><HomePage /></Private>} />
                    <Route exact path="/pets" element={<Private><PetListPage /></Private>} />
                    <Route exact path="/pets/locais-pet-friendly" element={<Private><PetLocalsPage /></Private>} />
                    <Route exact path="/pets/parques" element={<Private><PetParksPage /></Private>} />
                    <Route exact path="/pets/clinicas-veterinarias" element={<Private><PetClinicsPage /></Private>} />
                    <Route exact path="/trophies" element={<Private><TrophiesPage /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}
