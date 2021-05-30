import Value from './Value'
import EditConfig from './EditConfig'
import { FaPencilAlt, FaTimes} from 'react-icons/fa'
import { useState } from 'react'

const Config = ({config, onDelete, onEdit}) => {
    const [showEdit, setShowEdit] = useState(false)

    const onEditClick = () => {
       setShowEdit(!showEdit)
    }

    return (
        <div className="config"> 
           <h3 >{config.name} <FaTimes onClick ={()=> onDelete(config.id)}/></h3> 
           <div >
           {config.values.map((value)=> (<Value  value = {value}/>))}
           </div>
          <h3 style ={{float:"right"}}><FaPencilAlt onClick ={()=> onEditClick(config)}/></h3> 
            {showEdit ? <EditConfig onEditClick = {onEditClick} onEdit = {onEdit} config = {config}/>: ''}
        </div>
    )
}

export default Config
