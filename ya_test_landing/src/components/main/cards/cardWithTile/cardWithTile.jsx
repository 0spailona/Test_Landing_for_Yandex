import "./css/cardWithTile.css"
import Tile from "./tile.jsx";
import Image from "../../../../assets/tile-img.png"

export default function CardWithTile(){
    const tiles = ["Строительство железнодорожной магистрали Москва-Васюки",
        "Открытие фешенебельной гостиницы «Проходная пешка» и\u00A0других небоскрёбов",
        "Поднятие сельского хозяйства в{\"\u00A0\"}радиусе на\u00A0тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
        "Строительство дворца для\u00A0турнира",
        "Размещение гаражей для\u00A0гостевого автотранспорта",
        "Постройка сверхмощной радиостанции для\u00A0передачи всему миру сенсационных результатов",
        "Создание аэропорта «Большие Васюки» с\u00A0регулярным отправлением почтовых самолётов и\u00A0дирижаблей " +
        "во\u00A0все\u00A0концы света, включая Лос-Анжелос и\u00A0Мельбурн"]

    return (
        <div className="cardWithTile-container">
            <div className="cardWithTile-title">
                <span className="cardWithTable-title-text upperCase fontSerif">Этапы{"\u00A0"}</span>
                <span className="cardWithTable-title-text upperCase fontSerif">преображения{"\u00A0"}</span>
                <span className="cardWithTable-title-text upperCase fontSerif">Васюков</span>
                <span className="cardWithTable-title-add fontSansSerif">Будущие источники обогащения васюкинцев</span>
            </div>
            <div className="cardWithTile-tile">
                {tiles.map((tile, index) => (<div className="tile" key={index}><Tile number={index + 1} text={tile}/> </div>))}
                <div className="cardWithTile-tile-img-wrp"><img src={Image} alt=""/></div>
            </div>
        </div>
    )
}