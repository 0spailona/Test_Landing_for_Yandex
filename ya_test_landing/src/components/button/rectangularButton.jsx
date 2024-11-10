import "./button.css";

export default function RectangularButton({mainColor, text, event, size}) {
    return (
        <button className={`btn rectangular-btn ${size} fontSansSerif ${mainColor}Btn`} onClick={() => event.call()}>
            <div className="btn-text text font-w-medium text-align-center fontSansSerif">{text ? text : ""}</div>
        </button>
    );
}