
import "./css/tableMedia.css"
import "./css/myTable.css"

export default function MyTable() {
    return <div className="cardWithTable-table fontSansSerif">
        <div className="table-row">
            <div className="table-row-content"><span className="table-row-name">Место проведения:</span></div>
            <div className="table-row-content"><span className="table-row-text">Клуб «Картонажник»</span></div>
        </div>
        <div className="table-row">
            <div className="table-row-content"><span className="table-row-name">Дата и время мероприятия:</span></div>
            <div className="table-row-content"><span className="table-row-text">22 июня 1927 г. в 18:00</span></div>
        </div>
        <div className="table-row">
            <div className="table-row-content"><span className="table-row-name">Стоимость входных билетов:</span></div>
            <div className="table-row-content"><span className="table-row-text">20 коп.</span></div>
        </div>
        <div className="table-row">
            <div className="table-row-content"><span className="table-row-name">Плата за игру:</span></div>
            <div className="table-row-content"><span className="table-row-text">50 коп.</span></div>
        </div>
        <div className="table-row">
            <div className="table-row-content"><span className="table-row-name">Взнос на телеграммы:</span></div>
            <div className="table-row-content"><span
                className="table-row-text text-line-through">100 руб.</span><span className="table-row-text">{"\u00A0"}21 руб. 16 коп.</span></div>
        </div>
    </div>
}
