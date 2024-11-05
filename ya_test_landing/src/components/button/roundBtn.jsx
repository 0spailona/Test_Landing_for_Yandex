import StartImg from "../../assets/roundBtnStart.svg";
import EndImg from "../../assets/roundBtnEnd.svg";

export default function RoundButton({value, event, isDisabled}) {
    //console.log("RoundButton", isDisabled);
    const src = value === "start" ? StartImg : EndImg;
    return (
        <button className="roundBtn btn" onClick={() => event.call()} disabled={isDisabled}>
            <img src={src} alt={value} className="round-btn-img"/>
        </button>
    );
}