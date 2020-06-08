import React, {useState} from 'react'
import Numbers from './numbers'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Artho Hellas', 
id: 1}])

  const [newName, setNewName] =useState('')
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  const removeDuplicates= (myArr, prop) => {
    return myArr.filter((obj, pos, arr) => {
         if (arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) !== pos) {
         alert(`${obj[prop]} has already been added to the list`)
         }else{
             return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
         }
         
    })
}
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName, 
        id: persons.length + 1
    }
    const newArr = persons.concat(personObject)
    const unique = removeDuplicates(newArr, 'name')
    setPersons(unique)
    setNewName(''); 
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     {persons.map((person) => <Numbers person={person}></Numbers>)}
    </div>

  )
}

export default App 


