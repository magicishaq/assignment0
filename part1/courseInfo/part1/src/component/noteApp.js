import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Note from './note'

const NoteApp = (props) => {
    
    const [notes, setNote] = useState(props.notes)
    const [newNote, setNewNote] = useState('...a new note')
    const addNote = (event) => {
        event.preventDefault() //prevents default action of submitting the form
        const noteObject = {
            content: newNote, 
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }
        setNotes(notes.concat(noteObject))
        setNewNote(''); 
    }



    //handles the input change value
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    return (

        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => 
                    <Note note={note} />
                    
                    )}

            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
                {newNote}
            </form>
        </div>
    )
}

export default NoteApp