import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Note from './note'
import axios from 'axios'
import noteService from '../services/note'
const NoteApp = () => {
  const [notes, setNote] = useState([]);
  const hook = () =>{
    noteService.getAll()
    .then(response => {
        setNote(response.data)
    })
  }
  useEffect(hook,[]) //second parameter is how often the effect hook is ran empty array means will only run once



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
            important: Math.random() < 0.5
            // id: notes.length + 1,
        }

        noteService
        .create(noteObject)
        .then(response => {
            setNote(notes.concat(response.data))
            setNewNote('')
        })
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

    //
    const toggleImportanceOf = (id) => {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n => n.id === id) //finds the object with the same id as the parameter
        const changedNote = {...note, important: !note.important} //makes a shallow copy of note

        axios.put(url, changedNote)
        .then(response=>{
            setNote(notes.map(note => note.id !== id ? note: response.data))
        })
    }
    return (

        <div>
            <h1>Notes</h1>
            <button onClick={clickShowAll}>
                show {showAll ?  'important': 'all'}
            </button>
            <ul>
                {notesToShow.map(note => 
                    <Note note={note} toggleImportance={() => {toggleImportanceOf(note.id)}}/>                   
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