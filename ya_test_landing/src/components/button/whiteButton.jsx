import MyButton from "./button.jsx";

export default function WhiteButton({text,event}) {
    return (
        <MyButton text={text} mainColor="white" size="big" event ={()=>event.call(this)}/>
    )
}