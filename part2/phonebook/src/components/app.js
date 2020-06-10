import React, {useState} from 'react'
import Numbers from './numbers'
import Filter from './filter'
import PersonForm from './personForm'

const App = ({data}) => {
const [persons, setPersons] = useState(data) //data for people
const [filterd, setFilter] = useState('')
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
  const handleFilter = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
  }

  const showFilter = filterd.length === 0 ? persons : persons.filter(person => person.name.includes(filterd))
  
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
      <Filter filterd={filterd} handleFilter={handleFilter}/>
      <h2> Add a new </h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNoteChange={handleNoteChange} handlePhoneChange={handlePhoneChange} phone={phone} />
      <h2>Numbers</h2>
     {showFilter.map((person) => <Numbers person={person}></Numbers>)}
    </div>

  )
}

export default App 


