import { FaTimes } from 'react-icons/fa'

const Tag = ({ tag, onDelete}) => {
    return (
        <div className={tag}>
            <h3>{tag.tag} <FaTimes style = {{color:
                'red', cursor: 'pointer'}} onClick = 
                {() => onDelete(tag.id)}/></h3>
        </div>
    )
}

export default Tag