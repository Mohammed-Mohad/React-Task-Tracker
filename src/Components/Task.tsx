import { FaTimes } from "react-icons/fa";

interface TaskProps {
    id:number;
    text:string;
    day:string;
    reminder?:boolean;
    onClick:(id:number)=>void;
}

const Task = ({text,day,onClick,id,reminder}:TaskProps) => {
  return (
    
    <div className={`task ${reminder ? 'reminder' : ''}`}>
        <h3>{text} <FaTimes style={{color:"red",cursor:"pointer"}} onClick={() => onClick(id)}
        /></h3>
        <p>{day}</p>
        
    </div>
  )
}

export default Task