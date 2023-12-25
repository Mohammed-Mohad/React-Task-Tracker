import Task from "./Task";
interface TaskProps {
  task: {
    id: number;
    text: string;
    day: string;
    reminder?: boolean;
  }[];
  onClick: (id: number) => void;
}
const Tasks = ({ task, onClick }: TaskProps) => {
  return (
    task.length === 0 ? <h3>No Tasks to Show</h3> :
    <div>
      {task.map((task) => {
        return (
          <Task
            key={task.id}
            reminder={task.reminder}
            id={task.id}
            text={task.text}
            day={task.day}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
