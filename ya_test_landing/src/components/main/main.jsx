import "./main.css";
import CardWithImg from "./cards/cardWithImg/cardWithImg.jsx";
import CardWithTable from "./cards/cardWithTable/cardWithTable.jsx";
import CardWithTile from "./cards/cardWithTile/cardWithTile.jsx";

export default function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <CardWithImg/>
                <CardWithTable/>
                <CardWithTile/>
            </div>
        </div>
    );
}