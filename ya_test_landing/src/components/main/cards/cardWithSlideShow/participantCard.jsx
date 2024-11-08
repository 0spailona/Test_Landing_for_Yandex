import Image from "../../../../assets/default-participant.png";
import "./css/participantCard.css";
import SmallBtn from "../../../button/smallBtn.jsx";

export default function ParticipantCard({imgUrl, name, about}) {

    const getMoreInformation = () => {
        console.log("get more information");
    };

    return (
        <div className="participantCard-container">
            <img src={imgUrl ? imgUrl : Image} alt="participantCard"/>
            <div className="name fontSansSerif">{name}</div>
            <div className="about fontSansSerif">{about}</div>
            <SmallBtn event={() => getMoreInformation()} text="Подробнее"/>
        </div>
    );
}