import "./css/header.css";
import BlackButton from "../button/blackButton.jsx";
import WhiteButton from "../button/whiteButton.jsx";

;

export default function MyHeader({title, text, logo}) {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-img"></div>
                <div className="header-logo-and-content">
                    <div className="header-logo"><a href="#"><img alt="Клуб четырех коней" src={logo}/></a></div>
                    <div className="header-content">
                        <div className="header-title fontSerif">
                            <h1 className="upperCase">
                                <div className="text-align-left">{title[0]}</div>
                                <div className="text-align-center">{title[1]}</div>
                                <div className="text-align-right">{title[2]}</div>
                            </h1>
                        </div>
                        <div className="header-text fontSansSerif">
                            <div className="small-text">{text}</div>
                        </div>
                        <div className="header-btns">
                            <BlackButton text="Поддержать шахматную мысль"/>
                            <WhiteButton text="Подробнее о турнире"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}