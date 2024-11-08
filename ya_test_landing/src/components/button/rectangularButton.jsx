import './button.css'

export default function RectangularButton({mainColor,text,event,size}){
    return (
        <button className={`${mainColor}Btn ${size} rectangular-btn btn fontSansSerif`} onClick={()=>event.call()}><div className="btn-text fontSansSerif">{text?text:""}</div></button>
    )
}