import React from 'react'
import { useState } from 'react'

const EditConfig = ({onEdit, config, onEditClick}) => {
  const [id, setId] = useState(config.id)
  const [name, setName] = useState(config.name)
  const [code, setCode] = useState(config.values.map((value)=>(value.code)))
  const [english, setEnglish] = useState(config.values.map((value)=>(value.name.en)))
  const [french, setFrench] = useState(config.values.map((value)=>(value.name.fr)))


  const onSubmit = (e) => {
    e.preventDefault()
    onEditClick()
    onEdit({ id, name, code, french, english})
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
          placeholder='Update value codes'
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>French Values List</label>
        <input
          type='text'
          placeholder='Update French values'
          value={french}
          onChange={(e) => setFrench(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>English Values List</label>
        <input
          type='text'
          placeholder='Update English values'
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
      </div>
      <input type='submit' value='Update Config' className='btn btn-block' />
    </form>
  )
}


export default EditConfig
