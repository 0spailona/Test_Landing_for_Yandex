import RectangularButton from "./rectangularButton.jsx";

export default function WhiteButton({text,event}) {
    return (
        <RectangularButton text={text} mainColor="white" event ={()=>event.call(this)}/>
    )
}