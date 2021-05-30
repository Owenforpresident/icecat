import Button from './Button'

const Header = ({onAdd, showForm}) => {
 
    return (
        <div className="header">
           <h1>Config Mapper</h1> 
          <Button color='blue' text= {showForm ? 'Add Config' :'Hide Form'} onClick={onAdd} showform={showForm}/>
        </div>
    )
}

export default Header