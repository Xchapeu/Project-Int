import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "../../contexts/auth";
import { useContext, useState } from "react";
import { Footer } from '../../components/Footer';
import { achievements } from '../../../achievements';
import "./styles.css";
import { TopButton } from '../../components/TopButton';

export const TrophiesPage = () => {
    const { logout } = useContext(AuthContext);
    const [uncompleted, setUncompleted] = useState(achievements);
    const [completed, setCompleted] = useState([]);

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

            <div className="container">
                <h2>Conquistas</h2>
                <div className='main-container'>
                    <div className='left-container'>
                        <div className='achievements-list-container'>
                            <h3 className='achievements-list-title'>Tarefas não concluídas</h3>
                            <ul className='achievements-list uncompleted-list'>
                                {
                                    uncompleted.map(item => {
                                        let achievement = `achievement${item.id}`
                                        return (
                                            <li className='achievement-item' key={item.id}>
                                                <div className='achievement'>
                                                    <input type="checkbox" name={achievement} id={achievement} data-amount={item.xpAmount}/>
                                                    <label htmlFor={achievement}>{item.title} - <span className='xp-amount'>{item.xpAmount} exp</span></label>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='achievements-list-container'>
                            <h3 className='achievements-list-title'>Tarefas concluídas</h3>
                            <ul className='achievements-list completed-list'>
                                <li className='achievement-item achievement-item-completed'>
                                    <div className='achievement'>
                                        <input type="checkbox" name='achievement-6' id='achievement-6' checked/>
                                        <label htmlFor="achievement-6">Conquista 6 - <span className='xp-amount'>63 exp</span></label>
                                    </div>
                                </li>
                                <li className='achievement-item achievement-item-completed'>
                                    <div className='achievement'>
                                        <input type="checkbox" name='achievement-7' id='achievement-7' checked/>
                                        <label htmlFor="achievement-7">Conquista 7 - <span className='xp-amount'>63 exp</span></label>
                                    </div>
                                </li>
                                <li className='achievement-item achievement-item-completed'>
                                    <div className='achievement'>
                                        <input type="checkbox" name='achievement-8' id='achievement-8' checked/> 
                                        <label htmlFor="achievement-8">Conquista 8 - <span className='xp-amount'>63 exp</span></label>
                                    </div>
                                </li>
                                <li className='achievement-item achievement-item-completed'>
                                    <div className='achievement'>
                                        <input type="checkbox" name='achievement-9' id='achievement-9' checked/>
                                        <label htmlFor="achievement-9">Conquista 9 - <span className='xp-amount'>63 exp</span></label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='right-container'>

                    </div>
                </div>
            </div>
            <TopButton />
            <Footer />
        </>
    )
}