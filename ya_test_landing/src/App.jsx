import {useState} from "react";
//import "./App.css";
import MyHeader from "./components/header/header.jsx";
import RunningLine from "./components/runningLine/runningLine.jsx";
import Main from "./components/main/main.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MyHeader title={["Превратите уездный город", "в столицу", "земного шара"]}
                      logo="../public/logo.svg"
                      text="Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам"
            />
            <RunningLine text={["Дело помощи утопающим — дело рук самих утопающих!",
                "Шахматы двигают вперед не только культуру, но и экономику!", "Лед тронулся, господа присяжные заседатели!"]}/>
            <Main></Main>
        </>
    );
}

export default App;
