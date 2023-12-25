import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import "./index.css";
import Add from "./Components/Add";

const App = () => {
  
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
    },
  ]);

  const onAdd = (task: any) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  const onDelete = (id:number)=>{
    setTask(tasks.filter((task)=>task.id!== id))
    console.log("Delete",id);
    
  }

  const handleVisibility = () => {  
    setShowAddTask(!showAddTask);
  }

  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="container">
      <Header onShow={handleVisibility}/>
      {showAddTask && <Add onAdd={onAdd} />}
      <Tasks task={tasks} onClick={onDelete} />
    </div>
  );
};

export default App;
