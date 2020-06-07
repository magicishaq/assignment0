import React, {useState} from 'react'
import Numbers from './numbers'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Artho Hellas'}])
  const [newName, setNewName] =useState('')
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers person={person}/> 
    </div>

  )
}

export default App 


