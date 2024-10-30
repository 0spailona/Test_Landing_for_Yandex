import "./css/cardWithTable.css";
import Image from "../../../../assets/cardWithTable.png";
import MyTable from "./myTable.jsx";

export default function CardWithTable() {
    return (<div className="cardWithTable-content">
        <div className="cardWithTable-img-wrp"><img src={Image} alt="img"/></div>
        <div className="cardWithTable-info">
            <div className="cardWithTable-title upperCase fontSerif"><span className="card-text-main">и Сеанс</span><span className="card-text-event"> одновременной игры в шахматы на 160 досках</span>
                <span className="card-text-main"> гроссмейстера О. Бендера</span>
            </div>
            <MyTable/>
            <div className="cardWithTable-add-info"></div>
        </div>
    </div>);
}