import {useEffect, useState} from "react";
import RoundButton from "../../../button/roundBtn.jsx";
import ParticipantCard from "./participantCard.jsx";
import MediaQuery, {useMediaQuery} from "react-responsive";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./css/cardWithSlideShow.css";


const participants = [{photo: null, name: "Хозе-Рауль Капабланка", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Эммануил Ласкер", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Александр Алехин", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Арон Нимцович", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Рихард Рети", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Остап Бендер", about: "Гроссмейстер"}];

export default function CardWithSlideShow() {

    const [showParticipants, setShowParticipants] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [pagesCount, setPagesCount] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const isBigScreen = useMediaQuery({query: "(min-width: 1230px)"});
    const isMediumScreen = useMediaQuery({query: "(max-width: 1229px)"});
    const isSmallScreen = useMediaQuery({query: "(max-width: 950px)"});

   useEffect(() => {
       if(isBigScreen){
           const countForPage = 3;
           //const pages = Math.ceil(participants.length / countForPage);
           //setPagesCount(participants.length);
           setCount(3);
           //setShowParticipants(participants.slice(startIndex, startIndex + countForPage));
       }
       if(isMediumScreen){
           setCount(2)
       }
       if(isSmallScreen){
           setCount(1)
       }
    }, [isBigScreen,isMediumScreen,isSmallScreen]);

    const changeScreen = ()=>{
        //console.log("change screen");

    }

    const toChangePage = (n) => {
        //console.log("toChangePage activePage",activePage)
        //setActivePage(activePage + n);
       // const newStartIndex = n > 0 ? startIndex + count : startIndex - count;
        //setStartIndex(newStartIndex);
        //setShowParticipants(participants.slice(newStartIndex, newStartIndex + count));
    };

    const isDisabled = (direction) => {
        if (direction === "start" && activePage === 1) {
            return true;
        }
        return direction === "end" && activePage === pagesCount-count+1;
    };

    const onGalaryUpdate = (e,text)=>{
        //console.log("galary update slide",e.slide)
        //console.log("galary update itemsInSlide",e.itemsInSlide)
        //console.log("galary update text",text)
    }

    const renderSlideInfo = (e)=> {
        setActivePage(e.item)
        setPagesCount(e.itemsCount)
        //const pages = e.itemsCount / count;
       return <div className="cardWithSlideShow-carousel-pages fontSansSerif">
            <span className="cardWithSlideShow-carousel-active">{count}</span>
            <span className="cardWithSlideShow-carousel-all">/{e.itemsCount}</span></div>;
    }
    //console.log("count",count);
    //console.log("showParticipants",showParticipants);

    /*{showParticipants.map((participant, index) => (
                        <ParticipantCard key={index} name={participant.name} about={participant.about}
                                         imgUrl={participant.photo}/>))}*/
const newParts = participants.map((participant, index) => (
    <ParticipantCard key={index} name={participant.name} about={participant.about}
                     imgUrl={participant.photo}/>))
    return (
        <div className="cardWithSlideShow-container">
                <div className="cardWithSlideShow-title-and-carousel-btns">
                    <div className="cardWithSlideShow-title fontSerif upperCase">Участники турнира</div>
                </div>
                <div className="cardWithSlideShow-cards">
                    <AliceCarousel mouseTracking disableSlideInfo={false} disableDotsControls={true}
                                   disableButtonsControls={false} items={newParts}
                                   responsive={{  0: {
                                           items: count,
                                       },
                                       950: {
                                           items: count,
                                           itemsFit: 'contain',
                                       },
                                       1230: {
                                           items: count,
                                           itemsFit: 'contain',
                                       }}}
                                   onSlideChange={(Event) => onGalaryUpdate(Event,"onSlideChange")}
                                   onSlideChanged={(Event) => onGalaryUpdate(Event,"onSlideChanged")}
                                   onUpdated={(Event) => onGalaryUpdate(Event,"onUpdated")}
                                   onResized={(Event) => onGalaryUpdate(Event,"onResized")}
                                   renderSlideInfo={(Event)=>renderSlideInfo(Event)}
                                   renderPrevButton={()=>
                                       <RoundButton value="start" event={() => toChangePage(-1)} isDisabled={isDisabled("start")} />}
                                   renderNextButton={()=>
                                       <RoundButton value="end" event={() => toChangePage(1)} isDisabled={isDisabled("end")} />}
                    />
                </div>
        </div>
    );

}