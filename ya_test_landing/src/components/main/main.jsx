import "./main.css";
import CardWithImg from "./cards/cardWithImg.jsx";

export default function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <CardWithImg text={{
                    main: {
                        forDesktop: "Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему:",
                        forMobile: {beforeImg: "Чтобы поддержать Международный васюкинский турнир", afterImg: "посетите лекцию на тему:"},
                    },
                    event: " «Плодотворная дебютная идея»"
                }} imgUrl="../../../../../../public/rightImg.png"
                    alt="img"></CardWithImg>
                    </div>
                    </div>
                    );
                }