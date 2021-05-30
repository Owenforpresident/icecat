import Header from './components/Header'
import Configs from './components/Configs'
import AddConfig from './components/AddConfig'
import { useState } from 'react'

function App() {
  const [showForm, setShowForm] = useState(true)
  const [configs, setConfigs] = useState([
    {
        id:1,
        name:'Icecat Colors',
        values :[
           {
              code:'blue',
              name:{
                 fr:'bleue',
                 en:'blue'
              }
           },
           {
              code:'red',
              name:{
                 fr:'rouge',
                 en:'red'
              }
           }
        ]
     },
     {
        id:2,
        name:'Lego Colors',
        values:[
           {
              code:'0',
              name:{
                 fr:'bleue'
              }
           },
           {
              code:'1',
              name:{
                 fr:'rouge'
              }
           }
        ]
     }
]
   
)
const deleteConfig = (id) => {
  setConfigs(configs.filter((config)=> config.id !==id))
}
const addConfig = (config) => {
  setShowForm(!showForm)
  const id = Math.floor(Math.random()*10000 +1)

  const newConfig =  {
    "id":id,
    "name":config.name, 
    "values":[{
      "code":config.code,
      "name":
      {
        
        "en": config.english,
        "fr": config.french
      }
    }]

  }
 setConfigs([...configs, newConfig])
}

const editConfig = (updatedConfig) => {

  //converting to string and splititng at comma
const codesAsString = updatedConfig.code.toString()
const valuesCodesCsvArray = codesAsString.split(',')

const englishValuesAsString = updatedConfig.english.toString()
const englishCsvArray = englishValuesAsString.split(',')

const frenchValuesAsString = updatedConfig.french.toString()
const frenchCsvArray  =frenchValuesAsString.split(',')

//check if they're the same length, if not send alert
if((valuesCodesCsvArray.length !== englishCsvArray.length) && (valuesCodesCsvArray.length!== frenchCsvArray.length))
{
  alert('Please ensure you have enough values to map')
  return
}


//building the values within a mapping with the new information
let values = []
for ( let i = 0; i < valuesCodesCsvArray.length; i++) {
values.push(
  {
    "code":valuesCodesCsvArray[i],
    "name":
    {
      
      "en": englishCsvArray[i],
      "fr": frenchCsvArray[i]
    }
  }
)
}

//building the total config with the updated names and values
  const ConfigUpdated =  {
    "id":updatedConfig.id,
    "name":updatedConfig.name, 
    "values":values
  }

//mapping through state to find the config to be updated
const updatedConfigs = [...configs].map((config) => {
  if(config.id === updatedConfig.id){
    config = ConfigUpdated
  }
  return config
})

//updating state 
setConfigs(updatedConfigs)
 }


  return (
    <div className="container">
      <Header onAdd={()=> setShowForm(!showForm)} showForm= {showForm}/>
     {!showForm && <AddConfig onAdd = {addConfig}/>}
      {configs.length >0 ? (<Configs configs = {configs} onDelete = {deleteConfig} onEdit={editConfig}/>) : ('No configurations to show') }
     
    </div>
  );
}

export default App;
