import "./css/cardWithTile.css"

export default function CardWithTile(){
    return (
        <div className="cardWithTile-container">
            <div className="cardWithTile-title">
                <span className="cardWithTable-title-text upperCase fontSerif">Этапы{"\u00A0"}</span>
                <span className="cardWithTable-title-text upperCase fontSerif">преображения{"\u00A0"}</span>
                <span className="cardWithTable-title-text upperCase fontSerif">Васюков</span>
                <span className="cardWithTable-title-add fontSansSerif">Будущие источники обогащения васюкинцев</span>
            </div>
            <div className="cardWithTile-tile">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
            </div>
        </div>
    )
}