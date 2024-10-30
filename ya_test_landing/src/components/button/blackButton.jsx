import MyButton from "./button.jsx";

export default function BlackButton({text,event}) {
    return (
        <MyButton text={text} mainColor="black" size="big" event ={()=>event.call(this)}/>
    )
}