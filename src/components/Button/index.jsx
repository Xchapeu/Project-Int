import "./styles.css";

export const Button = ({ children, title, onClick }) => {
    return(
        <div className="logout-container">
            <button onClick={onClick}>{children}<p>{title}</p></button>
        </div>
    );
}