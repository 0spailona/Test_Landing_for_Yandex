import {useState} from "react";
//import "./App.css";
import MyHeader from "./components/header/header.jsx";
import RunningLine from "./components/runningLine/runningLine.jsx";
import MainBlock from "./components/main/mainBlock.jsx";
import MyFooter from "./components/footer/myFooter.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MyHeader/>
            <RunningLine text={["Дело помощи утопающим — дело рук самих утопающих!",
                "Шахматы двигают вперед не только культуру, но и экономику!", "Лед тронулся, господа присяжные заседатели!"]}/>
            <MainBlock></MainBlock>
            <RunningLine text={["Дело помощи утопающим — дело рук самих утопающих!",
                "Шахматы двигают вперед не только культуру, но и экономику!", "Лед тронулся, господа присяжные заседатели!"]}/>
            <MyFooter/>
        </>
    );
}

export default App;
