import React, {
  useState,
  useEffect
} from 'react'
import Numbers from './numbers'
import Filter from './filter'
import PersonForm from './personForm'
import numberService from '../services/numbers'
import Added from './added'
import Notification from './notification'

const App = () => {
    const [added, setAdded] = useState(null) //sucess message when adding a new phone contact
    const [mess, setMess] = useState(null) //error message when trying to update a contact thats deleted
    const [persons, setPersons] = useState([]) //data for people
    const [filterd, setFilter] = useState('')
    const [phone, setPhone] = useState('') //state for phone number
    const [newName, setNewName] = useState('') //state for new name

    const hook = () => {
      numberService.getAll().then(data => {
        setPersons(data)
      })
    }
    useEffect(hook, []);

    //when deleting an entry
    const deleteButton = (name) => {
      const result = window.confirm(`Delete ${name.name}`)
      if (result) {
        numberService.remove(name.id, name).then((request) => {
          hook()
        })
      }

    }

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

    //shpws the filtered list
    const showFilter = filterd.length === 0 ? persons : persons.filter(person => person.name.includes(filterd))
    //window confirm prompt
    const message = (obj) => {
      return window.confirm(`${obj.name} has already been added, would you like to change this number`)
    }
    //if the phone number added is new or needs updating
    const replaceName = (obj) => {
      const addedCss = (response) => {
        setAdded(`Added ${response.name}`)
        setTimeout(() => {
          setAdded(null)
        }, 3000)
      }
      const person = persons.find(person => person.name === obj.name)
      const changedPerson = {
        ...person,
        phone: obj.phone
      }
      //if person is already on the list or if message prompt is cancelled
      if (person && message(person)) {
        //updates the json file
        numberService.update(changedPerson.id, changedPerson).then(
          response => {
            setPersons(persons.map(person => person.name !== obj.name ? person : response))
            return response
          }

        ).then(addedCss)
        .catch(
          (error) => {
            setMess(`Information of '${person.name}' has already been removed from the server`)
            setTimeout(() => {setMess(null)},5000)
          }
        )
      } else {
        //adds a new person to the json file
        numberService.create(obj).then(response => {
          setPersons(persons.concat(response))
          return response
        }).then(addedCss)
      }
    }
    //when add button is clicked
    const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        phone: phone,
      }
      const newArr = persons.concat(personObject)
      replaceName(personObject);
      setNewName('');
      setPhone('');
    }


    return ( 
    <div>
        <h2> Phonebook </h2> 
        <Added added = {added}/> 
        <Notification mess={mess} />
        <Filter filterd = {filterd} handleFilter = {handleFilter}/>
         <h2 > Add a new </h2> 
         <PersonForm addPerson={addPerson} newName={newName} handleNoteChange= {handleNoteChange}
        handlePhoneChange={handlePhoneChange} phone={phone}/>
         <h2> Numbers </h2> {
          showFilter.map((person) => <Numbers person= {person} handleClick={() => {deleteButton(person)}} />)} 
            </div>
          )
        }

        export default App