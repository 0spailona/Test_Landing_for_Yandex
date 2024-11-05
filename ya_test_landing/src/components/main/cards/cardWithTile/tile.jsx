import "./css/tile.css"
import "./css/tileMedia.css"

export default function Tile({ number,text }) {
    return (
        <div className="tile-content fontSansSerif">
            <div className="tile-number "><span>{number}</span></div>
            <div className="tile-text">{text}</div>
        </div>
    )
}