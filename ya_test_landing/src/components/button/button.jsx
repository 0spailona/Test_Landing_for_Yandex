import './button.css'

export default function MyButton({mainColor,text,size,event}){
    return (
        <a href="#" className={`${mainColor}Btn ${size} btn`} onClick={()=>event.call()}><div className="btn-text fontSansSerif">{text}</div></a>
    )
}