import ArrowUp from '@mui/icons-material/ArrowUpward';
import "./style.css";

export function TopButton() {
    return(
        <button className="btn-to-top">
            <a href="#top"><ArrowUp /></a>
        </button>

    );
}