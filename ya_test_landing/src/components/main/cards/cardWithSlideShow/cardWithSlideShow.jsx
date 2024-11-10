import {useEffect, useState} from "react";
import RoundButton from "../../../button/roundBtn.jsx";
import ParticipantCard from "./participantCard.jsx";
import {useMediaQuery} from "react-responsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css/cardWithSlideShow.css";
import "./css/cardMedia.css"


const participants = [{photo: null, name: "Хозе-Рауль Капабланка", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Эммануил Ласкер", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Александр Алехин", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Арон Нимцович", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Рихард Рети", about: "Чемпион мира по шахматам"},
    {photo: null, name: "Остап Бендер", about: "Гроссмейстер"}];

export default function CardWithSlideShow() {

    const [count, setCount] = useState(0);
    const [pagesCount, setPagesCount] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const isBigScreen = useMediaQuery({query: "(min-width: 1230px)"});
    const isMediumScreen = useMediaQuery({maxWidth: 1229, minWidth: 951});
    const isSmallScreen = useMediaQuery({query: "(max-width: 950px)"});

    useEffect(() => {
        const newCount = isBigScreen ? 3 : isMediumScreen ? 2 : 1;
        setCount(newCount);
    }, [isBigScreen, isMediumScreen, isSmallScreen]);

    const isDisabled = (direction) => {
        if (direction === "start" && activePage === 1) {
            return true;
        }
        return direction === "end" && activePage === pagesCount - count + 1;
    };

    const renderSlideInfo = (e) => {
        setActivePage(e.item);
        setPagesCount(e.itemsCount);
        return <div className="cardWithSlideShow-carousel-pages text font-w-regular fontSansSerif">
            <span className="cardWithSlideShow-carousel-active">{count}</span>
            <span className="cardWithSlideShow-carousel-all">/{e.itemsCount}</span></div>;
    };

    const newParts = participants.map((participant, index) => (
        <ParticipantCard key={index} name={participant.name} about={participant.about}
                         imgUrl={participant.photo}/>));
    return (
        <div className="cardWithSlideShow-container">
            <div className="cardWithSlideShow-title text font-w-regular fontSerif upperCase">Участники турнира</div>
            <div className="cardWithSlideShow-cards">
                <AliceCarousel mouseTracking disableSlideInfo={false} disableDotsControls={true}
                               disableButtonsControls={false} items={newParts}
                               responsive={{
                                   0: {
                                       items: count,
                                   },
                                   950: {
                                       items: count,
                                       itemsFit: "contain",
                                   },
                                   1230: {
                                       items: count,
                                       itemsFit: "contain",
                                   }
                               }}

                               renderSlideInfo={(Event) => renderSlideInfo(Event)}
                               renderPrevButton={() =>
                                   <RoundButton value="start" event={() => {
                                   }} isDisabled={isDisabled("start")}/>}
                               renderNextButton={() =>
                                   <RoundButton value="end" event={() => {
                                   }} isDisabled={isDisabled("end")}/>}
                />
            </div>
        </div>
    );
}