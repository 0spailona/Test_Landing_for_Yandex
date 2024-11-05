import {Component} from "react";
import RoundButton from "../../../button/roundBtn.jsx";
import ParticipantCard from "./participantCard.jsx";

export default function CardWithSlideShow(){



    const toChange =()=>{

    }

        return (
            <div className="cardWithSlideShow-container">
                <div className="cardWithSlideShow-title-and-carousel">
                    <div className="cardWithSlideShow-title fontSerif">Участники турнира</div>
                    <div className="cardWithSlideShow-carousel">
                        <RoundButton value="start" event={()=>toChange()} isDisabled={true}/>
                        <span className="cardWithSlideShow-carousel-active">{}/</span>
                        <span className="cardWithSlideShow-carousel-all"></span>
                        <RoundButton value="end" event={()=>toChange()} isDisabled={true}/>
                    </div>
                    <div className="cardWithSlideShow-cards">
                        <ParticipantCard name="" about=""/>
                    </div>
                </div>
            </div>
        )

}