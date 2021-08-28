import { FaTimes } from 'react-icons/fa'

const Tag = ({ tag, onDelete}) => {
    return (
        <div className={tag}>
            <h4>{tag.tag} <FaTimes style = {{color:
                'red', cursor: 'pointer'}} onClick = 
                {() => onDelete(tag.id)}/></h4>
        </div>
    )
}

export default Tag