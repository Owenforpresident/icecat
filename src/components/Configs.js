
import Config from './Config'


const Configs = ({configs, onDelete, onEdit}) => {
    
    return (
        <div>
            {configs.map((config) => (
                <Config key ={config.id} config = {config} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </div>
    )
}

export default Configs
