import "./css/cardWithRightImg.css";

export default function CardWithRightImg({text, imgUrl,alt}) {
    return (
        <div className="card-content">
            <div className="card-text upperCase fontSerif">
                <span className="card-text-main">{text.main}</span>
                <span className="card-text-event">{text.event}</span></div>
            <img className="card-img" alt={alt} src={imgUrl} />
        </div>
    );
}