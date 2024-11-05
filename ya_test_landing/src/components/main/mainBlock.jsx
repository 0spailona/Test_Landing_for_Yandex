import "./main.css";
import CardWithImg from "./cards/cardWithImg/cardWithImg.jsx";
import CardWithTable from "./cards/cardWithTable/cardWithTable.jsx";
import CardWithTile from "./cards/cardWithTile/cardWithTile.jsx";
import CardWithSlideShow from "./cards/cardWithSlideShow/cardWithSlideShow.jsx";

export default function MainBlock() {
    return (
        <div className="main">
            <div className="main-container">
                <CardWithImg/>
                <CardWithTable/>
                <CardWithTile/>
                <CardWithSlideShow/>
            </div>
        </div>
    );
}