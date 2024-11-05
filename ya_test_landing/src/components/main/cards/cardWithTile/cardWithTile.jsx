import "./css/cardWithTile.css";
import "./css/cardMedia.css";
import Tile from "./tile.jsx";
import Image from "../../../../assets/tile-img.png";
import MediaQuery from "react-responsive";
import {useState} from "react";
import RoundButton from "../../../button/roundBtn.jsx";

const tilesForDeskTop = ["Строительство железнодорожной магистрали Москва-Васюки",
    "Открытие фешенебельной гостиницы «Проходная пешка» и\u00A0других небоскрёбов",
    "Поднятие сельского хозяйства в\u00A0радиусе на\u00A0тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
    "Строительство дворца для\u00A0турнира",
    "Размещение гаражей для\u00A0гостевого автотранспорта",
    "Постройка сверхмощной радиостанции для\u00A0передачи всему миру сенсационных результатов",
    "Создание аэропорта «Большие Васюки» с\u00A0регулярным отправлением почтовых самолётов и\u00A0дирижаблей во\u00A0все\u00A0концы света, включая Лос-Анжелос и\u00A0Мельбурн"];

const tilesForSmallScreen = [[{number:1, text:"Строительство железнодорожной магистрали Москва-Васюки"},
    {number: 2, text: "Открытие фешенебельной гостиницы «Проходная пешка» и\u00A0других небоскрёбов"}],
    [{
        number: 3,
        text: "Поднятие сельского хозяйства в\u00A0радиусе на\u00A0тысячу километров: производство овощей, фруктов, икры, шоколадных конфет"
    }],
    [{number: 4, text: "Строительство дворца для\u00A0турнира"},
        {number: 5, text: "Размещение гаражей для\u00A0гостевого автотранспорта"}],
    [{number: 6, text: "Постройка сверхмощной радиостанции для\u00A0передачи всему миру сенсационных результатов"}],
    [{
        number: 7,
        text: "Создание аэропорта «Большие Васюки» с\u00A0регулярным отправлением почтовых самолётов и\u00A0дирижаблей во\u00A0все\u00A0концы света, включая Лос-Анжелос и\u00A0Мельбурн"
    }]];

export default function CardWithTile() {


    const [activeTileIndex, setActiveTileIndex] = useState(0);

    const changeTile = (change) => {
        //console.log("changeTile change", change);
        setActiveTileIndex(activeTileIndex + change);
    };
    const isDisabled = (direction) => {
        if (direction === "start" && activeTileIndex === 0) {
            return true;
        }
        return direction === "end" && activeTileIndex === tilesForSmallScreen.length - 1;

    };
    return (
        <div className="cardWithTile-container">
            <div className="cardWithTile-title">
                <span className="cardWithTable-title-text upperCase fontSerif">Этапы{"\u00A0"}</span>
                <span className="cardWithTable-title-text upperCase fontSerif">преображения{"\u00A0"}</span>
                <span className="cardWithTable-title-text upperCase fontSerif">Васюков</span>
                <div className="cardWithTable-title-add fontSansSerif">Будущие источники обогащения васюкинцев</div>
            </div>
            <div className="cardWithTile-tile">
                <MediaQuery minWidth={901}>
                    {tilesForDeskTop.map((tile, index) =>
                        <div className="tile" key={index}><Tile number={index + 1} text={tile}/></div>)}
                    <div className="cardWithTile-tile-img-wrp"><img src={Image} alt=""/></div>
                </MediaQuery>
                <MediaQuery maxWidth={900}>
                    <div className="cardWithTile-tile-img-wrp"><img src={Image} alt=""/></div>
                    <div className="tile">
                        {tilesForSmallScreen[activeTileIndex].map((tile,index)=>(<Tile key={index} number={tile.number}
                                                                                                         text={tile.text}/>))}
                    </div>
                    <div className="cardWithTile-tile-carousel">
                        <RoundButton value="start" event={() => changeTile(-1)} isDisabled={isDisabled("start")}/>
                        <div className="cardWithTile-carousel">
                            {tilesForSmallScreen.map((tile, index) => <div key={tile.number} className={`carousel-item ${index === activeTileIndex ? "active" : ""}`}/>)}
                        </div>
                        <RoundButton value="end" event={() => changeTile(1)} isDisabled={isDisabled("end")}/>
                    </div>
                </MediaQuery>
            </div>
        </div>
    );
}