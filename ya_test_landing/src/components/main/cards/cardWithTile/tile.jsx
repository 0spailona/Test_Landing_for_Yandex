import "./css/tile.css"

export default function Tile({ number,text }) {
    return (
        <div className="tile-content fontSansSerif">
            <div className="tile-number "><span>{number}</span></div>
            <div className="tile-text">{text}</div>
        </div>
    )
}