import "./css/tile.css";
import "./css/tileMedia.css";

export default function Tile({number, text}) {
    return (
        <div className="tile-content text fontSansSerif">
            <div className="tile-number font-w-semibold"><span>{number}</span></div>
            <div className="tile-text font-w-medium">{text}</div>
        </div>
    );
}