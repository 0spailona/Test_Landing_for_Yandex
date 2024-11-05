import Image from "../../../../assets/default-participant.png"

export default function ParticipantCard({imgUrl,name,about}){
    return (
        <div className="participantCard-container">
            <img src={imgUrl?imgUrl : Image} alt={"participantCard"} />
            <div className="name">{name}</div>
            <div className="about">{about}</div>

        </div>
    )
}