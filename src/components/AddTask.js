import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const AddTask = ( {} ) => {

    const [text, setText] = useState('')
    const [value, onChange] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a title')
            return
        }

        if(!value){
            alert('Please add a Due Date')
            return
        }
        console.log(value)

        setText('')
        onChange('')

    }

    return (
        <form className='addForm' onSubmit={onSubmit}>
            <div className = 'formControl'>
                <label>Title:</label>
                <input type='text' placeholder='Enter
                Title' value = {text} onChange={(e) => setText(e.target.value)}/>
            </div>



            <div className = 'formControl'>
                <label>Due Date:</label>
                <input type='text' value = {value !== '' ? dayjs(value).format('MM/DD/YYYY') : ''} onChange={onChange}/>
                <Calendar className = 'reactCalendar'
                onChange={onChange}
                value={value}/>
            </div>

            <input type='submit' value = 'Create' 
            className='btn btn-block'/>
        </form>
    )
}

export default AddTask
