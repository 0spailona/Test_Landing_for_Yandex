import "./main.css";
import CardWithImg from "./cards/cardWithImg/cardWithImg.jsx";
import CardWithTable from "./cards/cardWithTable/cardWithTable.jsx";

export default function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <CardWithImg/>
                <CardWithTable dataForTable={[{name:"",data:""},{name:"",data:""},{name:"",data:""},{name:"",data:""},{name:"",data:""}]}
                alt=""/>
                    </div>
                    </div>
                    );
                }