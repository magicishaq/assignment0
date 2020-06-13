import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Note from './note'
import axios from 'axios'
const NoteApp = () => {
  const [notes, setNote] = useState([]);
  const hook = () =>{
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNote(response.data)
    })
  }
  useEffect(hook,[]) //second parameter is how often the effect hook is ran empty array means will only run once
  console.log('render', notes.length, 'notes'); 
    const [newNote, setNewNote] = useState('...a new note')
    //filtering displayed elements
    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll
     ? notes 
     : notes.filter(note => note.important === true)

    const addNote = (event) => {
        event.preventDefault() //prevents default action of submitting the form
        const noteObject = {
            content: newNote, 
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }
        setNote(notes.concat(noteObject)) //does not mutate the orginal array make a copy therefore doesnt directly change the state
        setNewNote(''); //the text in the input box is reset
    }



    //handles the input change value
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    //toggle the showAll state
    const clickShowAll = () => {
        setShowAll(!showAll)
    }
    return (

        <div>
            <h1>Notes</h1>
            <button onClick={clickShowAll}>
                show {showAll ?  'important': 'all'}
            </button>
            <ul>
                {notesToShow.map(note => 
                    <Note note={note} />
                    
                    )}

            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default NoteApp