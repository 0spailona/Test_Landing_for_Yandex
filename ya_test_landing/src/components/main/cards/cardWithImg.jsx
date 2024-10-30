import "./css/cardWithImg.css";
import MediaQuery from "react-responsive";

export default function CardWithImg({text, imgUrl, alt}) {
    return (
        <div className="card-content upperCase fontSerif">
            <MediaQuery minWidth={769}>
                <div className="card-text-wrp">
                    <span className="card-text card-text-main">{text.main.forDesktop}</span>
                    <span className="card-text card-text-event">{text.event}</span>
                </div>
                <div className="card-img-wrp"><img className="card-img" alt={alt} src={imgUrl}/></div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <div className="card-column">
                    <div>
                        <span className="card-text card-text-main">{text.main.forMobile.beforeImg}</span>
                    </div>
                    <div className="card-img-wrp"><img className="card-img" alt={alt} src={imgUrl}/></div>
                    <div className="card-text">
                        <span className="card-text-main">{text.main.forMobile.afterImg}</span>
                        <span className="card-text-event">{text.event}</span>
                    </div>
                </div>

            </MediaQuery>
        </div>
    );
}