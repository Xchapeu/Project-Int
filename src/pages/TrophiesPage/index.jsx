import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "../../contexts/auth";
import { useContext, useState, useEffect } from "react";
import { Footer } from '../../components/Footer';
import { achievements } from '../../../achievements';
import "./styles.css";
import { TopButton } from '../../components/TopButton';

export const TrophiesPage = () => {
    const { logout } = useContext(AuthContext);
    const [items, setItems] = useState(achievements);
    const [uncompleted, setUncompleted] = useState(items);
    const [completed, setCompleted] = useState([]);

    const handleCheckboxChange = (itemId) => {
        setItems(prevItems => {
            const updatedItems = prevItems.map(item => {
                if (item.id === itemId) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            });
    
            return updatedItems;
        });
    };

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        const uncompletedItems = items.filter(item => !item.completed);
        const completedItems = items.filter(item => item.completed);
    
        setUncompleted(uncompletedItems);
        setCompleted(completedItems);
    }, [items]);

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
                                        let achievement = `achievement${item.id}`;
                                        return (
                                            <li className='achievement-item' key={item.id}>
                                                <div className='achievement'>
                                                    <input 
                                                        type="checkbox" 
                                                        name={achievement} 
                                                        id={achievement} 
                                                        data-amount={item.xpAmount}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                    />
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
                                {
                                    completed.map(item => {
                                        let achievement = `achievement${item.id}`;
                                        return (
                                            <li className='achievement-item achievement-item-completed' key={item.id}>
                                                <div className='achievement'>
                                                    <input 
                                                        type="checkbox" 
                                                        name={achievement} 
                                                        id={achievement}
                                                        data-amount={item.xpAmount}
                                                        onChange={() => handleCheckboxChange(item.id)} 
                                                        checked 
                                                    />
                                                    <label htmlFor={achievement}>{item.title} - <span className='xp-amount'>{item.xpAmount} exp</span></label>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
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