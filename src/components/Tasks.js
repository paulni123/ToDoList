import TagNew from "./TagNew"
import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle, tags, onDeleteTag, taskTags, sortingByCompleted, sortingByDate}) => {

    return (
        <>
           {sortingByDate === false ? 
        //    sortingByCompleted === false ? 
           tasks.map((task) => (<Task key ={task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle} tags = {tags} 
           onDeleteTag = {onDeleteTag} taskTags={taskTags}
           />)) 
        //    : tasks.sort((task1) => {return !task1.completed})
        //    .map((task) => (<Task key ={task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle} tags = {tags} 
        //     onDeleteTag = {onDeleteTag} taskTags={taskTags}
        //     />)) 
           : 
           tasks.sort((task1, task2) => {return new Date(task1.value) - new Date(task2.value)})
           .map((task) => (<Task key ={task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle} tags = {tags} 
            onDeleteTag = {onDeleteTag} taskTags={taskTags}
            />))} 
           {/* {tags.map((tag) => <TagNew key={tag.id} tag={tag} />)} */}
        </>
    )
}

export default Tasks
