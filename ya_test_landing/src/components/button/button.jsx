import './button.css'

export default function MyButton({mainColor,text,size}){
    return (
        <a href="#" className={`${mainColor}Btn ${size} btn`}><div className="btn-text fontSansSerif">{text}</div></a>
    )
}