import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "../../contexts/auth";
import { useContext, useState, useEffect } from "react";
import { Footer } from '../../components/Footer';
import { achievements } from '../../../achievements';
import { levels } from '../../../levels';
import "./styles.css";
import { TopButton } from '../../components/TopButton';

export const TrophiesPage = () => {
    const { logout } = useContext(AuthContext);
    const [items, setItems] = useState(achievements);
    const [uncompleted, setUncompleted] = useState(items);
    const [completed, setCompleted] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [pointsNeededForNextLevel, setPointsNeededForNextLevel] = useState(0)

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

    const getCurrentLevel = (totalCompletedAmount) => {
        let currentLevel = 1;
    
        for (const levelData of levels) {
            if (totalCompletedAmount >= levelData.minPoints) {
                currentLevel = levelData.level;
            } else {
                setPointsNeededForNextLevel(levelData.minPoints - totalCompletedAmount);
                break; 
            }
        }
    
        if (currentLevel === levels[levels.length - 1].level) {
            setPointsNeededForNextLevel(0);
        }
    
        return currentLevel;
    };

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        const uncompletedItems = items.filter(item => !item.completed);
        const completedItems = items.filter(item => item.completed);
    
        const totalCompletedAmount = completedItems.reduce((total, item) => total + parseInt(item.xpAmount), 0);
        console.log(totalCompletedAmount);

        setUncompleted(uncompletedItems);
        setCompleted(completedItems);
        setTotalAmount(totalCompletedAmount);
        setCurrentLevel(getCurrentLevel(totalCompletedAmount));
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
                                    uncompleted.length > 0 ?
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
                                                    <label htmlFor={achievement}>{item.title} - <span className='xp-amount'>{item.xpAmount} pontos</span></label>
                                                </div>
                                            </li>
                                        )
                                    }) : (<h3 className='empty-list-message'>Parabéns!!<br/>Você desbloqueou todas as conquistas!</h3>)
                                }
                            </ul>
                        </div>
                        <div className='achievements-list-container'>
                            <h3 className='achievements-list-title'>Tarefas concluídas</h3>
                            <ul className='achievements-list completed-list'>
                                {
                                    completed.length > 0 ?
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
                                                    <label htmlFor={achievement}>{item.title} - <span className='xp-amount'>{item.xpAmount} pontos</span></label>
                                                </div>
                                            </li>
                                        )
                                    }) : (<h3 className='empty-list-message'>Não há conquistas completadas.<br/> Bora começar!?</h3>)
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='right-container'>
                        <div className="achievements-list-container">
                            <h3 className='achievements-list-title'>
                                Total de pontos: {totalAmount} <br/> 
                                Nivel: {currentLevel}<br/>
                                Pontos prox nivel: {pointsNeededForNextLevel} 
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <TopButton />
            <Footer />
        </>
    )
}