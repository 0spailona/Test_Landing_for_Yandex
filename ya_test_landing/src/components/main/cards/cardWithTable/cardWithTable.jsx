import "./css/cardWithTable.css";
import "./css/cardMedia.css";
import Image from "../../../../assets/cardWithTable.png";
import MyTable from "./myTable.jsx";
import MediaQuery from "react-responsive";

export default function CardWithTable() {

    return (<div className="cardWithTable-content">
        <MediaQuery minWidth={1151}>
            <div className="cardWithTable-img-wrp"><img src={Image} alt="img"/></div>
            <div className="cardWithTable-info">
                <div className="cardWithTable-title upperCase fontSerif"><span
                    className="card-text-main">и Сеанс</span><span
                    className="card-text-event"> одновременной игры в{"\u00A0"}шахматы на{"\u00A0"}160{"\u00A0"}досках</span>
                    <span className="card-text-main"> гроссмейстера О.{"\u00A0"}Бендера</span>
                </div>
                <MyTable/>
                <div className="cardWithTable-add-info fontSansSerif">По{"\u00A0"}всем вопросам обращаться в{"\u00A0"}администрацию
                    к{"\u00A0"}К.{"\u00A0"}Михельсону
                </div>
            </div>
        </MediaQuery>
        <MediaQuery maxWidth={1150}>
            <div className="cardWithTable-img-wrp"><img src={Image} alt="img"/></div>
            <div className="cardWithTable-title upperCase fontSerif"><span
                className="card-text-main">и Сеанс</span><span
                className="card-text-event"> одновременной игры в{"\u00A0"}шахматы на{"\u00A0"}160{"\u00A0"}досках</span>
                <span className="card-text-main"> гроссмейстера О.{"\u00A0"}Бендера</span>
            </div>
            <div className="cardWithTable-table-and-addInfo">
                <MyTable/>
                <div className="cardWithTable-add-info fontSansSerif">По{"\u00A0"}всем вопросам обращаться в{"\u00A0"}администрацию
                    к{"\u00A0"}К.{"\u00A0"}Михельсону
                </div>
            </div>
        </MediaQuery>

    </div>);
}
