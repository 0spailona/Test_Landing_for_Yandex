import "./runningLine.css";
import Marquee from "react-fast-marquee";

export default function RunningLine({text}) {

    return (
        <div className="runningLine upperCase fontSerif">
            <Marquee>
                {text.map((x, index) => <div className="runningLine-content" key={index}><span>{x}</span>
                    <div className="run-line-point"></div>
                </div>)}
            </Marquee>
        </div>
    );
}