import { Checkbox } from '@material-ui/core'
import { useState } from 'react'

const Task = ({ task, onDelete, onToggle, onTags }) => {
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }


    return (
        <div className = {`task ${task.completed ?
            'completed' : ''}`} onDoubleClick = {() => 
            onToggle(task.id)}>
            <h3>{task.text} 
            <p>Due:{task.value2}</p>
            <Checkbox 
            checked = {checked}
            onChange= {handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}/></h3>
            <p>Tags: {onTags}</p>
        </div>
    )
}

export default Task
