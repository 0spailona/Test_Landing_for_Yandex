import './button.css'

export default function RectangularButton({mainColor,text,event}){
    return (
        <a href="#" className={`${mainColor}Btn rectangularButton btn`} onClick={()=>event.call()}><div className="btn-text fontSansSerif">{text?text:""}</div></a>
    )
}