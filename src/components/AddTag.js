import { useState } from 'react'
import Button from '@material-ui/core/Button';


const AddTag = ({ onAdd }) => {

    const [tagText, setTagText] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if(!tagText){
            alert('Please add a tag')
        }

        onAdd(tagText)

        setTagText('')
    }



    return (
        <form className='addForm' onSubmit={onSubmit}>
            <div className = 'formControl2'>
                <label>Tags:</label>
                <input type='text' placeholder = 'Ex: Grocery, School...'
                value = {tagText} onChange= {(e) => setTagText(e.target.value)}/>

                {/* <input type='submit' value = 'Create Tag'/> */}
                <Button variant="contained" color="primary" className='modernButton' onClick={onSubmit}>Create Tag</Button>
            </div>
        </form>
    )
}

export default AddTag
