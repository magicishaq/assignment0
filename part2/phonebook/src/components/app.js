import React, {useState} from 'react'
import Numbers from './numbers'

const App = () => {
  const [persons, setPersons] = useState([{name: 'Artho Hellas', 
  phone: '01211111111',
id: 1}]) //data for people

const [filter, setFilter] = useState('')

    const [phone, setPhone] = useState('') //state for phone number
  const [newName, setNewName] =useState('') //state for new name
  //when name input is modified
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
//when phone input is modified
  const handlePhoneChange = (event) => {
      console.log(event.target.value)
      setPhone(event.target.value); 
  }

  //when filter input is changed

  const showFilter = () => {
      //filter array based on the filter state value
      
  }
  //removes duplicates entries from the array
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
        phone: phone, 
        id: persons.length + 1
    }
    const newArr = persons.concat(personObject)
    const unique = removeDuplicates(newArr, 'name')
    setPersons(unique)
    setNewName(''); 
    setPhone(''); 
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filter} onChange={showFilter}/>

      <h2> Add a new </h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
          number: <input value={phone} onChange={handlePhoneChange}/>
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


