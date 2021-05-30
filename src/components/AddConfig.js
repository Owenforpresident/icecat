import { useState } from 'react'

const AddConfig = ({ onAdd, showForm }) => {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [english, setEnglish] = useState('')
  const [french, setFrench] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alert('Please add a Config Name')
      return
    }

    onAdd({ name, code, french, english})

    setName('')
    setCode('')
   
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Config Name</label>
        <input
          type='text'
          placeholder='Add Config'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Value Codes</label>
        <input
          type='text'
          placeholder='Add value codes'
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>French Values List</label>
        <input
          type='text'
          placeholder='Add the French values list'
          value={french}
          onChange={(e) => setFrench(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>English Values List</label>
        <input
          type='text'
          placeholder='Add the English values list'
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Config' className='btn btn-block' />
    </form>
  )
}

export default AddConfig