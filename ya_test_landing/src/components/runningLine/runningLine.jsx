import './runningLine.css'
import Marquee from "react-fast-marquee";

export default function RunningLine({text}) {

    return (
        <div className="runningLine upperCase fontSerif">
            <Marquee>
                {text.map((x,index) => <div className="runningLine-content"><span key={index}>{x}</span><div className="run-line-point"></div></div>)}
            </Marquee>
        </div>
    )
}