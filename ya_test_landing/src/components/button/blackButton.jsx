import RectangularButton from "./rectangularButton.jsx";

export default function BlackButton({text,event}) {
    return (
        <RectangularButton text={text} mainColor="black" size="big" event ={()=>event.call(this)}/>
    )
}