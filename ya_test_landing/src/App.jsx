import {useState} from "react";
//import "./App.css";
import MyHeader from "./components/header/header.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MyHeader title={["Превратите уездный город","в столицу","земного шара"]}
                      logo="../public/logo.svg"
                      text={"Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам"}
            />
        </>
    );
}

export default App;
