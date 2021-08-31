import TagNew from "./TagNew"
import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle, tags, onDeleteTag, taskTags}) => {

    return (
        <>
           {tasks.map((task) => (<Task key ={task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle} tags = {tags} 
           onDeleteTag = {onDeleteTag} taskTags={taskTags}
           />))} 
           {/* {tags.map((tag) => <TagNew key={tag.id} tag={tag} />)} */}
        </>
    )
}

export default Tasks
