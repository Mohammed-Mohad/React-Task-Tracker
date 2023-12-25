import { useState } from "react";

interface AddProps {
    onAdd: (task:any) => void;
}

const Add = ({onAdd}:AddProps) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    const [showForm, setShowForm] = useState(true);


const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("Submitted");
    if(!text){
        alert("Please add a task");
        return;
    }
    onAdd({text,day,reminder});
    setShowForm(false);
}



  return (
    showForm ? (
    
   <form action="" className='add-form' onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="text">Task</label>
            <input type="text" name="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input type="text" name="day" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="check">Set Reminder</label>
            <input type="checkbox" name="check" onChange={(e)=>setReminder(e.target.checked)}/>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
   </form>
  ) : null
  )
}

export default Add