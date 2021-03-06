import { Checkbox } from '@material-ui/core'
import { useState, useEffect } from 'react'
import TagNew from './TagNew'

const Task = ({ task, onDelete, onToggle, tags, onDeleteTag, taskTags }) => {
    const [checked, setChecked] = useState(false)

    const [tagText, setTagText] = useState("")


    const handleChange = (e) => {
        setChecked(e.target.checked)
        task.completed = !checked
        console.log('This is task.completed value: ', task.completed)
    }


    const changeTagText = (tags) => {
        var tagText = ""

        for(let i = 0; i < tags.length; i++){
            tagText += tags[i].tag
        }

        setTagText(tagText)

        return tagText
    }

    // const testFunc = (tags)

    var tempTagText = ""

    var appendText = (tag) => {
        tempTagText = tempTagText.concat(tag.tag + " ")
        return tempTagText
    }



    var tempText = ""

    const tagFunction = (tag) => {
        tempText.concat(tag.tag + " ")
    }

    return (
        <div>
            <div className = {`task ${task.completed ?
            'completed' : ''}`} onDoubleClick = {() => 
            onToggle(task.id)}>
            <h3>{task.text} 
            <p>Due:{task.value2}</p>
            <Checkbox 
            checked = {checked}
            onChange= {handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}/></h3>

            <div className="tagClass">
                <p>Tags: {taskTags.map((taskTag) => taskTag.tag + " ")}</p>
            </div>
            {/* {tags.map((tag) => onDeleteTag(tag.id))} */}
            {/* <p>{clearTags}</p> */}
            </div>
            <div>
                {tags.map((tag) => onDeleteTag(tag.id))} 
            </div>
        </div>
    )
}

export default Task
