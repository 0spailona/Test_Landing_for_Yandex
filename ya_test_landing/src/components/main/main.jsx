import "./main.css";
import CardWithRightImg from "./cards/cardWithRightImg.jsx";

export default function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <CardWithRightImg text={{
                    main: "Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему:",
                    event: "«Плодотворная дебютная идея»"
                }} imgUrl="../../../../../../public/rightImg.png"
                alt="img"></CardWithRightImg>
            </div>
        </div>
    );
}