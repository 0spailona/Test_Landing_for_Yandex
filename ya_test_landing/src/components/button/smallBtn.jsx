import RectangularButton from "./rectangularButton.jsx";

export default function SmallBtn({text, event}) {
    return (
        <RectangularButton text={text} mainColor="blue" size="small" event={() => event.call(this)}/>
    );
}