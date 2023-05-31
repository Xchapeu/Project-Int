import { MainContent } from "../../components/MainContent";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";

export const HomePage = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <Header>
                <Button title="SAIR" onClick={handleLogout}>
                    <LogoutIcon />
                </Button>
            </Header>
            
            <MainContent />
        </>
    );  
}