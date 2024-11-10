import "./css/cardWithImg.css";
import "./css/media.css";
import Image from "../../../../assets/cardWithImg.png";
import MediaQuery from "react-responsive";

export default function CardWithImg() {
    return (
        <div className="card-content upperCase fontSerif">
            <MediaQuery minWidth={769}>
                <div className="card-text-wrp">
                    <span className="card-text card-text-main font-w-regular">Чтобы{"\u00A0"}поддержать Международный васюкинский турнир посетите лекцию на{"\u00A0"}тему:</span>
                    <span className="card-text card-text-event font-w-semibold">«Плодотворная дебютная идея»</span>
                </div>
                <div className="card-img-wrp"><img className="card-img" alt="img" src={Image}/></div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <div className="card-column">
                    <div>
                        <span className="card-text card-text-main">Чтобы{"\u00A0"}поддержать Международный васюкинский турнир</span>
                    </div>
                    <div className="card-img-wrp"><img className="card-img" alt="img" src={Image}/></div>
                    <div className="card-text">
                        <span className="card-text-main font-w-regular">посетите лекцию на{"\u00A0"}тему:</span>
                        <span className="card-text-event font-w-semibold">«Плодотворная дебютная идея»</span>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}