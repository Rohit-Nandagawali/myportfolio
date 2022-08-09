
import "./Skills.css"
const SkillCard = ({skillName,skillUrl}) => {
    return ( 
        <div className="skill">
            <img src={skillUrl} alt={skillName} />
            <p>{skillName}</p>
        </div>
     );
}
 
export default SkillCard;