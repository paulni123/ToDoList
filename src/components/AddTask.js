import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [due, setDue] = useState('')
    const [tags, setTags] = useState('')


    return (
        <form className='addForm'>
            <div className='formControl'>
                <label>Title</label>
                <input type='text' placeholder='Enter a title'
                value = {text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='formControl2'>
                <label>Tags</label>
                <input type='text' placeholder='Ex: Grocery, School...'
                value = {tags} onChange={(e) => setTags(e.target.value)}/>
                <input type='button' value='Create Tag' onClick={onAdd}/>
            </div>
            <div className='formControl3'>
                <label>Due Date</label>
            </div>
            <input type='submit' value = 'Create' 
            className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask
