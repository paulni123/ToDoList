import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle, onTags }) => {


    return (
        <>
           {tasks.map((task) => (<Task key ={task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle} onTags = {onTags}/>))} 
        </>
    )
}

export default Tasks