import RectangularButton from "./rectangularButton.jsx";

export default function WhiteButton({text,event}) {
    return (
        <RectangularButton text={text} mainColor="white" size="big" event ={()=>event.call(this)}/>
    )
}