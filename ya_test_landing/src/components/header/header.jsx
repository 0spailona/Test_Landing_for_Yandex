import "./css/header.css";
import "./css/min1366px.css";
import "./css/max1365px.css";
import "./css/max768px.css";
import "./css/max500px.css";
import Logo from "../../assets/logo.svg";
import BlackButton from "../button/blackButton.jsx";
import WhiteButton from "../button/whiteButton.jsx";

export default function MyHeader() {

    const getInfo = () => {
        console.log("to get info about tournament");
    };

    const toSupport = () => {
        console.log("to support the organization");
    };

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-img"></div>
                <div className="header-logo-and-content">
                    <div className="header-logo"><a href="#"><img alt="Клуб четырех коней" src={Logo}/></a></div>
                    <div className="header-content">
                        <div className="header-title text font-w-regular fontSerif upperCase">
                            <div className="text-align-left">Превратите уездный город</div>
                            <div className="text-align-center">в{"\u00A0"}столицу</div>
                            <div className="text-align-right">земного шара</div>
                        </div>
                        <div className="header-text text-align-center text font-w-regular fontSansSerif">
                            Оплатите взнос на{"\u00A0"}телеграммы для{"\u00A0"}организации Международного васюкинского
                            турнира по{"\u00A0"}шахматам
                        </div>
                        <div className="header-btns">
                            <BlackButton text="Поддержать шахматную мысль" event={() => toSupport()}/>
                            <WhiteButton text="Подробнее о турнире" event={() => getInfo()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}